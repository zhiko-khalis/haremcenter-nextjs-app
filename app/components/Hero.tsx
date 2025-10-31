'use client';

import { Button } from "./ui/button";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1683717909401-78ab2cbe178f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwaGFpciUyMGV4dGVuc2lvbnMlMjB3b21hbnxlbnwxfHx8fDE3NTk5NjA1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Beautiful hair extensions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white/90">
              {t('hero.subtitle')}
            </span>
          </div>
          <h1 className="text-5xl md:text-[53px] text-white mb-6 ">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10"
            >
              {t('hero.cta')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl text-white mb-1">
                10+
              </div>
              <div className="text-white/70">
                {t('hero.years_experience')}
              </div>
            </div>
            <div>
              <div className="text-3xl text-white mb-1">
                5000+
              </div>
              <div className="text-white/70">{t('hero.happy_clients')}</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-1">
                100%
              </div>
              <div className="text-white/70">
                {t('hero.premium_quality')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}