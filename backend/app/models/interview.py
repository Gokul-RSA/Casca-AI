from sqlalchemy import Column, Integer, String, ForeignKey, Float, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.core.database import Base

class Interview(Base):
    __tablename__ = "interviews"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    role_focus = Column(String)
    status = Column(String, default="in-progress") # 'completed'
    total_score = Column(Float, default=0.0)
    start_time = Column(DateTime, default=datetime.utcnow)
    end_time = Column(DateTime, nullable=True)

    user = relationship("app.models.user.User", back_populates="interviews")
    answers = relationship("app.models.answer.Answer", back_populates="interview")
