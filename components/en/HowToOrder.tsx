import { MessageCircle, Palette, PackageCheck } from "lucide-react";
import Container from "../Container";
import WhatsAppButton from "../WhatsAppButton";
import { defaultWaMessageEn } from "@/lib/config";

const steps = [
  {
    Icon: MessageCircle,
    title: "Chat via WhatsApp / DM",
    desc: "Tell us what you need: product, quantity, or a custom idea you have in mind.",
  },
  {
    Icon: Palette,
    title: "Design & Custom Discussion",
    desc: "We'll help you decide the motif, size, and packaging that fit your budget.",
  },
  {
    Icon: PackageCheck,
    title: "Production & Shipping",
    desc: "Your product is handmade by our artisans, neatly packed, then shipped to you.",
  },
];

export default function HowToOrderEn() {
  return (
    <section id="how-to-order" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How to Order
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Start with a Simple Chat
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map(({ Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-3xl bg-cream-soft p-6 ring-1 ring-sand/60">
              <span className="font-display text-4xl font-semibold text-sand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon size={22} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton label="Start Your Order" message={defaultWaMessageEn} />
        </div>
      </Container>
    </section>
  );
}
