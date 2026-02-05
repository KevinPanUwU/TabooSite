@echo off
echo ==========================================
echo Running App in Development Mode
echo ==========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies for the first time...
    call npm install
    if errorlevel 1 (
        echo Failed to install dependencies!
        pause
        exit /b 1
    )
)

echo Starting development server and Electron...
echo.
echo This will:
echo  1. Start the Vite dev server
echo  2. Launch Electron window
echo.
echo Press Ctrl+C here to stop, or close the Electron window.
echo.

npm run electron:dev
