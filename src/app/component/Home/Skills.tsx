const skills = [
  {
    name: "WordPress",
    category: "CMS",
    icon: "W",
    size: "large",
  },
  {
    name: "Elementor",
    category: "Builder",
    icon: "E",
    size: "normal",
  },
  {
    name: "WooCommerce",
    category: "E-Commerce",
    icon: "WC",
    size: "normal",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: "JS",
    size: "normal",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "⚛",
    size: "large",
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: "N",
    size: "normal",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: "T",
    size: "normal",
  },
  {
    name: "PHP",
    category: "Backend",
    icon: "PHP",
    size: "normal",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: "GH",
    size: "normal",
  },
];

const Skills = () => {
  return (
    <section className="relative overflow-hidden bg-base-200/30 py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Tech Stack
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 text-base leading-7 text-base-content/60 sm:text-lg">
            A combination of WordPress expertise and modern web technologies to
            build reliable and high-performing websites.
          </p>
        </div>

        {/* Skills */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${
                skill.size === "large" ? "sm:row-span-2 sm:p-7" : ""
              }`}
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div
                className={`relative flex items-center justify-center rounded-2xl bg-base-200 font-bold text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-content ${
                  skill.size === "large"
                    ? "h-16 w-16 text-2xl"
                    : "h-12 w-12 text-lg"
                }`}
              >
                {skill.icon}
              </div>

              {/* Content */}
              <div className="relative mt-5">
                <p className="text-xs font-medium uppercase tracking-wider text-base-content/40">
                  {skill.category}
                </p>

                <h3 className="mt-1 font-bold">{skill.name}</h3>
              </div>

              {/* Number */}
              <span className="absolute bottom-4 right-5 text-xs font-semibold text-base-content/10 transition-colors duration-300 group-hover:text-primary/20">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-base-content/50">
            Always learning. Always building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
