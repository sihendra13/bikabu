import Image from "next/image";
import { LucideIcon, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/config";

type Props = {
  title: string;
  description: string;
  waMessage: string;
  image?: string;
  Icon?: LucideIcon;
};

export default function ProductCard({ title, description, waMessage, image, Icon }: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-cream-soft ring-1 ring-sand/60 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand/40">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : Icon ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary/15 to-primary/15">
            <Icon size={48} className="text-primary" aria-hidden="true" />
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>
        <a
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary-dark"
        >
          <MessageCircle size={16} aria-hidden="true" />
          Tanya Harga & Custom
        </a>
      </div>
    </div>
  );
}
