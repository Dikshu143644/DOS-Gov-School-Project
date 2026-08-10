# 🏫 Pomegranate Governance: Maha-Admission Platform

**Official Repository for Shashkeey Madhyamik v Uchh Madhyamik Aashram Shala**  
📍 Pathraj, Tal. Karjat, Dist. Raigad  
📌 **UDISE Code:** 27240210901

---

## 🌟 Overview
Welcome to the state-of-the-art **Pomegranate Governance** platform for the Pathraj Ashram Shala. This system digitizes the entire lifecycle of the Ashram school, including student admissions, academic records, staff operations, and residential hostel management.

It is powered by a multi-agent AI architecture (ADK) designed to automate document verification, track biometric attendance, and secure the platform with advanced threat detection.

## 🚀 Key Features

### 🛡️ 1. Edge Security & Foundation
- **RBAC & ABAC Middleware**: Strict access control enforcing role boundaries (e.g., "My Class" scope for teachers).
- **Security Agent**: Real-time IP geolocation and device fingerprinting to detect shared passwords or unauthorized access.
- **Redis Integration**: Robust rate-limiting and session management.

### 🎓 2. Public Web & Admissions (Maha-Admission)
- **Accessible Design**: "Gov Green" applicant portal optimized for all devices.
- **UIDAI Aadhaar Integration**: Automated identity and document verification.
- **Multi-Step Wizard**: Streamlined admission process with draft auto-saving capabilities.

### 👨‍🏫 3. Staff & Academic Portals
- **Student Dashboard**: Application tracking and 24/7 AI Admissions Assistant.
- **Teacher Workspace**: Secure classroom management, grading, and biometric attendance sync.
- **Clerk Dashboard**: Automated generation of official DOCX/PDF letters (e.g., Tribal Department requests) and native Excel/CSV data exports.

### 🛏️ 4. Residential Operations
- **Hostel Management**: Wing, room, and bed allocation tracking.
- **Mess Operations**: Automated dining check-ins and nutrition tracking.
- **Night Check Workflow**: Medical exceptions and warden sign-offs.

### 👑 5. Super Admin Governance
- **Event Approval Queue**: Strict pipeline for publishing notices and gallery events.
- **AI Delegation Manager**: Time-bounded transfer of Super Admin rights for emergency leave.

---

## 🏗️ Tech Stack
- **Frontend**: Next.js 15, React 19, Tailwind CSS v4, Motion (Framer Motion)
- **Backend APIs**: Next.js Edge API Routes & NestJS
- **Database**: PostgreSQL (Prisma ORM)
- **Security**: JWT, bcrypt, Cloudflare Turnstile CAPTCHA (Prepared)
- **CI/CD**: GitHub Actions (Linting, Testing, Trivy Security Scanning)
- **Deployment**: Vercel (Frontend), Hybrid Cloud & On-Premise Sync

---

## 🛠️ Development & Deployment

### Local Setup
\`\`\`bash
# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`
The application will be available at [http://localhost:3000](http://localhost:3000).

### Feature Flags
Certain features (like live UIDAI Aadhaar verification, real WhatsApp API integration, and physical Biometric Hardware webhooks) are currently operating in **MOCK MODE** behind feature flags. Once the production API keys are acquired from the respective government and cloud providers, they can be inserted into the `.env` file to activate live production mode.

---

*Built with ❤️ for the students of Pathraj.*
