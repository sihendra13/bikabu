import { MessageCircle, MapPin } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import Container from "./Container";
import { site, waLink, defaultWaMessage } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-cream/80">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-white">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/60">
            {site.tagline} — dibuat dengan tangan oleh pengrajin lokal
            Yogyakarta.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
          >
            <InstagramIcon size={16} />@{site.instagramHandle}
          </a>
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
          >
            <MessageCircle size={16} aria-hidden="true" />
            +{site.whatsappNumber}
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" />
            {site.location}
          </span>
        </div>
      </Container>

      <Container className="mt-8 border-t border-cream/10 pt-6 text-xs text-cream/40">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </Container>
    </footer>
  );
}
