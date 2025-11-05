Backend (FastAPI) for SkillBridge AI

Setup:
1. Create and activate a Python virtualenv
   python -m venv venv
   source venv/bin/activate   # mac/linux
2. Install requirements:
   pip install -r requirements.txt
3. Run the server:
   uvicorn main:app --reload --port 8000

API endpoints:
- POST /upload-resume  (form-data: file)
  returns extracted text and detected skills.

- POST /recommend-careers  (json: {"skills": [... ]})
  returns career suggestions and learning paths.

- POST /career-gap  (json: {"target_career": "Data Scientist", "skills": [...]})
  returns missing skills and a personalized learning plan.
