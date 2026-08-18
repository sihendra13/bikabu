import type { Metadata } from "next";
import HeaderEn from "@/components/en/Header";
import HeroEn from "@/components/en/Hero";
import AboutEn from "@/components/en/About";
import ProductsEn from "@/components/en/Products";
import FoldableFeatureEn from "@/components/en/FoldableFeature";
import WhyUsEn from "@/components/en/WhyUs";
import PartnershipEn from "@/components/en/Partnership";
import HowToOrderEn from "@/components/en/HowToOrder";
import FinalCtaEn from "@/components/en/FinalCta";
import FooterEn from "@/components/en/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SetHtmlLang from "@/components/SetHtmlLang";
import { defaultWaMessageEn } from "@/lib/config";

export const metadata: Metadata = {
  title: "Bikabu | Handwoven Leaf, Book & Fabric Crafts from Yogyakarta",
  description:
    "Bikabu is a handmade craft brand from Yogyakarta, Indonesia: woven dried-leaf home decor, batik-covered books, and fabric crafts made by local women artisans.",
  keywords: [
    "bikabu",
    "woven leaf basket",
    "dried leaf craft",
    "custom batik book",
    "indonesian souvenir",
    "custom hampers",
    "handmade craft yogyakarta",
  ],
  openGraph: {
    title: "Bikabu | Handwoven Leaf, Book & Fabric Crafts from Yogyakarta",
    description:
      "Home decor & custom souvenirs woven from dried leaves, batik books, and fabric, handmade by local artisans in Yogyakarta, Indonesia.",
    type: "website",
    locale: "en_US",
  },
};

export default function HomeEn() {
  return (
    <>
      <SetHtmlLang lang="en" />
      <HeaderEn />
      <main className="flex-1">
        <HeroEn />
        <AboutEn />
        <ProductsEn />
        <FoldableFeatureEn />
        <WhyUsEn />
        <PartnershipEn />
        <HowToOrderEn />
        <FinalCtaEn />
      </main>
      <FooterEn />
      <FloatingWhatsApp message={defaultWaMessageEn} ariaLabel="Chat on WhatsApp" />
    </>
  );
}
