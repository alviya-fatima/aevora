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
    <main className="min-h-screen w-screen overflow-x-hidden bg-black text-white">

      {/* LANDING */}
      <section className="relative h-screen w-full overflow-hidden">
        <iframe
          src="/aevora-landing.html"
          title="Aevora"
          scrolling="no"
          className="absolute inset-0 h-full w-full border-0"
        />

        <div className="pointer-events-none absolute inset-0 z-[2]">
          <div className="absolute left-1/2 top-[35%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]" />
          <div className="absolute -left-[150px] top-[15%] h-[480px] w-[480px] rounded-full bg-white/[0.025] blur-[120px]" />
          <div className="absolute -right-[150px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[130px]" />
          <div className="absolute left-[18%] top-[28%] h-[250px] w-[250px] rounded-full bg-[#A3FF9A]/[0.018] blur-[100px]" />
          <div className="absolute right-[18%] bottom-[22%] h-[250px] w-[250px] rounded-full bg-[#A3FF9A]/[0.012] blur-[100px]" />
        </div>
      </section>


      {/* AEVORA INTELLIGENCE ENVIRONMENT */}
      <footer className="relative isolate overflow-hidden bg-black">

        {/* ATMOSPHERIC CLOUD FIELD */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute left-1/2 top-[-180px] h-[760px] w-[1100px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[180px]" />

          <div className="absolute left-[-260px] top-[22%] h-[600px] w-[600px] rounded-full bg-white/[0.018] blur-[170px]" />

          <div className="absolute right-[-260px] top-[48%] h-[650px] w-[650px] rounded-full bg-white/[0.018] blur-[180px]" />

          <div className="absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#A3FF9A]/[0.012] blur-[150px]" />

          <div className="absolute left-[12%] top-[62%] h-[280px] w-[280px] rounded-full bg-[#A3FF9A]/[0.008] blur-[130px]" />

        </div>


        {/* DEEP ORBITAL FIELD */}
        <div className="pointer-events-none absolute left-1/2 top-[70px] h-[720px] w-[1180px] -translate-x-1/2 rounded-[50%] border border-white/[0.018] rotate-[-8deg]" />

        <div className="pointer-events-none absolute left-1/2 top-[125px] h-[600px] w-[1000px] -translate-x-1/2 rounded-[50%] border border-white/[0.015] rotate-[-8deg]" />

        <div className="pointer-events-none absolute left-1/2 top-[190px] h-[470px] w-[820px] -translate-x-1/2 rounded-[50%] border border-white/[0.012] rotate-[-8deg]" />


        {/* FLOATING SIGNALS */}
        <div className="pointer-events-none absolute left-[14%] top-[22%] h-[3px] w-[3px] rounded-full bg-white/20 shadow-[0_0_12px_rgba(255,255,255,0.25)]" />

        <div className="pointer-events-none absolute right-[18%] top-[34%] h-[3px] w-[3px] rounded-full bg-[#A3FF9A]/50 shadow-[0_0_14px_#A3FF9A]" />

        <div className="pointer-events-none absolute left-[25%] top-[58%] h-[2px] w-[2px] rounded-full bg-white/20" />

        <div className="pointer-events-none absolute right-[27%] top-[70%] h-[2px] w-[2px] rounded-full bg-white/15" />


        {/* TRANSITION FROM LANDING */}
        <div className="relative mx-auto flex h-[260px] max-w-7xl items-center justify-center">

          <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

          <div className="absolute left-1/2 top-1/2 h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

          <div className="absolute left-1/2 top-1/2 h-[85px] w-[85px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

          <div className="relative h-[5px] w-[5px] rounded-full bg-[#A3FF9A] shadow-[0_0_22px_#A3FF9A]" />

          <div className="absolute left-[12%] right-[12%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        </div>


        {/* MAIN INTELLIGENCE AREA */}
        <div className="relative mx-auto max-w-6xl px-7 pb-28 sm:px-10 lg:px-12">

          <div className="mb-20 text-center">

            <div className="mb-6 flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-white/[0.08]" />

              <span className="text-[8px] tracking-[0.55em] text-white/25">
                AEVORA
              </span>

              <span className="h-px w-12 bg-white/[0.08]" />

            </div>

            <div className="text-[8px] tracking-[0.48em] text-[#A3FF9A]/45">
              PERSONAL INTELLIGENCE
            </div>

            <h2 className="mx-auto mt-7 max-w-2xl text-[30px] font-extralight leading-[1.4] tracking-[0.08em] text-white/75 sm:text-[38px]">
              AN INTELLIGENCE LAYER
              <br />
              BUILT AROUND YOU.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-[10px] leading-7 tracking-[0.04em] text-white/25">
              Aevora is a personal intelligence platform designed to help
              individuals think, organize, remember, and act through
              intelligent systems.
            </p>

          </div>


          {/* CORE */}
          <div className="relative mx-auto mb-24 flex h-[260px] max-w-3xl items-center justify-center">

            <div className="absolute h-[250px] w-[250px] rounded-full border border-white/[0.018]" />

            <div className="absolute h-[205px] w-[205px] rounded-full border border-white/[0.025]" />

            <div className="absolute h-[155px] w-[155px] rounded-full border border-white/[0.035]" />

            <div className="absolute h-[100px] w-[100px] rounded-full border border-white/[0.05]" />

            <div className="absolute h-[48px] w-[48px] rounded-full bg-white/[0.018] shadow-[0_0_70px_rgba(255,255,255,0.04)] blur-[1px]" />

            <div className="relative h-[6px] w-[6px] rounded-full bg-[#A3FF9A] shadow-[0_0_25px_#A3FF9A]" />

            <div className="absolute left-[4%] top-1/2 h-px w-[25%] bg-gradient-to-r from-transparent to-white/[0.06]" />

            <div className="absolute right-[4%] top-1/2 h-px w-[25%] bg-gradient-to-l from-transparent to-white/[0.06]" />

          </div>


          {/* INFORMATION FIELD */}
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">

            <div>

              <div className="mb-6 flex items-center gap-3">

                <span className="h-[4px] w-[4px] rounded-full bg-[#A3FF9A] shadow-[0_0_10px_#A3FF9A]" />

                <span className="text-[7px] tracking-[0.45em] text-white/20">
                  SYSTEM INFORMATION
                </span>

              </div>

              <p className="max-w-2xl text-[10px] leading-7 tracking-[0.025em] text-white/30">
                Aevora provides intelligent software and digital services
                intended for general informational and technological
                purposes. Information provided through the platform does not
                constitute legal, financial, medical, or other professional
                advice.
              </p>

              <p className="mt-5 max-w-2xl text-[10px] leading-7 tracking-[0.025em] text-white/25">
                Freemium and Professional access plans may be offered.
                Features, pricing, availability, subscription terms, and
                usage limitations may evolve as the platform develops.
              </p>

            </div>


            {/* CONTACT NODE */}
            <div className="lg:text-right">

              <div className="mb-6 text-[7px] tracking-[0.45em] text-white/20">
                CONNECTION NODE
              </div>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aevoracomapany1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.04em] text-[#A3FF9A]/75 transition duration-500 hover:text-[#A3FF9A]"
              >
                aevoracomapany1@gmail.com
              </a>

              <div className="mt-5 flex items-center gap-3 lg:justify-end">

                <span className="h-px w-10 bg-white/[0.07]" />

                <span className="h-[4px] w-[4px] rounded-full bg-[#A3FF9A] shadow-[0_0_12px_#A3FF9A]" />

                <span className="text-[7px] tracking-[0.35em] text-white/15">
                  CHANNEL ACTIVE
                </span>

              </div>

            </div>

          </div>


          {/* LEGAL SIGNALS */}
          <div className="mt-24 border-t border-white/[0.05] pt-10">

            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">

              <span className="text-[7px] tracking-[0.25em] text-white/20">
                TERMS OF SERVICE
              </span>

              <span className="text-[7px] tracking-[0.25em] text-white/20">
                PRIVACY POLICY
              </span>

              <span className="text-[7px] tracking-[0.25em] text-white/20">
                LEGAL NOTICE
              </span>

              <span className="text-[7px] tracking-[0.25em] text-white/20">
                ACCEPTABLE USE
              </span>

            </div>

          </div>


          {/* COMPANY SIGNAL */}
          <div className="mt-16 grid gap-10 border-t border-white/[0.05] pt-10 sm:grid-cols-3">

            <div>

              <div className="text-[7px] tracking-[0.40em] text-white/15">
                PLANNED ENTITY
              </div>

              <div className="mt-3 text-[10px] tracking-[0.18em] text-white/50">
                AEVORA, LLC
              </div>

              <div className="mt-2 text-[7px] tracking-[0.12em] text-white/20">
                PLANNED DELAWARE LLC STRUCTURE
              </div>

            </div>


            <div>

              <div className="text-[7px] tracking-[0.40em] text-white/15">
                JURISDICTION
              </div>

              <div className="mt-3 text-[10px] tracking-[0.18em] text-white/50">
                DELAWARE, USA
              </div>

              <div className="mt-2 text-[7px] tracking-[0.12em] text-white/20">
                UNITED STATES
              </div>

            </div>


            <div>

              <div className="text-[7px] tracking-[0.40em] text-white/15">
                DEVELOPMENT
              </div>

              <div className="mt-3 text-[10px] tracking-[0.18em] text-white/50">
                LUCKNOW, INDIA
              </div>

              <div className="mt-2 text-[7px] tracking-[0.12em] text-white/20">
                INDIA
              </div>

            </div>

          </div>


          {/* FINAL SIGNAL */}
          <div className="mt-20 flex flex-col items-center gap-6 border-t border-white/[0.05] pt-9 sm:flex-row sm:justify-between">

            <div className="text-[7px] tracking-[0.25em] text-white/15">
              © 2026 AEVORA. ALL RIGHTS RESERVED.
            </div>

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-white/[0.06]" />

              <span className="h-[4px] w-[4px] rounded-full bg-[#A3FF9A] shadow-[0_0_12px_#A3FF9A]" />

              <span className="text-[7px] tracking-[0.35em] text-white/10">
                AEVORA SYSTEM
              </span>

              <span className="h-[4px] w-[4px] rounded-full bg-[#A3FF9A] shadow-[0_0_12px_#A3FF9A]" />

              <span className="h-px w-8 bg-white/[0.06]" />

            </div>

          </div>

        </div>

      </footer>

      {/* AUTH MODAL */}
      {authOpen && (
        <div className="fixed inset-0 z-[90] overflow-hidden">

          <div className="absolute inset-0 bg-black/70 backdrop-blur-[4px]" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[130px]" />

          <div className="relative z-10 flex min-h-screen items-center justify-center px-4">

            <div className="relative max-h-[85vh] w-full max-w-md overflow-hidden rounded-3xl border border-white/[0.12] bg-black/70 shadow-[0_0_100px_rgba(255,255,255,0.04)] backdrop-blur-2xl">

              <button
                onClick={() => setAuthOpen(false)}
                className="absolute right-5 top-5 z-20 text-xl text-white/30 transition hover:text-white"
                aria-label="Close"
              >
                X
              </button>

              <div className="relative max-h-[85vh] overflow-hidden p-7 sm:p-9">
                <AuthPanel onSuccess={() => setAuthOpen(false)} />
              </div>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

