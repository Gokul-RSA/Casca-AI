from pydantic import BaseModel
from datetime import datetime

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
