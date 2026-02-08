from fastapi import Depends, HTTPException, status, Request
from jose import jwt, JWTError
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.database import get_db
from app.models.user import User

def get_current_user(request: Request, db: Session = Depends(get_db)) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    token = request.cookies.get("access_token")
    if not token:
        print("❌ DEBUG: No access_token cookie found in request!")
        print(f"   Cookies received: {request.cookies.keys()}")
        raise credentials_exception
    
    try:
        # Remove "Bearer " prefix if present
        scheme, _, param = token.partition(" ")
        if not param:
            token_str = scheme
        else:
            token_str = param
            
        payload = jwt.decode(token_str, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            print("❌ DEBUG: Token payload missing 'sub' (email)")
            raise credentials_exception
    except JWTError as e:
        print(f"❌ DEBUG: JWT Error: {e}")
        raise credentials_exception
        
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        print(f"❌ DEBUG: User {email} not found in DB")
        raise credentials_exception
    return user
