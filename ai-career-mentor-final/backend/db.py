# Simple in-memory database for demo purposes (replaces MongoDB)
import os
from datetime import datetime
from typing import Dict, Any, Optional

# In-memory storage
_profiles: Dict[str, Dict[str, Any]] = {}
_resumes: Dict[str, list] = {}

def save_user_profile(profile: dict):
    """Save user profile to in-memory storage"""
    _profiles[profile['email']] = profile
    return True

def get_user_by_email(email: str) -> Optional[Dict[str, Any]]:
    """Get user profile from in-memory storage"""
    return _profiles.get(email)

def save_user_resume(email: str, filename: str, text: str, skills: list):
    """Save user resume to in-memory storage"""
    if email not in _resumes:
        _resumes[email] = []
    
    resume_data = {
        'filename': filename, 
        'text': text, 
        'skills': skills, 
        'uploaded_at': datetime.utcnow()
    }
    _resumes[email].append(resume_data)
    return True
