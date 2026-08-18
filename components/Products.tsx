import { BookOpen, Gift } from "lucide-react";
import Container from "./Container";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Keranjang & Box Anyaman Daun",
    description:
      "Box dan keranjang dengan lapisan motif daun kering asli, cocok untuk storage atau aksen home decor.",
    waMessage: "Halo Bikabu, saya mau tanya soal Keranjang & Box Anyaman Daun.",
    image: "/images/produk-keranjang-daun-cream-2.jpg",
  },
  {
    title: "Box Lipat Serbaguna",
    description:
      "Desain foldable, mudah dibongkar-pasang untuk penyimpanan dan pengiriman yang lebih praktis.",
    waMessage: "Halo Bikabu, saya mau tanya soal Box Lipat Serbaguna.",
    image: "/images/produk-box-lipat-rust.jpg",
  },
  {
    title: "Buku & Jurnal Batik Custom",
    description:
      "Notebook, jurnal, dan bookmark dengan cover kain batik yang bisa custom motif dan ukuran.",
    waMessage: "Halo Bikabu, saya mau tanya soal Buku & Jurnal Batik Custom.",
    Icon: BookOpen,
  },
  {
    title: "Hampers & Souvenir Custom",
    description:
      "Paket hampers dan souvenir untuk wedding, seminar, hingga corporate gift dalam jumlah besar.",
    waMessage: "Halo Bikabu, saya mau tanya soal Hampers & Souvenir Custom.",
    Icon: Gift,
  },
];

export default function Products() {
  return (
    <section id="produk" className="bg-cream-soft/60 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Koleksi Produk
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Dari Home Decor Hingga Souvenir Custom
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Semua produk bisa disesuaikan motif, ukuran, dan jumlahnya. Chat
            kami untuk konsultasi custom order.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
