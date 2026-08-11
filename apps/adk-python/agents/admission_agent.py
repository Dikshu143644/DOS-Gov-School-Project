from langchain_anthropic import ChatAnthropic
from langchain.schema import SystemMessage, HumanMessage

llm = ChatAnthropic(model_name="claude-3-5-sonnet-20240620", temperature=0.5)

async def get_admission_response(prompt: str, context: dict | None = None) -> str:
    system_prompt = """You are the official Admission Assistant for Shashkeey Madhyamik v Uchh Madhyamik Aashram Shala, Pathraj.
    You help prospective students and parents navigate the Maha-Admission portal.
    CRITICAL: Always try to respond in Marathi if the user asks in Marathi, or English if they ask in English. Keep answers professional and respectful."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=prompt)
    ]
    
    response = llm.invoke(messages)
    return response.content
