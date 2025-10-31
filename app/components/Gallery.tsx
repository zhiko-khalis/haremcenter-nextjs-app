"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export function Gallery() {
  const { t } = useLanguage();
  const galleryImages = [
    {
      category: "all",
      before: "/images/IMG_4872.PNG",
      type: "Tape-In Extensions"
    },
    {
      category: "all",
      before: "/images/IMG_4871.PNG",
      type: "DHI Hair Transplant"
    },
    {
      category: "all",
      before: "/images/IMG_4870.PNG",
      type: "Micro-Link"
    },
    {
      category: "all",
      before: "/images/IMG_4873.PNG",
      type: "Beard Hair Transplant"
    },
    {
      category: "all",
      before: "/images/IMG_4874.PNG",
      type: "Color Blend"
    },
    {
      category: "all",
      before: "/images/IMG_4875.PNG",
      type: "Crown Hair Transplant"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-primary">{t('gallery.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">{t('gallery.title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('gallery.description')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-muted cursor-pointer"
            >
              <img
                src={image.before}
                alt={image.type}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg">{image.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">{t('gallery.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <span>{t('gallery.view_more')}</span>
              <span>→</span>
            </Link>
            {/* <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <span>Book Your Transformation</span>
              <span>→</span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
