import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveRight, MapPin } from "lucide-react";

export function Hero () {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}/assets/hero.png`}
          alt="Soto Ayam Warteg Barokah Cinematic"
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layered overlay for maximum readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="h-px w-8 bg-brand"></div>
              <span className="text-brand font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">
                Asli Masakan Rumahan
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.1] md:leading-[1.0]">
              Warteg <br />
              <span className="text-brand italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">Barokah</span> Abadi
            </h1>
          </div>

          <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-light max-w-xl drop-shadow-sm">
            Nikmati kelezatan masakan nusantara pilihan yang dimasak dengan bumbu tradisional dan bahan segar setiap harinya. Bersih, higienis, dan ekonomis.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "click_view_location", {
                    location: "hero",
                  });
                }
              }}
              className="bg-brand hover:bg-brand/90 text-white rounded-full px-10 h-14 text-lg font-bold group transition-all shadow-2xl shadow-brand/40" 
              asChild
            >
              <a href="https://goo.gl/maps/2MxrqYgHpT9XZfs87" target="_blank">
                Lihat Lokasi
                <MapPin className="ml-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
              </a>
            </Button>
            <div className="flex items-center justify-center gap-4 px-8 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white shadow-lg">
              <div className="relative flex h-3 w-3">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></div>
              </div>
              <span className="text-sm sm:text-base font-bold whitespace-nowrap opacity-90">Buka 07:00 - 22:00 WIB</span>
            </div>
          </div>
        </motion.div>

        {/* Secondary Featured Card (Tidier version) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="p-10 bg-zinc-950/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] shadow-2xl relative group overflow-hidden">
            <div className="flex flex-col gap-6">
              <div className="h-14 w-14 rounded-2xl bg-brand/20 flex items-center justify-center text-brand mb-2">
                <Coffee size={32} />
              </div>
              <div>
                <h3 className="font-heading text-3xl text-white mb-3 tracking-wide">Menu Terlaris</h3>
                <p className="text-zinc-400 leading-relaxed text-lg">Coba Soto Ayam legendaris kami yang dibuat khusus dengan rempah pilihan.</p>
              </div>
              <a href="#menu" className="flex items-center gap-2 text-brand font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                Eksplor Menu <MoveRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30">
        <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}

// Minimal Icons for the Hero
function Coffee ({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}
