from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
import random

from app.core.database import get_db
from app.models.interview import Interview
from app.models.question import Question
from app.models.answer import Answer
from app.models.user import User
from app.schemas.interview import InterviewCreate, InterviewResponse
from app.schemas.answer import AnswerCreate, AnswerResponse
from app.schemas.question import QuestionResponse
from app.services.ml_service import ml_service
from app.core.deps import get_current_user

router = APIRouter(prefix="/interviews", tags=["Interviews"])

@router.get("/dashboard")
def get_dashboard(current_user: User = Depends(get_current_user)):
    return {
        "user_id": current_user.id,
        "email": current_user.email,
        "full_name": current_user.full_name,
        "message": "Welcome to your protected dashboard!"
    }

@router.post("/start", response_model=InterviewResponse)
def start_interview(interview_data: InterviewCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    
    new_interview = Interview(
        user_id=current_user.id,
        role_focus=interview_data.role_focus,
        start_time=datetime.utcnow()
    )
    db.add(new_interview)
    db.commit()
    db.refresh(new_interview)
    return new_interview

@router.post("/{interview_id}/submit_answer", response_model=AnswerResponse)
def submit_answer(interview_id: int, answer_data: AnswerCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    # 1. Get Question & Ideal Answer
    question = db.query(Question).filter(Question.id == answer_data.question_id).first()
    if not question:
        raise HTTPException(status_code=404, detail="Question not found")

    # 2. Evaluate using ML Service
    evaluation = ml_service.evaluate_answer(
        user_answer=answer_data.answer_text,
        ideal_answer=question.ideal_answer,
        keywords=question.keywords
    )

    # 3. Save Answer
    new_answer = Answer(
        interview_id=interview_id,
        question_id=answer_data.question_id,
        answer_text=answer_data.answer_text,
        score=evaluation["score"],
        feedback_structured=evaluation
    )
    db.add(new_answer)
    # Update Interview Score (Running Average)
    interview = db.query(Interview).filter(Interview.id == interview_id).first()
    if interview:
        # Simple update logic, can be improving
        interview.total_score = evaluation["score"] 
    
    db.commit()
    db.refresh(new_answer)
    
    return new_answer

@router.get("/{interview_id}/next_question", response_model=QuestionResponse)
def get_next_question(interview_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    interview = db.query(Interview).filter(Interview.id == interview_id).first()
    if not interview:
        raise HTTPException(status_code=404, detail="Interview not found")

    # Get answered question IDs
    answered_ids = db.query(Answer.question_id).filter(Answer.interview_id == interview_id).all()
    answered_ids = [ids[0] for ids in answered_ids]

    # **Adaptive Logic**
    # Check last answer score
    last_answer = db.query(Answer).filter(Answer.interview_id == interview_id).order_by(Answer.created_at.desc()).first()
    
    target_difficulty = "Medium" # Default
    if last_answer:
        if last_answer.score > 80:
            target_difficulty = "Hard"
        elif last_answer.score < 50:
            target_difficulty = "Easy"
        else:
            target_difficulty = "Medium"
    
    # Fetch Candidate Question
    # Prioritize target difficulty, but fall back if exhausted
    next_question = db.query(Question)\
        .filter(Question.role == interview.role_focus)\
        .filter(Question.difficulty == target_difficulty)\
        .filter(Question.id.notin_(answered_ids))\
        .first()
    
    if not next_question:
        # Fallback: Any difficulty
        next_question = db.query(Question)\
            .filter(Question.role == interview.role_focus)\
            .filter(Question.id.notin_(answered_ids))\
            .first()

    if not next_question:
        # No more questions
        raise HTTPException(status_code=404, detail="No more questions available for this role.")

    return next_question
