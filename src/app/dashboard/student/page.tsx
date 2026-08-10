"use client";

import { useState } from "react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("application");

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white drop-shadow-sm">Student Portal</h1>
        <p className="mt-2 text-white/60">Manage your admission application and academic records.</p>
      </div>

      <div className="flex gap-4 mb-6 border-b border-white/10 pb-4 overflow-x-auto">
        <button 
          onClick={() => setActiveTab("application")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'application' ? 'bg-white/10 text-white border border-white/20 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Admission Status
        </button>
        <button 
          onClick={() => setActiveTab("documents")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'documents' ? 'bg-white/10 text-white border border-white/20 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Document Vault
        </button>
        <button 
          onClick={() => setActiveTab("ai_support")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'ai_support' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-lg shadow-blue-500/10' : 'text-white/50 hover:text-blue-300 hover:bg-blue-500/5'}`}
        >
          AI Inquiry Agent
        </button>
      </div>

      {activeTab === "application" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-panel rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white mb-4">Application Tracker</h3>
            <div className="relative pt-8">
              {/* Tracker Line */}
              <div className="absolute top-10 left-0 w-full h-1 bg-white/10 rounded-full">
                <div className="h-full bg-green-500 w-1/2 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="flex justify-between relative z-10 -mt-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-500 border-4 border-black flex items-center justify-center"></div>
                  <span className="text-xs text-white/70 font-medium">Submitted</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-green-500 border-4 border-black animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-xs text-white font-medium">AI Verification</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-white/20 border-4 border-black"></div>
                  <span className="text-xs text-white/40 font-medium">Principal Review</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 rounded-xl bg-green-500/10 border border-green-500/20 p-4 flex items-start gap-4">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-green-200">Documents verified by AI</h4>
                <p className="text-xs text-green-200/70 mt-1">Your Aadhaar and marksheets passed the automated check. Currently waiting for Principal Review.</p>
              </div>
            </div>
          </div>
          
          <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Your Profile</h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-white/40">Full Name</div>
                <div className="text-sm text-white font-medium">Rahul Sharma</div>
              </div>
              <div>
                <div className="text-xs text-white/40">Standard Applied</div>
                <div className="text-sm text-white font-medium">11th (Arts)</div>
              </div>
              <div>
                <div className="text-xs text-white/40">Residence</div>
                <div className="text-sm text-white font-medium">Hostel Required</div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <button className="w-full py-2 rounded-lg bg-white/10 text-xs font-medium text-white hover:bg-white/20 transition-all">Edit Details</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "ai_support" && (
        <div className="glass-panel flex flex-col h-[600px] rounded-2xl border border-blue-500/30 bg-[#050b14] backdrop-blur-xl overflow-hidden shadow-2xl shadow-blue-500/10">
          <div className="flex items-center gap-3 p-4 border-b border-blue-500/20 bg-blue-500/5">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
               <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-400 animate-ping"></span>
               <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500"></span>
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Admissions AI Agent</h3>
              <p className="text-xs text-blue-300/70">Online 24/7 • Ready to help</p>
            </div>
          </div>
          
          <div className="flex-1 p-6 flex flex-col justify-end">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 shrink-0 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">AI</div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl rounded-tl-sm p-4 text-sm text-blue-100 max-w-[80%]">
                  Namaskar Rahul! I noticed your application is under Principal Review. Do you have any questions about the hostel allocation or the 11th Arts syllabus?
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-white/5 bg-black/40">
            <div className="relative">
              <input type="text" placeholder="Ask anything..." className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" />
              <button className="absolute right-2 top-2 p-1.5 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/40 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
