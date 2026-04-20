export const BUSINESS = {
  name: "Warteg Barokah Abadi",
  phone: "6285714277116",
  phoneFormatted: "0857-1427-7116",
  email: "deanufriana@gmail.com", // Placeholder based on dev info
  address: "Jl. Raya Pulo Gebang No.RT04/04, RT.4/RW.4, Pulo Gebang, Kec. Cakung, Kota Jakarta Timur, 13950",
  coordinates: {
    lat: -6.1956116,
    lng: 106.921431,
  },
  openingHours: "07:00 - 22:00 WIB",
  tagline: "Masakan Rumahan Autentik & Higienis",
  description: "Nikmati kelezatan masakan nusantara pilihan yang dimasak dengan bumbu tradisional and bahan segar setiap harinya di Warteg Barokah Abadi.",
  googleMapsUrl: "https://goo.gl/maps/2MxrqYgHpT9XZfs87",
  googleMapsReviewUrl: "https://maps.app.goo.gl/tmgvueYPuSLxzE1g6",
  whatsappUrl: (message: string) => `https://wa.me/6285714277116?text=${encodeURIComponent(message)}`,
  analyticsId: "G-1CWVQX5VN8",
} as const;

export const SITE = {
  url: "https://deanufriana.github.io",
  base: "/warteg-barokah-abadi",
} as const;
