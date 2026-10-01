"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What type of websites do you build?",
    answer:
      "I build business websites, landing pages, e-commerce websites, service websites and custom WordPress websites using WordPress, Elementor and WooCommerce.",
  },
  {
    question: "Can you fix an existing WordPress website?",
    answer:
      "Yes. I can troubleshoot and fix WordPress critical errors, plugin conflicts, broken layouts, PHP issues, Elementor problems and other website-related issues.",
  },
  {
    question: "Can you remove malware from my website?",
    answer:
      "Yes. I can investigate suspicious files and code, remove malicious content and backdoors, clean affected WordPress files and help improve the website's security.",
  },
  {
    question: "Can you migrate my website to another hosting?",
    answer:
      "Yes. I can migrate WordPress websites between hosting providers, domains and servers while preserving the website files, database and configuration.",
  },
  {
    question: "Do you provide website redesign services?",
    answer:
      "Yes. I can redesign an existing website with a modern, responsive interface while keeping the important content and functionality.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Simply send me your website URL, requirements and any problems you are experiencing. I will review the requirements and discuss the appropriate solution with you.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-[faqGlow_8s_ease-in-out_infinite]" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex animate-[faqReveal_0.7s_ease-out_both] rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            FAQ
          </span>

          <h2 className="mt-5 animate-[faqReveal_0.8s_ease-out_0.1s_both] text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl animate-[faqReveal_0.8s_ease-out_0.2s_both] text-base-content/60 sm:text-lg">
            Here are some common questions about my services and development
            process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={faq.question}
                className="animate-[faqCard_0.7s_ease-out_both] overflow-hidden rounded-2xl border border-base-300 bg-base-200/40 transition-all duration-500 hover:border-primary/30"
                style={{
                  animationDelay: `${index * 100 + 300}ms`,
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-base-content"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-base-300 transition-all duration-500 ${
                      isOpen
                        ? "rotate-180 border-primary bg-primary text-primary-content"
                        : "bg-base-100"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-base-content/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Active Line */}
                <div
                  className={`h-0.5 bg-primary transition-all duration-500 ${
                    isOpen ? "w-full" : "w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
