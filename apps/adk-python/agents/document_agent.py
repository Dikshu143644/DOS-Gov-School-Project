from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.schema import SystemMessage, HumanMessage

# Using Gemini 1.5 Pro since it has excellent vision capabilities for OCR/Document parsing
llm = ChatGoogleGenerativeAI(model="gemini-1.5-pro", temperature=0.1)

async def get_document_response(prompt: str, context: dict | None = None) -> str:
    system_prompt = """You are the Document Verification Agent for the Ashram School platform.
    Your job is to analyze OCR text extracted from Aadhaar cards and academic marksheet uploads.
    Validate if the name matches the context, and identify any potential forgeries.
    If an image URL or base64 is provided in the context, you will analyze it."""
    
    context_str = str(context) if context else "No document metadata provided."
    
    # In a real vision setup, you would pass the image payload to HumanMessage. 
    # For now, we process the extracted text or URLs provided in the context.
    messages = [
        SystemMessage(content=system_prompt),
        HumanMessage(content=f"Document Metadata: {context_str}\n\nUser Query: {prompt}")
    ]
    
    response = llm.invoke(messages)
    return response.content
