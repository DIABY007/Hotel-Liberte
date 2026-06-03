"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Accueil", href: "#accueil" },
  { name: "Chambres", href: "#chambres" },
  { name: "Bar-resto", href: "#restaurant" },
  { name: "Réunions", href: "#reunion" },
  { name: "Tourisme", href: "#tourisme" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 safe-area-pt",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b py-2 shadow-sm"
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="container-px flex items-center justify-between gap-4">
          <Link href="/" className="flex flex-col group shrink-0">
            <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-tighter text-primary uppercase transition-colors group-hover:text-primary/80 leading-none">
              Hôtel de la Liberté
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mt-0.5">
              Ouagadougou
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs lg:text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link 
              href="#chambres" 
              className={cn(buttonVariants({ size: "sm" }), "ml-2 lg:ml-4 font-medium uppercase tracking-widest px-6 h-10")}
            >
              Voir tarifs
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-2 relative z-[101] pointer-events-auto">
            <Link 
              href="#chambres" 
              className={cn(buttonVariants({ size: "sm" }), "font-medium uppercase tracking-widest px-3 h-9 text-[10px] pointer-events-auto")}
            >
              Nos tarifs
            </Link>
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(true);
              }}
              className="size-10 flex items-center justify-center text-foreground bg-primary/10 rounded-lg shadow-sm active:scale-95 transition-transform cursor-pointer pointer-events-auto"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            >
              <Menu className="size-6" />
              <span className="sr-only">Ouvrir le menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Manual Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] flex justify-end">
          <div 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div
            className={cn(
              "relative w-[85vw] max-w-sm bg-background shadow-2xl z-[9999] flex flex-col p-6 pt-10 transition-transform duration-300",
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex items-center justify-between mb-10">
              <span className="font-heading text-xl font-bold text-primary uppercase tracking-tighter">Navigation</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="size-10 flex items-center justify-center rounded-full bg-muted text-foreground active:scale-90 transition-transform"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-border/50 text-xl font-heading hover:text-primary transition-colors group"
                >
                  {item.name}
                  <ChevronRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-6 pt-8 border-t">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="size-5" />
                  </div>
                  <span className="text-sm font-medium">+226 25 33 23 63</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="size-5" />
                  </div>
                  <span className="text-sm font-medium text-xs">hotelliberte@gmail.com</span>
                </div>
              </div>
              
              <Link 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(buttonVariants({ size: "lg" }), "w-full py-7 text-base uppercase tracking-widest font-bold shadow-lg shadow-primary/20")}
              >
                Réserver maintenant
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
