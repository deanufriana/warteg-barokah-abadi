import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export function MapSection () {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-brand" />,
      title: "Alamat Lengkap",
      content: "Jl. Raya Pulo Gebang No.RT04/04, RT.4/RW.4, Pulo Gebang, Kec. Cakung, Kota Jakarta Timur, 13950",
    },
    {
      icon: <Clock className="h-6 w-6 text-brand" />,
      title: "Jam Operasional",
      content: "Setiap Hari: 07:00 - 22:00 WIB",
    },
    {
      icon: <Phone className="h-6 w-6 text-brand" />,
      title: "Telepon / WhatsApp",
      content: (
        <a 
          href="https://wa.me/6285714277116?text=Halo%20Warteg%20Barokah,%20saya%20ingin%20bertanya." 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-brand hover:underline transition-colors"
        >
          0857-1427-7116 (Klik untuk pesan)
        </a>
      ),
      muted: false,
    },
  ];

  return (
    <section id="lokasi" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-6xl md:text-7xl text-zinc-900 dark:text-white leading-tight">
              Hubungi & <br /> <span className="text-brand">Kunjungi Kami</span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-xl">
              Lokasi strategis kami siap melayani Anda dengan sajian terbaik dari dapur kami setiap hari.
            </p>
          </div>

          <div className="grid gap-8">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`flex items-start gap-5 p-2 ${info.muted ? "opacity-60" : ""}`}
              >
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-brand/5 dark:bg-brand/10 flex items-center justify-center border border-brand/10 shadow-inner">
                  {info.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 italic">
                    {info.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-normal">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-6">
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "click_google_maps", {
                    location: "map_section",
                  });
                }
              }}
              className="rounded-full border-brand/30 hover:border-brand hover:text-brand bg-brand/5 hover:bg-brand/10 shadow-lg shadow-brand/5 text-zinc-800 dark:text-zinc-200 gap-3 transition-all px-10 h-14 text-lg font-semibold"
              asChild
            >
              <a href="https://goo.gl/maps/2MxrqYgHpT9XZfs87" target="_blank">
                Navigasi Google Maps
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Map Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group h-[500px] lg:h-[600px] w-full"
        >
          {/* Animated Glow Backing */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand/30 to-rose-400/20 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-zinc-900 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63464.23553514416!2d106.92143097910157!3d-6.195611599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b7452ec0d85%3A0x63687fe9624ab9b0!2sWarteg%20Barokah%20Abadi!5e0!3m2!1sen!2sus!4v1589040239099!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.4] contrast-[1.2] brightness-[0.95] group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
