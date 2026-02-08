from pydantic import BaseModel
from typing import List

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
