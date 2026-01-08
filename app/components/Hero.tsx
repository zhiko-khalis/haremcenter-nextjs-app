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
          src="/drharemcenterrrr.svg"
          alt="Beautiful hair extensions"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Mobile Top Content */}
      <div className="absolute top-20 left-0 right-0 z-10 md:hidden">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white/90">
                {t('hero.subtitle')}
              </span>
            </div>
            <h1 className="text-5xl text-white mb-6">
              {t('hero.title')}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="hidden md:inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white/90">
              {t('hero.subtitle')}
            </span>
          </div>
          <h1 className="hidden md:block text-5xl md:text-[53px] text-white mb-6 ">
            {t('hero.title')}
          </h1>
          <p className="hidden md:block text-xl text-white/90 mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="hidden md:flex flex-col sm:flex-row gap-4">
            
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10"
            >
              {t('hero.cta')}
            </Button>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
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
          </div> */}
        </div>
      </div>

      {/* Mobile Bottom Content */}
      <div className="absolute bottom-24 left-0 right-0 z-10 md:hidden">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10"
              >
                {t('hero.cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}