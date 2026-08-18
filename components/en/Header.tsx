"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../Container";
import WhatsAppButton from "../WhatsAppButton";
import LangSwitcher from "../LangSwitcher";
import { site, defaultWaMessageEn } from "@/lib/config";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#how-to-order", label: "How to Order" },
];

export default function HeaderEn() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/60 bg-cream-soft/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LangSwitcher current="en" />
          <WhatsAppButton label="Order Now" message={defaultWaMessageEn} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-sand/60 bg-cream-soft lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition-colors duration-200 hover:bg-sand/30 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3">
              <LangSwitcher current="en" />
              <WhatsAppButton label="Order Now" message={defaultWaMessageEn} className="flex-1" />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
