import React from "react";
import { motion } from "framer-motion";
import { MenuTabs } from "./MenuTabs";

const menuItems = [
  {
    title: "Nasi Rames",
    image: "/assets/rames.png",
    price: "15.000",
    category: "Makanan",
    description: "Nasi hangat dengan 3 pilihan sayur dan 1 lauk utama. Pilihan paling fleksibel dan favorit.",
    isPopular: true
  },
  {
    title: "Soto Ayam",
    image: "/assets/soto-new.png",
    price: "18.000",
    category: "Makanan",
    description: "Kuah kuning gurih dengan suwiran ayam, soun, tauge, dan koya renyah.",
    isPopular: true
  },
  {
    title: "Rendang Daging",
    image: "/assets/rendang.png",
    price: "12.000",
    category: "Makanan",
    description: "Daging sapi empuk yang dimasak lama dengan santan dan rempah-rempah pilihan.",
    isPopular: true
  },
  {
    title: "Kikil Mercon",
    image: "/assets/kikil.png",
    price: "9.000",
    category: "Makanan",
    description: "Olahan kikil sapi lembut dengan bumbu cabai pedas yang menggugah selera.",
    isPopular: false
  },
  {
    title: "Cumi Asin Ijo",
    image: "/assets/cumi.png",
    price: "10.000",
    category: "Makanan",
    description: "Cumi asin dipadukan dengan irisan cabai hijau dan bawang yang gurih pedas.",
    isPopular: false
  },
  {
    title: "Ayam Opor",
    image: "/assets/opor.png",
    price: "12.000",
    category: "Makanan",
    description: "Ayam goreng bumbu kuning dengan kuah santan kental yang kaya rasa.",
    isPopular: false
  },
  {
    title: "Tumis Usus",
    image: "/assets/usus.png",
    price: "6.000",
    category: "Makanan",
    description: "Usus ayam bersih yang ditumis dengan bumbu kecap pedas manis.",
    isPopular: false
  },
  {
    title: "Sayur Asem",
    image: "/assets/sayur-asem.png",
    price: "7.000",
    category: "Makanan",
    description: "Sayuran segar dengan kuah asam yang segar, pas untuk pendamping nasi rames.",
    isPopular: false
  },
  {
    title: "Tempe Orek",
    image: "/assets/orek.png",
    price: "4.000",
    category: "Makanan",
    description: "Tempe yang diiris kecil-kecil dan dimasak dengan kecap manis dan bumbu iris.",
    isPopular: false
  },
  {
    title: "Telur Balado",
    image: "/assets/telur.png",
    price: "6.000",
    category: "Makanan",
    description: "Telur rebus goreng dengan balutan sambal balado merah merona.",
    isPopular: false
  },
  {
    title: "Es Teh Manis",
    image: "/assets/teh.png",
    price: "5.000",
    category: "Minuman",
    description: "Teh melati pilihan dengan gula asli dan es kristal.",
    isPopular: false
  },
  {
    title: "Es Jeruk",
    image: "/assets/jeruk.png",
    price: "7.000",
    category: "Minuman",
    description: "Jeruk peras murni yang menyegarkan dahaga.",
    isPopular: false
  },
].map(item => ({
  ...item,
  image: (import.meta.env.BASE_URL || '') + item.image
}));

const categories = ["Semua", "Makanan", "Minuman"];

export function MenuSection () {
  return (
    <section id="menu" className="py-16 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 mb-16 items-center text-center"
        >
          <div className="bg-brand/10 text-brand px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
            Daftar Hidangan Kami
          </div>
          <h2 className="font-heading text-6xl md:text-8xl text-zinc-900 dark:text-white leading-[0.9]">
            Menu <span className="text-brand italic drop-shadow-sm">Autentik</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-light leading-relaxed">
            Kelezatan masakan rumahan autentik yang disiapkan dengan cinta dan bahan terbaik setiap harinya.
          </p>
        </motion.div>

        <MenuTabs items={menuItems} categories={categories} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-zinc-900 px-10 py-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-xl">
            <div className="flex flex-col text-left">
              <p className="text-sm text-zinc-400 uppercase tracking-widest font-bold mb-1">Informasi Harga</p>
              <p className="text-zinc-600 dark:text-zinc-300 text-lg">Harga dapat berubah sewaktu-waktu sesuai ketersediaan bahan.</p>
            </div>
            <div className="h-px sm:h-12 w-full sm:w-px bg-zinc-200 dark:bg-zinc-800"></div>
            <a href="#lokasi" className="text-brand font-bold text-lg hover:underline whitespace-nowrap">Hubungi Kami Untuk Acara &rarr;</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
