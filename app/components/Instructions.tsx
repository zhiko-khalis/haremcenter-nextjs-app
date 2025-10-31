'use client';

import { CheckCircle, Shield, AlertTriangle, X, Calendar, Sun, Utensils, FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useLanguage } from "../contexts/LanguageContext";
import React from "react";

export function Instructions() {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  
  const instructionCategories = [
    {
      id: "before-surgery",
      title: t('instructions.before_surgery'),
      icon: Calendar,
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-800",
      image: "/Hair Implantation.jpeg",
      items: [
        t('instructions.before_surgery_item1'),
        t('instructions.before_surgery_item2'),
        t('instructions.before_surgery_item3'),
        t('instructions.before_surgery_item4'),
        t('instructions.before_surgery_item5')
      ]
    },
    {
      id: "first-day",
      title: t('instructions.first_day'),
      icon: Sun,
      color: "bg-green-50 border-green-200",
      textColor: "text-green-800",
      image: "/Hair Transplant In Turkey.jpeg",
      items: [
        t('instructions.first_day_item1'),
        t('instructions.first_day_item2'),
        t('instructions.first_day_item3'),
        t('instructions.first_day_item4'),
        t('instructions.first_day_item5')
      ]
    },
    {
      id: "after-surgery",
      title: t('instructions.after_surgery'),
      icon: Shield,
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-800",
      image: "/Thick Hair.jpeg",
      items: [
        t('instructions.after_surgery_item1'),
        t('instructions.after_surgery_item2'),
        t('instructions.after_surgery_item3'),
        t('instructions.after_surgery_item4'),
        t('instructions.after_surgery_item5')
      ]
    },
    {
      id: "food-drinks",
      title: t('instructions.food_drinks'),
      icon: Utensils,
      color: "bg-orange-50 border-orange-200",
      textColor: "text-orange-800",
      image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2070&auto=format&fit=crop",
      items: [
        t('instructions.food_drinks_item1'),
        t('instructions.food_drinks_item2'),
        t('instructions.food_drinks_item3'),
        t('instructions.food_drinks_item4'),
        t('instructions.food_drinks_item5')
      ]
    },
    {
      id: "additional-notes",
      title: t('instructions.additional_notes'),
      icon: FileText,
      color: "bg-red-50 border-red-200",
      textColor: "text-red-800",
      image: "/Bamboo Silica for Hair Growth_ Benefits, Side Effects & Usage Guide.jpeg",
      items: [
        t('instructions.additional_notes_item1'),
        t('instructions.additional_notes_item2'),
        t('instructions.additional_notes_item3'),
        t('instructions.additional_notes_item4'),
        t('instructions.additional_notes_item5')
      ]
    }
  ];

  return (
    <section id="instructions" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-medium">{t('instructions.title')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            {t('instructions.subtitle')}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t('instructions.description')}
          </p>
        </div>

        {/* Instruction Category Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {instructionCategories.map((category) => {
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => { setSelectedId(category.id); setOpen(true); }}
                className="text-left cursor-pointer"
              >
                <Card className={`overflow-hidden ${category.color} border-2 hover:shadow-xl transition-shadow cursor-pointer`}>
                  <div className="relative h-56">
                    <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                        <category.icon className={`h-6 w-6 ${category.textColor}`} />
                      </div>
                      <h3 className="text-white text-xl font-semibold drop-shadow">{category.title}</h3>
                    </div>
                  </div>
                </Card>
              </button>
            );
          })}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-lg">
            {(() => {
              const selected = instructionCategories.find(c => c.id === selectedId);
              if (!selected) return null;
              const Icon = selected.icon;
              return (
                <div>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                        <Icon className={`h-5 w-5 ${selected.textColor}`} />
                      </span>
                      <span>{selected.title}</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-6 space-y-3">
                    {selected.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </span>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
