import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl animate-[ctaGlow_7s_ease-in-out_infinite]" />

        <div className="absolute -left-20 top-20 h-40 w-40 rounded-full border border-primary/10 animate-[ctaFloatLeft_8s_ease-in-out_infinite]" />

        <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full border border-primary/10 animate-[ctaFloatRight_9s_ease-in-out_infinite]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-primary/20 bg-base-200/60 px-6 py-16 text-center shadow-2xl shadow-primary/5 backdrop-blur-xl sm:px-12 sm:py-20">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full border border-primary/10" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-48 w-48 rounded-full border border-primary/10" />

          {/* Badge */}
          <span className="inline-flex animate-[ctaReveal_0.7s_ease-out_both] rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            HAVE A PROJECT IN MIND?
          </span>

          {/* Heading */}
          <h2 className="mx-auto mt-6 max-w-3xl animate-[ctaReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="text-primary">Great Together.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl animate-[ctaReveal_0.8s_ease-out_0.2s_both] text-base leading-7 text-base-content/60 sm:text-lg">
            Whether you need a new website, a redesign, a bug fixed or an
            existing WordPress website optimized, I&apos;m ready to help.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex animate-[ctaReveal_0.8s_ease-out_0.3s_both] flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn btn-primary rounded-full px-8 shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
            >
              Let&apos;s Work Together
              <span className="transition-transform duration-300">→</span>
            </Link>

            <Link
              href="/portfolio"
              className="btn btn-outline rounded-full px-8 transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
            </Link>
          </div>

          {/* Availability */}
          <div className="mt-10 flex animate-[ctaReveal_0.8s_ease-out_0.5s_both] items-center justify-center gap-2 text-sm text-base-content/50">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
            </span>
            Available for new projects
          </div>
        </div>
      </div>
    </section>
  );
}
