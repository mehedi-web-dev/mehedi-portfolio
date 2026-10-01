import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Business Website",
    category: "WordPress Development",
    description:
      "A modern business website focused on clean design, responsive layouts and a professional user experience.",
    image: "/Mehedi-Profile.png",
    technologies: ["WordPress", "Elementor", "PHP"],
  },
  {
    title: "E-Commerce Website",
    category: "WooCommerce",
    description:
      "A responsive e-commerce website with product management, shopping functionality and a smooth user experience.",
    image: "/Mehedi-Profile.png",
    technologies: ["WordPress", "WooCommerce", "Elementor"],
  },
  {
    title: "Website Redesign",
    category: "Website Redesign",
    description:
      "A complete redesign focused on modern UI, responsive layouts and improved website usability.",
    image: "/Mehedi-Profile.png",
    technologies: ["WordPress", "Elementor", "CSS"],
  },
  {
    title: "Custom Web Application",
    category: "Full-Stack Development",
    description:
      "A modern web application built with React, Next.js and Tailwind CSS.",
    image: "/PORTFOLIO (4).png",
    technologies: ["Next.js", "React", "Tailwind"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-[portfolioGlow_8s_ease-in-out_infinite]" />

      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="inline-flex animate-[portfolioReveal_0.7s_ease-out_both] rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            MY PORTFOLIO
          </span>

          <h1 className="mt-6 animate-[portfolioReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Selected <span className="text-primary">Projects</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-[portfolioReveal_0.8s_ease-out_0.2s_both] text-base leading-7 text-base-content/60 sm:text-lg">
            A collection of websites and web projects built with a focus on
            performance, responsiveness, usability and clean development.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-4xl border border-base-300 bg-base-200/40 transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 animate-[portfolioCard_0.8s_ease-out_both]"
                style={{
                  animationDelay: `${index * 150 + 300}ms`,
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-base-300 sm:h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={500}
                    height={500}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Category */}
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Project number */}
                  <span className="absolute bottom-5 right-5 text-5xl font-black text-white/20">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h2>

                  <p className="mt-3 leading-7 text-base-content/60">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology, techIndex) => (
                      <span
                        key={technology}
                        className="rounded-full border border-base-300 bg-base-100 px-3 py-1.5 text-xs font-medium text-base-content/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary animate-[portfolioTag_0.5s_ease-out_both]"
                        style={{
                          animationDelay: `${
                            index * 150 + techIndex * 80 + 650
                          }ms`,
                        }}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="mt-7 flex items-center justify-between border-t border-base-300 pt-5">
                    <span className="text-sm font-medium text-base-content/50">
                      View Project
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-base-300 transition-all duration-300 group-hover:translate-x-1 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-content">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center animate-[portfolioReveal_0.8s_ease-out_1s_both]">
            <p className="text-base-content/60">
              Want to see what I can build for you?
            </p>

            <Link
              href="/contact"
              className="btn btn-primary mt-5 rounded-full px-8 shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
