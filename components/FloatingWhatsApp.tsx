import { MessageCircle } from "lucide-react";
import { waLink, defaultWaMessage } from "@/lib/config";

export default function FloatingWhatsApp({
  message = defaultWaMessage,
  ariaLabel = "Chat via WhatsApp",
}: {
  message?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
