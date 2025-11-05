# 🚀 SkillBridge AI - VS Code Setup Guide

## Prerequisites Check

Before starting, make sure you have:
- ✅ **Python 3.8+** installed
- ✅ **Node.js 16+** installed
- ✅ **VS Code** with recommended extensions

## Quick Start (5 minutes)

### 1. **Open in VS Code**
```bash
# Navigate to the project folder
cd ai-career-mentor-final

# Open in VS Code
code .
```

### 2. **Install VS Code Extensions** (Recommended)
Open VS Code and install these extensions:
- **Python** (by Microsoft)
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Thunder Client** (for API testing)

### 3. **One-Command Setup**
Open VS Code terminal (`Ctrl+`` ` or `Cmd+`` `) and run:
```bash
./setup.sh
```

### 4. **Start the Application**
```bash
./start-demo.sh
```

That's it! Your application will be running at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8000

## Manual Setup (If Quick Start Fails)

### Backend Setup
```bash
# Navigate to backend
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start backend server
uvicorn main:app --reload --port 8000
```

### Frontend Setup (New Terminal)
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start frontend server
npm run dev
```

## VS Code Configuration

### 1. **Python Interpreter**
- Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
- Type "Python: Select Interpreter"
- Choose the virtual environment: `./backend/venv/bin/python`

### 2. **Terminal Setup**
VS Code will automatically detect your Python virtual environment. You should see `(venv)` in your terminal prompt.

### 3. **Recommended Settings**
Create `.vscode/settings.json`:
```json
{
    "python.defaultInterpreterPath": "./backend/venv/bin/python",
    "python.terminal.activateEnvironment": true,
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "tailwindCSS.includeLanguages": {
        "javascript": "javascript",
        "html": "HTML"
    }
}
```

## Development Workflow

### 1. **Backend Development**
- Open `backend/main.py` for API endpoints
- Open `backend/recommender.py` for AI logic
- Use Thunder Client extension to test APIs
- Backend auto-reloads on file changes

### 2. **Frontend Development**
- Open `frontend/src/App.jsx` for main component
- Open `frontend/src/styles.css` for custom styles
- Frontend auto-reloads on file changes
- Use browser dev tools for debugging

### 3. **API Testing**
- Install Thunder Client extension
- Import the collection from `thunder-collection.json` (if available)
- Test endpoints directly in VS Code

## Troubleshooting

### Common Issues

#### 1. **Python Not Found**
```bash
# Check Python version
python3 --version

# If not found, install Python 3.8+
# macOS: brew install python3
# Windows: Download from python.org
# Linux: sudo apt install python3 python3-pip
```

#### 2. **Node.js Not Found**
```bash
# Check Node.js version
node --version

# If not found, install Node.js 16+
# macOS: brew install node
# Windows: Download from nodejs.org
# Linux: sudo apt install nodejs npm
```

#### 3. **Port Already in Use**
```bash
# Kill processes on ports 8000 and 5173
# macOS/Linux:
lsof -ti:8000 | xargs kill -9
lsof -ti:5173 | xargs kill -9

# Windows:
netstat -ano | findstr :8000
taskkill /PID <PID_NUMBER> /F
```

#### 4. **Permission Denied (macOS/Linux)**
```bash
# Make scripts executable
chmod +x setup.sh
chmod +x start-demo.sh
```

#### 5. **Virtual Environment Issues**
```bash
# Delete and recreate virtual environment
rm -rf backend/venv
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Project Structure

```
ai-career-mentor-final/
├── backend/                 # FastAPI Backend
│   ├── main.py             # Main API endpoints
│   ├── auth.py             # Authentication
│   ├── recommender.py      # AI recommendation logic
│   ├── resume_parser.py    # Resume parsing
│   ├── requirements.txt    # Python dependencies
│   └── venv/               # Virtual environment
├── frontend/               # React Frontend
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   └── styles.css      # Custom styles
│   ├── package.json        # Node.js dependencies
│   └── node_modules/       # Dependencies
├── setup.sh                # Setup script
├── start-demo.sh           # Demo startup script
└── README.md               # Project documentation
```

## Development Tips

### 1. **Hot Reloading**
- Backend: Changes to Python files auto-reload
- Frontend: Changes to React files auto-reload
- No need to restart servers during development

### 2. **Debugging**
- **Backend**: Use VS Code Python debugger
- **Frontend**: Use browser dev tools
- **API**: Use Thunder Client or Postman

### 3. **Code Formatting**
- **Python**: Use Black formatter
- **JavaScript**: Use Prettier
- **CSS**: Use Tailwind CSS classes

### 4. **Git Integration**
- VS Code has built-in Git support
- Use Source Control panel for commits
- Recommended: Install GitLens extension

## Production Deployment

### 1. **Build Frontend**
```bash
cd frontend
npm run build
```

### 2. **Deploy Backend**
- Use services like Render, Railway, or Heroku
- Set environment variables for production
- Use a production database (MongoDB, PostgreSQL)

### 3. **Environment Variables**
Create `.env` file:
```
OPENAI_API_KEY=your_openai_key
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_uri
```

## Support

If you encounter issues:
1. Check the terminal output for error messages
2. Verify all prerequisites are installed
3. Try the manual setup steps
4. Check the troubleshooting section above

## Quick Commands Reference

```bash
# Setup everything
./setup.sh

# Start demo
./start-demo.sh

# Start backend only
cd backend && source venv/bin/activate && uvicorn main:app --reload --port 8000

# Start frontend only
cd frontend && npm run dev

# Install new Python package
cd backend && source venv/bin/activate && pip install package_name

# Install new Node.js package
cd frontend && npm install package_name
```

---

**Happy coding! 🚀**
