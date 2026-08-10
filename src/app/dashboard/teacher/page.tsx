"use client";

import { useState } from "react";

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("class");

  const students = [
    { id: 1, roll: 101, name: "Rahul Sharma", attendance: "98%", grade: "A" },
    { id: 2, roll: 102, name: "Sneha Jadhav", attendance: "95%", grade: "A+" },
    { id: 3, roll: 103, name: "Kiran Pawar", attendance: "82%", grade: "B" },
    { id: 4, roll: 104, name: "Amit Deshmukh", attendance: "91%", grade: "A" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white drop-shadow-sm">Teacher Classroom</h1>
          <p className="mt-2 text-white/60">Class Teacher Access: 11th Standard (Arts)</p>
        </div>
        <div className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-sm text-green-400 font-medium">
          Access Level: Full (Read/Write)
        </div>
      </div>

      <div className="flex gap-4 mb-6 border-b border-white/10 pb-4 overflow-x-auto">
        <button 
          onClick={() => setActiveTab("class")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'class' ? 'bg-white/10 text-white border border-white/20 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          My Classroom (11th Arts)
        </button>
        <button 
          onClick={() => setActiveTab("attendance")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'attendance' ? 'bg-white/10 text-white border border-white/20 shadow-lg' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          Daily Attendance
        </button>
      </div>

      {activeTab === "class" && (
        <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="p-4 border-b border-white/10 bg-black/20 flex justify-between items-center">
            <h3 className="font-semibold text-white">Student Roster</h3>
            <span className="bg-white/10 text-white/70 text-xs font-bold px-2.5 py-1 rounded-full">{students.length} Students</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-white/70">
              <thead className="bg-black/40 text-xs uppercase text-white/50 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-medium">Roll No</th>
                  <th className="px-6 py-4 font-medium">Student Name</th>
                  <th className="px-6 py-4 font-medium">Attendance</th>
                  <th className="px-6 py-4 font-medium">Current Grade</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{student.roll}</td>
                    <td className="px-6 py-4 text-white">{student.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${parseInt(student.attendance) > 90 ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                        {student.attendance}
                      </span>
                    </td>
                    <td className="px-6 py-4">{student.grade}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors mr-3">Update Marks</button>
                      <button className="text-white/40 hover:text-white transition-colors">View Profile</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "attendance" && (
        <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl flex flex-col items-center justify-center text-center min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white/50 mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Biometric Attendance Sync</h3>
          <p className="text-sm text-white/50 max-w-md mx-auto mb-6">Attendance is automatically synced from the biometric devices managed by the ADK. You can override or submit manual leave requests here.</p>
          <button className="px-6 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all">
            Manual Override Request
          </button>
        </div>
      )}
    </div>
  );
}
