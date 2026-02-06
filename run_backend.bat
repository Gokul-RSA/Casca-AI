@echo off
echo Starting Backend...
cd backend
REM Use the virtual environment Python directly
"..\.venv\Scripts\python.exe" -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
pause
