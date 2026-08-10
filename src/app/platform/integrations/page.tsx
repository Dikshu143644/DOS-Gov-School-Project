import { getPlatformFeatures } from "@/lib/school-config";

export const metadata = { title: "Integrations & Roadmap" };

export default function IntegrationsPage() {
  const { features, note } = getPlatformFeatures();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-28">
      <h1 className="text-3xl font-semibold text-white">
        Platform integrations &amp; roadmap
      </h1>
      <p className="mt-4 max-w-3xl text-sm text-white/70">{note}</p>

      <ul className="mt-12 space-y-4">
        {features.map((f) => (
          <li key={f.id} className="glass-panel rounded-2xl p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-white">{f.name}</h2>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-white/60">
                {f.status.replace("_", " ")}
              </span>
            </div>
            {"note" in f && f.note && (
              <p className="mt-2 text-sm text-white/65">{f.note}</p>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {"requiresApiKey" in f && f.requiresApiKey && (
                <Badge>API key / credentials required</Badge>
              )}
              {"requiresPaidService" in f && f.requiresPaidService && (
                <Badge variant="paid">Paid service</Badge>
              )}
              {"requiresApproval" in f && f.requiresApproval && (
                <Badge variant="warn">School approval required</Badge>
              )}
            </div>
            {"requiredCredentials" in f && f.requiredCredentials && (
              <ul className="mt-4 list-inside list-disc text-xs text-white/50">
                {f.requiredCredentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
            {"devMode" in f && f.devMode && (
              <p className="mt-3 text-xs text-[#c9a962]">Dev: {f.devMode}</p>
            )}
            {"safeguards" in f && f.safeguards && (
              <ul className="mt-3 list-inside list-disc text-xs text-white/50">
                {f.safeguards.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Badge({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: "paid" | "warn";
}) {
  const styles =
    variant === "paid"
      ? "border-amber-500/40 text-amber-200/90"
      : variant === "warn"
        ? "border-[#8b1538]/50 text-[#e8a0a0]"
        : "border-white/20 text-white/70";
  return (
    <span className={`rounded-md border px-2 py-1 text-xs ${styles}`}>
      {children}
    </span>
  );
}
