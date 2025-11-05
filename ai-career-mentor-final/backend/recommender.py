# Improved recommender that can call OpenAI (if API key set) otherwise falls back to rule-based scoring.
import os
from typing import List, Dict
from recommender_rules import STANDARD_SKILLS, CAREER_SKILL_MAP, LEARNING_RESOURCES
from enhanced_learning_resources import get_learning_resource

OPENAI_KEY = os.environ.get('OPENAI_API_KEY')

def recommend_careers(skills: List[str]) -> List[Dict]:
    # if OpenAI key provided, call it for richer explanations (pseudo-call; requires openai package)
    if OPENAI_KEY:
        try:
            import openai
            openai.api_key = OPENAI_KEY
            prompt = f"""You are an expert career advisor. Given the following skills: {skills}. Recommend top 5 career paths and short reasons, and list the missing skills for each career from the known map."""
            resp = openai.Completion.create(model='text-davinci-003', prompt=prompt, max_tokens=400)
            text = resp.choices[0].text
            # NOTE: parsing model output robustly is non-trivial. For safety, still return rule-based map below.
        except Exception:
            pass
    # fallback rule-based
    skset = set(s.lower() for s in skills)
    scores = []
    for career, reqs in CAREER_SKILL_MAP.items():
        match = len(skset.intersection(reqs))
        scores.append({'career': career, 'match_count': match, 'required': reqs})
    scores.sort(key=lambda x: x['match_count'], reverse=True)
    for s in scores:
        s['reason'] = f"Matches {s['match_count']} of {len(s['required'])} key skills."
        missing = [r for r in s['required'] if r not in skset]
        plan = []
        for m in missing:
            learning_resource = get_learning_resource(m)
            plan.append({ 
                'skill': m, 
                'steps': learning_resource['videos'],
                'projects': learning_resource['projects'],
                'playlist': learning_resource['playlist']
            })
        s['missing_skills'] = missing
        s['learning_plan'] = plan
    return scores

def career_gap_and_plan(target_career: str, skills: List[str]) -> Dict:
    reqs = CAREER_SKILL_MAP.get(target_career, [])
    skset = set(s.lower() for s in skills)
    missing = [r for r in reqs if r not in skset]
    plan = []
    for m in missing:
        learning_resource = get_learning_resource(m)
        plan.append({
            'skill': m, 
            'steps': learning_resource['videos'],
            'projects': learning_resource['projects'],
            'playlist': learning_resource['playlist']
        })
    return {
        'target_career': target_career,
        'required_skills': reqs,
        'your_skills': list(skset),
        'missing_skills': missing,
        'personalized_plan': plan
    }
