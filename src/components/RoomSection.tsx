"use client";

import { Section } from "./Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants, Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Tv, Wind, ShieldCheck, Users, Calendar, MessageCircle, Clock, X } from "lucide-react";
import * as React from "react";

const roomFeatures = [
  { icon: ShieldCheck, text: "Salle de bain intérieure" },
  { icon: ShieldCheck, text: "Armoire & Bureau" },
  { icon: Tv, text: "Téléviseur" },
  { icon: ShieldCheck, text: "Moustiquaire" },
  { icon: Wifi, text: "Accès WiFi gratuit" },
  { icon: Wind, text: "Ventilation/Climatisation" },
];

interface RoomOption {
  type: string;
  priceFcfa: string;
  priceEuro: string;
}

interface Room {
  title: string;
  description: string;
  options: RoomOption[];
  images: string[];
  badge: string;
}

const rooms: Room[] = [
  {
    title: "Chambre Standard",
    description: "Confortable et économique (1 à 2 pers)",
    options: [
      { type: "Standard ventilée", priceFcfa: "13 000 - 15 000", priceEuro: "20 - 22,90" },
      { type: "Standard climatisée", priceFcfa: "17 500", priceEuro: "27" },
    ],
    images: ["/section/Section Chambre/Chambre standard .jpg", "/section/Section Chambre/Chambre standard image 2.jpg"],
    badge: "Populaire",
  },
  {
    title: "Chambre Supérieure",
    description: "Plus spacieuse, Executive room (1 à 2 pers)",
    options: [
      { type: "Supérieure climatisée (Double/Twin)", priceFcfa: "25 000", priceEuro: "38" },
      { type: "Matelas supplémentaire", priceFcfa: "3 000", priceEuro: "4,60" },
    ],
    images: ["/section/Section Chambre/chambre superieur image 1.jpg", "/section/Section Chambre/chambre superieur image 2.jpg"],
    badge: "Executive",
  },
  {
    title: "Suite Familiale",
    description: "Idéal pour les familles (2 à 4 pers)",
    options: [
      { type: "Suite familiale climatisée", priceFcfa: "31 500", priceEuro: "49" },
    ],
    images: ["/section/Section Chambre/Suite Familia image 1.jpg", "/section/Section Chambre/Suite Familial image 2.jpg"],
    badge: "Premium",
  },
];

export function RoomSection() {
  const [activeRoom, setActiveRoom] = React.useState<Room | null>(null);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [guests, setGuests] = React.useState("1");
  const [duration, setDuration] = React.useState("1");
  const [arrivalDate, setArrivalDate] = React.useState("");
  const [arrivalTime, setArrivalTime] = React.useState("");

  // Update selected option when room changes
  React.useEffect(() => {
    if (activeRoom) {
      setSelectedOption(activeRoom.options[0].type);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [activeRoom]);

  const handleWhatsApp = () => {
    if (!activeRoom) return;
    const phoneNumber = "22625332363";
    const message = encodeURIComponent(
      `Bonjour Hôtel de la Liberté,\n\nJe souhaite réserver :\n- Chambre : ${activeRoom.title}\n- Option : ${selectedOption}\n- Personnes : ${guests}\n- Arrivée le : ${arrivalDate || "Non précisé"}\n- Vers : ${arrivalTime || "Non précisé"}\n- Durée : ${duration} nuit(s)\n\nMerci de me confirmer la disponibilité.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Section id="chambres" className="bg-muted/30">
      <div className="text-center mb-12 md:mb-16 space-y-4 px-4">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary/30 uppercase tracking-widest text-[10px] md:text-xs">
          Nos Hébergements
        </Badge>
        <h2 className="text-fluid-3xl font-heading font-bold">Nos 26 chambres tout confort</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
        {rooms.map((room, idx) => (
          <Card key={idx} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col">
            <div className="relative h-64 md:h-72 overflow-hidden">
              <Image
                src={room.images[0]}
                alt={room.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary/90 hover:bg-primary text-white backdrop-blur-sm border-none uppercase tracking-widest text-[10px] px-3">
                  {room.badge}
                </Badge>
              </div>
            </div>
            <CardHeader className="space-y-1">
              <CardTitle className="text-fluid-xl font-heading">{room.title}</CardTitle>
              <CardDescription className="text-fluid-xs">{room.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 mt-auto">
              <Separator className="bg-primary/10" />
              <div className="space-y-4">
                {room.options.map((opt, i) => (
                  <div key={i} className="flex justify-between items-center gap-4">
                    <span className="font-medium text-muted-foreground text-fluid-xs leading-tight">{opt.type}</span>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-primary text-fluid-sm">{opt.priceFcfa} FCFA</div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                type="button"
                onClick={() => setActiveRoom(room)}
                className="w-full mt-4 bg-primary text-white rounded-lg uppercase tracking-widest text-[10px] font-bold h-10 shadow-lg shadow-primary/10 hover:bg-primary/90 transition-all pointer-events-auto flex items-center justify-center"
              >
                Détails & Réservation
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      <AnimatePresence>
        {activeRoom && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveRoom(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-3xl bg-background rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={() => setActiveRoom(null)}
                className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 transition-colors"
              >
                <X className="size-6" />
              </button>

              <div className="overflow-y-auto custom-scrollbar">
                <div className="relative h-48 md:h-72">
                  <Image src={activeRoom.images[0]} alt={activeRoom.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Badge className="mb-2 bg-primary text-white border-none">{activeRoom.badge}</Badge>
                      <h3 className="text-2xl md:text-4xl font-heading font-bold">{activeRoom.title}</h3>
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-6 md:p-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                          <Users className="size-3" /> Nombre de personnes
                        </label>
                        <div className="flex gap-2">
                          {["1", "2", "3", "4+"].map((n) => (
                            <button
                              key={n}
                              onClick={() => setGuests(n)}
                              className={cn(
                                "flex-1 py-3 rounded-xl border transition-all font-bold text-sm",
                                guests === n ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" : "border-border hover:border-primary/50"
                              )}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                          <Calendar className="size-3" /> Date et Heure d&apos;arrivée
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <Input 
                            type="date" 
                            value={arrivalDate}
                            onChange={(e) => setArrivalDate(e.target.value)}
                            className="bg-muted/50 border-none h-12 text-sm font-medium" 
                          />
                          <Input 
                            type="time" 
                            value={arrivalTime}
                            onChange={(e) => setArrivalTime(e.target.value)}
                            className="bg-muted/50 border-none h-12 text-sm font-medium" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                          <Clock className="size-3" /> Durée du séjour (nuits)
                        </label>
                        <div className="flex gap-2">
                          {["1", "2", "3", "5+", "10+"].map((d) => (
                            <button
                              key={d}
                              onClick={() => setDuration(d)}
                              className={cn(
                                "flex-1 py-3 rounded-xl border transition-all font-bold text-sm",
                                duration === d ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" : "border-border hover:border-primary/50"
                              )}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Équipements inclus</label>
                        <div className="grid grid-cols-2 gap-3">
                          {roomFeatures.map((f, i) => (
                            <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50">
                              <f.icon className="size-3.5 text-primary" />
                              <span className="text-[10px] font-bold leading-none">{f.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Choisir votre option</label>
                        <div className="space-y-2">
                          {activeRoom.options.map((opt) => (
                            <button
                              key={opt.type}
                              onClick={() => setSelectedOption(opt.type)}
                              className={cn(
                                "w-full p-4 rounded-xl border text-left transition-all flex justify-between items-center group",
                                selectedOption === opt.type ? "bg-primary/5 border-primary" : "border-border hover:border-primary/30"
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <div className={cn("size-4 rounded-full border-2 flex items-center justify-center transition-colors", selectedOption === opt.type ? "border-primary" : "border-muted-foreground")}>
                                  {selectedOption === opt.type && <div className="size-2 rounded-full bg-primary" />}
                                </div>
                                <span className={cn("font-bold text-xs", selectedOption === opt.type ? "text-primary" : "text-foreground")}>{opt.type}</span>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-xs">{opt.priceFcfa} FCFA</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4"
                  >
                    <Button 
                      onClick={handleWhatsApp}
                      className="w-full h-16 md:h-20 text-lg font-bold uppercase tracking-widest shadow-2xl shadow-primary/30 gap-4"
                    >
                      <MessageCircle className="size-7" /> Confirmer sur WhatsApp
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground mt-4 uppercase tracking-[0.2em]">Réponse généralement en moins de 15 minutes</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="bg-background rounded-3xl p-6 md:p-12 shadow-sm border border-primary/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-fluid-2xl font-heading font-bold">Équipements inclus</h3>
              <p className="text-fluid-base text-muted-foreground leading-relaxed">
                Toutes nos chambres sont conçues pour vous offrir un séjour agréable et serein à Ouagadougou.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {roomFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-muted/30 border border-border/50">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <feature.icon className="size-5" />
                  </div>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
              <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/section/Section Chambre/chambre superieur image 2.jpg" alt="Chambre detail" fill className="object-cover" />
              </div>
              <div className="relative h-28 md:h-32 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/section/Section Chambre/Chambre standard image 2.jpg" alt="Chambre detail" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="relative h-28 md:h-32 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/section/Section Chambre/Suite Familial image 2.jpg" alt="Chambre detail" fill className="object-cover" />
              </div>
              <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/section/Section Chambre/Chambre standard .jpg" alt="Chambre detail" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
