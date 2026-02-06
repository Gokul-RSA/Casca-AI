from sentence_transformers import SentenceTransformer, util
import torch

class MLService:
    def __init__(self):
        # Load model only once
        self.model = SentenceTransformer('all-MiniLM-L6-v2') 

    def evaluate_answer(self, user_answer: str, ideal_answer: str, keywords: list[str]) -> dict:
        # 1. Compute Cosine Similarity
        embeddings1 = self.model.encode(user_answer, convert_to_tensor=True)
        embeddings2 = self.model.encode(ideal_answer, convert_to_tensor=True)
        similarity_score = util.pytorch_cos_sim(embeddings1, embeddings2).item() * 100

        # 2. Check Keywords
        present_keywords = [kw for kw in keywords if kw.lower() in user_answer.lower()]
        keyword_score = (len(present_keywords) / len(keywords)) * 100 if keywords else 100

        # 3. Final Weighted Score
        final_score = (0.7 * similarity_score) + (0.3 * keyword_score)

        # 4. Generate Feedback
        strengths = []
        weaknesses = []
        suggestions = ""

        if final_score > 80:
            strengths.append("Excellent understanding of the concept.")
        elif final_score > 50:
            strengths.append("Good attempt, but missed some nuances.")
            weaknesses.append("Could be more specific.")
        else:
            weaknesses.append("Answer is generic or incorrect.")
        
        if len(present_keywords) < len(keywords):
             missing = [kw for kw in keywords if kw not in present_keywords]
             weaknesses.append(f"Missing key terms: {', '.join(missing)}")
             suggestions = f"Try to include keywords like {', '.join(missing)} in your answer."
        else:
             strengths.append("Good use of technical terminology.")

        return {
            "score": round(final_score, 1),
            "strengths": strengths,
            "weaknesses": weaknesses,
            "suggestion": suggestions
        }

ml_service = MLService()
