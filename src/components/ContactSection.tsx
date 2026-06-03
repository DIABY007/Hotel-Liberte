"use client";

import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Navigation, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <Section id="contact" className="bg-secondary text-secondary-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-8 order-1 lg:order-1">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-fluid-3xl font-heading font-bold">Nous trouver</h2>
            <p className="text-fluid-base text-secondary-foreground/70 max-w-md mx-auto lg:mx-0">
              L&apos;Hôtel de la Liberté est idéalement situé au cœur de Ouagadougou. Utilisez la carte pour planifier votre itinéraire.
            </p>
          </div>

          <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[300px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.146872560237!2d-1.566463914357278!3d12.238332957107938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2e99cd7a5ece9f%3A0x8d28f57a89b0c593!2zSMO0dGVsIExpYmVydMOp!5e0!3m2!1sfr!2sde!4v1780461224909!5m2!1sfr!2sde" 
              className="absolute inset-0 w-full h-full pointer-events-auto"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <MapPin className="size-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Adresse</h4>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                  Av. de la Liberté – Paspanga, secteur 12<br />
                  02 BP 5098 Ouagadougou
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Phone className="size-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Téléphone</h4>
                <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                  +226 25 33 23 63<br />
                  +226 72 22 22 12
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-background text-foreground border-none shadow-2xl overflow-hidden order-2 lg:order-2">
          <CardContent className="p-8 md:p-12 flex flex-col items-center text-center justify-center h-full space-y-8">
            <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MessageCircle className="size-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-fluid-2xl font-heading font-bold">Une question ?</h3>
              <p className="text-fluid-base text-muted-foreground leading-relaxed">
                Vous avez besoin d&apos;un renseignement particulier, d&apos;un devis pour un séminaire ou d&apos;une demande spéciale ? 
                Contactez-nous directement sur WhatsApp pour une réponse rapide.
              </p>
            </div>

            <Button 
              onClick={() => window.open('https://wa.me/22672222212?text=Bonjour%2C%20j%27ai%20une%20question%20concernant%20vos%20services.', '_blank')}
              className="w-full h-16 text-lg font-bold uppercase tracking-widest shadow-xl shadow-primary/20 gap-3"
            >
              <MessageCircle className="size-6" /> Discuter avec nous
            </Button>
            
            <div className="pt-4 space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ou par email</p>
              <a href="mailto:hotelliberte@gmail.com" className="text-primary font-medium hover:underline">hotelliberte@gmail.com</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
