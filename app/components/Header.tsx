'use client';

import { Menu, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useLanguage();
  
  const navItems = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.gallery'), href: "#gallery" },
    { name: t('nav.instructions'), href: "#instructions" },
    { name: t('nav.products'), href: "#products" },
    { name: t('nav.testimonials'), href: "#testimonials" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl tracking-tight">Harem Center</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span>(+964)7504614092</span>
            </a>
            <LanguageSwitcher />
            <Button>{t('nav.book_now')}</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg ml-4 text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-6 border-t border-border">
                  <a href="tel:+1234567890" className="flex items-center gap-2 mb-4 ml-4">
                    <Phone className="h-4 w-4" />
                    <span>(123) 456-7890</span>
                  </a>
                  <div className="mb-4 ml-4">
                    <LanguageSwitcher />
                  </div>
                  <Button className="w-full">{t('nav.book_now')}</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
