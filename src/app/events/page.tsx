export const metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-28">
      <h1 className="text-3xl font-semibold text-white">Events</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Approved events and achievements appear here. Submissions from staff stay
        in pending state until authorized review.
      </p>
      <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/events/events-cultural.png"
          alt="School events"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="glass-panel mt-10 rounded-2xl p-8 text-center">
        <p className="text-sm text-white/60">
          No approved public events yet. Check back after the approval workflow
          is live.
        </p>
      </div>
    </div>
  );
}
