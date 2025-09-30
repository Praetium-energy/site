@echo off
echo ===============================================
echo  Praetium Energy - Website Deployment Guide
echo ===============================================
echo.

echo [1] Test locally (opens in browser)
echo [2] Start local server (Python)
echo [3] Start local server (Node.js)
echo [4] Show hosting options
echo [5] Exit
echo.

set /p choice="Choose an option (1-5): "

if "%choice%"=="1" (
    echo Opening website in browser...
    start index.html
    goto end
)

if "%choice%"=="2" (
    echo Starting Python server on http://localhost:8000
    echo Press Ctrl+C to stop the server
    python -m http.server 8000
    goto end
)

if "%choice%"=="3" (
    echo Starting Node.js server on http://localhost:3000
    echo Press Ctrl+C to stop the server
    npx serve . -p 3000
    goto end
)

if "%choice%"=="4" (
    echo.
    echo ========== FREE HOSTING OPTIONS ==========
    echo.
    echo 1. GitHub Pages (Recommended)
    echo    - Upload files to GitHub repository
    echo    - Enable Pages in Settings
    echo    - Free custom domain support
    echo.
    echo 2. Netlify (netlify.com)
    echo    - Drag and drop folder to website
    echo    - Instant deployment
    echo    - Free SSL certificate
    echo.
    echo 3. Vercel (vercel.com)
    echo    - Connect GitHub repository
    echo    - Automatic deployments
    echo    - Great performance
    echo.
    echo 4. Surge.sh (surge.sh)
    echo    - Install: npm install -g surge
    echo    - Run: surge
    echo    - Simple command-line deployment
    echo.
    echo See README.md for detailed instructions!
    echo.
    pause
    goto end
)

if "%choice%"=="5" (
    echo Goodbye!
    goto end
)

echo Invalid choice. Please try again.
pause

:end
