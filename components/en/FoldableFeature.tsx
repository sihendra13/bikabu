import Container from "../Container";
import WhatsAppButton from "../WhatsAppButton";

export default function FoldableFeatureEn() {
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
            aria-label="Demo of a Bikabu woven leaf box that folds flat and reassembles"
          />
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Practical Design
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Foldable, Easy to Store & Ship
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Some of Bikabu&apos;s woven leaf boxes are designed to fold flat.
            Practical for storage when not in use, and more efficient to
            ship, without compromising structural strength or the beauty of
            the leaf motif.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              label="Ask Size & Price"
              message="Hi Bikabu, I'd like to ask about the foldable woven leaf box."
              variant="outline"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
