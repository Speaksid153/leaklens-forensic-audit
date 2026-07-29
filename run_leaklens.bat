@echo off
setlocal
cd /d "%~dp0"

if not exist ".venv\Scripts\python.exe" (
  echo.
  echo LeakLens could not find its local Python environment.
  echo Expected: %CD%\.venv\Scripts\python.exe
  echo.
  echo Recreate it with Python 3.12 and install requirements.txt before launching.
  pause
  exit /b 1
)

echo Starting LeakLens...
echo Your browser should open automatically.
echo If it does not, open http://localhost:8501
echo Keep this window open while using the application.
echo.

".venv\Scripts\python.exe" -m streamlit run app.py --server.port 8501 --browser.gatherUsageStats false

if errorlevel 1 (
  echo.
  echo LeakLens stopped with an error. Review the message above.
  pause
)

endlocal
