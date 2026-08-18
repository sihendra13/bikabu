import { Hand, Leaf, PencilRuler, Globe2 } from "lucide-react";
import Container from "../Container";

const points = [
  {
    Icon: Hand,
    title: "100% Handmade",
    desc: "Hand-processed and hand-woven by artisans, not mass-produced.",
  },
  {
    Icon: Leaf,
    title: "Natural Material",
    desc: "Dried leaves, fabric, and paper that are eco-friendly and biodegradable.",
  },
  {
    Icon: PencilRuler,
    title: "Custom Orders",
    desc: "Motif, size, and packaging tailored to your needs.",
  },
  {
    Icon: Globe2,
    title: "Export Quality",
    desc: "Trusted by partners and buyers from around the world.",
  },
];

export default function WhyUsEn() {
  return (
    <section id="why-us" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Why Bikabu
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Craftsmanship You Can Trust
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Icon size={26} className="text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
