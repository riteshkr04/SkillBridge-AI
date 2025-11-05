@echo off
title SkillBridge AI Demo
color 0A

echo.
echo ========================================
echo    🚀 SkillBridge AI Demo Startup
echo ========================================
echo.

REM Check if we're in the right directory
if not exist "backend\main.py" (
    echo [ERROR] Please run this from the ai-career-mentor-final directory
    echo.
    pause
    exit /b 1
)

if not exist "frontend\package.json" (
    echo [ERROR] Please run this from the ai-career-mentor-final directory
    echo.
    pause
    exit /b 1
)

echo [INFO] Starting SkillBridge AI Demo...
echo.

REM Set up Node.js path
set PATH=%CD%\node-v18.20.8-darwin-arm64\bin;%PATH%

echo [INFO] Starting backend server...
cd backend
call venv\Scripts\activate
start "Backend Server" cmd /k "uvicorn main:app --reload --port 8000"
cd ..

echo [INFO] Waiting for backend to start...
timeout /t 5 /nobreak > nul

echo [INFO] Starting frontend server...
cd frontend
start "Frontend Server" cmd /k "npm run dev"
cd ..

echo.
echo ========================================
echo    🎉 Demo is Ready!
echo ========================================
echo.
echo 📱 Frontend: http://localhost:5173
echo 🔧 Backend:  http://localhost:8000
echo 📚 API Docs: http://localhost:8000/docs
echo.
echo Demo Instructions:
echo 1. Open http://localhost:5173 in your browser
echo 2. Sign up with any email (demo mode)
echo 3. Upload a resume (PDF, DOC, or DOCX)
echo 4. Get AI-powered career recommendations
echo 5. Explore career paths and learning plans
echo.
echo Press any key to close this window...
pause > nul
