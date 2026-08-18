import { MessageCircle, Palette, PackageCheck } from "lucide-react";
import Container from "./Container";
import WhatsAppButton from "./WhatsAppButton";

const steps = [
  {
    Icon: MessageCircle,
    title: "Chat via WhatsApp / DM",
    desc: "Ceritakan kebutuhan Anda, mulai dari produk, jumlah, hingga ide custom yang diinginkan.",
  },
  {
    Icon: Palette,
    title: "Diskusi Desain & Custom",
    desc: "Kami bantu tentukan motif, ukuran, dan kemasan sesuai budget Anda.",
  },
  {
    Icon: PackageCheck,
    title: "Produksi & Pengiriman",
    desc: "Produk dibuat manual oleh pengrajin, dikemas rapi, lalu dikirim ke lokasi Anda.",
  },
];

export default function HowToOrder() {
  return (
    <section id="cara-order" className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Cara Order
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Mulai dari Chat Sederhana
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
          <WhatsAppButton label="Mulai Order Sekarang" />
        </div>
      </Container>
    </section>
  );
}
