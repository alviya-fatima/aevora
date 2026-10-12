"use client";

import { useEffect, useState } from "react";
import AuthPanel from "@/components/AuthPanel";

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "AEVORA_AUTH_OPEN") {
        setAuthOpen(true);
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* AEVORA LANDING PAGE */}
      <section className="relative h-screen w-full">
        <iframe
          src="/aevora-landing.html"
          title="Aevora AI"
          scrolling="yes"
          className="h-full w-full border-0"
        />
      </section>

      {/* SCROLLABLE COMPANY / CONTACT SECTION */}
      <section className="relative min-h-screen border-t border-white/[0.08] bg-black">

        <div className="mx-auto max-w-[1400px] px-8 py-24 md:px-16">

          {/* TOP CONTACT AREA */}
          <div className="grid gap-20 lg:grid-cols-2">

            <div>
              <p className="mb-6 text-[8px] tracking-[0.35em] text-white/30">
                AEVORA / CONTACT
              </p>

              <h1 className="max-w-3xl text-5xl font-light tracking-[-0.04em] text-white md:text-7xl">
                Let the system
                <br />
                hear from you.
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 tracking-wide text-white/35">
                For general queries, partnerships, sponsorships,
                media requests, and other Aevora-related communication.
              </p>
            </div>

            <div className="flex flex-col justify-end">

              <div className="border-t border-white/[0.08] py-6">
                <p className="mb-3 text-[7px] tracking-[0.25em] text-white/20">
                  GENERAL QUERIES
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aevoracomapany1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-wide text-[#A3FF9A] transition hover:text-white"
                >
                  aevoracomapany1@gmail.com
                </a>
              </div>

              <div className="border-t border-white/[0.08] py-6">
                <p className="mb-3 text-[7px] tracking-[0.25em] text-white/20">
                  SPONSORSHIPS
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aevoracomapany1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-wide text-white/45 transition hover:text-white"
                >
                  CONTACT AEVORA
                </a>
              </div>

              <div className="border-t border-white/[0.08] py-6">
                <p className="mb-3 text-[7px] tracking-[0.25em] text-white/20">
                  PARTNERSHIPS
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aevoracomapany1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-wide text-white/45 transition hover:text-white"
                >
                  CONTACT AEVORA
                </a>
              </div>

              <div className="border-t border-white/[0.08] py-6">
                <p className="mb-3 text-[7px] tracking-[0.25em] text-white/20">
                  MEDIA
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aevoracomapany1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-wide text-white/45 transition hover:text-white"
                >
                  CONTACT AEVORA
                </a>
              </div>

            </div>
          </div>

          {/* LARGE SPACE / SYSTEM DIVIDER */}
          <div className="my-32 border-t border-white/[0.06]" />

          {/* INTELLIGENCE ENVIRONMENT */}
          <div className="grid gap-16 lg:grid-cols-3">

            <div>
              <p className="text-[8px] tracking-[0.3em] text-white/20">
                01 / SYSTEM
              </p>

              <h2 className="mt-5 text-2xl font-light tracking-tight text-white/80">
                AEVORA
                <br />
                INTELLIGENCE ENVIRONMENT
              </h2>
            </div>

            <div className="lg:col-span-2">
              <p className="max-w-3xl text-xl font-light leading-9 text-white/45">
                An intelligence layer built around you.
              </p>

              <p className="mt-7 max-w-3xl text-sm leading-8 text-white/25">
                Aevora is designed as a personal intelligence environment
                focused on memory, reasoning, communication, preferences,
                tools, automation, and action.
              </p>
            </div>

          </div>

          {/* SYSTEM INFORMATION */}
          <div className="my-32 border-t border-white/[0.06] pt-16">

            <p className="text-[8px] tracking-[0.3em] text-white/20">
              02 / SYSTEM INFORMATION
            </p>

            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

              <div>
                <p className="text-[7px] tracking-[0.2em] text-white/20">
                  CONNECTION NODE
                </p>
                <p className="mt-4 text-xs text-white/40">
                  AEVORA CORE
                </p>
              </div>

              <div>
                <p className="text-[7px] tracking-[0.2em] text-white/20">
                  SYSTEM TYPE
                </p>
                <p className="mt-4 text-xs text-white/40">
                  PRIVATE INTELLIGENCE SYSTEM
                </p>
              </div>

              <div>
                <p className="text-[7px] tracking-[0.2em] text-white/20">
                  DEVELOPMENT
                </p>
                <p className="mt-4 text-xs text-white/40">
                  ACTIVE
                </p>
              </div>

              <div>
                <p className="text-[7px] tracking-[0.2em] text-white/20">
                  FINAL SIGNAL
                </p>
                <p className="mt-4 text-xs text-[#A3FF9A]/50">
                  ONLINE
                </p>
              </div>

            </div>
          </div>

          {/* COMPANY / LLC INFORMATION */}
          <div className="border-t border-white/[0.06] pt-16">

            <p className="text-[8px] tracking-[0.3em] text-white/20">
              03 / ENTITY INFORMATION
            </p>

            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

              <div>
                <p className="text-[7px] tracking-[0.2em] text-white/20">
                  ENTITY
                </p>
                <p className="mt-4 text-xs text-white/40">
                  AEVORA
                </p>
              </div>

              <div>
                <p className="text-[7px] tracking-[0.2em] text-white/20">
                  ENTITY TYPE
                </p>
                <p className="mt-4 text-xs text-white/40">
                  LLC
                </p>
              </div>

              <div>
                <p className="text-[7px] tracking-[0.2em] text-white/20">
                  JURISDICTION
                </p>
                <p className="mt-4 text-xs text-white/40">
                  DEVELOPMENT PHASE
                </p>
              </div>

              <div>
                <p className="text-[7px] tracking-[0.2em] text-white/20">
                  STATUS
                </p>
                <p className="mt-4 text-xs text-white/40">
                  PRIVATE
                </p>
              </div>

            </div>
          </div>

          {/* LEGAL SIGNALS */}
          <div className="my-32 border-t border-white/[0.06] pt-16">

            <p className="text-[8px] tracking-[0.3em] text-white/20">
              04 / LEGAL SIGNALS
            </p>

            <div className="mt-10 max-w-3xl text-[10px] leading-7 tracking-wide text-white/15">
              Aevora is currently a development project.
              Entity structure, jurisdiction, registration, and related
              corporate information may change as development progresses.
              Nothing displayed here constitutes a representation of
              completed incorporation or registration.
            </div>

          </div>

          {/* FINAL CONTACT STRIP */}
          <div className="border-t border-white/[0.08] py-10">

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div className="text-[7px] tracking-[0.2em] text-white/20">
                AEVORA
              </div>

              <div className="flex flex-wrap gap-6 text-[7px] tracking-[0.2em] text-white/15">
                <span>GENERAL QUERIES</span>
                <span>SPONSORSHIPS</span>
                <span>PARTNERSHIPS</span>
                <span>MEDIA</span>
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aevoracomapany1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[7px] tracking-[0.15em] text-[#A3FF9A]/60 transition hover:text-[#A3FF9A]"
              >
                CONTACT: aevoracomapany1@gmail.com
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* AUTH */}
      {authOpen && (
        <div className="fixed inset-0 z-[90] overflow-y-auto">

          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-[4px]"
            onClick={() => setAuthOpen(false)}
          />

          <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">

            <div className="relative max-h-[85vh] w-full max-w-md overflow-y-auto rounded-3xl border border-white/[0.12] bg-black/80 shadow-[0_0_100px_rgba(255,255,255,0.04)] backdrop-blur-2xl">

              <button
                onClick={() => setAuthOpen(false)}
                className="absolute right-5 top-5 z-20 text-xl text-white/30 transition hover:text-white"
                aria-label="Close"
              >
                ×
              </button>

              <div className="p-7 sm:p-9">
                <AuthPanel onSuccess={() => setAuthOpen(false)} />
              </div>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}
