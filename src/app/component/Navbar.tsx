"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur-xl">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight transition hover:opacity-80"
          >
            <span className="text-primary">Mehedi</span>
            <span className="text-base-content">.Dev</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <nav className="flex items-center gap-2 rounded-full border border-base-300 bg-base-200/50 p-1.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-primary text-primary-content shadow-md"
                    : "text-base-content/70 hover:bg-base-300 hover:text-base-content"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Hire Me */}
        <div className="navbar-end">
          <Link
            href="/contact"
            className="btn btn-primary rounded-full px-6 shadow-md transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-1 mt-3 w-52 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl"
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-xl ${
                    isActive(link.href) ? "bg-primary text-primary-content" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
