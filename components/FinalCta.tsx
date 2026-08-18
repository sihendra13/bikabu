import Image from "next/image";
import Container from "./Container";
import WhatsAppButton from "./WhatsAppButton";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image
        src="/images/produk-keranjang-daun-cream-2.jpg"
        alt="Keranjang anyaman daun kering Bikabu"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/75" />

      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
          Punya Ide Custom Order? Yuk Wujudkan Bersama Bikabu
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/85">
          Untuk hampers, souvenir acara, atau home decor personal — tim kami
          siap bantu dari konsultasi desain sampai produk jadi.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Chat Kami di WhatsApp" />
        </div>
      </Container>
    </section>
  );
}
