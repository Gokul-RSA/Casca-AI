from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:password@localhost/interview_db"
# Note: For development, if you don't have Postgres running yet, 
# you can swap this to SQLite: "sqlite:///./sql_app.db"

# engine = create_engine(SQLALCHEMY_DATABASE_URL) # Postgres
engine = create_engine(
    "sqlite:///./sql_app.db", connect_args={"check_same_thread": False}
) # SQLite for easy local dev

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
