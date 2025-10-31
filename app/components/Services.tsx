'use client';

import { Sparkles, Clock, Shield, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.hair_transplant'),
      description: t('services.hair_transplant_desc'),
      image: "/222.jpeg",
      duration: "6-8 hours",
      price: "From $2000"
    },
    {
      title: t('services.eyebrow_transplant'),
      description: t('services.eyebrow_transplant_desc'),
      image: "/111.jpg",
      duration: "3-4 hours",
      price: "From $1200"
    },
    {
      title: t('services.mustache_transplant'),
      description: t('services.mustache_transplant_desc'),
      image: "333.jpeg",
      duration: "4-5 hours",
      price: "From $1500"
    },
    {
      title: t('services.laser'),
      description: t('services.laser_desc'),
      image: "444.jpeg",
      duration: "1-2 hours",
      price: "From $300"
    },
    {
      title: t('services.hair_injections'),
      description: t('services.hair_injections_desc'),
      image: "555.jpeg",
      duration: "1-2 hours",
      price: "From $400"
    },
    {
      title: t('services.face_skin_beauty'),
      description: t('services.face_skin_beauty_desc'),
      image: "666.jpeg",
      duration: "2-3 hours",
      price: "From $500"
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Advanced Techniques",
      description: "State-of-the-art transplant and cosmetic procedures"
    },
    {
      icon: Clock,
      title: "Long Lasting Results",
      description: "Permanent solutions with natural-looking outcomes"
    },
    {
      icon: Shield,
      title: "Safe & Certified",
      description: "Licensed professionals with proven track records"
    },
    {
      icon: Star,
      title: "Expert Surgeons",
      description: "Board-certified specialists with years of experience"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-primary">{t('services.title')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">{t('services.title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white mb-2">{service.title}</h3>
                  <div className="flex items-center justify-between text-white/90 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {service.duration}
                    </span>
                    <span>{service.price}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
