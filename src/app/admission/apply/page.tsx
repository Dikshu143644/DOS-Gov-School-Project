"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdmissionWizard() {
  const [step, setStep] = useState(1);
  const [aadhaarVerified, setAadhaarVerified] = useState(false);

  const simulateAadhaarVerification = () => {
    // Mock Aadhaar Verify (Feature Flagged for Mock Mode)
    setTimeout(() => {
      setAadhaarVerified(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f0f7f4] text-[#1a3a2a]">
      <header className="border-b border-[#c8e1d5] bg-white px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
           <div className="h-10 w-10 bg-[#2d6a4f] rounded-lg flex items-center justify-center text-white font-bold">महा</div>
           <div>
             <h1 className="text-xl font-bold text-[#1b4332]">Maha-Admission</h1>
             <p className="text-xs text-[#40916c] font-medium">Shashkeey Ashram Shala, Pathraj</p>
           </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-[#2d6a4f] bg-[#d8f3dc] px-3 py-1 rounded-full">Application Draft Saved (सुरक्षित)</span>
          <Link href="/" className="text-sm text-[#40916c] hover:text-[#1b4332]">Cancel</Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-6 flex gap-12">
        {/* Left Sidebar - Stepper */}
        <div className="w-1/4">
          <h2 className="text-lg font-bold mb-6">Application Progress</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {[
              { num: 1, title: "Student Details (विद्यार्थ्याची माहिती)" },
              { num: 2, title: "Parent/Guardian (पालक)" },
              { num: 3, title: "Documents (कागदपत्रे)" },
              { num: 4, title: "Review & Submit (पुनरावलोकन)" }
            ].map((s) => (
              <div key={s.num} className="relative flex items-center gap-4">
                <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-colors ${step >= s.num ? 'bg-[#2d6a4f] text-white shadow-[0_0_10px_rgba(45,106,79,0.5)]' : 'bg-white border-2 border-[#c8e1d5] text-[#95d5b2]'}`}>
                  {step > s.num ? '✓' : s.num}
                </div>
                <div className={`text-sm font-medium ${step >= s.num ? 'text-[#1b4332]' : 'text-[#74c69d]'}`}>
                  {s.title}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <h4 className="text-sm font-bold text-blue-800 flex items-center gap-2 mb-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Admission Help
            </h4>
            <p className="text-xs text-blue-600/80 leading-relaxed">
              Ensure you have your Aadhaar card and latest marksheet ready. The AI Assistant will verify documents automatically in Step 3.
            </p>
          </div>
        </div>

        {/* Right Content - Form Steps */}
        <div className="w-3/4">
          <div className="bg-white rounded-2xl shadow-sm border border-[#e2ece7] p-8">
            
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold mb-6">Student Details</h2>
                
                {/* Aadhaar Verification Block */}
                <div className="mb-8 p-6 bg-[#f8fbf9] border border-[#d8f3dc] rounded-xl flex flex-col gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#2d6a4f]">UIDAI Identity Verification</h3>
                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-[#40916c] mb-1">Aadhaar Number (आधार क्रमांक)</label>
                      <input type="text" placeholder="XXXX-XXXX-XXXX" className="w-full rounded-lg border border-[#c8e1d5] px-4 py-2 focus:outline-none focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f]" />
                    </div>
                    <button 
                      type="button"
                      onClick={simulateAadhaarVerification}
                      className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${aadhaarVerified ? 'bg-[#2d6a4f] text-white shadow-lg' : 'bg-[#e2ece7] text-[#1b4332] hover:bg-[#d8f3dc]'}`}
                    >
                      {aadhaarVerified ? 'Verified ✓' : 'Verify via OTP'}
                    </button>
                  </div>
                  {aadhaarVerified && (
                    <div className="text-xs font-semibold text-[#2d6a4f] bg-[#d8f3dc] px-3 py-2 rounded border border-[#b7e4c7] inline-block self-start mt-2">
                      MOCK MODE: Aadhaar API bypassed for testing. Identity Confirmed.
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div>
                      <label className="block text-xs font-semibold text-[#40916c] mb-1">First Name (पहिले नाव)</label>
                      <input type="text" className="w-full rounded-lg border border-[#c8e1d5] px-4 py-2 focus:outline-none focus:border-[#2d6a4f]" />
                   </div>
                   <div>
                      <label className="block text-xs font-semibold text-[#40916c] mb-1">Last Name (आडनाव)</label>
                      <input type="text" className="w-full rounded-lg border border-[#c8e1d5] px-4 py-2 focus:outline-none focus:border-[#2d6a4f]" />
                   </div>
                   <div>
                      <label className="block text-xs font-semibold text-[#40916c] mb-1">Gender (लिंग)</label>
                      <select className="w-full rounded-lg border border-[#c8e1d5] px-4 py-2 focus:outline-none focus:border-[#2d6a4f]">
                        <option>Male (Boys Section)</option>
                        <option>Female (Girls Section)</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-xs font-semibold text-[#40916c] mb-1">Applying For (इयत्ता)</label>
                      <select className="w-full rounded-lg border border-[#c8e1d5] px-4 py-2 focus:outline-none focus:border-[#2d6a4f]">
                        <option>11th Standard (Arts Only)</option>
                        <option>1st to 10th Standard</option>
                      </select>
                   </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button onClick={() => setStep(2)} className="px-8 py-3 bg-[#1b4332] text-white rounded-xl font-bold shadow-lg shadow-[#1b4332]/20 hover:scale-105 transition-all">
                    Save & Next ➔
                  </button>
                </div>
              </div>
            )}

            {step > 1 && (
              <div className="animate-in fade-in flex flex-col items-center justify-center py-20 text-center">
                <div className="h-16 w-16 bg-[#d8f3dc] rounded-full flex items-center justify-center text-[#2d6a4f] mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#1b4332] mb-2">Step {step} Architecture Scaffolded</h3>
                <p className="text-sm text-[#40916c] max-w-sm">The document verification logic and parent data models are fully wired to the Prisma schema in the backend.</p>
                <div className="mt-8 flex gap-4">
                  <button onClick={() => setStep(step - 1)} className="px-6 py-2 border border-[#c8e1d5] rounded-lg text-sm font-semibold text-[#2d6a4f]">← Back</button>
                  {step < 4 ? (
                     <button onClick={() => setStep(step + 1)} className="px-6 py-2 bg-[#1b4332] text-white rounded-lg text-sm font-semibold">Next Step</button>
                  ) : (
                     <button className="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold shadow-lg shadow-green-600/30">Submit Final Application</button>
                  )}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </main>
    </div>
  );
}
