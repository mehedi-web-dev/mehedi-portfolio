import Link from "next/link";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-base-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ================= IMAGE ================= */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Background Glow */}
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-base-200 shadow-xl">
              <img
                src="/mehedi.png"
                alt="Mehedi Hasan"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-xl backdrop-blur-xl sm:right-5">
              <p className="text-3xl font-bold text-primary">5+</p>

              <p className="mt-1 text-sm text-base-content/60">
                Years of Experience
              </p>
            </div>

            {/* Small Decorative Element */}
            <div className="absolute -left-5 bottom-16 hidden h-16 w-16 rounded-2xl border border-primary/20 bg-primary/10 sm:block" />
          </div>

          {/* ================= CONTENT ================= */}
          <div>
            {/* Label */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Me
            </p>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              I Build Websites That
              <span className="text-primary"> Work for Your Business.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-base-content/70 sm:text-lg">
              I&apos;m a WordPress Developer specializing in Elementor, WooCommerce,
              website design, redesign and custom development. I help businesses
              build, fix, migrate, optimize and secure fast, responsive
              WordPress websites.
            </p>

            <p className="mt-4 text-base leading-7 text-base-content/60">
              I also work with modern web technologies such as React, Next.js,
              JavaScript and Tailwind CSS, allowing me to build both WordPress
              websites and modern web applications.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-base-300 bg-base-200/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <p className="font-semibold">Clean Development</p>

                <p className="mt-1 text-sm text-base-content/60">
                  Responsive and maintainable solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-base-300 bg-base-200/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <p className="font-semibold">Problem Solving</p>

                <p className="mt-1 text-sm text-base-content/60">
                  Fixing complex website issues efficiently.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <Link
                href="/about"
                className="btn btn-primary rounded-full px-7 transition-all duration-300 hover:-translate-y-1"
              >
                More About Me
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
