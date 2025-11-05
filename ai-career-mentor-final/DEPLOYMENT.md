# 🚀 Deployment Guide - SkillBridge AI

This guide covers deploying your SkillBridge AI application to production.

## 📋 Prerequisites

- GitHub repository with your code
- Vercel account (for frontend)
- Render/Railway account (for backend)
- Domain name (optional)

## 🌐 Frontend Deployment (Vercel)

### Step 1: Prepare Frontend
1. Ensure your frontend builds successfully:
   ```bash
   cd frontend
   npm run build
   ```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Environment Variables
Add these environment variables in Vercel:
- `VITE_API_BASE`: Your backend URL (e.g., `https://your-app.onrender.com`)

### Step 4: Deploy
Click "Deploy" and wait for deployment to complete.

## 🔧 Backend Deployment (Render)

### Step 1: Prepare Backend
1. Ensure your backend runs locally:
   ```bash
   cd backend
   source venv/bin/activate
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

### Step 2: Deploy to Render
1. Go to [render.com](https://render.com)
2. Sign in with GitHub
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure settings:
   - **Name**: `ai-career-mentor-backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### Step 3: Environment Variables
Add these environment variables in Render:
- `JWT_SECRET`: A random secret string
- `MONGODB_URI`: MongoDB Atlas connection string (optional)
- `OPENAI_API_KEY`: OpenAI API key (optional)

### Step 4: Deploy
Click "Create Web Service" and wait for deployment.

## 🗄️ Database Setup (Optional)

### MongoDB Atlas (Recommended for Production)
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Add `MONGODB_URI` environment variable

### Using In-Memory Database (Default)
The app works with in-memory storage by default. Data will be lost on restart.

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files
- Use strong, random JWT secrets
- Rotate API keys regularly

### CORS Configuration
Update CORS settings in `backend/main.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=['https://your-frontend-domain.vercel.app'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)
```

### Rate Limiting
Consider adding rate limiting for production:
```python
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

@app.post('/upload-resume')
@limiter.limit("5/minute")
async def upload_resume(request: Request, ...):
    # Your code here
```

## 📊 Monitoring & Analytics

### Backend Monitoring
- Use Render's built-in monitoring
- Add logging for important events
- Monitor API response times

### Frontend Analytics
- Add Google Analytics
- Track user interactions
- Monitor page load times

## 🔄 CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./frontend

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: |
          curl -X POST "https://api.render.com/v1/services/$SERVICE_ID/deploys" \
            -H "Authorization: Bearer $RENDER_API_KEY"
        env:
          SERVICE_ID: ${{ secrets.RENDER_SERVICE_ID }}
          RENDER_API_KEY: ${{ secrets.RENDER_API_KEY }}
```

## 🚀 Performance Optimization

### Frontend
- Enable Vercel's edge caching
- Optimize images
- Use CDN for static assets
- Implement lazy loading

### Backend
- Add Redis caching
- Optimize database queries
- Use connection pooling
- Implement request compression

## 🔧 Troubleshooting

### Common Issues

#### Frontend Build Fails
- Check Node.js version (16+)
- Clear `node_modules` and reinstall
- Verify all dependencies are installed

#### Backend Deployment Fails
- Check Python version (3.8+)
- Verify all dependencies in `requirements.txt`
- Check environment variables

#### CORS Errors
- Update CORS origins in backend
- Check frontend API base URL
- Verify HTTPS/HTTP protocol matching

#### Database Connection Issues
- Check MongoDB connection string
- Verify network access
- Check authentication credentials

### Debug Commands
```bash
# Check backend logs
render logs --service your-service-id

# Check frontend build
cd frontend && npm run build

# Test API endpoints
curl https://your-backend-url.com/docs
```

## 📈 Scaling Considerations

### Horizontal Scaling
- Use load balancers
- Implement session management
- Use external databases
- Add caching layers

### Vertical Scaling
- Increase server resources
- Optimize code performance
- Use CDN for static assets
- Implement caching strategies

## 🔐 Security Checklist

- [ ] Environment variables secured
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Input validation added
- [ ] Error handling improved
- [ ] Logging implemented
- [ ] HTTPS enabled
- [ ] API keys rotated
- [ ] Dependencies updated
- [ ] Security headers added

## 📞 Support

For deployment issues:
- Check service provider documentation
- Review application logs
- Test locally first
- Contact support team

---

**Happy Deploying! 🚀**

