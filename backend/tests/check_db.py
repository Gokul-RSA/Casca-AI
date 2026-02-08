from sqlalchemy import create_engine, inspect, text
from sqlalchemy.orm import sessionmaker
import sys
import os

# Add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.models.user import User
from app.core.database import Base

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def check_db():
    try:
        db = SessionLocal()
        print("Checking Database Users...")
        users = db.query(User).all()
        print(f"Total Users Found: {len(users)}")
        for user in users:
            print(f"ID: {user.id} | Email: {user.email} | Active: {user.is_active}")
            
        print("\nChecking Tables...")
        inspector = inspect(engine)
        print(inspector.get_table_names())
        
    except Exception as e:
        print(f"Error reading DB: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    check_db()
