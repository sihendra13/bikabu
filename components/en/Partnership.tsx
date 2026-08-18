import { Quote, Users, HeartHandshake, Leaf } from "lucide-react";
import Container from "../Container";

const badges = [
  { Icon: Users, label: "A Network of Village Women Artisans" },
  { Icon: Leaf, label: "Natural Material from the Surrounding Forest" },
  { Icon: HeartHandshake, label: "Real Impact for Artisan Families" },
];

export default function PartnershipEn() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-cream sm:py-28">
      <video
        src="/videos/bg-partnership.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />

      <Container className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <Quote size={40} className="text-primary" aria-hidden="true" />
          <p className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
            Every order placed is more than a transaction. It helps artisan
            families repair their homes and opens up a better future for
            their children. Nila keeps bridging the work of these women
            across Yogyakarta&apos;s villages to a wider audience.
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-cream/60">
            Nila, Lead of the Bikabu Artisan Network
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
