@echo off
setlocal
cd /d "%~dp0"

if exist ".venv\Scripts\python.exe" (
  ".venv\Scripts\python.exe" -c "import sys; raise SystemExit(0 if sys.version_info[:2] == (3, 12) else 1)" >nul 2>&1
  if not errorlevel 1 goto install

  echo.
  echo The existing .venv is incomplete or is not using Python 3.12.
  echo Rename or remove only this project's .venv folder, then run this setup again.
  pause
  exit /b 1
)

echo.
echo Creating LeakLens's free local Python 3.12 environment...
echo.

py -3.12 -c "import sys; raise SystemExit(0 if sys.version_info[:2] == (3, 12) else 1)" >nul 2>&1
if not errorlevel 1 (
  py -3.12 -m venv .venv
  if errorlevel 1 goto setup_failed
  goto install
)

where uv >nul 2>&1
if not errorlevel 1 (
  uv venv --python 3.12 --seed .venv
  if errorlevel 1 goto setup_failed
  goto install
)

echo LeakLens needs Python 3.12, which was not found on this computer.
echo.
echo Install Python 3.12.10 for free from:
echo https://www.python.org/downloads/release/python-31210/
echo.
echo Then run setup_leaklens.bat again. Do not use Python 3.14 with the
echo currently pinned scientific packages.
pause
exit /b 1

:install
echo Installing or verifying LeakLens dependencies...
".venv\Scripts\python.exe" -m pip install -r requirements.txt
if errorlevel 1 goto setup_failed

echo.
echo LeakLens setup is complete.
echo Double-click run_leaklens.bat to start the application.
exit /b 0

:setup_failed
echo.
echo LeakLens setup failed. Review the error above, then run this file again.
pause
exit /b 1
