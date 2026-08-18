import Container from "./Container";
import WhatsAppButton from "./WhatsAppButton";

export default function FoldableFeature() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ink/5 sm:aspect-video lg:aspect-[4/5]">
          <video
            className="h-full w-full object-cover"
            src="/videos/keranjang-lipat-demo.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Demo box anyaman daun Bikabu yang bisa dilipat dan dipasang kembali"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Desain Praktis
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Bisa Dilipat, Mudah Disimpan & Dikirim
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Beberapa produk box anyaman daun Bikabu didesain agar bisa
            dibongkar-pasang. Praktis untuk disimpan saat tidak dipakai, dan
            lebih efisien saat proses pengiriman — tanpa mengurangi kekuatan
            struktur maupun keindahan motif daunnya.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              label="Tanya Ukuran & Harga"
              message="Halo Bikabu, saya mau tanya soal box anyaman daun yang bisa dilipat."
              variant="outline"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
