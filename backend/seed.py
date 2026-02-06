from sqlalchemy.orm import Session
from app.db.database import SessionLocal, engine
from app.models.models import Question, User
from app.core.security import get_password_hash
from app.db.init_db import create_tables
import json

def seed_data():
    create_tables()
    db = SessionLocal()
    
    # 1. Create Test User
    if not db.query(User).filter(User.email == "test@example.com").first():
        test_user = User(
            email="test@example.com",
            hashed_password=get_password_hash("password123"),
            full_name="Test Candidate"
        )
        db.add(test_user)
        print("Created Test User")

    # 2. Seed Questions
    # Check if questions exist
    if db.query(Question).count() > 0:
        print("Questions already exist. Skipping.")
        db.close()
        return

    questions = [
        # --- Frontend ---
        {
            "role": "Frontend", "difficulty": "Easy",
            "content": "What is the difference between specificty in CSS?",
            "ideal_answer": "Specificity determines which CSS rule is applied by the browser. It is calculated based on ID selectors, class selectors, and element selectors. IDs have the highest specificity.",
            "keywords": ["ID", "Class", "Element", "Priority", "Cascade"]
        },
        {
            "role": "Frontend", "difficulty": "Medium",
            "content": "Explain the concept of 'Event Bubbling' and 'Event Capturing' in JavaScript.",
            "ideal_answer": "Event Bubbling is when an event triggers on the deepest element and propagates up to parents. Capturing is the opposite, going from root down to target. We use addEventListener with the capture flag to control this.",
            "keywords": ["Propagation", "DOM", "Bubbling", "Capturing", "Parents"]
        },
        {
            "role": "Frontend", "difficulty": "Hard",
            "content": "How does the React Fiber reconciliation algorithm work?",
            "ideal_answer": "React Fiber is a reimplementation of the reconciliation engine. It splits rendering work into chunks (units of work) that can be paused and resumed, allowing for prioritization of updates and smoother UI.",
            "keywords": ["Reconciliation", "Fiber", "Chunks", "Priority", "Virtual DOM"]
        },

        # --- Backend ---
        {
            "role": "Backend", "difficulty": "Easy",
            "content": "What is the difference between GET and POST requests?",
            "ideal_answer": "GET is used to retrieve data and parameters are in the URL. POST is used to submit data to be processed and parameters are in the body. POST is more secure for sensitive data.",
            "keywords": ["Retrieve", "Submit", "URL", "Body", "Idempotent"]
        },
        {
            "role": "Backend", "difficulty": "Medium",
            "content": "Explain the ACID properties in databases.",
            "ideal_answer": "ACID stands for Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions don't interfere), and Durability (saved data persists).",
            "keywords": ["Atomicity", "Consistency", "Isolation", "Durability", "Transactions"]
        },
        {
            "role": "Backend", "difficulty": "Hard",
            "content": "Design a rate limiter system. What algorithms would you use?",
            "ideal_answer": "I would use algorithms like Token Bucket or Leaky Bucket. We can store counters in Redis with an expiry time (TTL) to track requests per user/IP over a time window.",
            "keywords": ["Token Bucket", "Redis", "Sliding Window", "Throttling", "Distributed"]
        },

        # --- ML ---
        {
            "role": "Machine Learning", "difficulty": "Easy",
            "content": "What is Overfitting and how can you prevent it?",
            "ideal_answer": "Overfitting happens when a model learns noise instead of the signal, performing well on train data but poor on test. Prevent it using Regularization (L1/L2), Dropout, or more data.",
            "keywords": ["Noise", "Generalization", "Regularization", "Dropout", "Bias-Variance"]
        },
        {
            "role": "Machine Learning", "difficulty": "Medium",
            "content": "Explain the difference between Bagging and Boosting.",
            "ideal_answer": "Bagging (Bootstrap Aggregating) trains models in parallel on random subsets (e.g., Random Forest) to reduce variance. Boosting trains models sequentially, where each model fixes errors of the previous one (e.g., XGBoost) to reduce bias.",
            "keywords": ["Parallel", "Sequential", "Variance", "Bias", "Random Forest"]
        }
    ]

    for q in questions:
        db_q = Question(
            role=q["role"],
            content=q["content"],
            difficulty=q["difficulty"],
            ideal_answer=q["ideal_answer"],
            keywords=q["keywords"]
        )
        db.add(db_q)
    
    db.commit()
    print(f"Seeded {len(questions)} questions.")
    db.close()

if __name__ == "__main__":
    seed_data()
