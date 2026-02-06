from app.db.database import engine, Base
from app.models import models

def create_tables():
    Base.metadata.create_all(bind=engine)
