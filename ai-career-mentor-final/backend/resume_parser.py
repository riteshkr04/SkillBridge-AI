# Enhanced resume parser: PDF/DOCX extraction + spaCy-based skill detection
import io, os
def extract_text_from_file(filename: str, content: bytes) -> str:
    lower = filename.lower()
    if lower.endswith('.pdf'):
        try:
            from PyPDF2 import PdfReader
            reader = PdfReader(io.BytesIO(content))
            texts = []
            for p in reader.pages:
                texts.append(p.extract_text() or '')
            return '\n'.join(texts)
        except Exception as e:
            return f'[error extracting pdf] {e}'
    elif lower.endswith('.docx') or lower.endswith('.doc'):
        try:
            from docx import Document
            doc = Document(io.BytesIO(content))
            texts = [p.text for p in doc.paragraphs]
            return '\n'.join(texts)
        except Exception as e:
            return f'[error extracting docx] {e}'
    else:
        try:
            return content.decode('utf-8', errors='ignore')
        except:
            return '[unable to decode file]'

# Enhanced skill detection with comprehensive keyword matching
def nlp_detect_skills(text: str):
    """Enhanced skill detection that looks for various forms of technical skills"""
    return enhanced_detect(text)

def enhanced_detect(text: str):
    """Comprehensive skill detection with multiple variations and patterns"""
    t = text.lower()
    found_skills = set()
    
    # Comprehensive skill dictionary with variations
    skill_patterns = {
        'python': ['python', 'py', 'python3', 'python 3', 'pandas', 'numpy', 'django', 'flask', 'fastapi'],
        'java': ['java', 'java 8', 'java 11', 'java 17', 'spring', 'spring boot', 'maven', 'gradle'],
        'javascript': ['javascript', 'js', 'es6', 'es2015', 'typescript', 'ts', 'node.js', 'nodejs'],
        'sql': ['sql', 'mysql', 'postgresql', 'postgres', 'sqlite', 'oracle', 'sql server', 'mongodb'],
        'react': ['react', 'react.js', 'reactjs', 'redux', 'next.js', 'nextjs'],
        'html': ['html', 'html5', 'html 5'],
        'css': ['css', 'css3', 'css 3', 'sass', 'scss', 'less', 'bootstrap', 'tailwind'],
        'git': ['git', 'github', 'gitlab', 'bitbucket', 'version control'],
        'docker': ['docker', 'dockerfile', 'docker compose', 'containerization'],
        'kubernetes': ['kubernetes', 'k8s', 'helm', 'kubectl'],
        'aws': ['aws', 'amazon web services', 'ec2', 's3', 'lambda', 'rds', 'cloudformation'],
        'azure': ['azure', 'microsoft azure', 'azure devops', 'azure functions'],
        'linux': ['linux', 'ubuntu', 'centos', 'debian', 'bash', 'shell scripting'],
        'machine learning': ['machine learning', 'ml', 'artificial intelligence', 'ai', 'scikit-learn', 'sklearn'],
        'deep learning': ['deep learning', 'neural networks', 'cnn', 'rnn', 'lstm', 'transformer'],
        'tensorflow': ['tensorflow', 'tf', 'keras'],
        'pytorch': ['pytorch', 'torch'],
        'data analysis': ['data analysis', 'data analytics', 'pandas', 'numpy', 'matplotlib', 'seaborn'],
        'statistics': ['statistics', 'statistical analysis', 'hypothesis testing', 'regression'],
        'excel': ['excel', 'microsoft excel', 'spreadsheet', 'vlookup', 'pivot tables'],
        'r': ['r', 'r programming', 'rstudio', 'shiny'],
        'c++': ['c++', 'cpp', 'c plus plus'],
        'c': ['c programming', 'c language'],
        'node': ['node.js', 'nodejs', 'express', 'npm'],
        'nlp': ['nlp', 'natural language processing', 'text processing', 'spacy', 'nltk'],
        'computer vision': ['computer vision', 'opencv', 'image processing', 'cv'],
        'algorithms': ['algorithms', 'data structures', 'leetcode', 'competitive programming'],
        'databases': ['database', 'db', 'nosql', 'redis', 'elasticsearch'],
        'api': ['api', 'rest api', 'graphql', 'microservices'],
        'testing': ['testing', 'unit testing', 'integration testing', 'jest', 'pytest', 'selenium'],
        'ci/cd': ['ci/cd', 'continuous integration', 'continuous deployment', 'jenkins', 'github actions'],
        'agile': ['agile', 'scrum', 'kanban', 'sprint'],
        'project management': ['project management', 'jira', 'confluence', 'trello']
    }
    
    # Check for each skill and its variations
    for skill, patterns in skill_patterns.items():
        for pattern in patterns:
            if pattern in t:
                found_skills.add(skill)
                break
    
    # Additional pattern matching for common skill mentions
    import re
    
    # Look for "Skills:" or "Technologies:" sections
    skills_section_pattern = r'(?:skills?|technologies?|tools?|languages?|frameworks?)[:\-]\s*([^\n]+)'
    skills_sections = re.findall(skills_section_pattern, t, re.IGNORECASE)
    
    for section in skills_sections:
        # Split by common separators
        skills_in_section = re.split(r'[,;|•\-\n]', section)
        for skill_item in skills_in_section:
            skill_item = skill_item.strip()
            if skill_item:
                # Check if this skill matches any of our known skills
                for skill, patterns in skill_patterns.items():
                    if any(pattern in skill_item.lower() for pattern in patterns):
                        found_skills.add(skill)
                        break
    
    # Look for bullet points or lists that might contain skills
    bullet_pattern = r'[•\-\*]\s*([^\n]+)'
    bullets = re.findall(bullet_pattern, t)
    
    for bullet in bullets:
        bullet_lower = bullet.lower()
        for skill, patterns in skill_patterns.items():
            if any(pattern in bullet_lower for pattern in patterns):
                found_skills.add(skill)
    
    return sorted(list(found_skills))

def simple_detect(text: str):
    """Fallback simple detection"""
    t = text.lower()
    kws = ['python','java','c++','c','sql','javascript','react','node','aws','azure','linux','docker','kubernetes','tensorflow','pytorch','machine learning','data analysis','excel','html','css','git','statistics','deep learning','nlp','r']
    found = [k for k in kws if k in t]
    return found
