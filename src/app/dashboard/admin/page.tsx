"use client";

import { useState } from "react";

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState("approvals");

  const pendingApprovals = [
    { id: 1, title: "Annual Cultural Fest 2026 Images", submittedBy: "Rajendra Kadam", type: "Event", time: "2 hours ago" },
    { id: 2, title: "10th Std Time Table Update", submittedBy: "Pravin Patil", type: "Notice", time: "5 hours ago" },
    { id: 3, title: "Hostel Menu Change Request", submittedBy: "Warden", type: "Document", time: "1 day ago" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#ff6b6b] drop-shadow-sm flex items-center gap-3">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Super Admin Control
          </h1>
          <p className="mt-2 text-white/60">Exclusive rights to approve, edit, and publish platform content.</p>
        </div>
        <div className="px-4 py-2 bg-[#8b1538]/20 border border-[#8b1538]/40 rounded-lg text-sm text-[#ff6b6b] flex items-center gap-2 shadow-lg shadow-[#8b1538]/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b6b] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b6b]"></span>
          </span>
          Delegation Agent: Monitoring
        </div>
      </div>

      <div className="flex gap-4 mb-6 border-b border-white/10 pb-4 overflow-x-auto">
        <button 
          onClick={() => setActiveTab("approvals")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'approvals' ? 'bg-[#8b1538]/30 text-white border border-[#8b1538]/50 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Event & Notice Queue
        </button>
        <button 
          onClick={() => setActiveTab("delegation")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'delegation' ? 'bg-[#8b1538]/30 text-white border border-[#8b1538]/50 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Emergency Delegation
        </button>
      </div>

      {activeTab === "approvals" && (
        <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-black/20 flex justify-between items-center">
            <h3 className="font-semibold text-white">Pending Submissions</h3>
            <span className="bg-[#8b1538] text-white text-xs font-bold px-2.5 py-1 rounded-full">{pendingApprovals.length} pending</span>
          </div>
          <div className="divide-y divide-white/5">
            {pendingApprovals.map((req) => (
              <div key={req.id} className="p-6 hover:bg-white/5 transition-colors flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-white/70 uppercase tracking-wider">{req.type}</span>
                    <h4 className="text-base font-semibold text-white">{req.title}</h4>
                  </div>
                  <p className="text-sm text-white/50">Submitted by <span className="text-white/80">{req.submittedBy}</span> • {req.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors text-white">
                    Preview
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-500/40 transition-colors">
                    Approve & Publish
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-500/40 transition-colors">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "delegation" && (
        <div className="glass-panel rounded-2xl border border-blue-500/30 bg-[#050b14] p-8 backdrop-blur-xl shadow-2xl shadow-blue-500/10 max-w-2xl">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          </div>
          
          <h2 className="text-xl font-bold text-white mb-2">Temporary Access Delegation</h2>
          <p className="text-sm text-blue-200/60 mb-8 leading-relaxed">
            Going on leave? The ADK Delegation Agent can automatically transfer your Super Admin approval rights to another staff member for a specific time period. Rights will be automatically revoked when the period ends.
          </p>

          <form className="space-y-5">
            <div>
              <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Delegate To</label>
              <select className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50">
                <option>Principal (Default)</option>
                <option>Head Clerk</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Start Date</label>
                <input type="date" className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50" />
              </div>
              <div>
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">End Date</label>
                <input type="date" className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50" />
              </div>
            </div>

            <button type="button" className="w-full mt-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors shadow-lg shadow-blue-600/20">
              Activate AI Delegation Agent
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
