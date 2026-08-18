import { Hand, Leaf, PencilRuler, Globe2 } from "lucide-react";
import Container from "./Container";

const points = [
  {
    Icon: Hand,
    title: "100% Handmade",
    desc: "Diproses dan dianyam manual oleh pengrajin, bukan produksi massal.",
  },
  {
    Icon: Leaf,
    title: "Material Alami",
    desc: "Daun kering, kain, dan kertas — ramah lingkungan dan biodegradable.",
  },
  {
    Icon: PencilRuler,
    title: "Custom Order",
    desc: "Motif, ukuran, dan kemasan bisa disesuaikan kebutuhan Anda.",
  },
  {
    Icon: Globe2,
    title: "Standar Ekspor",
    desc: "Sudah dipercaya mitra dan buyer dari berbagai negara.",
  },
];

export default function WhyUs() {
  return (
    <section id="kenapa-kami" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Kenapa Bikabu
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Kualitas Kerajinan yang Bisa Dipercaya
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
