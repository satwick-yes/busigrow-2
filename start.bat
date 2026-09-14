@echo off
setlocal
title Busigrow 6.0 - Web Application
cd /d "%~dp0"

echo ===================================================
echo           Starting Busigrow 6.0 Website
echo ===================================================
echo.

REM Verify Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not found in your PATH.
    echo Please install Node.js from https://nodejs.org/ and try again.
    echo.
    pause
    exit /b 1
)

REM If executed from root busigrow 6.0 directory, enter project folder
if exist "frontend" (
    cd "frontend"
)

REM Check if dependencies exist
if not exist "node_modules\" (
    echo [INFO] Installing dependencies, please wait...
    call npm install --legacy-peer-deps
    if %ERRORLEVEL% neq 0 (
        echo [ERROR] Dependency installation failed!
        pause
        exit /b 1
    )
)

echo.
echo [INFO] Starting Next.js server on http://localhost:3001...
echo [INFO] Opening website in your default browser...
echo.

REM Automatically open browser after server initializes
start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3001"

REM Start development server on port 3001
call npm run dev

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Server stopped with an error.
)

pause
