"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const phoneNumber = "22672222212"; // Numéro de l'hôtel (à adapter si besoin)
  const message = encodeURIComponent("Bonjour Hôtel de la Liberté, je souhaiterais avoir des informations pour une réservation.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-[9999] pointer-events-auto",
        "flex items-center justify-center size-14 md:size-16 rounded-full",
        "bg-[#25D366] text-white shadow-2xl shadow-green-500/30",
        "hover:bg-[#20ba5a] transition-transform active:scale-95"
      )}
      title="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="size-8" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
      </span>
    </a>
  );
}
