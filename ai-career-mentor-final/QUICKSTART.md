# ⚡ Quick Start Guide - SkillBridge AI

Get your SkillBridge AI up and running in 5 minutes!

## 🚀 One-Command Setup

```bash
# Clone or download the project
cd ai-career-mentor-final

# Run the setup script
./setup.sh

# Start the application
./start.sh
```

That's it! Your application will be running at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

## 📋 Manual Setup (Alternative)

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🎯 How to Use

1. **Sign Up**: Click "Get Started" and enter your email
2. **Upload Resume**: Upload your PDF/DOC/DOCX resume
3. **View Analysis**: See extracted text and detected skills
4. **Get Recommendations**: Click "Get Career Recommendations"
5. **Explore Careers**: Select a career to analyze gaps and get learning plans

## 🔧 Troubleshooting

### Backend Issues
- **Python not found**: Install Python 3.8+
- **Port 8000 in use**: Change port in uvicorn command
- **Dependencies fail**: Update pip: `pip install --upgrade pip`

### Frontend Issues
- **Node not found**: Install Node.js 16+
- **Port 5173 in use**: Vite will automatically use next available port
- **Build fails**: Clear cache: `rm -rf node_modules && npm install`

### Common Solutions
```bash
# Reset everything
rm -rf backend/venv frontend/node_modules
./setup.sh
```

## 📱 Features

- ✅ Resume upload (PDF, DOC, DOCX)
- ✅ AI-powered skill detection
- ✅ Career recommendations
- ✅ Career gap analysis
- ✅ Personalized learning plans
- ✅ Beautiful modern UI
- ✅ Responsive design
- ✅ Real-time progress tracking

## 🆘 Need Help?

- Check the full [README.md](README.md)
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for production setup
- Open an issue in the repository

---

**Ready to discover your career path? Let's go! 🚀**

