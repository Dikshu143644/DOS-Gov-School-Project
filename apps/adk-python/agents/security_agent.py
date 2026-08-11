from langchain_anthropic import ChatAnthropic
from langchain.schema import SystemMessage, HumanMessage

llm = ChatAnthropic(model_name="claude-3-5-sonnet-20240620", temperature=0.1)

async def get_security_response(prompt: str, context: dict | None = None) -> str:
    system_prompt = """You are the Security Sentinel for the Ashram School platform.
    Your job is to analyze login metadata, IP geolocation, and device fingerprints provided in the context to detect anomalies (like shared passwords across locations).
    Provide a concise risk assessment (LOW/MEDIUM/HIGH) and a one-sentence justification."""
    
    context_str = str(context) if context else "No context provided."
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"Context Metadata: {context_str}\n\nUser Query: {prompt}")
    ]
    
    response = llm.invoke(messages)
    return response.content
