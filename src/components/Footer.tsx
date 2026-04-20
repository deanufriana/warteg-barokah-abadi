import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { BUSINESS, SITE } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export function Footer () {
  return (
    <motion.footer 
      onViewportEnter={() => trackEvent("scroll_to_bottom", { event_category: "Engagement" })}
      viewport={{ once: true }}
      className="py-20 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <div className="font-heading text-3xl font-bold text-zinc-900 dark:text-white">
            Warteg <span className="text-brand">Barokah</span> Abadi
          </div>
          <p className="text-base text-zinc-500 dark:text-zinc-500 max-w-sm">
            Melayani dengan hati dan rasa sejak 2020. Menyajikan kehangatan masakan rumah di setiap hidangan.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
            <a 
              href={`mailto:${BUSINESS.email}`} 
              aria-label="Email kami"
              className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-brand hover:text-white transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-end">
          <nav className="flex items-center gap-8 text-base font-semibold text-zinc-800 dark:text-zinc-200">
            <a href="#menu" className="hover:text-brand transition-colors">Menu</a>
            <a href="#lokasi" className="hover:text-brand transition-colors">Lokasi</a>
            <a href="#" className="hover:text-brand transition-colors">Tentang</a>
          </nav>
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-400 flex items-center gap-2">
              Website by <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-300 hover:text-brand transition-colors">deanufriana</a> &copy; 2026
            </div>
            <a 
              href={SITE.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase font-black text-brand hover:underline tracking-widest mt-1"
            >
              Butuh Website Seperti Ini? Hubungi Saya &rarr;
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
