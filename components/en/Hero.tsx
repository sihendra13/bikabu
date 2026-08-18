import Container from "../Container";
import WhatsAppButton from "../WhatsAppButton";
import { site, defaultWaMessageEn } from "@/lib/config";

export default function HeroEn() {
  return (
    <section id="top" className="relative flex min-h-[85vh] items-center overflow-hidden sm:min-h-[92vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-anyaman-daun.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-label="A Bikabu woman artisan applying dried-leaf motifs onto a woven basket"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/20" />

      <Container className="relative z-10 py-24">
        <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white sm:text-sm">
          Handmade · {site.location}
        </p>
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Handwoven Leaf, Fabric, Book &amp; Bamboo Crafts
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          Bikabu brings you home decor and custom souvenirs woven from dried
          leaves, batik-covered books, and fabric, made by local women
          artisans in Yogyakarta.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <WhatsAppButton label="Order / Ask on WhatsApp" message={defaultWaMessageEn} />
        </div>
      </Container>
    </section>
  );
}
