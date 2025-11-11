@echo off
echo ========================================
echo   Daily Spending Organizer - Deployer
echo ========================================
echo.

echo Step 1: Adding all changes to Git...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Git add failed!
    pause
    exit /b 1
)

echo.
echo Step 2: Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update: Latest changes

git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo WARNING: Nothing to commit or commit failed
)

echo.
echo Step 3: Pushing to GitHub main branch...
git push origin main
if %errorlevel% neq 0 (
    echo ERROR: Push to GitHub failed!
    echo Make sure you have set up the remote repository.
    pause
    exit /b 1
)

echo.
echo Step 4: Building and deploying to GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo ERROR: Deployment failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo   DEPLOYMENT SUCCESSFUL! 
echo ========================================
echo.
echo Your website should be live at:
echo https://kathirvelan210.github.io/daily-spending-organizer
echo.
echo Note: It may take 2-5 minutes to update.
echo.
pause