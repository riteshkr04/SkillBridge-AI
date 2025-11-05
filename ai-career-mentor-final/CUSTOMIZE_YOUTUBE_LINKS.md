# 🎥 How to Customize YouTube Playlist Links

## 📍 Where to Edit Links

**File Location:** `frontend/src/youtubeLinks.js`

## 🔧 How to Customize

1. **Open the file:** `frontend/src/youtubeLinks.js`
2. **Find the skill** you want to customize
3. **Replace the placeholder URL** with your actual YouTube playlist link
4. **Save the file** - changes will appear automatically

## 📝 Example

```javascript
// Before (placeholder)
'python': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',

// After (your actual playlist)
'python': 'https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3',
```

## 🎯 Available Skills to Customize

### Programming Languages
- `python` - Python programming
- `javascript` - JavaScript programming  
- `java` - Java programming
- `c++` - C++ programming
- `c` - C programming

### Web Development
- `react` - React.js framework
- `html` - HTML markup
- `css` - CSS styling
- `node` - Node.js backend
- `typescript` - TypeScript

### Data Science & ML
- `machine learning` - Machine Learning
- `data analysis` - Data Analysis
- `statistics` - Statistics
- `deep learning` - Deep Learning
- `tensorflow` - TensorFlow
- `pytorch` - PyTorch
- `nlp` - Natural Language Processing
- `computer vision` - Computer Vision

### Databases
- `sql` - SQL databases
- `mongodb` - MongoDB
- `postgresql` - PostgreSQL
- `mysql` - MySQL
- `redis` - Redis

### Cloud & DevOps
- `aws` - Amazon Web Services
- `azure` - Microsoft Azure
- `docker` - Docker containers
- `kubernetes` - Kubernetes
- `linux` - Linux administration

### Tools & Others
- `git` - Git version control
- `api` - API development
- `testing` - Software testing
- `ci/cd` - Continuous Integration/Deployment
- `algorithms` - Algorithms & Data Structures
- `excel` - Microsoft Excel
- `r` - R programming
- `agile` - Agile methodology
- `project management` - Project Management

## 🚀 Quick Steps

1. **Copy your YouTube playlist URL**
2. **Open** `frontend/src/youtubeLinks.js`
3. **Find** the skill you want to customize
4. **Replace** the placeholder URL with your link
5. **Save** the file
6. **Refresh** your browser to see changes

## 💡 Tips

- Use **playlist URLs** (not individual video URLs) for better user experience
- Playlist URLs look like: `https://www.youtube.com/playlist?list=PL...`
- You can also customize the title by editing the `getYouTubeTitle` function
- If a skill is not listed, it will use the `default` link

## 🔄 After Making Changes

The changes will appear automatically in your application. No need to restart the server!
