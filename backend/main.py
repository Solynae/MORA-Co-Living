from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="MORA API",
    description="Modern Co-Living Orchestration & Trust Network Backend",
    version="1.0.0"
)

# CORS Ayarları (Frontend bağlantısı için)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "project": "MORA",
        "status": "Online",
        "message": "Trust Protocol is active."
    }

@app.get("/api/v1/health")
async def health_check():
    return {"status": "healthy", "version": "1.0.0"}
