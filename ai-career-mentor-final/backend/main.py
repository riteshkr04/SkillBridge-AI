import os
from fastapi import FastAPI, File, UploadFile, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import uvicorn
from auth import get_current_user, create_access_token, UserCreate
from resume_parser import extract_text_from_file, nlp_detect_skills
from recommender import recommend_careers, career_gap_and_plan
from db import save_user_resume, get_user_by_email, save_user_profile
import dotenv

dotenv.load_dotenv()

app = FastAPI(title='SkillBridge AI - Backend (Enhanced)')

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

class SkillsIn(BaseModel):
    skills: List[str]

class GapIn(BaseModel):
    target_career: str
    current_skills: List[str]

class ProgressUpdate(BaseModel):
    skill: str
    video_title: str
    completed: bool

class ProgressRequest(BaseModel):
    skill: str
    video_title: str
    completed: bool

@app.post('/upload-resume')
async def upload_resume(file: UploadFile = File(...)):
    contents = await file.read()
    text = extract_text_from_file(file.filename, contents)
    skills = nlp_detect_skills(text)
    # persist resume for user
    save_user_resume(user['email'], file.filename, text, skills)
    return {'filename': file.filename, 'text': text, 'skills': skills}

@app.post('/recommend-careers')
async def recommend(sk: SkillsIn):
    careers = recommend_careers(sk.skills)
    return careers

@app.post('/career-gap')
async def career_gap(g: GapIn):
    gap = career_gap_and_plan(g.target_career, g.current_skills)
    return gap

@app.post('/register')
async def register(u: UserCreate):
    # create user and return token
    token = create_access_token(u.email)
    save_user_profile({'email': u.email, 'name': u.name or '', 'resumes': []})
    return {'access_token': token, 'token_type': 'bearer'}

@app.get('/whoami')
async def whoami():
    return {'email': "guest"}

@app.post('/update-progress')
async def update_progress(progress):
    # Update user's learning progress
    user_email = user['email']
    # For demo purposes, we'll store progress in memory
    # In production, this would be stored in a database
    return {
        'message': 'Progress updated successfully',
        'skill': progress.skill,
        'video_title': progress.video_title,
        'completed': progress.completed
    }

@app.get('/get-progress/{skill}')
async def get_progress(skill: str):
    # Get user's progress for a specific skill
    # For demo purposes, return empty progress
    # In production, this would fetch from database
    return {
        'skill': skill,
        'completed_videos': [],
        'total_videos': 0,
        'progress_percentage': 0
    }

if __name__ == '__main__':
    uvicorn.run('main:app', host='0.0.0.0', port=int(os.environ.get('PORT', 8000)), reload=True)
