'use client';

import { Package, Star, Shield, Award, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

export function Products() {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 'shampoo',
      title: t('products.shampoo'),
      description: t('products.shampoo_desc'),
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Hair Care",
      subcategories: [
        t('products.shampoo_sub1'),
        t('products.shampoo_sub2'),
        t('products.shampoo_sub3'),
        t('products.shampoo_sub4')
      ]
    },
    {
      id: 'lotion',
      title: t('products.lotion'),
      description: t('products.lotion_desc'),
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Treatment",
      subcategories: [
        t('products.lotion_sub1'),
        t('products.lotion_sub2'),
        t('products.lotion_sub3'),
        t('products.lotion_sub4')
      ]
    },
    {
      id: 'vitamin',
      title: t('products.vitamin'),
      description: t('products.vitamin_desc'),
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Supplements",
      subcategories: [
        t('products.vitamin_sub1'),
        t('products.vitamin_sub2'),
        t('products.vitamin_sub3'),
        t('products.vitamin_sub4')
      ]
    },
    {
      id: 'spray',
      title: t('products.spray'),
      description: t('products.spray_desc'),
      image: "https://images.unsplash.com/photo-1594736797933-d0c0b1b4b2a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Styling",
      subcategories: [
        t('products.spray_sub1'),
        t('products.spray_sub2'),
        t('products.spray_sub3'),
        t('products.spray_sub4')
      ]
    },
    {
      id: 'meso',
      title: t('products.meso'),
      description: t('products.meso_desc'),
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Treatment",
      subcategories: [
        t('products.meso_sub1'),
        t('products.meso_sub2'),
        t('products.meso_sub3'),
        t('products.meso_sub4')
      ]
    },
    {
      id: 'xso',
      title: t('products.xso'),
      description: t('products.xso_desc'),
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Treatment",
      subcategories: [
        t('products.xso_sub1'),
        t('products.xso_sub2'),
        t('products.xso_sub3'),
        t('products.xso_sub4')
      ]
    },
    {
      id: 'gel',
      title: t('products.gel'),
      description: t('products.gel_desc'),
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Styling",
      subcategories: [
        t('products.gel_sub1'),
        t('products.gel_sub2'),
        t('products.gel_sub3'),
        t('products.gel_sub4')
      ]
    },
    {
      id: 'filler',
      title: t('products.filler'),
      description: t('products.filler_desc'),
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Cosmetic",
      subcategories: [
        t('products.filler_sub1'),
        t('products.filler_sub2'),
        t('products.filler_sub3'),
        t('products.filler_sub4')
      ]
    },
    {
      id: 'botox',
      title: t('products.botox'),
      description: t('products.botox_desc'),
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      category: "Cosmetic",
      subcategories: [
        t('products.botox_sub1'),
        t('products.botox_sub2'),
        t('products.botox_sub3'),
        t('products.botox_sub4')
      ]
    },
  ];

  const features = [
    {
      icon: Package,
      title: "Premium Quality",
      description: "High-quality products from trusted brands"
    },
    {
      icon: Star,
      title: "Expert Selection",
      description: "Curated by professional hair specialists"
    },
    {
      icon: Shield,
      title: "Safe & Tested",
      description: "All products are dermatologically tested"
    },
    {
      icon: Award,
      title: "Professional Grade",
      description: "Salon-quality products for home use"
    }
  ];

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/5 rounded-full mb-4">
            <span className="text-primary">{t('products.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">{t('products.title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-20">
          {products.map((product) => (
            <Dialog key={product.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white text-sm font-medium mb-1">{product.title}</h3>
                      <div className="flex items-center justify-between text-white/90 text-xs">
                        <span className="bg-primary/20 px-2 py-1 rounded-full text-xs">
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{product.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3">
                        <span className="text-primary text-sm font-medium">{product.category}</span>
                      </div>
                      <p className="text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">{t('products.subcategories')}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.subcategories.map((subcategory, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                          <Package className="h-4 w-4 text-primary" />
                          <span className="text-sm">{subcategory}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Features Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
