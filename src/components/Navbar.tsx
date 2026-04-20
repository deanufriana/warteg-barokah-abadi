import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
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
            W
          </div>
          <span className={cn(
            "font-heading text-xl font-medium tracking-wide md:block hidden transition-colors",
            isScrolled ? "text-zinc-900 dark:text-white" : "text-white"
          )}>
            Warteg <span className="text-brand">Barokah</span>
          </span>
          <span className={cn(
            "font-heading text-xl font-medium tracking-wide md:hidden block transition-colors",
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
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "click_order_now", {
                  location: "navbar",
                });
              }
            }}
          >
              <a href="https://wa.me/6285714277116?text=Halo%20Warteg%20Barokah,%20saya%20ingin%20pesan%20makanan." target="_blank">Pesan via WhatsApp</a>
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-zinc-900 dark:text-zinc-100 py-2 border-b border-zinc-100 dark:border-zinc-900 last:border-none"
            >
              {link.title}
            </a>
          ))}
          <Button 
            className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white h-12 rounded-xl mt-2 flex items-center gap-2"
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "click_order_now", {
                  location: "mobile_menu",
                });
              }
            }}
            asChild
          >
              <a href="https://wa.me/6285714277116?text=Halo%20Warteg%20Barokah,%20saya%20ingin%20pesan%20makanan." target="_blank">
                Pesan WhatsApp
              </a>
          </Button>
        </div>
      )}
    </header>
  );
}
