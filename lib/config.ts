export const site = {
  name: "Bikabu",
  tagline: "Handcrafted dari Kain, Buku & Anyaman Daun",
  location: "Yogyakarta, Indonesia",
  instagramHandle: "bi.ka.bu",
  instagramUrl: "https://instagram.com/bi.ka.bu",
  whatsappNumber: "628112651405",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Halo Bikabu, saya tertarik dengan produk kerajinan daun/buku custom. Boleh minta info lebih lanjut?";
