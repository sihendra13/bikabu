import { MessageCircle } from "lucide-react";
import { waLink, defaultWaMessage } from "@/lib/config";

export default function WhatsAppButton({
  label = "Order via WhatsApp",
  message = defaultWaMessage,
  className = "",
  variant = "solid",
}: {
  label?: string;
  message?: string;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer min-h-11 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  const styles =
    variant === "solid"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-white";

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle size={20} aria-hidden="true" />
      {label}
    </a>
  );
}
