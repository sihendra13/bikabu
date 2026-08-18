import { Quote, Users, HeartHandshake, Leaf } from "lucide-react";
import Container from "./Container";

const badges = [
  { Icon: Users, label: "Jaringan Pengrajin Perempuan Desa" },
  { Icon: Leaf, label: "Bahan Alami dari Hutan Sekitar" },
  { Icon: HeartHandshake, label: "Dampak Nyata untuk Keluarga Pengrajin" },
];

export default function Partnership() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
      {/* Video Background */}
      <video
        src="/videos/bg-partnership.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-ink/85" />

      <Container className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <Quote size={40} className="text-primary" aria-hidden="true" />
          <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
            Setiap pesanan yang masuk bukan sekadar transaksi. Hasilnya
            membantu keluarga pengrajin memperbaiki rumah dan membuka jalan
            bagi masa depan anak-anak mereka. Nila terus menjembatani karya
            para perempuan di desa-desa Yogyakarta ini agar dikenal lebih
            luas.
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-cream/60">
            Nila, Penggerak Jaringan Pengrajin Bikabu
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {badges.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-cream/15 bg-cream/5 p-5"
            >
              <Icon size={22} className="shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
