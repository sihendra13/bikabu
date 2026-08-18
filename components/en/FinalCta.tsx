import Image from "next/image";
import Container from "../Container";
import WhatsAppButton from "../WhatsAppButton";
import { defaultWaMessageEn } from "@/lib/config";

export default function FinalCtaEn() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image
        src="/images/produk-keranjang-daun-cream-2.jpg"
        alt="Bikabu dried-leaf woven basket"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/75" />

      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
          Have a Custom Order in Mind? Let&apos;s Make It with Bikabu
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/85">
          For hampers, event souvenirs, or personal home decor, our team is
          ready to help from design consultation to the finished product.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Chat with Us on WhatsApp" message={defaultWaMessageEn} />
        </div>
      </Container>
    </section>
  );
}
