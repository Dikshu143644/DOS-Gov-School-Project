"use client";

import { useState } from "react";

export default function ClerkDashboard() {
  const [activeTab, setActiveTab] = useState("staff");

  const staffMembers = [
    { id: 1, name: "Pravin Patil", role: "Madhyamuk Shikshak", classes: "1st - 5th", subject: "All (Marathi)", isClassTeacher: true },
    { id: 2, name: "Sunita Deshmukh", role: "Uchh Madhyamik", classes: "11th Arts", subject: "History", isClassTeacher: true },
    { id: 3, name: "Rajendra Kadam", role: "Subject Teacher", classes: "6th - 10th", subject: "Multi-Skill / Computer", isClassTeacher: false },
    { id: 4, name: "Vikram More", role: "Subject Teacher", classes: "All", subject: "Sports", isClassTeacher: false },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white drop-shadow-sm">Clerk Workspace</h1>
          <p className="mt-2 text-white/60">Manage staff assignments, schedules, and document exports.</p>
        </div>
        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2 border border-white/10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          New Record
        </button>
      </div>

      <div className="flex gap-4 mb-6 border-b border-white/10 pb-4 overflow-x-auto">
        <button 
          onClick={() => setActiveTab("staff")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'staff' ? 'bg-white/10 text-white border border-white/20 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Staff Roster
        </button>
        <button 
          onClick={() => setActiveTab("documents")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'documents' ? 'bg-white/10 text-white border border-white/20 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Letters & Docs Export
        </button>
      </div>

      {activeTab === "staff" && (
        <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-white/70">
              <thead className="bg-black/40 text-xs uppercase text-white/50 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Role</th>
                  <th className="px-6 py-4 font-medium">Assigned Classes</th>
                  <th className="px-6 py-4 font-medium">Subject</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {staffMembers.map((staff) => (
                  <tr key={staff.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white flex items-center gap-2">
                        {staff.name}
                        {staff.isClassTeacher && <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30">Class Teacher</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4">{staff.role}</td>
                    <td className="px-6 py-4">{staff.classes}</td>
                    <td className="px-6 py-4">{staff.subject}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-white/40 hover:text-white transition-colors">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "documents" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/30">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Generate Official Letter</h3>
            <p className="text-sm text-white/50 mb-6">Create automated template-based letters to PO Madam, Tribal Department, etc.</p>
            
            <div className="space-y-3">
              <button className="w-full py-3 px-4 rounded-xl bg-black/40 border border-white/10 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all flex items-center justify-between group">
                Monthly Staff Attendance Report
                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-black/40 border border-white/10 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all flex items-center justify-between group">
                Hostel Fund Request to PO
                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
             <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-4 border border-green-500/30">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Export Data Sheets</h3>
            <p className="text-sm text-white/50 mb-6">Download data securely as Excel (.xlsx) or sync directly to Google Workspace.</p>
            
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2 py-3 w-full rounded-xl bg-green-600/20 text-green-400 border border-green-500/30 hover:bg-green-600/40 transition-colors text-sm font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Master Roster (.xlsx)
              </button>
              <button className="flex items-center justify-center gap-2 py-3 w-full rounded-xl bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 hover:text-white transition-colors text-sm font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Sync with Google Calendar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
