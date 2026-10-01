import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-base-100">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 animate-blob rounded-full bg-primary/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 animate-[blob_10s_ease-in-out_infinite_reverse] rounded-full bg-secondary/15 blur-3xl" />

      {/* Main Container */}
      <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2">
        {/* ================= LEFT ================= */}
        {/* LEFT SIDE */}
        <div className="relative z-10">
          {/* Badge */}
          <div className="animate-[fadeUp_0.7s_ease-out_0.1s_both] mb-6 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/70 px-4 py-2 backdrop-blur">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-success" />

            <span className="text-sm font-medium">
              Available for new projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-[fadeUp_0.7s_ease-out] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-primary">Mehedi Hasan</span>
            <br />
            <span>WordPress & Full-Stack</span>
            <br />
            <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Web Developer
            </span>
          </h1>

          {/* Description */}
          <p className="animate-[fadeUp_0.7s_ease-out_0.3s_both] mt-6 max-w-xl text-base leading-7 text-base-content/70 sm:text-lg">
            I build, fix, optimize and secure fast, responsive websites that
            help businesses create a stronger online presence.
          </p>

          {/* Buttons */}
          <div className="animate-[fadeUp_0.7s_ease-out_0.45s_both] mt-8 flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="btn btn-primary rounded-full px-7 transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="btn btn-outline rounded-full px-7 transition-all duration-300 hover:-translate-y-1"
            >
              Hire Me
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-[fadeUp_0.7s_ease-out_0.6s_both] mt-10 flex flex-wrap gap-8 border-t border-base-300 pt-7">
            <div>
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm text-base-content/60">Years Experience</p>
            </div>

            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-base-content/60">Projects</p>
            </div>

            <div>
              <p className="text-2xl font-bold">80+</p>
              <p className="text-sm text-base-content/60">Clients</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative flex items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute h-82.5 w-82.5 animate-[spin_25s_linear_infinite] rounded-full border border-dashed border-primary/30 sm:h-112.5 sm:w-112.5 lg:h-125 lg:w-125" />

          {/* Inner Ring */}
          <div className="absolute h-70 w-70 animate-[spin_18s_linear_infinite_reverse] rounded-full border border-dashed border-secondary/30 sm:h-97.5 sm:w-97.5 lg:h-110 lg:w-110" />

          {/* Glow */}
          <div className="absolute h-72 w-72 animate-pulse rounded-full bg-primary/20 blur-3xl" />

          {/* Profile Image */}
          <div className="relative z-10 w-full max-w-95 animate-float">
            <div className="relative aspect-square overflow-hidden rounded-4xl border border-base-300 bg-base-200 shadow-2xl">
              {/* <Image
                src="/mehedi.png"
                alt="Mehedi Hasan"
                className="h-full w-full object-cover"
              /> */}

              {/* Glass Info */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-base-100/70 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Mehedi Hasan</p>

                    <p className="text-sm text-base-content/60">
                      WordPress & Web Developer
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-content">
                    ↗
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WordPress Floating Card */}
          <div className="absolute left-0 top-16 z-20 hidden animate-[floatLeft_4s_ease-in-out_infinite] rounded-2xl border border-base-300 bg-base-100/80 p-4 shadow-xl backdrop-blur-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                W
              </div>

              <div>
                <p className="text-xs text-base-content/50">Specialized in</p>

                <p className="font-semibold">WordPress</p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="absolute right-0 top-40 z-20 hidden animate-[floatRight_4.5s_ease-in-out_infinite] rounded-2xl border border-base-300 bg-base-100/80 px-5 py-4 shadow-xl backdrop-blur-xl sm:block">
            <p className="text-xs text-base-content/50">Experience</p>

            <p className="text-xl font-bold text-primary">5+ Years</p>
          </div>

          {/* Technology Card */}
          <div className="absolute bottom-4 left-0 z-20 hidden animate-[floatBottom_5s_ease-in-out_infinite] rounded-2xl border border-base-300 bg-base-100/80 p-3 shadow-xl backdrop-blur-xl md:block">
            <div className="flex gap-2">
              <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Next.js
              </span>

              <span className="rounded-lg bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                React
              </span>

              <span className="rounded-lg bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                WordPress
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
