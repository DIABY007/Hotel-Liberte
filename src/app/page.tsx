"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { RoomSection } from "@/components/RoomSection";
import { ContactSection } from "@/components/ContactSection";
import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatsAppButton />

      {/* Bonne arrivée ! */}
      <Section id="accueil">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-widest px-4 py-1 text-[10px] md:text-xs">
                Bienvenue
              </Badge>
              <h2 className="text-fluid-4xl font-heading font-bold leading-tight">
                Bonne arrivée à <br className="hidden md:block" /> l&apos;Hôtel de la Liberté
              </h2>
            </div>
            
            <div className="space-y-6 text-fluid-base text-muted-foreground leading-relaxed">
              <p>
                L’hôtel de la Liberté jouit d’une très bonne situation : le quartier calme et central de <strong>Paspanga</strong> à la fois populaire et commerçant… vous y vous sentirez bien.
              </p>
              <p>
                À quelques pas de l’hôtel, quelques commerces, maquis et une pharmacie pourront vous être utiles. Sur l’avenue, vous pourrez trouver des taxis pour vos déplacements en ville.
              </p>
              <p className="font-medium text-foreground">
                Le centre ville (Rond point des Nations Unies) n&apos;est qu&apos;à 5 mn, l&apos;aéroport à 10 mn ! Bref, une place de choix !
              </p>
              <p className="italic border-l-2 border-primary/30 pl-4 py-1">
                L&apos;hôtel de la Liberté : le lieu idéal que vous soyez en tourisme, en affaire ou en mission associative.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image src="/section/Section Bon arriver/recommander par/logo bradt.png" alt="Bradt" width={80} height={40} className="h-8 md:h-10 w-auto object-contain" />
              </div>
              <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image src="/section/Section Bon arriver/recommander par/logo lonely-planet.png" alt="Lonely Planet" width={100} height={40} className="h-8 md:h-10 w-auto object-contain" />
              </div>
              <div className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image src="/section/Section Bon arriver/recommander par/logoRoutard_guide.png" alt="Guide du Routard" width={100} height={40} className="h-8 md:h-10 w-auto object-contain" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 order-1 lg:order-2">
            <div className="space-y-3 md:space-y-4 pt-6 md:pt-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
              >
                <Image src="/section/Section Bon arriver/fille tenant un plateau et servant la boisson a des hommes blanc.jpg" alt="Accueil" fill className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
              >
                <Image src="/section/Section Bon arriver/couloir avec relique africain.jpg" alt="Accueil" fill className="object-cover" />
              </motion.div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
              >
                <Image src="/section/Section Bon arriver/fille tenant un plateau et servant la boisson.jpg" alt="Accueil" fill className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
              >
                <Image src="/section/Section Bon arriver/escalier avec relique africain.jpg" alt="Accueil" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <RoomSection />

      {/* Bar Snack Restaurant */}
      <Section id="restaurant" className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <Image src="/section/Section Bar Snack Restaurant/une terrasse avec 2 arbres et en dessous d'eux des tables.jpg" alt="Restaurant" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg lg:mt-8">
              <Image src="/section/Section Bar Snack Restaurant/Un mix de blanc et de nois dans un bar.jpg" alt="Restaurant" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg lg:-mt-8">
              <Image src="/section/Section Bar Snack Restaurant/Plusieurs Blanc assis autour d'une table.jpg" alt="Restaurant" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <Image src="/section/Section Bar Snack Restaurant/Une noir qui remplie un cahier surement les compte.jpg" alt="Restaurant" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-widest px-4 py-1 text-[10px] md:text-xs">
                Saveurs & Détente
              </Badge>
              <h2 className="text-fluid-3xl font-heading font-bold leading-tight">
                Bar Snack Restaurant
              </h2>
            </div>
            <div className="space-y-6 text-fluid-base text-muted-foreground leading-relaxed">
              <p>
                Situé dans le jardin de l’hôtel, le bar-restaurant vous permettra de prendre votre petit-déjeuner, un verre ou votre repas sur la terrasse ventilée ou sous les paillottes.
              </p>
              <p>
                La carte propose plusieurs entrées et plats dont le célèbre <strong>filet de Zébu</strong>. Un moment de convivialité authentique dans un cadre verdoyant.
              </p>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                <p className="font-bold text-foreground text-center lg:text-left">
                  Nous organisons sur commande vos pauses-café, repas d&apos;affaires et repas de groupes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Salle de réunions */}
      <Section id="reunion" className="bg-muted/30">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 mb-12 md:mb-16 px-4">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-widest px-4 py-1 text-[10px] md:text-xs">
              Affaires & Événements
            </Badge>
            <h2 className="text-fluid-3xl font-heading font-bold">Salle de réunions</h2>
          </div>
          <p className="text-fluid-base text-muted-foreground leading-relaxed max-w-prose">
            Pour vos séminaires, l’hôtel dispose d’une salle de réunions ou de conférences de 10 à 40 places, climatisée et ventilée, avec tables, chaises, paperboard, vidéo-projecteur. 
            Un groupe électrogène prend le relais en cas de coupures du réseau électrique pour garantir la continuité de vos travaux.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
          {["salle de banquet .jpg", "salle de banquet 2.jpg", "salle de banquet.jpg", "salle de reunion.jpg"].map((img, i) => (
            <div key={i} className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <Image src={`/section/Section Salle de Reunion/${img}`} alt="Réunion" fill className="object-cover" />
            </div>
          ))}
        </div>
      </Section>

      {/* Tourisme */}
      <Section id="tourisme" className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4 text-center lg:text-left">
              <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-widest px-4 py-1 text-[10px] md:text-xs">
                Exploration
              </Badge>
              <h2 className="text-fluid-3xl font-heading font-bold leading-tight">
                Découvrez le <br className="hidden md:block" /> Burkina Faso
              </h2>
            </div>
            <div className="space-y-6 text-fluid-base text-muted-foreground leading-relaxed">
              <p>
                Non loin de l&apos;hôtel, une succession de barrages s&apos;étend sur plusieurs kilomètres où il est agréable de se promener au coucher du soleil.
              </p>
              <p>
                Par notre agence partenaire <strong>Couleurs d&apos;Afrique</strong>, l’hôtel pourra aussi vous louer des véhicules 4x4, des berlines ou des minibus et organiser des circuits en brousse.
              </p>
              <div className="pt-2 text-center lg:text-left">
                <Link 
                  href="http://www.couleurs-afrique.com" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline min-h-11"
                >
                  Visiter Couleurs d&apos;Afrique <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4 order-1 lg:order-2">
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <Image src="/section/Section Tourisme/un elephant dans une jungle.jpg" alt="Tourisme" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg lg:mt-8">
              <Image src="/section/Section Tourisme/des 4x4 Blanc.jpg" alt="Tourisme" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg lg:-mt-8">
              <Image src="/section/Section Tourisme/une grande piscine.jpg" alt="Tourisme" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
              <Image src="/section/Section Tourisme/Des blanc faisant du cyclisme dans la nature.jpg" alt="Tourisme" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <ContactSection />

      {/* Partners */}
      <Section className="bg-background border-t">
        <div className="flex flex-col items-center space-y-12">
          <h3 className="text-fluid-xl font-heading font-bold text-center italic max-w-2xl px-4">
            « Un très bon endroit pour commencer au Burkina »
            <span className="block text-fluid-xs font-sans not-italic text-muted-foreground mt-2">(Vu sur Tripadvisor)</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-60 px-4">
            <Image src="/section/Section se sentent bien chez nous/action contre la fain.jpg" alt="ACF" width={120} height={60} className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <Image src="/section/Section se sentent bien chez nous/cna.jpg" alt="CNA" width={120} height={60} className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <Image src="/section/Section se sentent bien chez nous/medecins sans frontiere.jpg" alt="MSF" width={120} height={60} className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            <Image src="/section/Section se sentent bien chez nous/medicus.jpg" alt="Medicus" width={120} height={60} className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="bg-muted/10">
        <div className="text-center mb-12 md:mb-16 space-y-4 px-4">
          <h2 className="text-fluid-3xl font-heading font-bold">Quelques photos...</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 px-2 sm:px-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer group"
            >
              <Image 
                src={`/section/Section quelque photo/${String(i + 1).padStart(2, '0')}.jpg`} 
                alt={`Photo ${i + 1}`} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 md:py-16 border-t border-white/5 safe-area-pb">
        <div className="container-px flex flex-col items-center gap-12">
          <div className="flex flex-col items-center space-y-3">
            <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-primary uppercase">Hôtel de la Liberté</span>
            <p className="text-sm text-secondary-foreground/60">Ouagadougou, Burkina Faso</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-xs uppercase tracking-widest hover:text-primary transition-colors min-h-11 flex items-center">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center space-y-4 border-t border-white/10 pt-8 w-full">
            <p className="text-xs text-secondary-foreground/40 text-center uppercase tracking-widest font-medium">
              © 2026 Hôtel de la Liberté. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const navItems = [
  { name: "Accueil", href: "#accueil" },
  { name: "Chambres", href: "#chambres" },
  { name: "Bar-resto", href: "#restaurant" },
  { name: "Réunions", href: "#reunion" },
  { name: "Tourisme", href: "#tourisme" },
  { name: "Contact", href: "#contact" },
];
