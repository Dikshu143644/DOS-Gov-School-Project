"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StaffLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.status === "success") {
        setSuccess(true);
        // Simulate a redirect delay for smooth animation
        setTimeout(() => {
          router.push("/dashboard/staff"); // We will create this later
        }, 1000);
      } else {
        setError(data.message || "Authentication failed.");
        setLoading(false);
      }
    } catch (err) {
      setError("Network error. Security Agent could not verify connection.");
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto flex min-h-[85vh] max-w-md flex-col justify-center px-4 py-20 z-10">
      {/* Decorative background glow elements for aesthetics */}
      <div className="absolute top-1/4 left-10 -z-10 h-32 w-32 rounded-full bg-[#8b1538]/30 blur-[60px]"></div>
      <div className="absolute bottom-1/4 right-10 -z-10 h-32 w-32 rounded-full bg-blue-500/20 blur-[60px]"></div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-md">
          Staff Portal
        </h1>
        <p className="mt-3 text-sm font-medium text-white/70">
          Secure login for Teachers, Clerks & Administrators.
        </p>
      </div>

      <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        {/* Subtle inner gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

        <form onSubmit={handleLogin} className="relative z-10 flex flex-col gap-5">
          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200 backdrop-blur-md">
              <span className="font-semibold">Security Alert:</span> {error}
            </div>
          )}

          {success && (
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-200 backdrop-blur-md text-center">
              Identity Verified. Initializing Dashboard...
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Official Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading || success}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-[#8b1538] focus:bg-black/50 focus:ring-1 focus:ring-[#8b1538]"
              placeholder="e.g., admin@pathraj.gov.in"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading || success}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-[#8b1538] focus:bg-black/50 focus:ring-1 focus:ring-[#8b1538]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#8b1538] to-[#6a0d28] py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-[#8b1538]/30 active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                AI Verification...
              </span>
            ) : (
              "Secure Login"
            )}
          </button>
        </form>

        <div className="relative z-10 mt-6 text-center text-xs text-white/40">
          IP Address and Device Fingerprint are logged by the Security Agent for unauthorized access prevention.
        </div>
      </div>

      <Link href="/" className="mt-8 text-center text-sm font-medium text-white/50 transition-colors hover:text-white">
        ← Return to Home
      </Link>
    </div>
  );
}
