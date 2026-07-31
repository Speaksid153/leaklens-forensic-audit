@echo off
setlocal
cd /d "%~dp0"

call setup_leaklens.bat
if errorlevel 1 exit /b 1

set "LEAKLENS_APP_PATH=%CD%\app.py"
powershell -NoProfile -Command "$listener = Get-NetTCPConnection -LocalPort 8501 -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1; if (-not $listener) { exit 1 }; $owner = Get-CimInstance Win32_Process -Filter ('ProcessId=' + $listener.OwningProcess) -ErrorAction SilentlyContinue; if (-not $owner.CommandLine -or $owner.CommandLine.IndexOf($env:LEAKLENS_APP_PATH, [StringComparison]::OrdinalIgnoreCase) -lt 0) { exit 2 }; try { $response = Invoke-WebRequest -UseBasicParsing 'http://127.0.0.1:8501/_stcore/health' -TimeoutSec 2; if ($response.StatusCode -eq 200) { exit 0 } } catch {}; exit 2" >nul 2>&1
set "LEAKLENS_PORT_STATUS=%errorlevel%"
if "%LEAKLENS_PORT_STATUS%"=="0" (
  echo LeakLens is already running at http://localhost:8501
  start "" "http://localhost:8501"
  exit /b 0
)
if "%LEAKLENS_PORT_STATUS%"=="2" (
  echo.
  echo Port 8501 is already in use by another or unresponsive application.
  echo Close that application, then run LeakLens again.
  pause
  exit /b 1
)

echo Starting LeakLens...
echo Your browser should open automatically.
echo If it does not, open http://localhost:8501
echo Keep this window open while using the application.
echo.

".venv\Scripts\python.exe" -m streamlit run "%LEAKLENS_APP_PATH%" --server.port 8501 --browser.gatherUsageStats false

if errorlevel 1 (
  echo.
  echo LeakLens stopped with an error. Review the message above.
  pause
)

endlocal
