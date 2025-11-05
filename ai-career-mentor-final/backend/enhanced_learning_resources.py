# Enhanced Learning Resources with YouTube Playlists and Progress Tracking

# YouTube Playlists for each skill
YOUTUBE_PLAYLISTS = {
    'python': {
        'url': 'https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3',
        'channel': 'Programming with Mosh',
        'title': 'Python Tutorial for Beginners'
    },
    'sql': {
        'url': 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOVlz7gT5q7qO5j-5',
        'channel': 'freeCodeCamp.org',
        'title': 'SQL Tutorial - Full Database Course for Beginners'
    },
    'machine learning': {
        'url': 'https://www.youtube.com/playlist?list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v',
        'channel': 'sentdex',
        'title': 'Machine Learning with Python'
    },
    'deep learning': {
        'url': 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi',
        'channel': '3Blue1Brown',
        'title': 'Neural Networks'
    },
    'docker': {
        'url': 'https://www.youtube.com/playlist?list=PLhW3qG5bs-L99pQsZ74f-LC-tOEsBk2qk',
        'channel': 'TechWorld with Nana',
        'title': 'Docker Tutorial for Beginners'
    },
    'kubernetes': {
        'url': 'https://www.youtube.com/playlist?list=PLy7NrYWoggjwPggqtFsI_zJwdoQrFuG-R',
        'channel': 'TechWorld with Nana',
        'title': 'Kubernetes Tutorial for Beginners'
    },
    'react': {
        'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d',
        'channel': 'The Net Ninja',
        'title': 'React Tutorial for Beginners'
    },
    'aws': {
        'url': 'https://www.youtube.com/playlist?list=PL2yQDdvlhXf8LwDld2yqiF4q6wh4yeImr',
        'channel': 'freeCodeCamp.org',
        'title': 'AWS Tutorial for Beginners'
    },
    'statistics': {
        'url': 'https://www.youtube.com/playlist?list=PLZHQObOWTQDOj8EwfgE00ZR4qD1u-K5oK',
        'channel': '3Blue1Brown',
        'title': 'Statistics'
    },
    'javascript': {
        'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc',
        'channel': 'The Net Ninja',
        'title': 'JavaScript Tutorial for Beginners'
    },
    'typescript': {
        'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI',
        'channel': 'The Net Ninja',
        'title': 'TypeScript Tutorial for Beginners'
    },
    'data analysis': {
        'url': 'https://www.youtube.com/playlist?list=PL5-da3qGB5ICCsgW1MxlZ0Hq8LL5U3u9y',
        'channel': 'Data School',
        'title': 'Pandas Tutorial'
    },
    'api': {
        'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8',
        'channel': 'The Net Ninja',
        'title': 'REST API Tutorial'
    },
    'testing': {
        'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ',
        'channel': 'The Net Ninja',
        'title': 'Jest Testing Tutorial'
    },
    'ci/cd': {
        'url': 'https://www.youtube.com/playlist?list=PLhW3qG5bs-L_ZCOA4zNPSoGbnVQ-rp_dG',
        'channel': 'TechWorld with Nana',
        'title': 'DevOps CI/CD Tutorial'
    },
    'databases': {
        'url': 'https://www.youtube.com/playlist?list=PLrAXtmRdnEQy6nuLMOVlz7gT5q7qO5j-5',
        'channel': 'freeCodeCamp.org',
        'title': 'Database Design Tutorial'
    },
    'algorithms': {
        'url': 'https://www.youtube.com/playlist?list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn',
        'channel': 'mycodeschool',
        'title': 'Data Structures and Algorithms'
    },
    'git': {
        'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR',
        'channel': 'The Net Ninja',
        'title': 'Git & GitHub Tutorial'
    },
    'linux': {
        'url': 'https://www.youtube.com/playlist?list=PLT98CRl2KxKEUHie1m24-wkyH2E6x7yiH',
        'channel': 'freeCodeCamp.org',
        'title': 'Linux Command Line Tutorial'
    },
    'html': {
        'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9ibZ2TSRaGG7NCZ0JENug0o',
        'channel': 'The Net Ninja',
        'title': 'HTML Tutorial for Beginners'
    },
    'css': {
        'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeDH6xY58Oa4xG-Z3o1Ms',
        'channel': 'The Net Ninja',
        'title': 'CSS Tutorial for Beginners'
    },
    'node': {
        'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z1MA64kWL8j',
        'channel': 'The Net Ninja',
        'title': 'Node.js Tutorial for Beginners'
    },
    'java': {
        'url': 'https://www.youtube.com/playlist?list=PLsyeobzWxl7oZ-fxDYkOToURHhMuWD1BK',
        'channel': 'Programming with Mosh',
        'title': 'Java Tutorial for Beginners'
    },
    'azure': {
        'url': 'https://www.youtube.com/playlist?list=PLlVtbbG169nFq_hR7FcMYg32xsSAObuq8',
        'channel': 'Microsoft Azure',
        'title': 'Azure Fundamentals'
    },
    'tensorflow': {
        'url': 'https://www.youtube.com/playlist?list=PLQY2H8rRoyvzDbLUZkbudP-MFQZwNmU4S',
        'channel': 'TensorFlow',
        'title': 'TensorFlow 2.0 Complete Course'
    },
    'pytorch': {
        'url': 'https://www.youtube.com/playlist?list=PLZbbT5o_s2xrfNyHZsM6ufI0iZENK9xgG',
        'channel': 'deeplizard',
        'title': 'PyTorch Tutorial'
    },
    'nlp': {
        'url': 'https://www.youtube.com/playlist?list=PLoROMvodv4rMC6zfYmnD7UG3LVvwaITY5',
        'channel': 'Stanford Online',
        'title': 'Natural Language Processing with Deep Learning'
    },
    'computer vision': {
        'url': 'https://www.youtube.com/playlist?list=PLoROMvodv4rOABXSygHTsaq6AjHxJI5BB',
        'channel': 'Stanford Online',
        'title': 'Computer Vision'
    },
    'excel': {
        'url': 'https://www.youtube.com/playlist?list=PLl-K7zZEsYLmOF_07IayrTntevxtbUxDL',
        'channel': 'ExcelIsFun',
        'title': 'Excel Tutorial for Beginners'
    },
    'r': {
        'url': 'https://www.youtube.com/playlist?list=PLqzoL9-eJTNDdnKvep_YHIwk2AMqHhuJ0',
        'channel': 'MarinStatsLectures',
        'title': 'R Programming Tutorial'
    },
    'agile': {
        'url': 'https://www.youtube.com/playlist?list=PLoROMvodv4rOca_Ovz1DvdtWuz8BfSWL2',
        'channel': 'Stanford Online',
        'title': 'Agile Development'
    },
    'project management': {
        'url': 'https://www.youtube.com/playlist?list=PLl-K7zZEsYLmOF_07IayrTntevxtbUxDL',
        'channel': 'Project Management Videos',
        'title': 'Project Management Tutorial'
    }
}

# Detailed learning resources with video titles for progress tracking
ENHANCED_LEARNING_RESOURCES = {
    'python': {
        'playlist': YOUTUBE_PLAYLISTS['python'],
        'topics': [
            'Python Basics and Syntax',
            'Variables and Data Types (int, float, string, boolean)',
            'Control Flow (if, elif, else statements)',
            'Loops (for loops, while loops, break, continue)',
            'Functions (defining, calling, parameters, return values)',
            'Data Structures (lists, tuples, dictionaries, sets)',
            'List Comprehensions and Generators',
            'Object-Oriented Programming (classes, objects, inheritance)',
            'Exception Handling (try, except, finally)',
            'File I/O (reading and writing files)',
            'Modules and Packages (import, pip)',
            'Virtual Environments (venv, pipenv)',
            'Lambda Functions and Higher-Order Functions',
            'Regular Expressions (re module)',
            'Working with APIs and JSON data'
        ],
        'projects': [
            'Build a Calculator',
            'Create a To-Do List App',
            'Build a Simple Web Scraper',
            'Create a Password Generator'
        ]
    },
    'sql': {
        'playlist': YOUTUBE_PLAYLISTS['sql'],
        'topics': [
            'Database Fundamentals and SQL Basics',
            'SELECT Statement and Data Retrieval',
            'WHERE Clause and Filtering Data',
            'ORDER BY and Sorting Results',
            'GROUP BY and Data Aggregation',
            'HAVING Clause and Group Filtering',
            'JOINs (INNER, LEFT, RIGHT, FULL OUTER)',
            'Subqueries and Nested Queries',
            'INSERT, UPDATE, DELETE Operations',
            'Data Types and Constraints',
            'Primary Keys and Foreign Keys',
            'Indexes and Query Performance',
            'Views and Stored Procedures',
            'Database Normalization',
            'Transaction Management (COMMIT, ROLLBACK)',
            'Window Functions and Advanced Queries'
        ],
        'projects': [
            'Design a Library Database',
            'Create Employee Management System',
            'Build E-commerce Database Schema',
            'Practice with Sample Datasets'
        ]
    },
    'machine learning': {
        'playlist': YOUTUBE_PLAYLISTS['machine learning'],
        'topics': [
            'Introduction to Machine Learning Concepts',
            'Supervised vs Unsupervised Learning',
            'Linear Regression and Cost Functions',
            'Logistic Regression and Classification',
            'Decision Trees and Random Forest',
            'Support Vector Machines (SVM)',
            'K-Means Clustering and Unsupervised Learning',
            'Neural Networks and Deep Learning Basics',
            'Model Evaluation (Accuracy, Precision, Recall)',
            'Cross-Validation and Overfitting',
            'Feature Engineering and Selection',
            'Data Preprocessing and Cleaning',
            'Scikit-learn Library and Implementation',
            'Hyperparameter Tuning and Grid Search',
            'Model Deployment and Production',
            'Bias and Fairness in ML Models'
        ],
        'projects': [
            'Predict House Prices',
            'Customer Segmentation',
            'Sentiment Analysis',
            'Image Classification'
        ]
    },
    'react': {
        'playlist': YOUTUBE_PLAYLISTS['react'],
        'topics': [
            'React Fundamentals and Virtual DOM',
            'Components and JSX Syntax',
            'Props and Component Communication',
            'State Management with useState Hook',
            'useEffect Hook and Side Effects',
            'Event Handling and Form Management',
            'Conditional Rendering and Lists',
            'Keys and List Rendering Best Practices',
            'Controlled vs Uncontrolled Components',
            'React Router and Navigation',
            'Context API and State Management',
            'Custom Hooks and Reusable Logic',
            'Component Lifecycle and useEffect Dependencies',
            'Performance Optimization (memo, useMemo, useCallback)',
            'Error Boundaries and Error Handling',
            'Testing React Components (Jest, React Testing Library)',
            'React Best Practices and Patterns'
        ],
        'projects': [
            'Build a Todo App',
            'Create a Weather App',
            'Build a Blog with React Router',
            'Create a Shopping Cart'
        ]
    },
    'javascript': {
        'playlist': YOUTUBE_PLAYLISTS['javascript'],
        'topics': [
            'JavaScript Fundamentals and Syntax',
            'Variables (var, let, const) and Data Types',
            'Functions and Function Declarations',
            'Scope and Hoisting Concepts',
            'Objects and Object-Oriented Programming',
            'Arrays and Array Methods (map, filter, reduce)',
            'DOM Manipulation and Element Selection',
            'Event Handling and Event Listeners',
            'ES6+ Features (Arrow Functions, Template Literals)',
            'Destructuring and Spread Operator',
            'Promises and Asynchronous Programming',
            'Async/Await and Error Handling',
            'Modules (import/export) and Module Systems',
            'Closures and Higher-Order Functions',
            'Prototypes and Inheritance',
            'Regular Expressions and String Methods',
            'Local Storage and Session Storage',
            'AJAX and Fetch API'
        ],
        'projects': [
            'Build a Calculator',
            'Create a Quiz App',
            'Build a Weather App',
            'Create a Task Manager'
        ]
    },
    'docker': {
        'playlist': YOUTUBE_PLAYLISTS['docker'],
        'topics': [
            'Containerization Concepts and Docker Basics',
            'Docker Installation and Configuration',
            'Docker Images and Image Management',
            'Docker Containers and Container Lifecycle',
            'Dockerfile Creation and Best Practices',
            'Docker Compose and Multi-container Applications',
            'Docker Volumes and Data Persistence',
            'Docker Networks and Container Communication',
            'Docker Registry and Image Distribution',
            'Docker Security and Best Practices',
            'Docker in Production Environments',
            'Docker Monitoring and Logging',
            'Docker Swarm and Orchestration',
            'Docker with CI/CD Pipelines',
            'Docker Performance Optimization',
            'Docker Troubleshooting and Debugging'
        ],
        'projects': [
            'Containerize a Web Application',
            'Multi-container Setup with Docker Compose',
            'Build Custom Docker Images',
            'Deploy to Docker Hub'
        ]
    },
    'aws': {
        'playlist': YOUTUBE_PLAYLISTS['aws'],
        'topics': [
            'Cloud Computing Fundamentals and AWS Overview',
            'AWS Account Setup and IAM (Identity and Access Management)',
            'Amazon EC2 (Elastic Compute Cloud) and Virtual Machines',
            'Amazon S3 (Simple Storage Service) and Object Storage',
            'Amazon RDS (Relational Database Service) and Databases',
            'Amazon VPC (Virtual Private Cloud) and Networking',
            'AWS Lambda and Serverless Computing',
            'Amazon CloudFront and Content Delivery Network',
            'AWS Security Groups and Network ACLs',
            'AWS Load Balancers and Auto Scaling',
            'Amazon Route 53 and DNS Management',
            'AWS CloudFormation and Infrastructure as Code',
            'AWS CLI and SDK Integration',
            'AWS Cost Management and Billing',
            'AWS Monitoring with CloudWatch',
            'AWS Best Practices and Security'
        ],
        'projects': [
            'Deploy a Web App on EC2',
            'Set up a Static Website on S3',
            'Create a Serverless API with Lambda',
            'Build a CI/CD Pipeline'
        ]
    },
    'data analysis': {
        'playlist': YOUTUBE_PLAYLISTS['data analysis'],
        'topics': [
            'Data Analysis Fundamentals and Pandas Introduction',
            'DataFrames and Series Operations',
            'Data Loading and Import (CSV, Excel, JSON)',
            'Data Cleaning and Preprocessing',
            'Handling Missing Data and Outliers',
            'Data Manipulation and Transformation',
            'Data Filtering and Conditional Selection',
            'Data Aggregation and GroupBy Operations',
            'Data Visualization with Matplotlib and Seaborn',
            'Statistical Analysis and Descriptive Statistics',
            'Time Series Analysis and Date Handling',
            'Data Merging and Joining Operations',
            'Pivot Tables and Cross-tabulation',
            'Data Export and Reporting',
            'Performance Optimization and Memory Management',
            'Real-world Data Analysis Projects'
        ],
        'projects': [
            'Analyze Sales Data',
            'Stock Market Analysis',
            'Customer Behavior Analysis',
            'Data Dashboard Creation'
        ]
    },
    'statistics': {
        'playlist': YOUTUBE_PLAYLISTS['statistics'],
        'topics': [
            'Introduction to Statistics and Data Types',
            'Descriptive Statistics (Mean, Median, Mode)',
            'Measures of Variability (Variance, Standard Deviation)',
            'Probability Theory and Basic Concepts',
            'Probability Distributions (Normal, Binomial)',
            'Central Limit Theorem and Sampling',
            'Hypothesis Testing and P-values',
            'Confidence Intervals and Margin of Error',
            'Correlation and Linear Regression',
            'ANOVA (Analysis of Variance)',
            'Chi-Square Test and Categorical Data',
            'Bayesian Statistics and Prior Knowledge',
            'Statistical Significance and Effect Size',
            'Type I and Type II Errors',
            'Statistical Software (R, Python, Excel)',
            'Experimental Design and A/B Testing'
        ],
        'projects': [
            'Analyze Survey Data',
            'A/B Testing',
            'Statistical Modeling',
            'Data Visualization'
        ]
    }
}

# Default learning resources for skills not in the enhanced list
DEFAULT_LEARNING_RESOURCES = {
    'excel': ['Excel formulas and functions', 'Pivot tables and charts', 'Data analysis tools', 'VBA programming'],
    'pandas': ['Search for beginner resources on this skill'],
    'numpy': ['Search for beginner resources on this skill'],
    'matplotlib': ['Search for beginner resources on this skill'],
    'scikit-learn': ['Search for beginner resources on this skill'],
    'tensorflow': ['TensorFlow basics', 'Building neural networks', 'Model training and evaluation', 'TensorFlow Serving'],
    'pytorch': ['PyTorch fundamentals', 'Dynamic computation graphs', 'Model training', 'PyTorch Lightning'],
    'deep learning': ['Neural network basics', 'Learn TensorFlow or PyTorch', 'Train models on datasets', 'Transfer learning and tuning'],
    'kubernetes': ['K8s core concepts', 'Deploy apps to cluster', 'Manage services and volumes', 'Autoscaling and health checks'],
    'typescript': ['TypeScript basics', 'Type annotations', 'Interfaces and classes', 'Build tools and configuration'],
    'api': ['REST API design principles', 'HTTP methods and status codes', 'API documentation', 'Testing APIs with Postman'],
    'testing': ['Unit testing fundamentals', 'Test-driven development', 'Testing frameworks (Jest, pytest)', 'Integration testing'],
    'ci/cd': ['Continuous Integration concepts', 'GitHub Actions or Jenkins', 'Automated testing', 'Deployment pipelines'],
    'databases': ['Database design principles', 'SQL optimization', 'NoSQL vs SQL', 'Database administration'],
    'algorithms': ['Data structures (arrays, linked lists, trees)', 'Sorting and searching algorithms', 'Time complexity analysis', 'Practice on LeetCode'],
    'git': ['Git fundamentals', 'Branching strategies', 'Merge conflicts', 'GitHub/GitLab workflows'],
    'linux': ['Command line basics', 'File system navigation', 'Process management', 'Shell scripting'],
    'html': ['HTML5 semantic elements', 'Forms and validation', 'Accessibility', 'SEO best practices'],
    'css': ['CSS Grid and Flexbox', 'Responsive design', 'CSS preprocessors', 'CSS frameworks'],
    'node': ['Node.js fundamentals', 'Express.js framework', 'NPM package management', 'Building REST APIs'],
    'java': ['Java fundamentals', 'Object-oriented programming', 'Spring framework', 'Maven/Gradle build tools'],
    'azure': ['Azure fundamentals', 'Core Azure services', 'Azure DevOps', 'Cloud security'],
    'nlp': ['Natural language processing basics', 'Text preprocessing', 'Sentiment analysis', 'Language models'],
    'computer vision': ['Image processing basics', 'OpenCV library', 'Convolutional neural networks', 'Object detection'],
    'r': ['R programming basics', 'Data manipulation with dplyr', 'Statistical analysis', 'Data visualization with ggplot2'],
    'agile': ['Agile methodology principles', 'Scrum framework', 'Sprint planning', 'Retrospectives'],
    'project management': ['Project planning and scheduling', 'Risk management', 'Team collaboration tools', 'Stakeholder communication']
}

def get_learning_resource(skill):
    """Get enhanced learning resource for a skill, fallback to default if not available"""
    if skill in ENHANCED_LEARNING_RESOURCES:
        resource = ENHANCED_LEARNING_RESOURCES[skill]
        # Convert 'topics' to 'videos' for backward compatibility
        return {
            'playlist': resource.get('playlist'),
            'videos': resource.get('topics', resource.get('videos', [])),
            'projects': resource.get('projects', [])
        }
    elif skill in DEFAULT_LEARNING_RESOURCES:
        return {
            'playlist': None,
            'videos': DEFAULT_LEARNING_RESOURCES[skill],
            'projects': []
        }
    else:
        return {
            'playlist': None,
            'videos': ['Search for beginner resources on this skill'],
            'projects': []
        }
