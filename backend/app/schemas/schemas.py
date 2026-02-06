from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

# --- User Schemas ---
class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True

# --- Question Schemas ---
class QuestionBase(BaseModel):
    content: str
    role: str
    difficulty: str

class QuestionCreate(QuestionBase):
    ideal_answer: str
    keywords: List[str]

class QuestionResponse(QuestionBase):
    id: int
    
    class Config:
        from_attributes = True

# --- Interview Schemas ---
class InterviewCreate(BaseModel):
    role_focus: str

class InterviewResponse(BaseModel):
    id: int
    role_focus: str
    status: str
    start_time: datetime
    total_score: float

    class Config:
        from_attributes = True

# --- Answer Schemas ---
class AnswerCreate(BaseModel):
    question_id: int
    answer_text: str

class AnswerResponse(BaseModel):
    id: int
    score: float
    feedback_structured: dict

    class Config:
        from_attributes = True
