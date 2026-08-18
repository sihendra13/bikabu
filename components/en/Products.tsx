import { BookOpen, Gift } from "lucide-react";
import Container from "../Container";
import ProductCard from "../ProductCard";

const products = [
  {
    title: "Woven Leaf Baskets & Boxes",
    description:
      "Baskets and boxes layered with genuine dried-leaf motifs, perfect for storage or a home decor accent.",
    waMessage: "Hi Bikabu, I'd like to ask about the Woven Leaf Baskets & Boxes.",
    image: "/images/produk-keranjang-daun-cream-2.jpg",
  },
  {
    title: "Foldable Multi-Purpose Box",
    description:
      "A foldable design that's easy to assemble and disassemble, for more practical storage and shipping.",
    waMessage: "Hi Bikabu, I'd like to ask about the Foldable Multi-Purpose Box.",
    image: "/images/produk-box-lipat-rust.jpg",
  },
  {
    title: "Custom Batik Books & Journals",
    description:
      "Notebooks, journals, and bookmarks with batik fabric covers, customizable in motif and size.",
    waMessage: "Hi Bikabu, I'd like to ask about Custom Batik Books & Journals.",
    Icon: BookOpen,
  },
  {
    title: "Custom Hampers & Souvenirs",
    description:
      "Hamper and souvenir packages for weddings, seminars, and corporate gifts in bulk quantities.",
    waMessage: "Hi Bikabu, I'd like to ask about Custom Hampers & Souvenirs.",
    Icon: Gift,
  },
];

export default function ProductsEn() {
  return (
    <section id="products" className="bg-cream-soft/60 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Collection
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            From Home Decor to Custom Souvenirs
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Every product can be tailored in motif, size, and quantity. Chat
            with us for a custom order consultation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} ctaLabel="Ask Price & Custom" />
          ))}
        </div>
      </Container>
    </section>
  );
}
