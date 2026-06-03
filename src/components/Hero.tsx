"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/section/Section Chambre/chambre superieur image 1.jpg"
          alt="Hôtel de la Liberté"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="container-px relative z-20 text-center text-white w-full pt-24 pb-12 flex flex-col items-center justify-center min-h-[100dvh] pointer-events-none">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 md:space-y-8 max-w-4xl mx-auto w-full pointer-events-auto"
        >
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-fluid-5xl font-heading font-bold tracking-tighter leading-[0.95] md:leading-[0.9] text-white">
              Hôtel de la Liberté
            </h1>
            <p className="text-fluid-lg font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-90 text-white">
              Ouagadougou
            </p>
          </div>

          <div className="max-w-2xl mx-auto px-4 md:px-0">
            <p className="text-fluid-base font-light italic opacity-90 leading-relaxed text-balance text-white">
              &quot;Le confort à petit prix, la convivialité d&apos;une chambre d&apos;hôte&quot;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 md:mt-8 px-4 w-full">
            <Link 
              href="#chambres" 
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto h-14 px-10 text-base md:text-lg uppercase tracking-widest font-semibold shadow-xl shadow-primary/20 bg-primary text-primary-foreground")}
            >
              Voir nos tarifs
            </Link>
            <Link 
              href="#contact" 
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }), 
                "w-full sm:w-auto h-14 px-10 text-base md:text-lg uppercase tracking-widest font-semibold bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white hover:text-black transition-all"
              )}
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/80 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
