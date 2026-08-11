from langchain_anthropic import ChatAnthropic
from langchain.schema import SystemMessage, HumanMessage

llm = ChatAnthropic(model_name="claude-3-5-sonnet-20240620", temperature=0.7)

async def get_student_response(prompt: str, context: dict | None = None) -> str:
    system_prompt = """You are the official Student Assistant for Shashkeey Madhyamik v Uchh Madhyamik Aashram Shala, Pathraj.
    You help students from 11th and 12th Arts with their syllabus, homework, and school-related questions.
    Keep your answers encouraging, concise, and helpful."""
    
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=prompt)
    ]
    
    response = llm.invoke(messages)
    return response.content
