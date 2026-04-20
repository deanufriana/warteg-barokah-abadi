import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const reviews = [
  {
    name: "Irsyad Fikri Satrio",
    rating: 5,
    text: "Soto ayamnya enak banget, kuah santannya kental.. ditambah emping jadi makin nikmat Ayam opornya juga enak, berasa kayak ayam opor lebaran.Rawon(bukan rawon jatim) nya juga boleh.Kering kentang/ kentang mustafanya gadang garing kadang melempem, wajarlah ya wadahnya selalu terbuka.Buncis udangnya juga juwarak.Tempe gorengnya garing luar biasa.Menu2 yg kurang direkomendasikan cuma menu2 gorengnya aja, biasa aja.",
    date: "2 minggu yang lalu",
  },
  {
    name: "Aziz delameta",
    rating: 5,
    text: "Keren,  nyaman,  ramah ramah,  recommended Dan murah meriah tentunya buat budget tanggal tua 😍❣️ …",
    date: "1 bulan yang lalu",
  },
  {
    name: "Yuliandi kimung",
    rating: 5,
    text: "Masakan nya cocok.dan pas di kantong.",
    date: "3 minggu yang lalu",
  },
];

export function Reviews () {
  return (
    <section id="ulasan" className="py-16 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 mb-20 items-center text-center"
        >
          <div className="bg-brand/10 text-brand px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
            Suara Pelanggan
          </div>
          <h2 className="font-heading text-6xl md:text-7xl text-zinc-900 dark:text-white leading-tight">
            Apa Kata <span className="text-brand italic">Mereka?</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl font-light">
            Kebanggaan kami adalah melayani Anda dengan rasa yang tak terlupakan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="absolute top-8 right-10 text-brand/10 group-hover:text-brand/20 transition-colors">
                <Quote size={60} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand text-brand" />
                ))}
              </div>

              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 italic line-clamp-4">
                "{review.text}"
              </p>

              <div className="flex flex-col gap-1 mt-auto">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white leading-none">
                  {review.name}
                </h4>
                <span className="text-sm text-zinc-400 font-medium">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <p className="text-lg font-medium text-zinc-500">Nilai Rata-rata 4.8/5 di Google Maps</p>
          <a
            href={BUSINESS.googleMapsReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_view_all_reviews", { location: "review_section" })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand/5 hover:bg-brand/10 text-brand rounded-full font-bold transition-all border border-brand/20 group"
          >
            Lihat Semua Ulasan <div className="group-hover:translate-x-1 transition-transform">&rarr;</div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
