#!/bin/bash

# SkillBridge AI - Setup Script
# This script sets up the entire project for development

echo "🚀 Setting up SkillBridge AI..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    print_error "Python 3 is not installed. Please install Python 3.8+ and try again."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 16+ and try again."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

print_success "All prerequisites are installed!"

# Setup Backend
print_status "Setting up backend..."
cd backend

# Create virtual environment
print_status "Creating Python virtual environment..."
python3 -m venv venv

# Activate virtual environment
print_status "Activating virtual environment..."
source venv/bin/activate

# Install Python dependencies
print_status "Installing Python dependencies..."
pip install -r requirements.txt

print_success "Backend setup complete!"

# Setup Frontend
print_status "Setting up frontend..."
cd ../frontend

# Install Node.js dependencies
print_status "Installing Node.js dependencies..."
npm install

print_success "Frontend setup complete!"

# Create start script
cd ..
print_status "Creating start script..."

cat > start.sh << 'EOF'
#!/bin/bash

echo "🚀 Starting SkillBridge AI..."

# Start backend
echo "Starting backend server..."
cd backend
source venv/bin/activate
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend
echo "Starting frontend server..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ SkillBridge AI is running!"
echo "📱 Frontend: http://localhost:5173"
echo "🔧 Backend API: http://localhost:8000"
echo "📚 API Docs: http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
wait $BACKEND_PID $FRONTEND_PID
EOF

chmod +x start.sh

print_success "Setup complete!"
echo ""
echo "🎉 SkillBridge AI is ready!"
echo ""
echo "To start the application:"
echo "  ./start.sh"
echo ""
echo "Or start manually:"
echo "  Backend: cd backend && source venv/bin/activate && uvicorn main:app --reload --port 8000"
echo "  Frontend: cd frontend && npm run dev"
echo ""
echo "📱 Frontend: http://localhost:5173"
echo "🔧 Backend: http://localhost:8000"
echo "📚 API Docs: http://localhost:8000/docs"

