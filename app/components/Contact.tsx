"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-primary">{t('contact.title')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">{t('contact.title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('contact.name')}</Label>
                    <Input id="firstName" placeholder="Zhiko" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('contact.name')}</Label>
                    <Input id="lastName" placeholder="Khalls" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')}</Label>
                  <Input id="email" type="email" placeholder="zhiko@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.phone')}</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tape-in">{t('services.tape_in')}</SelectItem>
                      <SelectItem value="keratin">{t('services.keratin')}</SelectItem>
                      <SelectItem value="micro-link">{t('services.micro_link')}</SelectItem>
                      <SelectItem value="clip-in">{t('services.clip_in')}</SelectItem>
                      <SelectItem value="consultation">Free Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your hair goals..."
                    className="min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  {t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Kurdistan-Erbil<br />
                      Kerkuk Road, CA 90210
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:hello@luxelocks.com" className="hover:text-primary transition-colors">
                        haremcenter@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Saturday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Friday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/center__harem/?hl=en" 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-primary" />
                  </a>
                  <a 
                    href="https://www.facebook.com/photo.php?fbid=1140126184787904&id=100063715989969&set=a.865988918868300" 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
