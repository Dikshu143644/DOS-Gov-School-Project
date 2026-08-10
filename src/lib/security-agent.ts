export interface LoginContext {
  ipAddress: string;
  userAgent: string;
  email: string;
}

export interface RiskAssessment {
  riskLevel: 'normal' | 'suspicious' | 'read_only' | 'blocked';
  reason: string;
}

/**
 * Security Agent: Responsible for analyzing login contexts, tracking devices,
 * and communicating with the AI to determine session risk levels.
 */
export class SecurityAgent {
  /**
   * Fetches the geolocation of an IP address using a free public API.
   * In production, use a paid service like MaxMind or IPStack.
   */
  static async getIpLocation(ip: string) {
    if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.')) {
      return { city: 'Localhost', country: 'Local', isSuspicious: false };
    }

    try {
      const res = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await res.json();
      return {
        city: data.city,
        country: data.country,
        isSuspicious: data.country !== 'India', // Example: Ashram school is in India
      };
    } catch (error) {
      return { city: 'Unknown', country: 'Unknown', isSuspicious: false };
    }
  }

  /**
   * The AI ADK Middleware
   * Evaluates the risk of a login attempt by passing the context to the AI Agent.
   */
  static async evaluateLoginRisk(context: LoginContext): Promise<RiskAssessment> {
    const location = await this.getIpLocation(context.ipAddress);

    // TODO: Integrate OpenAI/Gemini ADK here
    // Example Prompt: "User {email} is logging in from {location.city} using device {userAgent}. 
    // They usually log in from Karjat, India. Determine the risk level."

    // MOCK AI DECISION LOGIC:
    // If the login is from outside India, the AI flags it as highly suspicious.
    if (location.isSuspicious) {
      return {
        riskLevel: 'read_only',
        reason: `AI Security Alert: Login detected from outside expected geographic bounds (${location.country}). Access downgraded to Read-Only to protect student records.`,
      };
    }

    // If the User-Agent looks like a bot or unknown device
    if (!context.userAgent || context.userAgent.includes('bot')) {
      return {
        riskLevel: 'blocked',
        reason: 'AI Security Alert: Automated bot or masked device detected.',
      };
    }

    // Normal safe login
    return {
      riskLevel: 'normal',
      reason: 'Login context matches historical patterns.',
    };
  }
}
