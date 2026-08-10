"use client";

import { useEffect, useState } from "react";

type PhoneEntry = {
  id: string;
  label: string;
  number: string;
  display: string;
  isPrimary?: boolean;
};

type ContactResponse = {
  phones: PhoneEntry[];
  emails: { address: string; label: string }[];
  note: string;
};

export function ContactPhones() {
  const [data, setData] = useState<ContactResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/school/contact")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <p className="text-sm text-red-300" role="alert">
        Unable to load contact numbers. Please use the school email.
      </p>
    );
  }

  if (!data) {
    return (
      <ul className="space-y-2" aria-busy="true">
        <li className="h-10 animate-pulse rounded-md bg-white/5" />
        <li className="h-10 animate-pulse rounded-md bg-white/5" />
      </ul>
    );
  }

  return (
    <div>
      <ul className="space-y-3">
        {data.phones.map((phone) => (
          <li
            key={phone.id}
            className="glass-panel flex flex-wrap items-center justify-between gap-2 rounded-lg px-4 py-3"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-white/45">
                {phone.label}
                {phone.isPrimary ? " · Primary" : ""}
              </p>
              <a
                href={`tel:${phone.display}`}
                className="text-lg font-medium text-white hover:text-[#c9a962]"
              >
                {phone.display}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-white/45">{data.note}</p>
    </div>
  );
}
