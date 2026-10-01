const testimonials = [
  {
    name: "John Smith",
    role: "Business Owner",
    review:
      "Excellent work. The website issue was fixed quickly and everything is working perfectly now.",
    rating: 5,
    initials: "JS",
  },
  {
    name: "Michael Brown",
    role: "Agency Owner",
    review:
      "Very professional and responsive. The website was redesigned exactly according to the requirements.",
    rating: 5,
    initials: "MB",
  },
  {
    name: "David Wilson",
    role: "Entrepreneur",
    review:
      "Great communication and technical skills. The WordPress problems were solved without any hassle.",
    rating: 5,
    initials: "DW",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl animate-[testimonialGlow_8s_ease-in-out_infinite]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex animate-[testimonialReveal_0.7s_ease-out_both] rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            CLIENT FEEDBACK
          </span>

          <h2 className="mt-5 animate-[testimonialReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl">
            What Clients <span className="text-primary">Say</span>
          </h2>

          <p className="mt-5 animate-[testimonialReveal_0.8s_ease-out_0.2s_both] text-base-content/60 sm:text-lg">
            A few words from people I&apos;ve had the opportunity to work with.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="group relative animate-[testimonialCard_0.8s_ease-out_both] overflow-hidden rounded-3xl border border-base-300 bg-base-200/40 p-7 transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:bg-base-200/70 hover:shadow-2xl hover:shadow-primary/10"
              style={{
                animationDelay: `${index * 150 + 300}ms`,
              }}
            >
              {/* Quote */}
              <div className="absolute right-6 top-4 text-7xl font-serif leading-none text-primary/10 transition-all duration-500 group-hover:text-primary/20">
                &quot;
              </div>

              {/* Stars */}
              <div className="relative flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span
                    key={i}
                    className="text-lg text-primary transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      transitionDelay: `${i * 50}ms`,
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="relative mt-6 min-h-[120px] leading-7 text-base-content/70">
                &quot;{testimonial.review}&quot;
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-base-300" />

              {/* Client */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-content transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-bold transition-colors duration-300 group-hover:text-primary">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-base-content/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Bottom animated line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="animate-[testimonialReveal_0.7s_ease-out_0.8s_both] rounded-2xl border border-base-300 bg-base-200/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="text-3xl font-bold text-primary">5+</div>
            <p className="mt-1 text-sm text-base-content/60">
              Years Experience
            </p>
          </div>

          <div className="animate-[testimonialReveal_0.7s_ease-out_0.9s_both] rounded-2xl border border-base-300 bg-base-200/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="text-3xl font-bold text-primary">500+</div>
            <p className="mt-1 text-sm text-base-content/60">
              Projects Completed
            </p>
          </div>

          <div className="animate-[testimonialReveal_0.7s_ease-out_1s_both] rounded-2xl border border-base-300 bg-base-200/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
            <div className="text-3xl font-bold text-primary">80+</div>
            <p className="mt-1 text-sm text-base-content/60">
              International Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
