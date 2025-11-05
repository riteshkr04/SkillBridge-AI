# 🚀 SkillBridge AI - Complete Project

A beautiful, modern AI-powered career guidance platform that analyzes resumes, provides career recommendations, and creates personalized learning plans.

![SkillBridge AI](https://img.shields.io/badge/AI-Career%20Mentor-blue?style=for-the-badge&logo=lightning)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-green?style=for-the-badge&logo=fastapi)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-blue?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🎯 **Core Functionality**
- **Resume Upload & Analysis**: Support for PDF, DOC, and DOCX files
- **AI-Powered Skill Detection**: Advanced NLP-based skill extraction
- **Career Recommendations**: Personalized career suggestions based on skills
- **Career Gap Analysis**: Detailed analysis of missing skills
- **Learning Plans**: Step-by-step personalized learning paths

### 🎨 **Modern UI/UX**
- **Beautiful Login Page**: Stunning gradient login with glass morphism effects
- **Authentication Flow**: Secure JWT-based authentication with demo access
- **Responsive Layout**: Perfect on desktop, tablet, and mobile
- **Interactive Elements**: Hover animations, progress indicators
- **Professional Cards**: Modern card-based layout
- **Smooth Animations**: Custom CSS animations and transitions

### 🔧 **Technical Features**
- **Enhanced Skill Detection**: Comprehensive skill pattern matching
- **In-Memory Database**: No external database required for demo
- **JWT Authentication**: Secure user authentication
- **CORS Support**: Cross-origin request handling
- **Error Handling**: User-friendly error messages

## 🏗️ Project Structure

```
ai-career-mentor-final/
├── backend/                 # FastAPI Backend
│   ├── main.py             # Main FastAPI application
│   ├── auth.py             # JWT authentication
│   ├── db.py               # In-memory database
│   ├── resume_parser.py    # Resume parsing & skill detection
│   ├── recommender.py      # Career recommendation logic
│   ├── recommender_rules.py # Career rules & learning resources
│   ├── requirements.txt    # Python dependencies
│   └── README.md           # Backend documentation
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── main.jsx        # React entry point
│   │   └── styles.css      # Custom CSS & animations
│   ├── index.html          # HTML template
│   ├── package.json        # Node.js dependencies
│   ├── tailwind.config.js  # Tailwind configuration
│   └── postcss.config.cjs  # PostCSS configuration
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- **Python 3.8+** (for backend)
- **Node.js 16+** (for frontend)
- **npm** or **yarn** (for frontend dependencies)

### 1. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn main:app --reload --port 8000
```

The backend will be available at: **http://localhost:8000**
- API Documentation: **http://localhost:8000/docs**

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at: **http://localhost:5173**

## 🎯 How to Use

1. **Login**: Enter your email and password (or use any email for demo access)
2. **Upload Resume**: Upload your PDF/DOC/DOCX resume
3. **View Analysis**: See extracted text and detected skills
4. **Get Recommendations**: Click "Get Career Recommendations"
5. **Explore Careers**: Select a career to analyze gaps and get learning plans

## 🔧 API Endpoints

### Authentication
- `POST /register` - Register a new user
- `GET /whoami` - Get current user info

### Resume Analysis
- `POST /upload-resume` - Upload and analyze resume
- `POST /recommend-careers` - Get career recommendations
- `POST /career-gap` - Analyze career gaps and get learning plan

## 🎨 Customization

### Adding New Skills
Edit `backend/recommender_rules.py`:
```python
skill_patterns = {
    'new_skill': ['pattern1', 'pattern2', 'pattern3'],
    # Add more skills...
}
```

### Adding New Careers
Edit `backend/recommender_rules.py`:
```python
CAREER_SKILL_MAP = {
    'New Career': ['skill1', 'skill2', 'skill3'],
    # Add more careers...
}
```

### Styling Changes
Edit `frontend/src/styles.css` for custom animations and styles.

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_API_BASE=https://your-backend-url.com`

### Backend (Render/Railway)
1. Connect your GitHub repository
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Add environment variables:
   - `MONGODB_URI` (optional, for production database)
   - `OPENAI_API_KEY` (optional, for enhanced AI features)
   - `JWT_SECRET` (for production)

## 🔒 Environment Variables

### Backend
- `MONGODB_URI` - MongoDB connection string (optional)
- `OPENAI_API_KEY` - OpenAI API key (optional)
- `JWT_SECRET` - JWT secret key (optional)

### Frontend
- `VITE_API_BASE` - Backend API URL (defaults to http://localhost:8000)

## 🛠️ Development

### Backend Development
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload --port 8000
```

### Frontend Development
```bash
cd frontend
npm run dev
```

### Building for Production
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
pip install -r requirements.txt
```

## 📊 Features Overview

### Resume Analysis
- **File Support**: PDF, DOC, DOCX
- **Text Extraction**: Advanced parsing algorithms
- **Skill Detection**: 30+ technical skills with variations
- **Pattern Matching**: Regex-based skill recognition

### Career Recommendations
- **7 Career Paths**: Data Analyst, Data Scientist, Backend Developer, etc.
- **Match Scoring**: Percentage-based skill matching
- **Missing Skills**: Identifies gaps in your skill set
- **Learning Resources**: Step-by-step learning plans

### UI/UX Features
- **Modern Design**: Gradient backgrounds, glass morphism
- **Responsive**: Mobile-first design
- **Animations**: Smooth transitions and hover effects
- **Progress Tracking**: Visual step indicators
- **Error Handling**: User-friendly error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **FastAPI** for the excellent Python web framework
- **React** for the powerful frontend library
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool
- **spaCy** for natural language processing

## 📞 Support

For support, email your-team@example.com or create an issue in the repository.

---

**Built with ❤️ by your development team**

*SkillBridge AI - Empowering careers through intelligent guidance*