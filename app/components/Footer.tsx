'use client';

import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">Harem Center</h3>
            <p className="text-primary-foreground/80 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/center__harem/?hl=en" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/photo.php?fbid=1140126184787904&id=100063715989969&set=a.865988918868300" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-primary-foreground transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary-foreground transition-colors">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary-foreground transition-colors">
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>{t('services.tape_in')}</li>
              <li>{t('services.keratin')}</li>
              <li>{t('services.micro_link')}</li>
              <li>{t('services.clip_in')}</li>
              <li>Free Consultations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Kurdistan-Erbil<br />Kerkuk road, CA 90210</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary-foreground transition-colors">
                (+964)7504614092
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:hello@luxelocks.com" className="hover:text-primary-foreground transition-colors">
                  haremcenter@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
          <p>© 2025 Harem Hair Transplant Center. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
