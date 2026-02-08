from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.init_db import create_tables
from app.routes import auth, interview

app = FastAPI(
    title="AI Interview Platform API",
    description="Backend API for AI Interview Preparation Platform",
    version="0.1.0"
)

# Create tables on startup
@app.on_event("startup")
def on_startup():
    create_tables()

app.include_router(auth.router)
app.include_router(interview.router)

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
