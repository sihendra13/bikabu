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
            Koleksi Premium
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Desain Luxury & Eksklusif
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Setiap produk anyaman daun Bikabu dirancang dengan sentuhan kemewahan
            dan nilai eksklusif tinggi. Detail motif daun alami yang elegan
            dipadukan dengan struktur anyaman yang kokoh, menjadikannya bukan
            sekadar wadah, melainkan karya seni dekorasi premium yang memukau.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              label="Tanya Ukuran & Harga"
              message="Halo Bikabu, saya tertarik dengan koleksi desain eksklusif anyaman daunnya."
              variant="outline"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
