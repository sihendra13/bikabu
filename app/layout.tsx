import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bikabu — Kerajinan Anyaman Daun, Buku & Kain Handmade Jogja",
  description:
    "Bikabu adalah kerajinan handmade dari kain, buku, dan anyaman daun kering asal Yogyakarta. Home decor, hampers, dan souvenir custom order — dibuat oleh pengrajin perempuan lokal.",
  keywords: [
    "bikabu",
    "kerajinan daun",
    "anyaman daun kering",
    "buku batik custom",
    "souvenir jogja",
    "hampers custom",
    "kerajinan handmade jogja",
  ],
  openGraph: {
    title: "Bikabu — Kerajinan Anyaman Daun, Buku & Kain Handmade Jogja",
    description:
      "Home decor & souvenir custom dari anyaman daun kering, buku batik, dan kain — handmade oleh pengrajin lokal Yogyakarta.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
