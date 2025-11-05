# Simple JWT auth (for hackathon/demo). In production, use OAuth or a full auth provider.
import os
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from jose import jwt, JWTError
from datetime import datetime, timedelta

SECRET = os.environ.get('JWT_SECRET', 'super-secret-hackathon-key')
ALGORITHM = 'HS256'
security = HTTPBearer()

class UserCreate(BaseModel):
    email: str
    name: str = None
    password: str = None

def create_access_token(email: str, expires_minutes: int = 60*24*7):
    to_encode = {'sub': email, 'exp': datetime.utcnow() + timedelta(minutes=expires_minutes)}
    return jwt.encode(to_encode, SECRET, algorithm=ALGORITHM)

def get_current_user(creds: HTTPAuthorizationCredentials = Depends(security)):
    token = creds.credentials
    try:
        payload = jwt.decode(token, SECRET, algorithms=[ALGORITHM])
        email: str = payload.get('sub')
        if email is None:
            raise HTTPException(status_code=401, detail='Invalid auth token')
        return {'email': email}
    except JWTError:
        raise HTTPException(status_code=401, detail='Invalid auth token')
