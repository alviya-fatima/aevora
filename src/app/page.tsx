"use client";

import { useEffect, useState } from "react";
import AuthPanel from "@/components/AuthPanel";
import PlanSelection from "@/components/PlanSelection";

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  useEffect(() => {
    const locked = authOpen || planOpen;

    document.body.style.overflow = locked ? "hidden" : "";
    document.documentElement.style.overflow = locked ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [authOpen, planOpen]);

  useEffect(() => {
    const handleOpenAuth = () => setAuthOpen(true);

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "open-auth" || event.data?.type === "AEVORA_AUTH_OPEN") {
        setAuthOpen(true);
      }
    };

    window.addEventListener("open-auth", handleOpenAuth);
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("open-auth", handleOpenAuth);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#020202] text-white">
      {/* ORIGINAL AEVORA LANDING PAGE */}
      <section className="relative h-screen w-full overflow-hidden">
        <iframe
          src="/aevora-landing.html"
          title="Aevora AI"
          scrolling="no"
          className="h-full w-full border-0"
        />
      </section>

      {planOpen && (
        <div className="fixed inset-0 z-[200] overflow-auto bg-[#020202]">
        <button
  type="button"
  onClick={() => setPlanOpen(false)}
  aria-label="Return to landing page"
  className="fixed left-7 top-7 z-[300] flex h-12 w-12 items-center justify-center text-white/75 transition-all duration-300 hover:text-[#A3FF9A]"
>
  <span className="text-2xl font-light leading-none">â†</span>
</button>
          <PlanSelection />
        </div>
      )}

      {/* AEVORA COMPANY / CONTACT EXTENSION */}
      <section className="relative overflow-hidden bg-[#020202]">

        

{/* SILVER TECH ATMOSPHERE */}
<div className="aevora-strip-atmosphere" aria-hidden="true">
  <div className="aevora-strip-stars" />

  <div className="aevora-strip-door aevora-strip-door-1" />
  <div className="aevora-strip-door aevora-strip-door-2" />
  <div className="aevora-strip-door aevora-strip-door-3" />

  <div className="aevora-strip-glow" />
</div>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* soft central white illumination */}
          <div
            className="absolute left-1/2 top-[38%] h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.018) 28%, rgba(255,255,255,0.006) 48%, transparent 70%)",
            }}
          />

          {/* concentric Aevora rings */}
          <div
            className="absolute left-1/2 top-[38%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]"
          />

          <div
            className="absolute left-1/2 top-[38%] h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]"
          />

          <div
            className="absolute left-1/2 top-[38%] h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.018]"
          />

          <div
            className="absolute left-1/2 top-[38%] h-[1320px] w-[1320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.012]"
          />

          {/* subtle star / system dots */}
          <div className="absolute inset-0 opacity-30">
            <span className="absolute left-[8%] top-[14%] h-[2px] w-[2px] rounded-full bg-white/40" />
            <span className="absolute left-[18%] top-[32%] h-[1px] w-[1px] rounded-full bg-white/60" />
            <span className="absolute left-[29%] top-[18%] h-[2px] w-[2px] rounded-full bg-white/30" />
            <span className="absolute left-[41%] top-[12%] h-[1px] w-[1px] rounded-full bg-white/50" />
            <span className="absolute left-[56%] top-[21%] h-[2px] w-[2px] rounded-full bg-white/30" />
            <span className="absolute left-[68%] top-[11%] h-[1px] w-[1px] rounded-full bg-white/60" />
            <span className="absolute left-[81%] top-[27%] h-[2px] w-[2px] rounded-full bg-white/30" />
            <span className="absolute left-[91%] top-[16%] h-[1px] w-[1px] rounded-full bg-white/50" />

            <span className="absolute left-[12%] top-[62%] h-[1px] w-[1px] rounded-full bg-white/50" />
            <span className="absolute left-[24%] top-[76%] h-[2px] w-[2px] rounded-full bg-white/30" />
            <span className="absolute left-[37%] top-[66%] h-[1px] w-[1px] rounded-full bg-white/60" />
            <span className="absolute left-[63%] top-[72%] h-[2px] w-[2px] rounded-full bg-white/30" />
            <span className="absolute left-[77%] top-[64%] h-[1px] w-[1px] rounded-full bg-white/50" />
            <span className="absolute left-[89%] top-[79%] h-[2px] w-[2px] rounded-full bg-white/30" />
          </div>

          {/* subtle horizontal technical lines */}
          <div className="absolute left-0 right-0 top-[23%] h-px bg-white/[0.035]" />
          <div className="absolute left-0 right-0 top-[55%] h-px bg-white/[0.025]" />
          <div className="absolute left-0 right-0 bottom-[15%] h-px bg-white/[0.035]" />

          {/* soft vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.78) 100%)",
            }}
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 w-full">

          {/* SYSTEM STATUS */}
          <div className="flex items-center justify-between border-t border-white/[0.07] px-7 py-5 md:px-12 lg:px-16">

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-[#A3FF9A]/30 animate-ping" />
                <span className="absolute inset-0 rounded-full bg-[#A3FF9A]/20 blur-[3px] animate-pulse" />
                <span className="relative h-2 w-2 rounded-full bg-[#A3FF9A] shadow-[0_0_8px_#A3FF9A,0_0_16px_#A3FF9A]/60" />
              </span>

              <span className="text-[7px] tracking-[0.32em] text-white/30">
                SYSTEM ACTIVE
              </span>
            </div>

            <span className="text-[7px] tracking-[0.32em] text-white/20">
              AEVORA / 2026
            </span>
          </div>

          {/* CONTACT TYPES */}
          <div className="border-y border-white/[0.07] px-7 py-8 md:px-12 lg:px-16">

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">

              <span className="text-[8px] tracking-[0.3em] text-white/25">
                CONNECT
              </span>

              <span className="text-white/10"></span>

              <button
                type="button"
                className="aevora-link text-[10px] font-light tracking-[0.16em] text-white/60"
              >
                SPONSORSHIPS
              </button>

              <span className="text-white/10"></span>

              <button
                type="button"
                className="aevora-link text-[10px] font-light tracking-[0.16em] text-white/60"
              >
                PARTNERSHIPS
              </button>

              <span className="text-white/10"></span>

              <button
                type="button"
                className="aevora-link text-[10px] font-light tracking-[0.16em] text-white/60"
              >
                ADS
              </button>

              <span className="text-white/10"></span>

              <button
                type="button"
                className="aevora-link text-[10px] font-light tracking-[0.16em] text-white/60"
              >
                INTERVIEWS
              </button>

              <span className="text-white/10"></span>

              <button
                type="button"
                className="aevora-link text-[10px] font-light tracking-[0.16em] text-white/60"
              >
                INVESTORS
              </button>

            </div>
          </div>

          {/* CONTACT */}
          <div className="border-b border-white/[0.07] px-7 py-9 md:px-12 lg:px-16">

            <div className="flex flex-wrap items-center gap-x-6 gap-y-5">

              <span className="text-[8px] tracking-[0.3em] text-white/25">
                CONTACT
              </span>

              <span className="text-white/10"></span>

              <a
                href="mailto:aevoracomapany1@gmail.com"
                className="aevora-link text-[10px] font-light tracking-[0.13em] text-white/65"
              >
                aevoracomapany1@gmail.com
              </a>

              <span className="text-white/10"></span>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/YOUR_INSTAGRAM_ID"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="aevora-icon text-white/55"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.35"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
                </svg>
              </a>

              <span className="text-white/10"></span>

              {/* X */}
              <a
                href="https://x.com/YOUR_X_ID"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="aevora-icon text-white/55"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.6l-5.17-6.75L5.07 22H1.81l7.61-8.7L1.25 2h6.77l4.67 6.17L18.244 2Zm-1.15 17.86h1.8L7.01 4.02H5.08L17.094 19.86Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* COMPANY */}
          <div className="border-b border-white/[0.07] px-7 py-12 md:px-12 lg:px-16">

            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_0.8fr]">

              <div>
                <p className="mb-4 text-[7px] tracking-[0.32em] text-white/20">
                  COMPANY
                </p>

                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <span className="text-[18px] font-light tracking-[0.16em] text-white/75">
                    AEVORA LLC
                  </span>

                  <span className="text-white/10"></span>

                  <span className="text-[9px] tracking-[0.18em] text-white/40">
                    DELAWARE, UNITED STATES
                  </span>
                </div>
              </div>

              <div className="border-l border-white/[0.06] pl-7">
                <p className="mb-4 text-[7px] tracking-[0.32em] text-white/20">
                  HQ
                </p>

                <p className="text-[11px] font-light tracking-[0.18em] text-white/55">
                  LUCKNOW, INDIA
                </p>
              </div>

              <div className="border-l border-white/[0.06] pl-7">
                <p className="mb-4 text-[7px] tracking-[0.32em] text-white/20">
                  ONLINE
                </p>

                <a
                  href="https://use-aevora.com"
                  target="_blank"
                  rel="noreferrer"
                  className="aevora-link text-[11px] font-light tracking-[0.18em] text-white/55"
                >
                  use-aevora.com
                </a>
              </div>

            </div>
          </div>

          {/* FOUNDER */}
          <div className="border-b border-white/[0.07] px-7 py-12 md:px-12 lg:px-16">

            <div className="grid grid-cols-1 gap-9 md:grid-cols-[0.7fr_1.8fr_1fr] md:items-end">

              <div>
                <p className="text-[7px] tracking-[0.32em] text-white/20">
                  FOUNDER
                </p>
              </div>

              <div>
                <p className="text-[7px] tracking-[0.32em] text-white/25">
                  SOLO FOUNDER
                </p>

                <h2 className="muthiara-founder mt-3 text-[26px] text-white/80 md:text-[31px]">ALVIYA FATIMA</h2>
              </div>

              <div className="border-l border-white/[0.06] pl-7">
                <p className="text-[9px] leading-7 tracking-[0.17em] text-white/35">
                  FOUNDED AEVORA LLC
                  <br />
                  AEVORA.INC Ãƒâ€šÃ‚Â©
                </p>
              </div>

            </div>
          </div>

          {/* BRAND LINE */}
          <div className="border-b border-white/[0.07] px-7 py-7 md:px-12 lg:px-16">

            <div className="flex items-center gap-5">

              <span className="text-[7px] tracking-[0.34em] text-white/20">
                AEVORA
              </span>

              <span className="h-px flex-1 bg-white/[0.06]" />

              <span className="text-[8px] tracking-[0.28em] text-white/25">
                QUIET INTELLIGENCE
              </span>

              <span className="h-px w-16 bg-white/[0.06]" />

            </div>

          </div>

          {/* LEGAL */}
          <div className="px-7 py-8 md:px-12 lg:px-16">

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[7px] tracking-[0.23em] text-white/22">

              <span>2026 AEVORA LLC</span>

              <span className="text-white/10"></span>

              <span>ALL RIGHTS RESERVED.</span>

            </div>

            <p className="mt-4 max-w-[900px] text-[6px] leading-5 tracking-[0.13em] text-white/[0.16]">
              AEVORA AND AEVORA LLC ARE INTELLECTUAL PROPERTY OF AEVORA LLC.
            </p>

          </div>

        </div>

        <style>{`
          .aevora-strip-atmosphere {
            position: absolute;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            opacity: 0.65;
          }

          .aevora-strip-stars {
            position: absolute;
            inset: 0;
            background-image:
              radial-gradient(circle at 7% 20%, rgba(255,255,255,.45) 0 1px, transparent 1.5px),
              radial-gradient(circle at 19% 64%, rgba(255,255,255,.3) 0 1px, transparent 1.5px),
              radial-gradient(circle at 31% 28%, rgba(255,255,255,.25) 0 1px, transparent 1.5px),
              radial-gradient(circle at 44% 76%, rgba(255,255,255,.4) 0 1px, transparent 1.5px),
              radial-gradient(circle at 57% 19%, rgba(255,255,255,.3) 0 1px, transparent 1.5px),
              radial-gradient(circle at 68% 61%, rgba(255,255,255,.4) 0 1px, transparent 1.5px),
              radial-gradient(circle at 82% 27%, rgba(255,255,255,.3) 0 1px, transparent 1.5px),
              radial-gradient(circle at 94% 72%, rgba(255,255,255,.4) 0 1px, transparent 1.5px);
            animation: aevora-strip-drift 14s ease-in-out infinite alternate;
          }

          .aevora-strip-door {
            position: absolute;
            width: 100px;
            height: 170px;
            border: 1px solid rgba(255,255,255,.045);
          }

          .aevora-strip-door::before,
          .aevora-strip-door::after {
            content: "";
            position: absolute;
            background: rgba(255,255,255,.035);
          }

          .aevora-strip-door::before {
            width: 1px;
            height: 100%;
            left: 50%;
          }

          .aevora-strip-door::after {
            width: 100%;
            height: 1px;
            top: 50%;
          }

          .aevora-strip-door-1 {
            left: 4%;
            top: 18%;
          }

          .aevora-strip-door-2 {
            right: 6%;
            top: 42%;
          }

          .aevora-strip-door-3 {
            right: 23%;
            bottom: 8%;
            width: 70px;
            height: 120px;
            opacity: 0.5;
          }

          .aevora-strip-glow {
            position: absolute;
            width: 600px;
            height: 600px;
            left: 50%;
            top: 42%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(255,255,255,.025) 0%,
              transparent 68%
            );
          }

          @keyframes aevora-strip-drift {
            from {
              transform: translateY(0);
              opacity: 0.42;
            }
            to {
              transform: translateY(-5px);
              opacity: 0.68;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .aevora-strip-stars {
              animation: none;
            }
          }

          .aevora-link,
          .aevora-icon {
            transition:
              color 450ms ease,
              text-shadow 450ms ease,
              opacity 450ms ease;
          }

          .aevora-link:hover,
          .aevora-icon:hover,
          .aevora-link:focus-visible,
          .aevora-icon:focus-visible,
          .aevora-link:active,
          .aevora-icon:active {
            color: #a3ff9a;
            text-shadow: 0 0 12px rgba(163, 255, 154, 0.18);
            outline: none;
          }

          button.aevora-link {
            background: none;
            border: 0;
            padding: 0;
            cursor: pointer;
          }

          @media (prefers-reduced-motion: reduce) {
            .aevora-link,
            .aevora-icon {
              transition: none;
            }
                  `}</style>
      </section>

      {/* AUTH */}
      {authOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-5 backdrop-blur-[3px]">
          <div className="pointer-events-none absolute h-[590px] w-[430px] rounded-[24px] border border-white/[0.025] bg-white/[0.004] rotate-[-2deg]" />
          <div className="pointer-events-none absolute h-[590px] w-[430px] rounded-[24px] border border-white/[0.035] bg-white/[0.006] rotate-[2deg]" />

          <div className="pointer-events-none absolute h-[650px] w-[500px] max-w-[calc(100vw-20px)] overflow-hidden rounded-[32px] border border-white/[0.045] bg-white/[0.008] shadow-[0_0_120px_rgba(255,255,255,0.025)] backdrop-blur-[20px]">

            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.045), transparent 52%), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.025), transparent 32%), radial-gradient(circle at 80% 78%, rgba(163,255,154,0.018), transparent 38%)",
              }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]"
            />

            <div
              className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.018]"
            />

            <div
              className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.015]"
            />

            <div
              className="absolute left-[12%] top-[18%] h-px w-[76%] rotate-[8deg] bg-gradient-to-r from-transparent via-white/[0.035] to-transparent"
            />

            <div
              className="absolute left-[8%] top-[72%] h-px w-[84%] rotate-[-6deg] bg-gradient-to-r from-transparent via-white/[0.025] to-transparent"
            />

            <div
              className="absolute left-[18%] top-[32%] h-[1px] w-[1px] rounded-full bg-white/50 shadow-[0_0_7px_rgba(255,255,255,0.45)]"
            />

            <div
              className="absolute left-[30%] top-[76%] h-[1px] w-[1px] rounded-full bg-white/40 shadow-[0_0_6px_rgba(255,255,255,0.35)]"
            />

            <div
              className="absolute left-[47%] top-[17%] h-[1px] w-[1px] rounded-full bg-white/55 shadow-[0_0_8px_rgba(255,255,255,0.45)]"
            />

            <div
              className="absolute left-[68%] top-[27%] h-[1px] w-[1px] rounded-full bg-white/45 shadow-[0_0_7px_rgba(255,255,255,0.35)]"
            />

            <div
              className="absolute left-[84%] top-[63%] h-[1px] w-[1px] rounded-full bg-white/40 shadow-[0_0_6px_rgba(255,255,255,0.3)]"
            />

            <div
              className="absolute left-[74%] top-[84%] h-[1px] w-[1px] rounded-full bg-white/35 shadow-[0_0_6px_rgba(255,255,255,0.3)]"
            />

            <div
              className="absolute left-[23%] top-[49%] h-[1px] w-[1px] rounded-full bg-[#A3FF9A]/45 shadow-[0_0_8px_rgba(163,255,154,0.25)]"
            />

            <div
              className="absolute left-1/2 top-[9%] h-[5px] w-[5px] -translate-x-1/2 rounded-full border border-white/[0.12]"
            />

          </div>

          <div className="relative z-10 h-auto max-h-[90vh] w-[430px] max-w-[calc(100vw-40px)] overflow-hidden rounded-[22px] border border-white/[0.12] bg-[#050505]/90 p-8 shadow-[0_20px_100px_rgba(0,0,0,0.65),0_0_60px_rgba(255,255,255,0.035)] backdrop-blur-2xl">

            <button
  type="button"
  onClick={() => setAuthOpen(false)}
  aria-label="Close"
  className="absolute right-5 top-4 z-30 h-5 w-5 text-white/35 transition-colors duration-300 hover:text-white/80"
>
  <span className="absolute left-1/2 top-1/2 h-[1px] w-[14px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
  <span className="absolute left-1/2 top-1/2 h-[1px] w-[14px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
</button>

            <style>{`
        `}</style>

        <AuthPanel onSuccess={() => { setAuthOpen(false); setPlanOpen(true); }} />
          </div>
        </div>
      )}

      <style id="muthiara-founder-font">{`
        @font-face {
          font-family: "Muthiara";
          src: url("/fonts/Muthiara.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .muthiara-founder {
          font-family: "Muthiara", cursive !important;
          font-weight: normal !important;
          letter-spacing: normal !important;
          text-transform: none !important;
        }
      `}</style>
    </main>
  );
}





















