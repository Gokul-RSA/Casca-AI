from app.core.database import engine, Base
from app.models import user, question, interview, answer

def create_tables():
    Base.metadata.create_all(bind=engine)
