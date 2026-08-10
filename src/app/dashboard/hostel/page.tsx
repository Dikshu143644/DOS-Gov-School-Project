"use client";

import { useState } from "react";

export default function ResidentialOperationsDashboard() {
  const [activeTab, setActiveTab] = useState("hostel");

  const wings = [
    { id: "A", name: "Wing A (Boys)", capacity: 200, occupied: 185 },
    { id: "B", name: "Wing B (Girls)", capacity: 200, occupied: 198 },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white drop-shadow-sm flex items-center gap-3">
            Residential Operations
          </h1>
          <p className="mt-2 text-white/60">Hostel management, Mess dining, and Night Checks.</p>
        </div>
        <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-400 font-medium flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          Restricted Data Access (Warden Role)
        </div>
      </div>

      <div className="flex gap-4 mb-6 border-b border-white/10 pb-4 overflow-x-auto">
        <button 
          onClick={() => setActiveTab("hostel")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'hostel' ? 'bg-white/10 text-white border border-white/20 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Hostel Allocation
        </button>
        <button 
          onClick={() => setActiveTab("mess")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'mess' ? 'bg-white/10 text-white border border-white/20 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Mess Operations
        </button>
        <button 
          onClick={() => setActiveTab("nightcheck")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'nightcheck' ? 'bg-[#8b1538]/30 text-white border border-[#8b1538]/50 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Night Check & Medical
        </button>
      </div>

      {activeTab === "hostel" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wings.map((wing) => (
            <div key={wing.id} className="glass-panel rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">{wing.name}</h3>
              <div className="flex justify-between text-sm text-white/50 mb-4">
                <span>Occupancy</span>
                <span>{wing.occupied} / {wing.capacity}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden mb-6">
                <div 
                  className={`h-full rounded-full ${wing.occupied / wing.capacity > 0.9 ? 'bg-red-500' : 'bg-green-500'}`}
                  style={{ width: `${(wing.occupied / wing.capacity) * 100}%` }}
                ></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="py-2.5 rounded-lg bg-white/10 text-sm font-medium text-white hover:bg-white/20 transition-colors">
                  View Rooms
                </button>
                <button className="py-2.5 rounded-lg bg-blue-500/20 text-sm font-medium text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                  Allocate Student
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "mess" && (
        <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl">
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
            <div>
              <h3 className="text-lg font-bold text-white">Daily Mess Check-in</h3>
              <p className="text-xs text-white/50">Today&apos;s Menu: Poha (Breakfast), Dal Rice (Lunch)</p>
            </div>
            <div className="text-right">
               <div className="text-2xl font-bold text-green-400">342</div>
               <div className="text-xs text-white/50 uppercase tracking-widest">Meals Served</div>
            </div>
          </div>
          <div className="p-12 flex flex-col items-center justify-center text-center text-white/40">
             <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
               <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" /></svg>
             </div>
             <p>Biometric scanner feed offline.</p>
             <p className="text-xs mt-2">Waiting for ADK Integration to sync live meal check-ins.</p>
          </div>
        </div>
      )}

      {activeTab === "nightcheck" && (
        <div className="glass-panel rounded-2xl border border-[#8b1538]/30 bg-black/40 p-8 backdrop-blur-xl shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6">Warden Night Check Log</h2>
          
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Date</label>
              <input type="date" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8b1538]/50" />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Present Count</label>
                <input type="number" placeholder="e.g. 380" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8b1538]/50" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Sick Bay / Exceptions</label>
                <input type="number" placeholder="e.g. 3" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8b1538]/50" />
              </div>
            </div>

            <div className="pt-4">
               <button className="w-full py-3 rounded-xl bg-[#8b1538] hover:bg-[#6a0d28] text-white font-semibold transition-colors shadow-lg shadow-[#8b1538]/20">
                 Sign & Submit Night Report
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
