import Link from "next/link";
import { LayoutDashboard, Users, BookOpen, UserCog, LogOut, ShieldCheck } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] selection:bg-[var(--color-emerald-500)]/30">
      {/* Universal Dashboard Sidebar & Header */}
      <div className="fixed left-0 top-0 h-full w-64 border-r border-[var(--color-border)] bg-[var(--color-surface)] z-40 hidden md:block transition-all">
        <div className="flex h-20 items-center px-6 border-b border-[var(--color-border)]">
          <h2 className="text-xl font-bold tracking-tight text-white drop-shadow-md">Pathraj Ashram</h2>
        </div>
        <div className="flex flex-col gap-2 p-4 mt-2">
          <div className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-2 px-2">Portals</div>
          <Link href="/dashboard/student" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] hover:text-white transition-all">
            <Users className="w-4 h-4 text-[var(--color-emerald-400)]" />
            Student Portal
          </Link>
          <Link href="/dashboard/clerk" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] hover:text-white transition-all">
            <BookOpen className="w-4 h-4 text-[var(--color-gold-400)]" />
            Clerk Workspace
          </Link>
          <Link href="/dashboard/teacher" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] hover:text-white transition-all">
            <LayoutDashboard className="w-4 h-4 text-[var(--color-emerald-500)]" />
            Teacher Classroom
          </Link>
          <Link href="/dashboard/admin" className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--color-error)] hover:bg-[var(--color-surface-hover)] transition-all">
            <UserCog className="w-4 h-4" />
            Principal (Admin)
          </Link>
        </div>
        
        {/* Security Agent Monitor Widget */}
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[var(--color-emerald-500)]/20 bg-[var(--color-emerald-500)]/5 p-4 glass-card">
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-emerald-400)]">
            <div className="relative">
              <span className="absolute -inset-1 rounded-full bg-[var(--color-emerald-500)] opacity-50 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 relative z-10" />
            </div>
            Security Agent Active
          </div>
          <p className="mt-2 text-[10px] text-[var(--color-text-muted)] leading-relaxed">
            Continuous IP & Device monitoring enabled.
          </p>
        </div>
      </div>

      <div className="md:ml-64 relative min-h-screen">
        {/* Decorative background glow elements for aesthetics */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-[var(--color-emerald-500)]/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 -z-10 h-64 w-64 rounded-full bg-[var(--color-gold-500)]/5 blur-[100px] pointer-events-none"></div>
        
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 px-8 backdrop-blur-xl">
          <div className="text-sm font-medium text-[var(--color-text-muted)]">Dashboard Environment</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 rounded-full bg-[var(--color-surface)] px-4 py-2 text-xs font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-colors border border-[var(--color-border)]">
              <LogOut className="w-3 h-3" />
              Sign Out
            </Link>
          </div>
        </header>

        <main className="p-8 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
