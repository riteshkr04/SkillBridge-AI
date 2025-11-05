# 🚀 SkillBridge AI - Demo Instructions

## Quick Start for Demonstrations

### One-Command Demo Launch
```bash
./start-demo.sh
```

That's it! The script will:
- ✅ Start the backend server (FastAPI)
- ✅ Start the frontend server (React)
- ✅ Display demo URLs and instructions
- ✅ Handle cleanup when you press Ctrl+C

### Demo URLs
- **Main Application**: http://localhost:5173
- **API Documentation**: http://localhost:8000/docs
- **Backend API**: http://localhost:8000

## Demo Flow

### 1. **Login/Signup** (30 seconds)
- Open http://localhost:5173
- Enter any email address (e.g., `demo@example.com`)
- Click "Sign In" or "Create Account"
- No password required for demo

### 2. **Upload Resume** (1-2 minutes)
- Click "Choose File" and select a resume (PDF, DOC, or DOCX)
- Click "🚀 Upload & Analyze Resume"
- Watch the AI extract text and detect skills
- See the extracted content and detected skills

### 3. **Get Career Recommendations** (30 seconds)
- Click "🎯 Get Career Recommendations"
- See 7 different career paths with match percentages
- Each career shows:
  - Match percentage
  - Required skills
  - Missing skills
  - Learning resources

### 4. **Explore Career Path** (1-2 minutes)
- Select any career from the dropdown
- Click "📊 Analyze Career Gap & Get Learning Plan"
- See detailed analysis:
  - Required skills vs your skills
  - Missing skills identification
  - Personalized learning plan with step-by-step guidance

## Demo Features to Highlight

### 🎯 **AI-Powered Analysis**
- Resume text extraction from PDF/DOC/DOCX
- Skill detection using NLP
- Career matching algorithm

### 📊 **Career Intelligence**
- 7 career paths: Data Analyst, Data Scientist, Backend Developer, etc.
- Match percentage calculations
- Gap analysis and missing skills identification

### 📚 **Learning Plans**
- Personalized step-by-step learning paths
- Resource recommendations for each skill
- Progress tracking visualization

### 🎨 **Modern UI/UX**
- Beautiful gradient design
- Responsive layout
- Smooth animations
- Professional card-based interface

## Troubleshooting

### If the demo doesn't start:
1. Make sure you're in the `ai-career-mentor-final` directory
2. Ensure you've run the setup script first: `./setup.sh`
3. Check that ports 8000 and 5173 are available

### If you see errors:
- Check `backend.log` for backend issues
- Check `frontend.log` for frontend issues
- Both servers need to be running for the demo to work

### To stop the demo:
- Press `Ctrl+C` in the terminal
- The script will automatically clean up both servers

## Demo Tips

### For Live Presentations:
1. **Prepare a sample resume** - Have a PDF resume ready to upload
2. **Test beforehand** - Run the demo once before your presentation
3. **Have backup** - Keep the API docs open (http://localhost:8000/docs) as backup
4. **Explain the tech stack** - Mention React, FastAPI, AI/NLP, etc.

### Key Talking Points:
- **AI-Powered**: Uses natural language processing for skill detection
- **Personalized**: Creates custom learning plans based on individual skills
- **Comprehensive**: Covers 7 major tech career paths
- **Modern Stack**: Built with React, FastAPI, and cutting-edge AI

## Technical Details

### Backend (FastAPI)
- Resume parsing and text extraction
- NLP-based skill detection
- Career recommendation engine
- Learning plan generation

### Frontend (React + Vite)
- Modern React 18 with hooks
- Tailwind CSS for styling
- Axios for API communication
- Responsive design

### AI Features
- spaCy for natural language processing
- Pattern matching for skill detection
- Rule-based career matching
- Personalized learning recommendations

---

**Ready to impress your audience! 🎉**
