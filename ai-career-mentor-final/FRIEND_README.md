# 🚀 SkillBridge AI - Quick Start for Friends

Hey! 👋 This is an AI-powered career guidance platform. Here's how to get it running in VS Code:

## 🎯 **Super Quick Start (2 minutes)**

### 1. **Open in VS Code**
```bash
# Double-click the workspace file
ai-career-mentor.code-workspace
```
*OR*
```bash
# Or open the folder
code .
```

### 2. **Install Extensions** (VS Code will prompt you)
- Python
- ES7+ React/Redux/React-Native snippets  
- Tailwind CSS IntelliSense
- Thunder Client

### 3. **Run Setup**
Open terminal in VS Code (`Ctrl+`` `) and run:
```bash
./setup.sh
```

### 4. **Start the App**
```bash
./start-demo.sh
```

### 5. **Open in Browser**
- **Main App**: http://localhost:5173
- **API Docs**: http://localhost:8000/docs

## 🎮 **What You Can Do**

1. **Sign up** with any email (demo mode)
2. **Upload a resume** (PDF, DOC, DOCX)
3. **Get AI career recommendations** 
4. **Explore learning plans** for different careers

## 🛠️ **VS Code Features**

### **Tasks** (Ctrl+Shift+P → "Tasks: Run Task")
- **Setup Project** - Installs everything
- **Start Demo** - Runs both servers
- **Start Backend** - Just the API server
- **Start Frontend** - Just the React app

### **Debugging**
- Set breakpoints in Python files
- Use browser dev tools for React
- Test APIs with Thunder Client

### **File Structure**
```
├── backend/          # Python FastAPI server
├── frontend/         # React app
├── setup.sh         # One-command setup
├── start-demo.sh    # One-command demo
└── VS_CODE_SETUP.md # Detailed guide
```

## 🚨 **If Something Goes Wrong**

### **Python Issues**
```bash
# Check Python version
python3 --version  # Should be 3.8+

# Recreate virtual environment
rm -rf backend/venv
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### **Node.js Issues**
```bash
# Check Node version
node --version  # Should be 16+

# Reinstall dependencies
cd frontend
rm -rf node_modules
npm install
```

### **Port Issues**
```bash
# Kill processes on ports 8000 and 5173
# macOS/Linux:
lsof -ti:8000 | xargs kill -9
lsof -ti:5173 | xargs kill -9
```

## 🎯 **Demo Tips**

1. **Have a resume ready** - PDF works best
2. **Try different careers** - Data Scientist, Backend Developer, etc.
3. **Show the learning plans** - They're personalized!
4. **Highlight the AI features** - Skill detection, career matching

## 📚 **Tech Stack**

- **Frontend**: React 18 + Tailwind CSS
- **Backend**: FastAPI + Python
- **AI**: spaCy NLP + Pattern Matching
- **Database**: In-memory (demo mode)

## 🆘 **Need Help?**

1. Check `VS_CODE_SETUP.md` for detailed instructions
2. Look at terminal output for error messages
3. Make sure Python 3.8+ and Node.js 16+ are installed
4. Try the manual setup steps if scripts fail

---

**Have fun exploring! 🎉**

*P.S. This is a demo version - perfect for showcasing AI capabilities and modern web development!*
