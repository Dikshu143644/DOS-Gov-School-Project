"use client";

import Image from "next/image";
import { Users, GraduationCap, CheckSquare, Award, Clock, FileText } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-8 border border-[var(--color-border)] shadow-lg shadow-[var(--color-background)]/50">
        <Image 
          src="/assets/teacher_bg.png" 
          alt="Teacher Workspace Background" 
          fill 
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent" />
        <div className="absolute inset-y-0 left-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-emerald-500)]/20 text-[var(--color-emerald-400)] text-xs font-semibold mb-2 border border-[var(--color-emerald-500)]/30 backdrop-blur-sm w-fit">
            Class 10-A Assigned
          </div>
          <h1 className="text-3xl font-bold text-white drop-shadow-sm font-marathi">Teacher Workspace</h1>
          <p className="mt-1 text-[var(--color-text-muted)] font-marathi">Classroom management, attendance, and academics.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6 flex flex-col justify-center items-center text-center group cursor-pointer hover:border-[var(--color-emerald-500)]/50 transition-colors">
          <div className="w-12 h-12 rounded-full bg-[var(--color-emerald-500)]/10 text-[var(--color-emerald-400)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <CheckSquare className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white">Mark Attendance</h3>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">Daily roster for 10-A</p>
        </div>

        <div className="glass-card p-6 flex flex-col justify-center items-center text-center group cursor-pointer hover:border-[var(--color-info)]/50 transition-colors">
          <div className="w-12 h-12 rounded-full bg-[var(--color-info)]/10 text-[var(--color-info)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white">Update Grades</h3>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">Unit Test 2 marks pending</p>
        </div>

        <div className="glass-card p-6 flex flex-col justify-center items-center text-center group cursor-pointer hover:border-[var(--color-gold-500)]/50 transition-colors">
          <div className="w-12 h-12 rounded-full bg-[var(--color-gold-500)]/10 text-[var(--color-gold-400)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white">Study Materials</h3>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">Upload notes & assignments</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Timetable */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Today&apos;s Schedule</h3>
          <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-[var(--color-border)]">
            
            <div className="flex gap-4 relative">
              <div className="w-10 h-10 rounded-full bg-[var(--color-emerald-500)]/20 border-4 border-[var(--color-surface)] flex items-center justify-center shrink-0 z-10">
                <Clock className="w-4 h-4 text-[var(--color-emerald-400)]" />
              </div>
              <div className="flex-1 bg-[var(--color-surface-hover)]/30 border border-[var(--color-border)] rounded-xl p-3">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-medium text-white">10-A (Mathematics)</h4>
                  <span className="text-xs text-[var(--color-text-muted)]">08:30 AM</span>
                </div>
                <p className="text-xs text-[var(--color-emerald-400)] mt-1 font-medium">Ongoing</p>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="w-10 h-10 rounded-full bg-[var(--color-surface-hover)] border-4 border-[var(--color-surface)] flex items-center justify-center shrink-0 z-10">
                <Clock className="w-4 h-4 text-[var(--color-text-muted)]" />
              </div>
              <div className="flex-1 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl p-3">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-medium text-white">9-B (Science)</h4>
                  <span className="text-xs text-[var(--color-text-muted)]">09:30 AM</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="w-10 h-10 rounded-full bg-[var(--color-surface-hover)] border-4 border-[var(--color-surface)] flex items-center justify-center shrink-0 z-10">
                <Clock className="w-4 h-4 text-[var(--color-text-muted)]" />
              </div>
              <div className="flex-1 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl p-3">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-medium text-white">10-A (Geometry)</h4>
                  <span className="text-xs text-[var(--color-text-muted)]">11:00 AM</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Student Highlights */}
        <div className="glass-card p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Student Alerts (10-A)</h3>
            <button className="text-xs text-[var(--color-emerald-400)] hover:text-white transition-colors">View Roster</button>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 rounded-xl border border-[var(--color-warning)]/30 bg-[var(--color-warning)]/5 flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-[var(--color-warning)]/20 flex items-center justify-center text-[var(--color-warning)]">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Low Attendance Warning</h4>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">3 students below 75% this month.</p>
              </div>
            </div>
            
            <div className="p-3 rounded-xl border border-[var(--color-info)]/30 bg-[var(--color-info)]/5 flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-[var(--color-info)]/20 flex items-center justify-center text-[var(--color-info)]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Science Project Due</h4>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Remind class tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
