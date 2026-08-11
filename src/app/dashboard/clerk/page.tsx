"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Download, Filter, FileText, CheckCircle2, Clock } from "lucide-react";

export default function ClerkDashboard() {
  const [activeTab, setActiveTab] = useState("inward");

  return (
    <div className="animate-fade-in">
      {/* Hero Header */}
      <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-8 border border-[var(--color-border)] shadow-lg shadow-[var(--color-background)]/50">
        <Image 
          src="/assets/clerk_bg.png" 
          alt="Clerk Workspace Background" 
          fill 
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent" />
        <div className="absolute inset-y-0 left-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white drop-shadow-sm font-marathi">Clerk Office</h1>
          <p className="mt-1 text-[var(--color-text-muted)] font-marathi">Inward/Outward Records & Administration</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6 border-b border-[var(--color-border)] pb-4">
        <button 
          onClick={() => setActiveTab("inward")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'inward' ? 'bg-[var(--color-gold-500)] text-[var(--color-navy-900)] shadow-lg shadow-[var(--color-gold-500)]/20' : 'text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface)]'}`}
        >
          Inward Register
        </button>
        <button 
          onClick={() => setActiveTab("outward")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'outward' ? 'bg-[var(--color-gold-500)] text-[var(--color-navy-900)] shadow-lg shadow-[var(--color-gold-500)]/20' : 'text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface)]'}`}
        >
          Outward Register
        </button>
        <button 
          onClick={() => setActiveTab("admissions")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'admissions' ? 'bg-[var(--color-emerald-500)] text-white shadow-lg' : 'text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface)]'}`}
        >
          New Admissions
        </button>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface)]/50">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
            <input 
              type="text" 
              placeholder="Search records..." 
              className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold-500)]/50 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button className="secondary-button flex items-center gap-2 text-xs py-2">
              <Filter className="w-3 h-3" /> Filter
            </button>
            <button className="secondary-button flex items-center gap-2 text-xs py-2 text-[var(--color-gold-400)] border-[var(--color-gold-500)]/30 hover:bg-[var(--color-gold-500)]/10">
              <Download className="w-3 h-3" /> Export CSV
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[var(--color-text)]">
            <thead className="bg-[var(--color-surface-hover)]/50 text-xs uppercase text-[var(--color-text-muted)] border-b border-[var(--color-border)]">
              <tr>
                <th className="px-6 py-4 font-medium">Ref No.</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Sender/Subject</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {/* Row 1 */}
              <tr className="hover:bg-[var(--color-surface-hover)]/30 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-[var(--color-text-muted)]">INW-2026-0842</td>
                <td className="px-6 py-4">11 Aug 2026</td>
                <td className="px-6 py-4">
                  <div className="font-medium text-white">Tribal Dept, Nashik</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Fund Allocation Notice Q3</div>
                </td>
                <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-[var(--color-info)]/10 text-[var(--color-info)] text-xs font-medium">Official</span></td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-[var(--color-warning)] text-xs font-medium">
                    <Clock className="w-3 h-3" /> Pending Review
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[var(--color-gold-400)] hover:text-[var(--color-gold-300)] transition-colors"><FileText className="w-4 h-4 inline" /></button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-[var(--color-surface-hover)]/30 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-[var(--color-text-muted)]">INW-2026-0841</td>
                <td className="px-6 py-4">10 Aug 2026</td>
                <td className="px-6 py-4">
                  <div className="font-medium text-white">Ramesh Pawar</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Leave Application - 3 Days</div>
                </td>
                <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-[var(--color-surface-hover)] text-[var(--color-text-muted)] text-xs font-medium">Staff</span></td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-[var(--color-success)] text-xs font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Filed
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[var(--color-text-muted)] hover:text-white transition-colors"><FileText className="w-4 h-4 inline" /></button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-[var(--color-surface-hover)]/30 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-[var(--color-text-muted)]">INW-2026-0840</td>
                <td className="px-6 py-4">09 Aug 2026</td>
                <td className="px-6 py-4">
                  <div className="font-medium text-white">Zilla Parishad</div>
                  <div className="text-xs text-[var(--color-text-muted)]">Health Checkup Camp Circular</div>
                </td>
                <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-[var(--color-info)]/10 text-[var(--color-info)] text-xs font-medium">Official</span></td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-[var(--color-success)] text-xs font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Filed
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-[var(--color-text-muted)] hover:text-white transition-colors"><FileText className="w-4 h-4 inline" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 text-xs text-[var(--color-text-muted)] flex justify-between items-center">
          <span>Showing 1-3 of 142 records</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-[var(--color-surface-hover)] hover:bg-[var(--color-border)] disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 rounded bg-[var(--color-surface-hover)] hover:bg-[var(--color-border)]">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
