import { NextResponse } from 'next/server';

// ADK (Agent Development Kit) Integration Router
// Proxies requests to the Python FastAPI Microservice
export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Use localhost in dev, or the Python service URL in production (e.g. docker container name)
    const pythonAdkUrl = process.env.PYTHON_ADK_URL || 'http://localhost:8000/agent/invoke';

    const response = await fetch(pythonAdkUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Python ADK Service returned ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("ADK Router Error:", error);
    return NextResponse.json(
      { status: "error", message: "ADK Router failed to reach Python Microservice." }, 
      { status: 500 }
    );
  }
}
