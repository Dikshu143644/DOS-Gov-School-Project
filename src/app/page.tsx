import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0406] text-white overflow-hidden relative">
      {/* Decorative Brand Colors */}
      <div className="absolute top-0 right-0 -z-10 h-full w-[800px] bg-[#8b1538]/20 blur-[150px] pointer-events-none rounded-full transform translate-x-1/3 -translate-y-1/4"></div>
      
      <header className="fixed w-full top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#8b1538] rounded-xl flex items-center justify-center text-xl font-bold shadow-lg shadow-[#8b1538]/30">P</div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white leading-tight">Maha-Admission</h1>
              <p className="text-[10px] text-white/50 uppercase tracking-widest">Pomegranate Governance</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <Link href="#about" className="hover:text-white transition-colors">About Ashram</Link>
            <Link href="#campus" className="hover:text-white transition-colors">Campus Gallery</Link>
            <Link href="#notices" className="hover:text-white transition-colors">Notices</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/70">मराठी / EN</span>
            <Link href="/login/staff" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Staff Login</Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[75vh]">
          
          {/* Left Column - Hero Content */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#ff8ba7] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff8ba7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff8ba7]"></span>
              </span>
              Admissions Open for 2026-27
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30 leading-tight mb-6">
              शिकण्याची जागा,<br/>वाढण्याचे घर.
            </h2>
            
            <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
              Shashkeey Madhyamik v Uchh Madhyamik Aashram Shala. 
              A premier government institution situated in the lush hills of Pathraj, Raigad, dedicated to holistic tribal education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admission/apply" className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#8b1538] to-[#5c0e25] text-white font-semibold shadow-xl shadow-[#8b1538]/20 hover:scale-105 transition-all text-center">
                प्रवेश अर्ज (Apply Now)
              </Link>
              <Link href="#campus" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-center">
                आमची शाळा पहा (View Campus)
              </Link>
            </div>
          </div>
          
          {/* Right Column - Aesthetic Visuals */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8b1538]/30 to-transparent rounded-3xl blur-3xl -z-10"></div>
            <div className="glass-panel p-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden relative">
               <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 flex items-center gap-1 z-10 border border-white/10">
                 <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                 Pathraj • Raigad
               </div>
               <div className="h-[500px] w-full bg-[#1a0b10] rounded-2xl flex flex-col items-center justify-center border border-white/5 relative overflow-hidden">
                 {/* Placeholder for Dusk Campus Image */}
                 <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                 <div className="relative z-10 p-8 text-center">
                   <div className="h-20 w-20 mx-auto rounded-full bg-[#8b1538]/20 border border-[#8b1538]/40 flex items-center justify-center text-[#ff8ba7] mb-4">
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                   </div>
                   <h3 className="text-xl font-bold text-white">Residential Education</h3>
                   <p className="mt-2 text-sm text-white/50">Modern facilities embedded in nature.</p>
                 </div>
               </div>
            </div>
            
            {/* Floating ADK Bubble */}
            <div className="absolute -bottom-6 -left-6 bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-xs text-white/50">Admission Agent</p>
                <p className="text-sm font-semibold text-white">Ask me anything in Marathi!</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
