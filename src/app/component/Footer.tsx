import Link from "next/link";

const services = [
  "WordPress Development",
  "Website Design",
  "Bug Fixing",
  "Malware Removal",
  "Performance Optimization",
  "Website Migration",
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-base-300 bg-base-200/40">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-[footerGlow_8s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 animate-[footerReveal_0.8s_ease-out_both]">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight transition-opacity hover:opacity-80"
            >
              <span className="text-primary">Mehedi</span>
              <span className="text-base-content">.Dev</span>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-base-content/60">
              WordPress Developer specializing in website design, development,
              bug fixing, malware removal, performance optimization and custom
              web solutions.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex gap-3">
              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-base-300 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                GH
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-base-300 bg-base-100 text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                IN
              </a>

              {/* Fiverr */}
              <a
                href="#"
                aria-label="Fiverr"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-base-300 bg-base-100 text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                Fi
              </a>

              {/* Upwork */}
              <a
                href="#"
                aria-label="Upwork"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-base-300 bg-base-100 text-xs font-bold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                Up
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-[footerReveal_0.8s_ease-out_0.15s_both]">
            <h3 className="font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-base-content/60 transition-colors duration-300 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-[footerReveal_0.8s_ease-out_0.3s_both]">
            <h3 className="font-bold">Services</h3>

            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service}>
                  <Link
                    href="/contact"
                    className="text-sm text-base-content/60 transition-colors duration-300 hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-base-300" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-base-content/50 sm:flex-row">
          <p className="animate-[footerReveal_0.7s_ease-out_0.5s_both]">
            © {new Date().getFullYear()} Mehedi.Dev. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
