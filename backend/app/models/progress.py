from sqlalchemy import Column, Integer
from app.core.database import Base

class Progress(Base):
    __tablename__ = "progress"

    id = Column(Integer, primary_key=True, index=True)
    # Placeholder for progress model
