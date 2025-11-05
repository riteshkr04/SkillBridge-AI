#!/bin/bash

# SkillBridge AI - Demo Startup Script
# This script starts both backend and frontend servers for easy demonstration

echo "🚀 Starting SkillBridge AI Demo..."
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_demo() {
    echo -e "${PURPLE}[DEMO]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "backend/main.py" ] || [ ! -f "frontend/package.json" ]; then
    print_error "Please run this script from the ai-career-mentor-final directory"
    exit 1
fi

# Set up Node.js path
export PATH="$(pwd)/node-v18.20.8-darwin-arm64/bin:$PATH"

print_status "Setting up environment..."

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    print_error "Node.js not found. Please ensure the local Node.js installation is available."
    exit 1
fi

# Check if Python virtual environment exists
if [ ! -d "backend/venv" ]; then
    print_error "Backend virtual environment not found. Please run setup first."
    exit 1
fi

print_success "Environment ready!"

# Function to cleanup on exit
cleanup() {
    print_status "Shutting down servers..."
    if [ ! -z "$BACKEND_PID" ]; then
        kill $BACKEND_PID 2>/dev/null
    fi
    if [ ! -z "$FRONTEND_PID" ]; then
        kill $FRONTEND_PID 2>/dev/null
    fi
    print_success "Demo stopped successfully!"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start Backend
print_status "Starting backend server..."
cd backend
source venv/bin/activate
uvicorn main:app --reload --port 8000 > ../backend.log 2>&1 &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Check if backend started successfully
if ! curl -s http://localhost:8000/docs > /dev/null; then
    print_error "Backend failed to start. Check backend.log for details."
    exit 1
fi

print_success "Backend running on http://localhost:8000"

# Start Frontend
print_status "Starting frontend server..."
cd frontend
npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!
cd ..

# Wait for frontend to start
sleep 5

# Check if frontend started successfully
if ! curl -s http://localhost:5173/ > /dev/null; then
    print_error "Frontend failed to start. Check frontend.log for details."
    exit 1
fi

print_success "Frontend running on http://localhost:5173"

# Display demo information
echo ""
echo "🎉 SkillBridge AI Demo is Ready!"
echo "=================================="
echo ""
print_demo "📱 Frontend: http://localhost:5173"
print_demo "🔧 Backend API: http://localhost:8000"
print_demo "📚 API Documentation: http://localhost:8000/docs"
echo ""
print_demo "Demo Instructions:"
echo "1. Open http://localhost:5173 in your browser"
echo "2. Sign up with any email address (demo mode)"
echo "3. Upload a resume (PDF, DOC, or DOCX)"
echo "4. Get AI-powered career recommendations"
echo "5. Explore career paths and learning plans"
echo ""
print_demo "Press Ctrl+C to stop the demo"
echo ""

# Keep the script running and show status
while true; do
    sleep 10
    # Check if processes are still running
    if ! kill -0 $BACKEND_PID 2>/dev/null; then
        print_error "Backend server stopped unexpectedly"
        break
    fi
    if ! kill -0 $FRONTEND_PID 2>/dev/null; then
        print_error "Frontend server stopped unexpectedly"
        break
    fi
done

cleanup
