const problems = [
  {
    number: "01",
    title: "Website Errors",
    description:
      "Fixing WordPress critical errors, broken layouts, plugin conflicts, PHP issues and unexpected website problems.",
    icon: "⚡",
  },
  {
    number: "02",
    title: "Slow Websites",
    description:
      "Improving website performance by optimizing images, plugins, database, scripts and overall WordPress setup.",
    icon: "🚀",
  },
  {
    number: "03",
    title: "Malware & Security",
    description:
      "Removing malware, malicious code, backdoors and suspicious files while improving overall website security.",
    icon: "🛡️",
  },
  {
    number: "04",
    title: "Broken Designs",
    description:
      "Fixing responsive issues, Elementor layouts, CSS problems and rebuilding outdated website sections.",
    icon: "🎨",
  },
  {
    number: "05",
    title: "Website Migration",
    description:
      "Moving WordPress websites between hosting providers, domains or servers with minimal downtime.",
    icon: "🔄",
  },
  {
    number: "06",
    title: "Business Websites",
    description:
      "Building modern, responsive and conversion-focused websites for businesses, services and online brands.",
    icon: "💼",
  },
];

export default function Problems() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-[problemGlow_7s_ease-in-out_infinite]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex animate-[problemReveal_0.7s_ease-out_both] rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            WHAT I SOLVE
          </span>

          <h2 className="mt-5 animate-[problemReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl">
            Problems? <span className="text-primary">I Can Fix Them.</span>
          </h2>

          <p className="mt-5 animate-[problemReveal_0.8s_ease-out_0.2s_both] text-base-content/60 sm:text-lg">
            From broken WordPress websites to performance, security and
            development challenges — I focus on solving real website problems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <article
              key={problem.number}
              className="group relative overflow-hidden rounded-3xl border border-base-300 bg-base-200/40 p-7 transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:bg-base-200/70 hover:shadow-2xl hover:shadow-primary/10 animate-[problemCard_0.8s_ease-out_both]"
              style={{
                animationDelay: `${index * 120 + 300}ms`,
              }}
            >
              {/* Number */}
              <div className="absolute right-6 top-5 text-5xl font-black text-base-content/5 transition-all duration-500 group-hover:text-primary/10">
                {problem.number}
              </div>

              {/* Icon */}
              <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-base-300 bg-base-100 text-2xl shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-primary/40 group-hover:shadow-lg">
                {problem.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                {problem.title}
              </h3>

              <p className="mt-3 leading-7 text-base-content/60">
                {problem.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-7 h-px w-10 bg-primary/30 transition-all duration-500 group-hover:w-full group-hover:bg-primary" />

              {/* Hover Glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center animate-[problemReveal_0.8s_ease-out_1s_both]">
          <p className="text-base-content/60">
            Have a problem with your website?
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-content transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            Let&apos;s Fix It
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
