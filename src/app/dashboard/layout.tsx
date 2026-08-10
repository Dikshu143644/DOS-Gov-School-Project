import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#8b1538]/30">
      {/* Universal Dashboard Sidebar & Header */}
      <div className="fixed left-0 top-0 h-full w-64 border-r border-white/10 bg-black/40 backdrop-blur-3xl z-40 hidden md:block">
        <div className="flex h-20 items-center px-6 border-b border-white/10">
          <h2 className="text-lg font-bold tracking-tight text-white drop-shadow-md">Pathraj Ashram</h2>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Portals</div>
          <Link href="/dashboard/student" className="rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all">Student Portal</Link>
          <Link href="/dashboard/clerk" className="rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all">Clerk Workspace</Link>
          <Link href="/dashboard/teacher" className="rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all">Teacher Classroom</Link>
          <Link href="/dashboard/admin" className="rounded-lg px-4 py-2.5 text-sm font-medium text-[#ff6b6b] hover:bg-[#8b1538]/20 transition-all">Super Admin (Approvals)</Link>
        </div>
        
        {/* Security Agent Monitor Widget */}
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
            Security Agent Active
          </div>
          <p className="mt-2 text-[10px] text-white/50 leading-relaxed">
            Continuous IP & Device monitoring enabled.
          </p>
        </div>
      </div>

      <div className="md:ml-64 relative min-h-screen">
        {/* Decorative background glow elements for aesthetics */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-[#8b1538]/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"></div>
        
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/5 bg-black/20 px-8 backdrop-blur-xl">
          <div className="text-sm font-medium text-white/50">Dashboard Environment</div>
          <div className="flex items-center gap-4">
            <Link href="/" className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white/70 hover:bg-white/10 transition-colors border border-white/10">
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
