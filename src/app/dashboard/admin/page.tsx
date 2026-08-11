"use client";

import Image from "next/image";
import { Users, BookOpen, GraduationCap, AlertTriangle, TrendingUp, CheckCircle, Clock } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-8 border border-[var(--color-border)] shadow-lg shadow-[var(--color-background)]/50">
        <Image 
          src="/assets/principal_bg.png" 
          alt="Principal Command Center Background" 
          fill 
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
        <div className="absolute bottom-6 left-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-gold-500)]/20 text-[var(--color-gold-400)] text-xs font-semibold mb-2 border border-[var(--color-gold-500)]/30 backdrop-blur-sm">
            <CheckCircle className="w-3 h-3" /> System Nominal
          </div>
          <h1 className="text-3xl font-bold text-white drop-shadow-sm font-marathi">Principal Command Center</h1>
          <p className="mt-1 text-[var(--color-gold-400)] font-marathi">High-level institutional overview and approvals.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="glass-card p-5 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-[var(--color-emerald-500)]/10 rounded-full blur-xl group-hover:bg-[var(--color-emerald-500)]/20 transition-all"></div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[var(--color-text-muted)] text-xs font-semibold uppercase tracking-wider">Total Students</p>
              <h3 className="text-2xl font-bold text-white mt-1">452</h3>
            </div>
            <div className="p-2 bg-[var(--color-emerald-500)]/20 rounded-lg text-[var(--color-emerald-400)]">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-[var(--color-emerald-400)] text-xs font-medium">
            <TrendingUp className="w-3 h-3" /> +12 this month
          </div>
        </div>

        <div className="glass-card p-5 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-[var(--color-info)]/10 rounded-full blur-xl group-hover:bg-[var(--color-info)]/20 transition-all"></div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[var(--color-text-muted)] text-xs font-semibold uppercase tracking-wider">Teaching Staff</p>
              <h3 className="text-2xl font-bold text-white mt-1">24</h3>
            </div>
            <div className="p-2 bg-[var(--color-info)]/20 rounded-lg text-[var(--color-info)]">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-[var(--color-text-muted)] text-xs font-medium">
            1 on leave today
          </div>
        </div>

        <div className="glass-card p-5 relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-[var(--color-warning)]/10 rounded-full blur-xl group-hover:bg-[var(--color-warning)]/20 transition-all"></div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[var(--color-text-muted)] text-xs font-semibold uppercase tracking-wider">Pending Admissions</p>
              <h3 className="text-2xl font-bold text-white mt-1">18</h3>
            </div>
            <div className="p-2 bg-[var(--color-warning)]/20 rounded-lg text-[var(--color-warning)]">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-[var(--color-warning)] text-xs font-medium">
            <Clock className="w-3 h-3" /> Requires your review
          </div>
        </div>

        <div className="glass-card p-5 relative overflow-hidden group border-[var(--color-error)]/30">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-[var(--color-error)]/10 rounded-full blur-xl group-hover:bg-[var(--color-error)]/20 transition-all"></div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[var(--color-text-muted)] text-xs font-semibold uppercase tracking-wider">Action Required</p>
              <h3 className="text-2xl font-bold text-white mt-1">3</h3>
            </div>
            <div className="p-2 bg-[var(--color-error)]/20 rounded-lg text-[var(--color-error)] animate-pulse">
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-[var(--color-error)] text-xs font-medium">
            Urgent approvals pending
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pending Approvals */}
        <div className="md:col-span-2 glass-card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">Pending Approvals</h3>
            <button className="text-xs text-[var(--color-gold-400)] hover:text-white transition-colors">View All</button>
          </div>
          
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 hover:bg-[var(--color-surface-hover)] transition-colors flex justify-between items-center group">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] group-hover:border-[var(--color-emerald-500)]/50 transition-colors">
                    {i === 1 ? <AlertTriangle className="w-4 h-4 text-[var(--color-warning)]" /> : <BookOpen className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{i === 1 ? 'Fund Allocation Request' : `Student Admission (#${1020 + i})`}</h4>
                    <p className="text-xs text-[var(--color-text-muted)]">Submitted by {i === 1 ? 'Clerk Office' : 'Admissions AI'} • 2 hrs ago</p>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-3 py-1.5 rounded-lg bg-[var(--color-emerald-500)]/20 text-[var(--color-emerald-400)] text-xs font-medium hover:bg-[var(--color-emerald-500)] hover:text-white transition-all">Approve</button>
                  <button className="px-3 py-1.5 rounded-lg bg-[var(--color-surface-hover)] text-[var(--color-text-muted)] text-xs font-medium hover:text-white transition-all">Review</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions & AI Insights */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-xl bg-[var(--color-surface-hover)]/50 border border-[var(--color-border)] hover:border-[var(--color-gold-500)]/50 hover:bg-[var(--color-surface-hover)] transition-all text-sm font-medium text-white flex justify-between items-center">
                Review Staff Leaves <span className="w-5 h-5 rounded-full bg-[var(--color-gold-500)] text-[var(--color-navy-900)] flex items-center justify-center text-xs">1</span>
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-[var(--color-surface-hover)]/50 border border-[var(--color-border)] hover:border-[var(--color-emerald-500)]/50 hover:bg-[var(--color-surface-hover)] transition-all text-sm font-medium text-white">
                Generate Monthly Report
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl bg-[var(--color-surface-hover)]/50 border border-[var(--color-border)] hover:border-[var(--color-info)]/50 hover:bg-[var(--color-surface-hover)] transition-all text-sm font-medium text-white">
                Send Notice to All Staff
              </button>
            </div>
          </div>

          <div className="glass-card p-6 border-[var(--color-emerald-500)]/30 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-emerald-500)]/5">
            <h3 className="text-sm font-semibold text-[var(--color-emerald-400)] flex items-center gap-2 mb-4">
              <CheckCircle className="w-4 h-4" /> AI Daily Insight
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Attendance in 10th Standard has dropped by <span className="text-[var(--color-warning)] font-bold">4%</span> this week. Hostel mess inventory is optimal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
