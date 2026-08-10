import { NextResponse } from 'next/server';
import { SecurityAgent } from '@/lib/security-agent';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    // Extract Device Fingerprint & IP for the Security Agent
    const ipAddress = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || 'Unknown Device';

    // Mock verification (later to be connected to PostgreSQL Prisma)
    if (email && password) {
      if (email === 'admin@pathraj.gov.in' && password === 'admin') {
        
        // Let the AI Security Agent evaluate the login risk
        const riskAssessment = await SecurityAgent.evaluateLoginRisk({
          ipAddress,
          userAgent,
          email,
        });

        if (riskAssessment.riskLevel === 'blocked') {
          return NextResponse.json(
            { status: 'error', message: riskAssessment.reason },
            { status: 403 }
          );
        }

        return NextResponse.json({
          status: 'success',
          user: {
            name: 'Super Admin',
            role: 'platform_admin',
            email: 'admin@pathraj.gov.in',
            sessionSecurity: riskAssessment.riskLevel, // Will be 'read_only' if suspicious
            securityAlert: riskAssessment.riskLevel !== 'normal' ? riskAssessment.reason : null,
          },
          token: 'mock-jwt-token-12345',
        });
      } else {
        return NextResponse.json(
          { status: 'error', message: 'Invalid credentials or unauthorized device detected by Security Agent.' },
          { status: 401 }
        );
      }
    }

    return NextResponse.json(
      { status: 'error', message: 'Email and password are required.' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal server error.' },
      { status: 500 }
    );
  }
}
