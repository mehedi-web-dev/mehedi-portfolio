import Link from "next/link";

const projects = [
  {
    title: "Business Website",
    category: "WordPress Development",
    description:
      "A modern and responsive business website built with WordPress and Elementor.",
    image: "/projects/project-1.jpg",
    technologies: ["WordPress", "Elementor", "PHP"],
  },
  {
    title: "E-Commerce Website",
    category: "WooCommerce",
    description:
      "A responsive e-commerce website with a smooth shopping experience and product management.",
    image: "/projects/project-2.jpg",
    technologies: ["WordPress", "WooCommerce", "Elementor"],
  },
  {
    title: "Website Redesign",
    category: "Website Redesign",
    description:
      "A complete website redesign focused on modern UI, responsiveness and better user experience.",
    image: "/projects/project-3.jpg",
    technologies: ["WordPress", "Elementor", "CSS"],
  },
  {
    title: "Custom Web Application",
    category: "Full-Stack Development",
    description:
      "A modern web application built with React, Next.js and Tailwind CSS.",
    image: "/projects/project-4.jpg",
    technologies: ["Next.js", "React", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section className="relative overflow-hidden bg-base-100 py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 animate-[projectGlow_8s_ease-in-out_infinite] rounded-full bg-primary/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 animate-[projectReveal_0.7s_ease-out_both] text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Featured Projects
            </p>

            <h2 className="animate-[projectReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl">
              Some of my recent work.
            </h2>

            <p className="mt-5 animate-[projectReveal_0.8s_ease-out_0.2s_both] text-base leading-7 text-base-content/60 sm:text-lg">
              A selection of websites and web solutions I&apos;ve built, redesigned
              and optimized for different projects.
            </p>
          </div>

          {/* Desktop View All */}

          <Link
            href="/portfolio"
            className="group hidden animate-[projectReveal_0.8s_ease-out_0.3s_both] items-center gap-2 text-sm font-semibold text-primary sm:flex"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group animate-[projectReveal_0.8s_ease-out_both] overflow-hidden rounded-[2rem] border border-base-300 bg-base-200/40 transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              style={{
                animationDelay: `${index * 150 + 350}ms`,
              }}
            >
              {/* ================= IMAGE ================= */}

              <div className="relative aspect-[16/10] overflow-hidden bg-base-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full animate-[imageReveal_1s_ease-out_0.3s_both] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Project Number */}

                <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* View Button */}

                <div className="absolute bottom-6 right-6 translate-y-8 scale-75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                  <Link
                    href="/portfolio"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg text-primary-content shadow-xl transition-transform duration-300 hover:scale-110"
                  >
                    ↗
                  </Link>
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-6 sm:p-7">
                {/* Category */}

                <p className="animate-[contentReveal_0.7s_ease-out_0.5s_both] text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {project.category}
                </p>

                {/* Title */}

                <h3 className="mt-2 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-3 max-w-xl text-sm leading-6 text-base-content/60">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology, techIndex) => (
                    <span
                      key={technology}
                      className="animate-[tagReveal_0.5s_ease-out_both] rounded-full border border-base-300 bg-base-100 px-3 py-1.5 text-xs font-medium text-base-content/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                      style={{
                        animationDelay: `${index * 150 + techIndex * 100 + 650}ms`,
                      }}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Bottom */}

                <div className="mt-7 flex items-center justify-between border-t border-base-300 pt-5">
                  <span className="text-sm font-medium text-base-content/40">
                    Case Study
                  </span>

                  <Link
                    href="/portfolio"
                    className="group/link flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Explore
                    <span className="transition-transform duration-300 group-hover/link:translate-x-2">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/portfolio"
            className="btn btn-outline animate-[projectReveal_0.7s_ease-out_1s_both] rounded-full px-7"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
