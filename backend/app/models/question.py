from sqlalchemy import Column, Integer, String, Text, JSON
from app.core.database import Base

class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    role = Column(String, index=True) # e.g., 'Frontend', 'Backend'
    content = Column(Text, nullable=False)
    difficulty = Column(String) # 'Easy', 'Medium', 'Hard'
    ideal_answer = Column(Text) # Used for ML comparison
    keywords = Column(JSON) # List of keywords ["react", "virtual dom"]
