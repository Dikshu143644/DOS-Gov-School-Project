"use client";

import { useState } from "react";
import Image from "next/image";
import { FileCheck, Sparkles, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("application");

  return (
    <div className="animate-fade-in">
      {/* Hero Banner Section */}
      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-8 border border-[var(--color-border)] shadow-lg shadow-[var(--color-background)]/50">
        <Image 
          src="/assets/student_hero.png" 
          alt="Student Portal Hero" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
        <div className="absolute bottom-6 left-8">
          <h1 className="text-3xl font-bold text-white drop-shadow-sm font-marathi">Student Portal</h1>
          <p className="mt-1 text-[var(--color-text-muted)] font-marathi">Manage your admission application and academic records.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-[var(--color-border)] pb-4 overflow-x-auto">
        <button 
          onClick={() => setActiveTab("application")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'application' ? 'bg-[var(--color-emerald-500)] text-white shadow-lg' : 'text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface)]'}`}
        >
          Admission Status
        </button>
        <button 
          onClick={() => setActiveTab("documents")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'documents' ? 'bg-[var(--color-emerald-500)] text-white shadow-lg' : 'text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface)]'}`}
        >
          Document Vault
        </button>
        <button 
          onClick={() => setActiveTab("ai_support")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'ai_support' ? 'bg-[var(--color-info)]/20 text-[var(--color-info)] border border-[var(--color-info)]/30' : 'text-[var(--color-text-muted)] hover:text-[var(--color-info)] hover:bg-[var(--color-info)]/10'}`}
        >
          <Sparkles className="w-4 h-4" />
          AI Inquiry Agent
        </button>
      </div>

      {activeTab === "application" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Application Tracker</h3>
            
            {/* Timeline UI */}
            <div className="relative pt-6 pb-12">
              <div className="absolute top-8 left-0 w-full h-1 bg-[var(--color-surface-hover)] rounded-full">
                <div className="h-full bg-[var(--color-emerald-500)] w-1/2 rounded-full shadow-[0_0_10px_var(--color-emerald-500)]"></div>
              </div>
              <div className="flex justify-between relative z-10 -mt-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[var(--color-emerald-500)] border-4 border-[var(--color-surface)] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-[var(--color-text-muted)] font-medium">Submitted</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[var(--color-emerald-400)] border-4 border-[var(--color-surface)] animate-pulse shadow-[0_0_15px_var(--color-emerald-500)]"></div>
                  <span className="text-xs text-white font-medium">AI Verification</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[var(--color-surface-hover)] border-4 border-[var(--color-surface)]"></div>
                  <span className="text-xs text-[var(--color-text-muted)] font-medium">Principal Review</span>
                </div>
              </div>
            </div>
            
            {/* Alert */}
            <div className="mt-4 rounded-xl bg-[var(--color-emerald-500)]/10 border border-[var(--color-emerald-500)]/20 p-4 flex items-start gap-4">
              <div className="p-2 bg-[var(--color-emerald-500)]/20 rounded-lg text-[var(--color-emerald-400)]">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-emerald-400)]">Documents verified by AI</h4>
                <p className="text-xs text-[var(--color-emerald-400)]/70 mt-1">Your Aadhaar and marksheets passed the automated check. Currently waiting for Principal Review.</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">Your Profile</h3>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-[var(--color-text-muted)]">Full Name</div>
                <div className="text-sm text-white font-medium">Rahul Sharma</div>
              </div>
              <div>
                <div className="text-xs text-[var(--color-text-muted)]">Standard Applied</div>
                <div className="text-sm text-white font-medium">11th (Arts)</div>
              </div>
              <div>
                <div className="text-xs text-[var(--color-text-muted)]">Residence</div>
                <div className="text-sm text-[var(--color-gold-400)] font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Hostel Required
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--color-border)]">
                <button className="w-full secondary-button text-xs">Edit Details</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "documents" && (
        <div className="glass-card p-6 flex flex-col items-center justify-center py-20">
          <FileCheck className="w-12 h-12 text-[var(--color-text-muted)] mb-4 opacity-50" />
          <h3 className="text-lg font-medium text-[var(--color-text-muted)]">No documents requested</h3>
          <p className="text-sm text-[var(--color-text-muted)]/70">Check back later if the administration requires more files.</p>
        </div>
      )}

      {activeTab === "ai_support" && (
        <div className="glass-card flex flex-col h-[600px] border-[var(--color-info)]/30 overflow-hidden shadow-2xl shadow-[var(--color-info)]/5">
          <div className="flex items-center gap-3 p-4 border-b border-[var(--color-info)]/20 bg-[var(--color-info)]/5">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-info)]/20 text-[var(--color-info)] border border-[var(--color-info)]/30">
               <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[var(--color-info)]/80 animate-ping"></span>
               <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[var(--color-info)]"></span>
               <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Admissions AI Agent</h3>
              <p className="text-xs text-[var(--color-info)]/70">Online 24/7 • Powered by LangChain</p>
            </div>
          </div>
          
          <div className="flex-1 p-6 flex flex-col justify-end bg-[var(--color-surface)]/50">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 shrink-0 rounded-full bg-[var(--color-info)]/20 flex items-center justify-center text-[var(--color-info)] border border-[var(--color-info)]/30 text-xs font-bold">AI</div>
                <div className="bg-[var(--color-info)]/10 border border-[var(--color-info)]/20 rounded-2xl rounded-tl-sm p-4 text-sm text-white max-w-[80%]">
                  Namaskar Rahul! I noticed your application is under Principal Review. Do you have any questions about the hostel allocation or the 11th Arts syllabus?
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="relative">
              <input type="text" placeholder="Ask anything..." className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-info)]/50 focus:ring-1 focus:ring-[var(--color-info)]/50 transition-all" />
              <button className="absolute right-2 top-2 p-1.5 rounded-lg bg-[var(--color-info)]/20 text-[var(--color-info)] hover:bg-[var(--color-info)]/40 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
