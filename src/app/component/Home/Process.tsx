const processSteps = [
  {
    number: "01",
    title: "Discuss Requirements",
    description:
      "First, I understand your website, business goals, requirements, existing issues and expected outcome.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Analyze & Plan",
    description:
      "I analyze the website, identify technical problems and create a clear plan before starting the work.",
    icon: "🔎",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "I implement the solution with clean, responsive and maintainable development practices.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description:
      "I test the website across devices, check functionality, fix issues and optimize performance.",
    icon: "🧪",
  },
  {
    number: "05",
    title: "Quality Check",
    description:
      "Before delivery, I perform a final review to make sure everything works as expected.",
    icon: "✓",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "Once everything is approved, I deliver the completed website and provide the necessary support.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-[processGlow_8s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-secondary/10 blur-3xl animate-[processGlowReverse_9s_ease-in-out_infinite]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex animate-[processReveal_0.7s_ease-out_both] rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            HOW I WORK
          </span>

          <h2 className="mt-5 animate-[processReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-primary">Process</span>
          </h2>

          <p className="mt-5 animate-[processReveal_0.8s_ease-out_0.2s_both] text-base-content/60 sm:text-lg">
            A simple and transparent process designed to turn your ideas into a
            reliable, high-quality website.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-16">
            {processSteps.map((step, index) => {
              const isRight = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center md:min-h-[170px] ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-base-100 bg-primary text-sm font-bold text-primary-content shadow-lg shadow-primary/20 md:left-1/2 md:flex md:-translate-x-1/2 animate-[processDot_0.6s_ease-out_both]"
                    style={{
                      animationDelay: `${index * 150 + 400}ms`,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Mobile Number */}
                  <div className="mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content shadow-lg shadow-primary/20 md:hidden">
                    {step.number}
                  </div>

                  {/* Card */}
                  <article
                    className={`group relative w-full rounded-3xl border border-base-300 bg-base-200/40 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-base-200/70 hover:shadow-2xl hover:shadow-primary/10 md:w-[44%] ${
                      isRight
                        ? "md:animate-[processRight_0.8s_ease-out_both]"
                        : "md:animate-[processLeft_0.8s_ease-out_both]"
                    }`}
                    style={{
                      animationDelay: `${index * 150 + 300}ms`,
                    }}
                  >
                    {/* Large background number */}
                    <span className="pointer-events-none absolute right-6 top-3 text-7xl font-black text-base-content/5 transition-all duration-500 group-hover:text-primary/10">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-base-300 bg-base-100 text-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-primary/40">
                      {step.icon}
                    </div>

                    <h3 className="relative text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>

                    <p className="relative mt-3 leading-7 text-base-content/60">
                      {step.description}
                    </p>

                    {/* Bottom progress line */}
                    <div className="mt-6 h-px w-10 bg-primary/30 transition-all duration-500 group-hover:w-full group-hover:bg-primary" />

                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-[processReveal_0.8s_ease-out_1.2s_both]">
          <p className="text-base-content/60">Have a project in mind?</p>

          <a
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-content transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            Start a Project
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
