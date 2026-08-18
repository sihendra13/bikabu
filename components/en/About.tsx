import Container from "../Container";

export default function AboutEn() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 aspect-[4/5] w-full overflow-hidden rounded-3xl lg:order-1 flex gap-2">
          <div className="w-1/2 h-full relative">
            <video
              src="/videos/video1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full flex flex-col gap-2">
            <div className="h-[calc(50%-0.25rem)] w-full relative">
              <video
                src="/videos/video2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="h-[calc(50%-0.25rem)] w-full relative">
              <video
                src="/videos/video3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About Bikabu
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Nila, the Force Behind a Network of Women Artisans
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Bikabu grew out of Nila&apos;s work, spending years finding and
            supporting women artisans in villages around Yogyakarta,
            including artisan families in the mountains who turn natural
            material gathered from the forest around their homes into
            valuable woven pieces.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            The dried leaves that define our products are a renewable
            material unique to this region. Each leaf is selected, processed,
            and hand-woven by local artisans.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-sand pt-8">
            <div>
              <p className="font-display text-2xl font-semibold text-primary">
                100% Handmade
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Hand-processed and hand-woven
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-primary">
                Custom Orders
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Design & size tailored to you
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
