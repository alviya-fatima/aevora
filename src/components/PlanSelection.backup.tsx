"use client";

type PlanSelectionProps = {
  onSelect?: (plan: string) => void;
};

export default function PlanSelection({ onSelect }: PlanSelectionProps) {
  const plans = [
    {
      name: "Aevora Free",
      description: "Essential personal intelligence.",
      price: "FREE",
      features: ["Core AI", "Basic memory", "Essential actions"],
    },
    {
      name: "Aevora Pro",
      description: "A deeper intelligence layer for everyday use.",
      price: "COMING SOON",
      features: ["Advanced AI", "Expanded memory", "More actions"],
    },
    {
      name: "Aevora Ultra",
      description: "The complete Aevora intelligence experience.",
      price: "COMING SOON",
      features: ["Maximum intelligence", "Extended memory", "Full action layer"],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020202] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* AEVORA CORE LIGHT */}
  <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.045] blur-[170px]" />
  <div className="absolute left-1/2 top-[46%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[90px]" />

  {/* LARGE ARCHITECTURAL PANELS */}
  <div className="absolute left-[2%] top-[18%] h-[64%] w-[30%] rounded-[34px] border border-white/[0.07] bg-white/[0.012] shadow-[inset_0_0_100px_rgba(255,255,255,0.018)]" />
  <div className="absolute right-[2%] top-[18%] h-[64%] w-[30%] rounded-[34px] border border-white/[0.07] bg-white/[0.012] shadow-[inset_0_0_100px_rgba(255,255,255,0.018)]" />

  {/* MAIN AEVORA FRAME */}
  <div className="absolute left-1/2 top-[13%] h-[72%] w-[48%] -translate-x-1/2 rounded-[42px] border border-white/[0.085] bg-white/[0.012] shadow-[0_0_120px_rgba(255,255,255,0.025),inset_0_0_120px_rgba(255,255,255,0.018)]" />

  <div className="absolute left-1/2 top-[17%] h-[64%] w-[42%] -translate-x-1/2 rounded-[36px] border border-white/[0.045]" />

  {/* CENTRAL AEVORA RINGS */}
  <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.065]" />
  <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />
  <div className="absolute left-1/2 top-1/2 h-[930px] w-[930px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.022]" />
  <div className="absolute left-1/2 top-1/2 h-[1250px] w-[1250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.012]" />

  {/* HORIZONTAL SYSTEM LINES */}
  <div className="absolute left-0 right-0 top-[15%] h-px bg-white/[0.04]" />
  <div className="absolute left-0 right-0 top-[30%] h-px bg-white/[0.018]" />
  <div className="absolute left-0 right-0 top-[50%] h-px bg-white/[0.028]" />
  <div className="absolute left-0 right-0 top-[70%] h-px bg-white/[0.018]" />
  <div className="absolute left-0 right-0 bottom-[15%] h-px bg-white/[0.04]" />

  {/* VERTICAL SYSTEM LINES */}
  <div className="absolute top-0 bottom-0 left-[12%] w-px bg-white/[0.022]" />
  <div className="absolute top-0 bottom-0 left-[25%] w-px bg-white/[0.014]" />
  <div className="absolute top-0 bottom-0 right-[12%] w-px bg-white/[0.022]" />
  <div className="absolute top-0 bottom-0 right-[25%] w-px bg-white/[0.014]" />

  {/* CORNER ARCHITECTURE */}
  <div className="absolute left-[5%] top-[20%] h-16 w-16 border-l border-t border-white/[0.16]" />
  <div className="absolute right-[5%] top-[20%] h-16 w-16 border-r border-t border-white/[0.16]" />
  <div className="absolute left-[5%] bottom-[20%] h-16 w-16 border-b border-l border-white/[0.16]" />
  <div className="absolute right-[5%] bottom-[20%] h-16 w-16 border-b border-r border-white/[0.16]" />

  {/* SMALL SYSTEM NODES */}
  <span className="absolute left-[9%] top-[20%] h-[4px] w-[4px] rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.5)]" />
  <span className="absolute right-[9%] top-[20%] h-[4px] w-[4px] rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.5)]" />
  <span className="absolute left-[9%] bottom-[20%] h-[3px] w-[3px] rounded-full bg-white/50" />
  <span className="absolute right-[9%] bottom-[20%] h-[3px] w-[3px] rounded-full bg-white/50" />

  {/* MICRO STARS */}
  <div className="absolute inset-0 opacity-50">
    <span className="absolute left-[15%] top-[12%] h-[2px] w-[2px] rounded-full bg-white/60" />
    <span className="absolute left-[35%] top-[9%] h-[1px] w-[1px] rounded-full bg-white/70" />
    <span className="absolute right-[28%] top-[11%] h-[2px] w-[2px] rounded-full bg-white/50" />
    <span className="absolute right-[15%] top-[35%] h-[1px] w-[1px] rounded-full bg-white/70" />
    <span className="absolute left-[13%] top-[63%] h-[1px] w-[1px] rounded-full bg-white/60" />
    <span className="absolute right-[17%] top-[69%] h-[2px] w-[2px] rounded-full bg-white/50" />
    <span className="absolute left-[31%] bottom-[10%] h-[2px] w-[2px] rounded-full bg-white/40" />
    <span className="absolute right-[35%] bottom-[9%] h-[1px] w-[1px] rounded-full bg-white/70" />
  </div>

  {/* VIGNETTE */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse at center, transparent 24%, rgba(0,0,0,0.72) 88%, rgba(0,0,0,0.96) 100%)",
    }}
  />
</div>

<div className="relative z-10mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16">
        <div className="mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-white/[0.08]" />
            <span className="text-[9px] tracking-[0.45em] text-white/30">
              AEVORA
            </span>
            <span className="h-px w-12 bg-white/[0.08]" />
          </div>

          <div className="mb-5 flex items-center justify-center gap-2 text-[9px] tracking-[0.3em] text-[#A3FF9A]/60">
            <span className="h-[5px] w-[5px] rounded-full bg-[#A3FF9A] shadow-[0_0_10px_#A3FF9A]" />
            <span>IDENTITY VERIFIED</span>
          </div>

          <h1 className="text-3xl font-extralight tracking-[0.12em] text-white/90">
            CHOOSE YOUR AEVORA
          </h1>

          <p className="mx-auto mt-4 max-w-md text-[10px] leading-5 tracking-[0.08em] text-white/30">
            Select the intelligence layer you want to begin with.
          </p>
        </div>

        <div className="grid w-full max-w-5xl gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <button
              key={plan.name}
              type="button"
              disabled={index !== 0}
              onClick={() => onSelect?.(plan.name)}
              className={`group relative overflow-hidden rounded-[24px] border p-7 text-left transition-all duration-500 ${
                index === 0
                  ? "border-white/[0.14] bg-white/[0.035] hover:border-white/[0.28] hover:bg-white/[0.055]"
                  : "cursor-not-allowed border-white/[0.055] bg-white/[0.015] opacity-50"
              }`}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.025] blur-[50px]" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.3em] text-white/30">
                    0{index + 1}
                  </span>

                  {index === 0 && (
                    <span className="rounded-full border border-[#A3FF9A]/20 bg-[#A3FF9A]/[0.04] px-3 py-1 text-[7px] tracking-[0.2em] text-[#A3FF9A]/70">
                      AVAILABLE
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-light tracking-[0.08em] text-white/85">
                  {plan.name}
                </h2>

                <p className="mt-3 min-h-[40px] text-[9px] leading-5 tracking-[0.04em] text-white/25">
                  {plan.description}
                </p>

                <div className="my-7 h-px bg-white/[0.06]" />

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-[8px] tracking-[0.08em] text-white/35"
                    >
                      <span className="h-[3px] w-[3px] rounded-full bg-[#A3FF9A]/60" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-[9px] tracking-[0.2em] text-white/30">
                  {plan.price}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3 text-[7px] tracking-[0.3em] text-white/15">
          <span className="h-px w-8 bg-white/[0.06]" />
          <span>VOICE • MEMORY • ACTION</span>
          <span className="h-px w-8 bg-white/[0.06]" />
        </div>
      </div>
    </div>
  );
}
