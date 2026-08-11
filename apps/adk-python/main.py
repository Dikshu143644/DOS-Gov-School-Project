import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# We will implement these shortly
from agents.student_agent import get_student_response
from agents.admission_agent import get_admission_response
from agents.security_agent import get_security_response
from agents.document_agent import get_document_response
from agents.ollama_agent import get_ollama_response

app = FastAPI(title="Pathraj Ashram ADK Microservice")

class AgentRequest(BaseModel):
    agentType: str
    prompt: str
    context: dict | None = None

@app.post("/agent/invoke")
async def invoke_agent(request: AgentRequest):
    try:
        response_content = ""
        
        if request.agentType == "student_assistant":
            response_content = await get_student_response(request.prompt, request.context)
        elif request.agentType == "admission_assistant":
            response_content = await get_admission_response(request.prompt, request.context)
        elif request.agentType == "document_assistant":
            response_content = await get_document_response(request.prompt, request.context)
        elif request.agentType == "security_sentinel":
            response_content = await get_security_response(request.prompt, request.context)
        elif request.agentType == "local_ollama":
            response_content = await get_ollama_response(request.prompt, request.context)
        else:
            raise HTTPException(status_code=400, detail="Agent type not recognized.")

        return {
            "status": "success",
            "agent": request.agentType,
            "response": response_content
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
