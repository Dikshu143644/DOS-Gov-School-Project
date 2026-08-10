import Link from "next/link";

export const metadata = { title: "Staff Login" };

export default function StaffLoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-28">
      <h1 className="text-2xl font-semibold text-white">Staff Login</h1>
      <p className="mt-3 text-sm text-white/65">
        For teachers, clerk, principal, warden, and platform administrators.
        MFA and session security will be enforced server-side.
      </p>
      <div className="glass-panel mt-8 rounded-2xl p-6">
        <p className="text-sm text-white/50">Preview — form disabled</p>
        <label className="mt-4 block text-xs text-white/60">Official email</label>
        <input
          disabled
          className="mt-1 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm opacity-60"
          placeholder="Coming soon"
        />
        <button
          type="button"
          disabled
          className="mt-4 w-full rounded-md bg-[#8b1538]/50 py-2 text-sm text-white/70"
        >
          Sign in
        </button>
      </div>
      <Link href="/" className="mt-6 text-center text-sm text-white/50 hover:text-white">
        ← Back to home
      </Link>
    </div>
  );
}
