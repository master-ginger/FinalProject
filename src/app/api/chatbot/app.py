from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os

app = FastAPI()

# CORS Configuration (adjust for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your frontend URL in production
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Load resources
try:
    # 1. Use absolute path for Vercel deployment
    dataset_path = Path(__file__).parent / "dataset.csv"
    
    # 2. Optimized dataset loading
    df = pd.read_csv(dataset_path)
    term_list = df['Term'].str.lower().tolist()
    definitions = df['Definition'].tolist()
    
    # 3. Cache model loading (Vercel has /tmp persistence)
    model_cache_path = "/tmp/all-MiniLM-L6-v2"
    if os.path.exists(model_cache_path):
        model = SentenceTransformer(model_cache_path)
    else:
        model = SentenceTransformer("all-MiniLM-L6-v2")
        model.save(model_cache_path)
    
    # 4. Pre-compute embeddings
    term_embeddings = model.encode(term_list)
    
except Exception as e:
    raise RuntimeError(f"Initialization failed: {str(e)}")

class Query(BaseModel):
    question: str

@app.post("/ask")
async def ask(query: Query):
    try:
        # 1. Input validation
        if not query.question.strip():
            raise HTTPException(status_code=400, detail="Empty question")
        
        # 2. Process query
        user_embedding = model.encode([query.question.lower()])
        similarities = cosine_similarity(user_embedding, term_embeddings)[0]
        best_match_idx = np.argmax(similarities)
        
        # 3. Threshold for relevance
        if similarities[best_match_idx] < 0.3:  # Adjust threshold as needed
            return {"term": "", "definition": "I don't have a good answer for that."}
        
        return {
            "term": df.iloc[best_match_idx]['Term'],
            "definition": df.iloc[best_match_idx]['Definition'],
            "confidence": float(similarities[best_match_idx])  # Added confidence score
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))