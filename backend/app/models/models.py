from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Float, DateTime, Text, JSON
from sqlalchemy.orm import relationship
from datetime import datetime
from app.db.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    interviews = relationship("Interview", back_populates="user")

class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    role = Column(String, index=True) # e.g., 'Frontend', 'Backend'
    content = Column(Text, nullable=False)
    difficulty = Column(String) # 'Easy', 'Medium', 'Hard'
    ideal_answer = Column(Text) # Used for ML comparison
    keywords = Column(JSON) # List of keywords ["react", "virtual dom"]
    
class Interview(Base):
    __tablename__ = "interviews"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    role_focus = Column(String)
    status = Column(String, default="in-progress") # 'completed'
    total_score = Column(Float, default=0.0)
    start_time = Column(DateTime, default=datetime.utcnow)
    end_time = Column(DateTime, nullable=True)

    user = relationship("User", back_populates="interviews")
    answers = relationship("Answer", back_populates="interview")

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

    interview = relationship("Interview", back_populates="answers")
    question = relationship("Question")
