import Link from "next/link";

const services = [
  {
    number: "01",
    title: "WordPress Development",
    description:
      "Build a fast, responsive and professional WordPress website tailored to your business and specific requirements.",
    features: [
      "Custom WordPress Development",
      "Elementor Pro",
      "Responsive Design",
      "Custom Functionality",
    ],
    technologies: ["WordPress", "Elementor", "PHP", "CSS"],
  },
  {
    number: "02",
    title: "Website Design & Redesign",
    description:
      "Transform an outdated website into a modern, responsive and user-friendly experience designed around your goals.",
    features: [
      "Modern UI Design",
      "Website Redesign",
      "Responsive Layout",
      "Pixel-Perfect Implementation",
    ],
    technologies: ["WordPress", "Elementor", "CSS", "Figma"],
  },
  {
    number: "03",
    title: "WooCommerce Development",
    description:
      "Create and customize professional e-commerce websites with WooCommerce for a smooth shopping experience.",
    features: [
      "WooCommerce Setup",
      "Product Layouts",
      "Custom Store Design",
      "Payment & Checkout Setup",
    ],
    technologies: ["WordPress", "WooCommerce", "Elementor", "PHP"],
  },
  {
    number: "04",
    title: "WordPress Bug Fixing",
    description:
      "Diagnose and fix WordPress errors, broken layouts, plugin conflicts and other technical website problems.",
    features: [
      "Critical Error Fix",
      "Elementor Issues",
      "Plugin Conflicts",
      "PHP & Server Errors",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
  },
  {
    number: "05",
    title: "Malware Removal & Security",
    description:
      "Investigate compromised websites, remove malicious files and help improve the overall security of your WordPress website.",
    features: [
      "Malware Investigation",
      "Malicious File Removal",
      "Backdoor Cleanup",
      "Security Hardening",
    ],
    technologies: ["WordPress", "PHP", "cPanel", "Plesk"],
  },
  {
    number: "06",
    title: "Performance Optimization",
    description:
      "Improve website performance by identifying bottlenecks and optimizing the WordPress environment.",
    features: [
      "Website Speed Optimization",
      "Database Optimization",
      "Image Optimization",
      "Plugin & Script Optimization",
    ],
    technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
  },
  {
    number: "07",
    title: "Website Migration",
    description:
      "Safely migrate WordPress websites between hosting providers, domains or servers with minimal disruption.",
    features: [
      "Hosting Migration",
      "Domain Migration",
      "Backup Restoration",
      "Server-to-Server Migration",
    ],
    technologies: ["WordPress", "cPanel", "Plesk", "MySQL"],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* =========================
          Background
      ========================= */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-[servicesGlow_8s_ease-in-out_infinite]" />

      {/* =========================
          Hero
      ========================= */}

      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="inline-flex animate-[servicesReveal_0.7s_ease-out_both] rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            MY SERVICES
          </span>

          <h1 className="mt-6 animate-[servicesReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Solutions for Your <span className="text-primary">Website.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-[servicesReveal_0.8s_ease-out_0.2s_both] text-base leading-7 text-base-content/60 sm:text-lg">
            From building new WordPress websites to fixing, securing, optimizing
            and migrating existing ones, I provide practical solutions for real
            website needs.
          </p>
        </div>
      </section>

      {/* =========================
          Services
      ========================= */}

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-[2rem] border border-base-300 bg-base-200/40 p-7 transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:bg-base-200/70 hover:shadow-2xl hover:shadow-primary/10 sm:p-8 animate-[serviceCard_0.8s_ease-out_both]"
                style={{
                  animationDelay: `${index * 120 + 300}ms`,
                }}
              >
                {/* Background Number */}
                <span className="pointer-events-none absolute right-6 top-3 text-7xl font-black text-base-content/5 transition-all duration-500 group-hover:text-primary/10">
                  {service.number}
                </span>

                {/* Number */}
                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-bold tracking-wider text-primary">
                    {service.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-base-300 bg-base-100 text-lg transition-all duration-500 group-hover:rotate-12 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-content">
                    →
                  </span>
                </div>

                {/* Content */}
                <h2 className="relative mt-7 text-2xl font-bold transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                  {service.title}
                </h2>

                <p className="relative mt-4 leading-7 text-base-content/60">
                  {service.description}
                </p>

                {/* Features */}
                <div className="relative mt-7 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-base-content/70"
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary transition-transform duration-300 group-hover:scale-110"
                        style={{
                          transitionDelay: `${featureIndex * 50}ms`,
                        }}
                      >
                        ✓
                      </span>

                      {feature}
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="relative mt-7 flex flex-wrap gap-2 border-t border-base-300 pt-6">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-base-300 bg-base-100 px-3 py-1.5 text-xs font-medium text-base-content/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />

                {/* Glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            ))}
          </div>

          {/* =========================
              CTA
          ========================= */}

          <div className="mt-16 text-center animate-[servicesReveal_0.8s_ease-out_1.2s_both]">
            <p className="text-base-content/60">
              Not sure which service you need?
            </p>

            <Link
              href="/contact"
              className="btn btn-primary mt-5 rounded-full px-8 shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
