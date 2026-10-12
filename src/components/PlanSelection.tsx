"use client";

type PlanSelectionProps = {
  onSelect?: (plan: string) => void;
};

const plans = [
  {
    id: "01",
    name: "AEVORA FREE",
    tier: "FOUNDATION",
    price: "FREE",
    description: "Begin with the core Aevora intelligence system.",
    features: [
      "Core AI",
      "Basic memory",
      "Essential actions",
      "Command interface",
    ],
    available: true,
  },
  {
    id: "02",
    name: "AEVORA PRO",
    tier: "ADVANCED",
    price: "SOON",
    description: "A deeper intelligence layer with expanded capabilities.",
    features: [
      "Advanced AI",
      "Expanded memory",
      "Advanced actions",
      "Priority intelligence",
    ],
    available: false,
  },
  {
    id: "03",
    name: "AEVORA ULTRA",
    tier: "COMPLETE",
    price: "SOON",
    description: "The complete Aevora intelligence architecture.",
    features: [
      "Maximum intelligence",
      "Extended memory",
      "Full action system",
      "Complete Aevora layer",
    ],
    available: false,
  },
];

export default function PlanSelection({ onSelect }: PlanSelectionProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020202] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* CENTRAL CORE */}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A3FF9A]/[0.025] blur-[90px]" />

        {/* CORE RINGS */}
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />

        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.015]" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* SYSTEM LINES */}
        <div className="absolute left-0 right-0 top-[15%] h-px bg-white/[0.045]" />
        <div className="absolute left-0 right-0 bottom-[15%] h-px bg-white/[0.045]" />

        <div className="absolute bottom-0 left-[18%] top-0 w-px bg-white/[0.025]" />
        <div className="absolute bottom-0 right-[18%] top-0 w-px bg-white/[0.025]" />

        {/* CORNER MARKERS */}
        <div className="absolute left-8 top-8 h-16 w-16 border-l border-t border-white/[0.12]" />
        <div className="absolute right-8 top-8 h-16 w-16 border-r border-t border-white/[0.12]" />
        <div className="absolute bottom-8 left-8 h-16 w-16 border-b border-l border-white/[0.12]" />
        <div className="absolute bottom-8 right-8 h-16 w-16 border-b border-r border-white/[0.12]" />

        {/* VIGNETTE */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.72) 78%, rgba(0,0,0,0.98) 100%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-7 py-8">

        {/* TOP BAR */}
        <header className="flex items-center justify-between border-b border-white/[0.06] pb-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#A3FF9A] shadow-[0_0_12px_#A3FF9A]" />
              <span className="text-[8px] tracking-[0.4em] text-white/50">
                AEVORA
              </span>
            </div>

            <span className="h-3 w-px bg-white/10" />

            <span className="text-[7px] tracking-[0.3em] text-white/20">
              INTELLIGENCE ARCHITECTURE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[7px] tracking-[0.25em] text-white/20">
              SYSTEM
            </span>

            <span className="flex items-center gap-2 rounded-full border border-[#A3FF9A]/15 bg-[#A3FF9A]/[0.035] px-3 py-1.5 text-[7px] tracking-[0.2em] text-[#A3FF9A]/65">
              <span className="h-1 w-1 rounded-full bg-[#A3FF9A]" />
              ONLINE
            </span>
          </div>
        </header>

        {/* HERO */}
        <section className="relative flex flex-1 flex-col justify-center py-10">

          <div className="mb-12 max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#A3FF9A]/30" />
              <span className="text-[7px] tracking-[0.4em] text-[#A3FF9A]/55">
                IDENTITY VERIFIED
              </span>
            </div>

            <h1 className="text-4xl font-extralight tracking-[0.12em] text-white/90 sm:text-5xl">
              CHOOSE YOUR
              <br />
              <span className="text-white/45">INTELLIGENCE.</span>
            </h1>

            <p className="mt-6 max-w-lg text-[9px] leading-6 tracking-[0.08em] text-white/25">
              Select the Aevora intelligence architecture you want to activate.
              Your system begins with the foundation and expands as Aevora evolves.
            </p>
          </div>

          {/* PLAN ARCHITECTURE */}
          <section className="grid gap-4 lg:grid-cols-3">

            {plans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                disabled={!plan.available}
                onClick={() => plan.available && onSelect?.(plan.name)}
                className={`group relative min-h-[420px] overflow-hidden rounded-[22px] border text-left transition-all duration-500 ${
                  plan.available
                    ? "border-[#A3FF9A]/20 bg-white/[0.035] hover:-translate-y-1 hover:border-[#A3FF9A]/40 hover:bg-white/[0.055]"
                    : "cursor-not-allowed border-white/[0.055] bg-white/[0.012]"
                }`}
              >

                {/* CARD TOP LINE */}
                <div
                  className={`absolute left-0 right-0 top-0 h-px ${
                    plan.available
                      ? "bg-[#A3FF9A]/50"
                      : "bg-white/[0.08]"
                  }`}
                />

                {/* CARD CORE */}
                <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-white/[0.025] blur-[70px]" />

                <div className="relative flex h-full flex-col p-7">

                  {/* NUMBER + STATUS */}
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] tracking-[0.35em] text-white/20">
                      {plan.id}
                    </span>

                    <span
                      className={`text-[6px] tracking-[0.25em] ${
                        plan.available
                          ? "text-[#A3FF9A]/70"
                          : "text-white/20"
                      }`}
                    >
                      {plan.available ? "AVAILABLE" : "LOCKED"}
                    </span>
                  </div>

                  {/* PLAN IDENTITY */}
                  <div className="mt-14">
                    <span className="text-[7px] tracking-[0.35em] text-white/20">
                      {plan.tier}
                    </span>

                    <h2 className="mt-3 text-xl font-light tracking-[0.1em] text-white/85">
                      {plan.name}
                    </h2>

                    <p className="mt-4 max-w-xs text-[8px] leading-5 tracking-[0.05em] text-white/25">
                      {plan.description}
                    </p>
                  </div>

                  {/* DIVIDER */}
                  <div className="my-8 h-px bg-white/[0.06]" />

                  {/* FEATURES */}
                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <span
                          className={`h-1 w-1 rounded-full ${
                            plan.available
                              ? "bg-[#A3FF9A] shadow-[0_0_8px_#A3FF9A]"
                              : "bg-white/20"
                          }`}
                        />

                        <span className="text-[8px] tracking-[0.06em] text-white/35">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-auto flex items-end justify-between pt-10">

                    <div>
                      <span className="block text-[6px] tracking-[0.3em] text-white/15">
                        ACCESS
                      </span>

                      <span className="mt-2 block text-[11px] tracking-[0.2em] text-white/55">
                        {plan.price}
                      </span>
                    </div>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all ${
                        plan.available
                          ? "border-white/10 text-white/40 group-hover:border-[#A3FF9A]/40 group-hover:text-[#A3FF9A]"
                          : "border-white/[0.05] text-white/10"
                      }`}
                    >
                      →
                    </div>

                  </div>
                </div>
              </button>
            ))}

          </section>

          {/* LOWER SYSTEM INFORMATION */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.05] pt-5">

            <div className="flex items-center gap-5 text-[6px] tracking-[0.3em] text-white/15">
              <span>VOICE</span>
              <span>MEMORY</span>
              <span>ACTION</span>
              <span>INTELLIGENCE</span>
            </div>

            <span className="text-[6px] tracking-[0.3em] text-white/10">
              AEVORA // PERSONAL INTELLIGENCE SYSTEM
            </span>

          </div>
        </section>
      </div>
    </main>
  );
}
