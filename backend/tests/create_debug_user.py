from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sys
import os

# Add parent directory to path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.models.user import User
from app.core.database import Base
from app.core.security import get_password_hash

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def create_debug_user():
    db = SessionLocal()
    try:
        email = "debug_user@example.com"
        password = "debug123"
        hashed_password = get_password_hash(password)
        
        # Check if exists
        existing = db.query(User).filter(User.email == email).first()
        if existing:
            print(f"User {email} already exists. Updating password.")
            existing.hashed_password = hashed_password
        else:
            print(f"Creating user {email}...")
            user = User(
                email=email,
                hashed_password=hashed_password,
                full_name="Debug User",
                is_active=True
            )
            db.add(user)
        
        db.commit()
        print("✅ Debug User Ready.")
        
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    create_debug_user()
