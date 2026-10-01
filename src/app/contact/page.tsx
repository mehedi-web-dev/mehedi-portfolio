"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const contactInfo = [
  {
    title: "Email",
    value: "mehedihasan958327@gmail.com",
    href: "mailto:mehedihasan958327@gmail.com",
    icon: "✉",
  },
  {
    title: "Phone",
    value: "01318352581",
    href: "tel:+8801318352581",
    icon: "☎",
  },
  {
    title: "Location",
    value: "Bangladesh",
    href: "#",
    icon: "⌖",
  },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Name validation
    if (name.length < 2) {
      setStatus({
        type: "error",
        message: "Please enter your full name.",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // Subject validation
    if (subject.length < 3) {
      setStatus({
        type: "error",
        message: "Please enter a valid subject.",
      });
      return;
    }

    // Service validation
    if (!service) {
      setStatus({
        type: "error",
        message: "Please select a service.",
      });
      return;
    }

    // Message validation
    if (message.length < 10) {
      setStatus({
        type: "error",
        message: "Please provide at least 10 characters in your message.",
      });
      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    const data = {
      name,
      email,
      subject,
      service,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden">
      {/* =========================
          Background
      ========================= */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-[contactGlow_8s_ease-in-out_infinite]" />

      {/* =========================
          Hero
      ========================= */}

      <section className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="inline-flex animate-[contactReveal_0.7s_ease-out_both] rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            GET IN TOUCH
          </span>

          <h1 className="mt-6 animate-[contactReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Talk About Your{" "}
            <span className="text-primary">Project.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl animate-[contactReveal_0.8s_ease-out_0.2s_both] text-base leading-7 text-base-content/60 sm:text-lg">
            Have a website to build, fix, redesign or optimize? Send me the
            details and let&apos;s discuss how I can help.
          </p>
        </div>
      </section>

      {/* =========================
          Contact Section
      ========================= */}

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          {/* =========================
              Contact Information
          ========================= */}

          <div className="animate-[contactLeft_0.8s_ease-out_0.3s_both]">
            <div className="rounded-4xl border border-base-300 bg-base-200/40 p-8">
              <h2 className="text-2xl font-bold">
                Let&apos;s start a conversation
              </h2>

              <p className="mt-4 leading-7 text-base-content/60">
                Tell me about your project, your current website or the problem
                you&apos;re facing. I&apos;ll review the details and get back to
                you.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-base-content/40">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm font-medium transition-colors duration-300 group-hover:text-primary">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* =========================
                  Availability
              ========================= */}

              <div className="mt-8 rounded-2xl border border-success/20 bg-success/5 p-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
                  </span>

                  <span className="font-medium">
                    Currently available for new projects
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-base-content/50">
                  I&apos;m open to WordPress development, redesign,
                  troubleshooting, malware removal and custom web projects.
                </p>
              </div>

              {/* Quick Contact */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="tel:+8801318352581"
                  className="btn btn-outline rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Call Me
                </a>

                <a
                  href="mailto:mehedihasan958327@gmail.com"
                  className="btn btn-primary rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>

          {/* =========================
              Contact Form
          ========================= */}

          <div className="animate-[contactRight_0.8s_ease-out_0.4s_both]">
            <form
              onSubmit={handleSubmit}
              className="rounded-4xl border border-base-300 bg-base-200/40 p-6 shadow-xl shadow-primary/5 sm:p-8"
            >
              {/* Form Heading */}
              <div className="mb-7">
                <h2 className="text-2xl font-bold">Send Me a Message</h2>

                <p className="mt-2 text-sm text-base-content/50">
                  Fill out the form and I&apos;ll get back to you.
                </p>
              </div>

              {/* =========================
                  Name + Email
              ========================= */}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="input input-bordered w-full rounded-xl bg-base-100 transition-all duration-300 focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="input input-bordered w-full rounded-xl bg-base-100 transition-all duration-300 focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              {/* =========================
                  Subject
              ========================= */}

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can I help you?"
                  required
                  className="input input-bordered w-full rounded-xl bg-base-100 transition-all duration-300 focus:border-primary focus:outline-none"
                />
              </div>

              {/* =========================
                  Service
              ========================= */}

              <div className="mt-5">
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium"
                >
                  What do you need?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="select select-bordered w-full rounded-xl bg-base-100 transition-all duration-300 focus:border-primary focus:outline-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="WordPress Development">
                    WordPress Development
                  </option>

                  <option value="Website Design">Website Design</option>

                  <option value="Bug Fixing">Bug Fixing</option>

                  <option value="Malware Removal">Malware Removal</option>

                  <option value="Performance Optimization">
                    Performance Optimization
                  </option>

                  <option value="Website Migration">Website Migration</option>

                  <option value="Custom Development">Custom Development</option>

                  <option value="Other">Other</option>
                </select>
              </div>

              {/* =========================
                  Message
              ========================= */}

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  required
                  className="textarea textarea-bordered w-full resize-none rounded-xl bg-base-100 transition-all duration-300 focus:border-primary focus:outline-none"
                />
              </div>

              {/* =========================
                  Status Message
              ========================= */}

              {status.message && (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-xl border p-4 text-sm animate-[contactStatus_0.4s_ease-out_both] ${
                    status.type === "success"
                      ? "border-success/20 bg-success/10 text-success"
                      : "border-error/20 bg-error/10 text-error"
                  }`}
                >
                  <span className="mt-0.5 text-lg">
                    {status.type === "success" ? "✓" : "!"}
                  </span>

                  <p>{status.message}</p>
                </div>
              )}

              {/* =========================
                  Submit Button
              ========================= */}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary mt-6 w-full rounded-xl shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>→</span>
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-base-content/40">
                Your message will be sent directly to my email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* =========================
          Bottom Navigation
      ========================= */}

      <div className="pb-20 text-center">
        <Link
          href="/portfolio"
          className="text-sm font-medium text-base-content/50 transition-colors duration-300 hover:text-primary"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
