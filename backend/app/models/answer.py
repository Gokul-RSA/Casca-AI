from sqlalchemy import Column, Integer, String, ForeignKey, Float, DateTime, Text, JSON
from sqlalchemy.orm import relationship
from datetime import datetime
from app.core.database import Base

class Answer(Base):
    __tablename__ = "answers"

    id = Column(Integer, primary_key=True, index=True)
    interview_id = Column(Integer, ForeignKey("interviews.id"))
    question_id = Column(Integer, ForeignKey("questions.id"))
    answer_text = Column(Text)
    audio_url = Column(String, nullable=True)
    score = Column(Float)
    feedback_structured = Column(JSON) # { "strengths": [], "weaknesses": [] }
    created_at = Column(DateTime, default=datetime.utcnow)

    interview = relationship("app.models.interview.Interview", back_populates="answers")
    question = relationship("app.models.question.Question")
