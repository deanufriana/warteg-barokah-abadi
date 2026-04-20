import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export function Navbar () {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Menu Favorit", href: "#menu" },
    { title: "Lokasi & Kontak", href: "#lokasi" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md py-3 shadow-sm border-zinc-200 dark:border-zinc-800"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded bg-brand flex items-center justify-center text-white font-heading font-bold text-xl group-hover:scale-105 transition-transform shadow-lg shadow-brand/20">
            {BUSINESS.name.charAt(0)}
          </div>
          <span className={cn(
            "font-heading text-xl font-medium tracking-wide transition-colors",
            isScrolled ? "text-zinc-900 dark:text-white" : "text-white"
          )}>
            Warteg <span className="text-brand">Barokah</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-all hover:translate-y-[-1px]",
                isScrolled
                  ? "text-zinc-600 dark:text-zinc-400 hover:text-brand"
                  : "text-white/90 hover:text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
              )}
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="hidden sm:flex bg-brand hover:bg-brand/90 text-white rounded-full px-6 font-medium shadow-md shadow-brand/20 transition-all active:scale-95"
            asChild
            onClick={() => trackEvent("click_order_now", { location: "navbar" })}
          >
            <a href={BUSINESS.whatsappUrl("Halo Warteg Barokah, saya ingin pesan makanan.")} target="_blank" rel="noopener noreferrer">
              Pesan via WhatsApp
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            className={cn(
              "md:hidden p-2 rounded-full backdrop-blur-md border transition-all",
              isScrolled
                ? "bg-zinc-100/50 border-zinc-200 text-zinc-900"
                : "bg-white/10 border-white/20 text-white"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu (Drawer Style) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white dark:bg-zinc-950 z-[60] shadow-2xl p-8 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="h-10 w-10 rounded bg-brand flex items-center justify-center text-white font-heading font-bold text-xl">
                  {BUSINESS.name.charAt(0)}
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
                  aria-label="Tutup menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-heading font-bold text-zinc-900 dark:text-zinc-100 py-2 border-b border-zinc-100 dark:border-zinc-900"
                  >
                    {link.title}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-10">
                <Button
                  className="w-full bg-brand hover:bg-brand/90 text-white h-14 rounded-xl flex items-center justify-center gap-3 font-bold text-lg shadow-xl shadow-brand/20"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    trackEvent("click_order_now", { location: "mobile_drawer" });
                  }}
                  asChild
                >
                  <a href={BUSINESS.whatsappUrl("Halo Warteg Barokah, saya ingin pesan makanan.")} target="_blank" rel="noopener noreferrer">
                    Pesan Sekarang
                  </a>
                </Button>
                <p className="text-center text-zinc-400 text-sm mt-6 font-medium">Buka {BUSINESS.openingHours}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
