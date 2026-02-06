from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.init_db import create_tables
from app.api import auth, interviews

# Create tables on startup
create_tables()

app = FastAPI(
    title="AI Interview Platform API",
    description="Backend API for AI Interview Preparation Platform",
    version="0.1.0"
)

app.include_router(auth.router)
app.include_router(interviews.router)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the AI Interview Platform API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
