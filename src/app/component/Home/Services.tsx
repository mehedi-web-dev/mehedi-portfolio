"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "WordPress Development",
    shortTitle: "WORDPRESS",
    description:
      "Custom, responsive and scalable WordPress websites built around your business needs.",
    icon: "W",
  },
  {
    number: "02",
    title: "Website Design",
    shortTitle: "WEB DESIGN",
    description:
      "Modern and responsive website designs focused on usability, performance and user experience.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Bug Fixing",
    shortTitle: "BUG FIXING",
    description:
      "Fix WordPress errors, broken layouts, plugin conflicts and other website issues.",
    icon: "⚙",
  },
  {
    number: "04",
    title: "Malware Removal",
    shortTitle: "SECURITY",
    description:
      "Remove malicious code, suspicious files and backdoors from compromised websites.",
    icon: "⌁",
  },
  {
    number: "05",
    title: "Performance Optimization",
    shortTitle: "PERFORMANCE",
    description:
      "Optimize website performance, loading speed and overall user experience.",
    icon: "↗",
  },
  {
    number: "06",
    title: "Website Migration",
    shortTitle: "MIGRATION",
    description:
      "Safely migrate websites between domains, hosting providers and servers.",
    icon: "⇄",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="relative overflow-hidden bg-base-100 py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[20%] top-20 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ======================================
              LEFT SIDE
          ====================================== */}

          <div>
            {/* Small Heading */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              What I Do
            </p>

            {/* Main Heading */}
            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Digital solutions built
              <span className="text-primary"> around your needs.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-base-content/60 sm:text-lg">
              From building a website from scratch to fixing, securing and
              optimizing an existing one, I help businesses solve their web
              development challenges.
            </p>

            {/* ==================================
                SERVICE LIST
            ================================== */}

            <div className="mt-10 space-y-2">
              {services.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={service.number}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex cursor-pointer items-center gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 ${
                      isActive
                        ? "border-primary/20 bg-primary/5"
                        : "border-transparent hover:border-base-300 hover:bg-base-200/50"
                    }`}
                  >
                    {/* Number */}
                    <span
                      className={`w-7 text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-base-content/30"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Icon */}
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-content shadow-lg shadow-primary/20"
                          : "bg-base-200 text-primary group-hover:bg-primary/10"
                      }`}
                    >
                      {service.icon}
                    </span>

                    {/* Title */}
                    <span
                      className={`font-medium transition-colors duration-300 ${
                        isActive ? "text-base-content" : "text-base-content/70"
                      }`}
                    >
                      {service.title}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`ml-auto transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-primary opacity-100"
                          : "-translate-x-2 text-base-content/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================================
              RIGHT SIDE
          ====================================== */}

          <div className="relative flex min-h-[560px] items-center justify-center">
            {/* Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

            {/* Decorative Ring */}
            <div className="absolute h-[470px] w-[470px] rounded-full border border-dashed border-primary/10" />

            <div className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-secondary/10" />

            {/* Card Stack */}
            <div className="relative h-[460px] w-full max-w-[500px]">
              {services.map((service, index) => {
                const offset = index - activeIndex;
                const distance = Math.abs(offset);

                const isActive = index === activeIndex;

                const translateY = offset * 72;

                const scale = isActive
                  ? 1
                  : Math.max(0.82, 1 - distance * 0.045);

                const opacity = distance > 2 ? 0.25 : isActive ? 1 : 0.55;

                const rotate = offset * -1.2;

                return (
                  <div
                    key={service.number}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className="absolute left-1/2 top-1/2 w-[88%] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      transform: `
                        translate(-50%, calc(-50% + ${translateY}px))
                        scale(${scale})
                        rotate(${rotate}deg)
                      `,
                      opacity,
                      zIndex: 20 - distance,
                    }}
                  >
                    {/* Card */}
                    <div
                      className={`relative overflow-hidden rounded-[1.5rem] border p-6 backdrop-blur-xl transition-all duration-700 ${
                        isActive
                          ? "border-primary/50 bg-gradient-to-br from-primary/20 via-base-200 to-secondary/10 shadow-2xl shadow-primary/10"
                          : "border-base-300/70 bg-base-200/80 shadow-xl"
                      }`}
                    >
                      {/* Top Line */}
                      <div
                        className={`absolute left-0 right-0 top-0 h-px transition-all duration-500 ${
                          isActive
                            ? "bg-gradient-to-r from-transparent via-primary to-transparent"
                            : "bg-transparent"
                        }`}
                      />

                      {/* Background Number */}
                      <span
                        className={`absolute -right-3 -top-8 text-[110px] font-black leading-none transition-colors duration-500 ${
                          isActive
                            ? "text-primary/[0.08]"
                            : "text-base-content/[0.025]"
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Card Content */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-5">
                          {/* Icon */}
                          <div
                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-bold transition-all duration-500 ${
                              isActive
                                ? "scale-105 bg-primary text-primary-content shadow-lg shadow-primary/30"
                                : "bg-base-100 text-primary"
                            }`}
                          >
                            {service.icon}
                          </div>

                          {/* Title */}
                          <div>
                            <p
                              className={`mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                                isActive
                                  ? "text-primary"
                                  : "text-base-content/40"
                              }`}
                            >
                              {service.shortTitle}
                            </p>

                            <h3 className="text-lg font-bold sm:text-xl">
                              {service.title}
                            </h3>
                          </div>

                          {/* Number */}
                          <span className="ml-auto self-start text-xs font-bold text-base-content/30">
                            {service.number}
                          </span>
                        </div>

                        {/* Description */}
                        <p
                          className={`mt-5 max-w-md text-sm leading-6 transition-colors duration-300 ${
                            isActive
                              ? "text-base-content/70"
                              : "text-base-content/40"
                          }`}
                        >
                          {service.description}
                        </p>

                        {/* Bottom */}
                        <div className="mt-5 flex items-center justify-between">
                          <span className="text-xs font-medium text-base-content/40">
                            Explore service
                          </span>

                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-primary text-primary-content"
                                : "bg-base-100 text-primary"
                            }`}
                          >
                            ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
