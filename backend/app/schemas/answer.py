from pydantic import BaseModel

class AnswerCreate(BaseModel):
    question_id: int
    answer_text: str

class AnswerResponse(BaseModel):
    id: int
    score: float
    feedback_structured: dict

    class Config:
        from_attributes = True
