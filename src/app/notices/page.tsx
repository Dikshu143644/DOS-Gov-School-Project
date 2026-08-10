export const metadata = { title: "Notices" };

export default function NoticesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-28">
      <h1 className="text-3xl font-semibold text-white">Notices</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Official notices for parents, students, and staff — published after
        approval only.
      </p>
      <div className="relative mt-8 aspect-square max-w-md overflow-hidden rounded-2xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/notices/notices-governance.png"
          alt="Notices"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="glass-panel mt-10 rounded-2xl p-8">
        <p className="text-sm text-white/60">
          Notice board module ships with the approval engine (V4). Important
          announcements may appear on the home page when approved.
        </p>
      </div>
    </div>
  );
}
