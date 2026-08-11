from langchain_community.llms import Ollama
from langchain.schema import SystemMessage, HumanMessage

# Initialize Ollama pointing to the local docker container or local instance
# The default port is 11434. Adjust base_url if needed based on docker networking.
try:
    llm = Ollama(model="llama3", base_url="http://ollama:11434")
except Exception as e:
    print(f"Warning: Failed to initialize Ollama: {e}")

async def get_ollama_response(prompt: str, context: dict | None = None) -> str:
    system_prompt = """You are a specialized Local AI Assistant running via Ollama. 
    Your purpose is to handle secure internal reasoning tasks without sending data to external APIs.
    Provide concise, helpful answers based on the user's prompt."""
    
    context_str = str(context) if context else "No context provided."
    full_prompt = f"{system_prompt}\n\nContext: {context_str}\n\nUser: {prompt}\n\nAssistant:"
    
    response = llm.invoke(full_prompt)
    return response
