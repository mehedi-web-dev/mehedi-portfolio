"use client";

import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    number: "01",
    title: "WordPress Development",
    description:
      "Building responsive and scalable WordPress websites with Elementor, WooCommerce and custom development.",
  },
  {
    number: "02",
    title: "Website Problem Solving",
    description:
      "Diagnosing and fixing WordPress errors, broken layouts, plugin conflicts and other technical issues.",
  },
  {
    number: "03",
    title: "Performance & Security",
    description:
      "Optimizing websites for better performance and helping protect them from malware and security issues.",
  },
  {
    number: "04",
    title: "Modern Web Development",
    description:
      "Working with React, Next.js, JavaScript and Tailwind CSS to build modern web applications.",
  },
];

const skills = [
  "WordPress",
  "Elementor Pro",
  "WooCommerce",
  "Crocoblock",
  "JetEngine",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PHP",
  "HTML5",
  "CSS3",
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      {/* =========================
          Background
      ========================= */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-[aboutGlow_8s_ease-in-out_infinite]" />

      {/* =========================
          Hero
      ========================= */}

      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="inline-flex animate-[aboutReveal_0.7s_ease-out_both] rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            ABOUT ME
          </span>

          <h1 className="mt-6 animate-[aboutReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Building Websites That <span className="text-primary">Work.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-[aboutReveal_0.8s_ease-out_0.2s_both] text-base leading-7 text-base-content/60 sm:text-lg">
            I&apos;m a WordPress Developer focused on creating, fixing,
            optimizing and maintaining modern websites for businesses and online
            brands.
          </p>
        </div>
      </section>

      {/* =========================
          Main About
      ========================= */}

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          {/* Image */}
          <div className="relative animate-[aboutImage_0.9s_ease-out_0.2s_both]">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-4xl border border-primary/20 bg-base-200 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-primary/10 mix-blend-screen" />

              <Image
                src="/Mehedi-Profile.png"
                alt="Mehedi Hasan"
                className="relative h-auto w-full object-cover"
                width={500}
                height={500}
                priority
              />
            </div>

            {/* Experience Card */}
            <div className="absolute bottom-5 right-5 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-xl backdrop-blur-xl animate-[aboutFloat_5s_ease-in-out_infinite]">
              <div className="text-3xl font-bold text-primary">5+</div>

              <p className="mt-1 text-sm text-base-content/60">
                Years of Experience
              </p>
            </div>

            {/* Decorative ring */}
            <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-2xl border border-primary/20 animate-[aboutDecoration_6s_ease-in-out_infinite]" />

            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-primary/10" />
          </div>

          {/* Content */}
          <div className="animate-[aboutContent_0.9s_ease-out_0.35s_both]">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Who I Am
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              I&apos;m Mehedi Hasan, a{" "}
              <span className="text-primary">WordPress Developer.</span>
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-base-content/60">
              <p>
                I specialize in WordPress development, Elementor, WooCommerce,
                website design, redesign, bug fixing, malware removal,
                performance optimization and website migration.
              </p>

              <p>
                My goal is not just to make a website look good. I focus on
                creating websites that are responsive, maintainable,
                user-friendly and reliable for real business needs.
              </p>

              <p>
                Alongside WordPress, I&apos;m also working with modern
                technologies such as React, Next.js, JavaScript and Tailwind CSS
                to expand my development capabilities and build modern web
                applications.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-base-300 bg-base-200/40 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="text-2xl font-bold text-primary">5+</div>
                <p className="mt-1 text-xs text-base-content/50">Years</p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-200/40 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="text-2xl font-bold text-primary">500+</div>
                <p className="mt-1 text-xs text-base-content/50">Projects</p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-200/40 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="text-2xl font-bold text-primary">80+</div>
                <p className="mt-1 text-xs text-base-content/50">Clients</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn btn-primary rounded-full px-7 shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Work With Me →
              </Link>

              <Link
                href="/portfolio"
                className="btn btn-outline rounded-full px-7 transition-all duration-300 hover:-translate-y-1"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          What I Do
      ========================= */}

      <section className="relative border-y border-base-300 bg-base-200/20 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What I Do
            </span>

            <h2 className="mt-4 animate-[aboutReveal_0.8s_ease-out_both] text-3xl font-bold sm:text-4xl">
              Skills That Solve{" "}
              <span className="text-primary">Real Problems.</span>
            </h2>

            <p className="mt-5 text-base-content/60">
              My experience covers both WordPress development and modern web
              technologies.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {highlights.map((item, index) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-3xl border border-base-300 bg-base-200/40 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 animate-[aboutCard_0.8s_ease-out_both]"
                style={{
                  animationDelay: `${index * 120 + 250}ms`,
                }}
              >
                <span className="absolute right-6 top-3 text-6xl font-black text-base-content/5 transition-colors duration-500 group-hover:text-primary/10">
                  {item.number}
                </span>

                <div className="relative">
                  <span className="text-sm font-bold text-primary">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-base-content/60">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-10 bg-primary/30 transition-all duration-500 group-hover:w-full group-hover:bg-primary" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          Tech Stack
      ========================= */}

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Technology
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Tools & <span className="text-primary">Technologies</span>
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="rounded-full border border-base-300 bg-base-200/50 px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary animate-[aboutTag_0.5s_ease-out_both]"
                style={{
                  animationDelay: `${index * 70 + 200}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="relative overflow-hidden pb-24 sm:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-4xl border border-primary/20 bg-base-200/50 px-6 py-14 text-center backdrop-blur-xl sm:px-12">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base-content/60">
                Let&apos;s discuss your requirements and build something that
                works for your business.
              </p>

              <Link
                href="/contact"
                className="btn btn-primary mt-7 rounded-full px-8 shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Let&apos;s Work Together →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
