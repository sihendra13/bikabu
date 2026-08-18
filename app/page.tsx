import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import FoldableFeature from "@/components/FoldableFeature";
import WhyUs from "@/components/WhyUs";
import Partnership from "@/components/Partnership";
import HowToOrder from "@/components/HowToOrder";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <FoldableFeature />
        <WhyUs />
        <Partnership />
        <HowToOrder />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
