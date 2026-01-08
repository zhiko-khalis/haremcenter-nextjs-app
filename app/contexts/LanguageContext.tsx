'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ku' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'ku', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.products': 'Products',
        'nav.gallery': 'Gallery',
        'nav.instructions': 'Instructions',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'nav.book_now': 'Book Now',
        
        // Hero Section
        'hero.title': 'Transform Your Look with Expert Hair Transplants',
        'hero.subtitle': 'Redefining Confidence with Premium Hair Transplants in Kurdistan-Erbil',
        'hero.cta': 'Book Your Consultation',
        'hero.years_experience': 'Years Experience',
        'hero.happy_clients': 'Happy Clients',
        'hero.premium_quality': 'Premium Quality',
        
        // Services
        'services.title': 'Our Services',
        'services.subtitle': 'Professional hair transplant and cosmetic services tailored to your needs',
        'services.hair_transplant': 'Hair Transplant',
        'services.hair_transplant_desc': 'Advanced FUE and FUT techniques for permanent hair restoration',
        'services.eyebrow_transplant': 'Eyebrow Transplant',
        'services.eyebrow_transplant_desc': 'Natural-looking eyebrow restoration using micro-grafting techniques',
        'services.mustache_transplant': 'Mustache Transplant',
        'services.mustache_transplant_desc': 'Professional mustache restoration for fuller facial hair',
        'services.laser': 'Laser Treatment',
        'services.laser_desc': 'Advanced laser therapy for hair growth stimulation and skin rejuvenation',
        'services.hair_injections': 'Hair Injections',
        'services.hair_injections_desc': 'Plasma, Mesotherapy, Hair Filler, and Exosome treatments for hair restoration',
        'services.face_skin_beauty': 'Face & Skin Beauty',
        'services.face_skin_beauty_desc': 'Plasma, Mesotherapy, Hydrafacial, Botox, and Filler treatments for facial enhancement',
        
        // Gallery
        'gallery.title': 'Our Work',
        'gallery.subtitle': 'See the beautiful transformations we create',
        'gallery.portfolio': 'Portfolio',
        'gallery.badge': 'Portfolio',
        'gallery.description': 'See the stunning results we\'ve achieved for our clients. Each transformation is a testament to our expertise and dedication.',
        'gallery.view_more': 'View More',
        
        // Products
        'products.title': 'Our Products',
        'products.subtitle': 'Premium hair care products and accessories for all your needs',
        'products.badge': 'Products',
        'products.shampoo': 'Shampoo',
        'products.shampoo_desc': 'Professional shampoos for all hair types and conditions',
        'products.lotion': 'Lotion',
        'products.lotion_desc': 'Specialized lotions for hair treatment and care',
        'products.vitamin': 'Vitamin',
        'products.vitamin_desc': 'Essential vitamins and supplements for hair health',
        'products.spray': 'Spray',
        'products.spray_desc': 'Hair sprays and styling products for perfect hold',
        'products.meso': 'Meso',
        'products.meso_desc': 'Mesotherapy treatments for hair restoration',
        'products.xso': 'Xso',
        'products.xso_desc': 'Advanced exosome treatments for hair growth',
        'products.gel': 'Gel',
        'products.gel_desc': 'Styling gels for various hair styling needs',
        'products.filler': 'Filler',
        'products.filler_desc': 'Hair filler treatments for volume and density',
        'products.botox': 'Botox',
        'products.botox_desc': 'Botox treatments for facial and hair care',
        
        // Product Subcategories
        'products.subcategories': 'Subcategories',
        'products.shampoo_sub1': 'Anti-Dandruff Shampoo',
        'products.shampoo_sub2': 'Moisturizing Shampoo',
        'products.shampoo_sub3': 'Volumizing Shampoo',
        'products.shampoo_sub4': 'Color-Protecting Shampoo',
        'products.lotion_sub1': 'Hair Growth Lotion',
        'products.lotion_sub2': 'Scalp Treatment Lotion',
        'products.lotion_sub3': 'Anti-Hair Loss Lotion',
        'products.lotion_sub4': 'Moisturizing Lotion',
        'products.vitamin_sub1': 'Biotin Supplements',
        'products.vitamin_sub2': 'Hair Growth Vitamins',
        'products.vitamin_sub3': 'Multivitamin Complex',
        'products.vitamin_sub4': 'Iron & Zinc Supplements',
        'products.spray_sub1': 'Hair Spray',
        'products.spray_sub2': 'Heat Protection Spray',
        'products.spray_sub3': 'Volumizing Spray',
        'products.spray_sub4': 'Leave-in Conditioner Spray',
        'products.meso_sub1': 'Mesotherapy Hair Growth',
        'products.meso_sub2': 'Scalp Mesotherapy',
        'products.meso_sub3': 'Anti-Hair Loss Meso',
        'products.meso_sub4': 'Nutrient Mesotherapy',
        'products.xso_sub1': 'Exosome Hair Growth',
        'products.xso_sub2': 'Stem Cell Exosomes',
        'products.xso_sub3': 'Anti-Aging Exosomes',
        'products.xso_sub4': 'Regenerative Exosomes',
        'products.gel_sub1': 'Styling Gel',
        'products.gel_sub2': 'Hair Growth Gel',
        'products.gel_sub3': 'Moisturizing Gel',
        'products.gel_sub4': 'Anti-Frizz Gel',
        'products.filler_sub1': 'Hair Volume Filler',
        'products.filler_sub2': 'Scalp Filler',
        'products.filler_sub3': 'Density Filler',
        'products.filler_sub4': 'Thickness Filler',
        'products.botox_sub1': 'Scalp Botox',
        'products.botox_sub2': 'Hair Growth Botox',
        'products.botox_sub3': 'Anti-Sweat Botox',
        'products.botox_sub4': 'Therapeutic Botox',
        
        // Instructions
        'instructions.title': 'Hair Transplant Instructions',
        'instructions.subtitle': 'Complete Care Guidelines for Hair Transplant Surgery',
        'instructions.description': 'Follow these comprehensive instructions to ensure optimal healing and successful hair transplant results.',
        
        // Main Categories
        'instructions.before_surgery': 'Instructions Before Hair Transplant Surgery',
        'instructions.first_day': 'Instructions for the First Day After Hair Transplant Surgery',
        'instructions.after_surgery': 'Instructions to Follow After Hair Transplant Surgery',
        'instructions.food_drinks': 'Instructions About Foods and Drinks',
        'instructions.additional_notes': 'Additional Important Notes',
        
        // Before Surgery Items
        'instructions.before_surgery_item1': 'Stop smoking and alcohol consumption at least 2 weeks before surgery',
        'instructions.before_surgery_item2': 'Avoid blood-thinning medications (aspirin, ibuprofen) 1 week before',
        'instructions.before_surgery_item3': 'Get adequate sleep and maintain a healthy diet',
        'instructions.before_surgery_item4': 'Wash your hair thoroughly the night before surgery',
        'instructions.before_surgery_item5': 'Arrive at the clinic with clean, dry hair',
        
        // First Day Items
        'instructions.first_day_item1': 'Keep your head elevated while sleeping (use 2-3 pillows)',
        'instructions.first_day_item2': 'Apply ice packs to reduce swelling (15 minutes every hour)',
        'instructions.first_day_item3': 'Take prescribed medications as directed by your doctor',
        'instructions.first_day_item4': 'Avoid touching or scratching the transplanted area',
        'instructions.first_day_item5': 'Sleep on your back, avoid sleeping on your side',
        
        // After Surgery Items
        'instructions.after_surgery_item1': 'Gently wash your hair starting from day 3 using recommended shampoo',
        'instructions.after_surgery_item2': 'Avoid strenuous activities and exercise for 2 weeks',
        'instructions.after_surgery_item3': 'Protect your scalp from direct sunlight for 3 months',
        'instructions.after_surgery_item4': 'Attend all follow-up appointments as scheduled',
        'instructions.after_surgery_item5': 'Be patient - hair growth begins after 3-4 months',
        
        // Food & Drinks Items
        'instructions.food_drinks_item1': 'Avoid spicy and hot foods for the first week',
        'instructions.food_drinks_item2': 'Limit caffeine intake for the first 10 days',
        'instructions.food_drinks_item3': 'Increase protein intake to support hair growth',
        'instructions.food_drinks_item4': 'Stay hydrated by drinking plenty of water',
        'instructions.food_drinks_item5': 'Avoid alcohol for at least 2 weeks after surgery',
        
        // Additional Notes Items
        'instructions.additional_notes_item1': 'Scabbing is normal and will fall off naturally',
        'instructions.additional_notes_item2': 'Some hair shedding is expected in the first month',
        'instructions.additional_notes_item3': 'Contact your doctor immediately if you notice signs of infection',
        'instructions.additional_notes_item4': 'Results vary by individual - full results visible after 12 months',
        'instructions.additional_notes_item5': 'Maintain a healthy lifestyle for optimal hair growth',
        
        // Critical Guidelines
        'instructions.critical_guidelines': 'Critical Guidelines',
        'instructions.critical_desc': 'Follow these essential do\'s and don\'ts for optimal results',
        'instructions.dos': 'Do\'s',
        'instructions.donts': 'Don\'ts',
        'instructions.dos_item1': 'Follow all post-operative care instructions carefully',
        'instructions.dos_item2': 'Keep the transplanted area clean and dry',
        'instructions.dos_item3': 'Take prescribed medications on time',
        'instructions.dos_item4': 'Attend all follow-up appointments',
        'instructions.donts_item1': 'Don\'t scratch or pick at scabs',
        'instructions.donts_item2': 'Don\'t expose scalp to direct sunlight',
        'instructions.donts_item3': 'Don\'t engage in strenuous activities',
        'instructions.donts_item4': 'Don\'t smoke or consume alcohol',
        
        // Testimonials
        'testimonials.title': 'What Our Clients Say',
        'testimonials.subtitle': 'Real experiences from satisfied customers',
        
        // Contact
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Ready to transform your look? Contact us today',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        
        // Footer
        'footer.description': 'Premium hair extensions and styling services in Kurdistan-Erbil',
        'footer.follow_us': 'Follow Us',
        'footer.rights': 'All rights reserved',
      },
      ku: {
        // Navigation
        'nav.home': 'سەرەکی',
        'nav.services': 'خزمەتگوزارییەکان',
        'nav.products': 'بەرهەمەکان',
        'nav.gallery': 'گالەری',
        'nav.instructions': 'ڕێنماییەکان',
        'nav.testimonials': 'بەڵگەکان',
        'nav.contact': 'پەیوەندی',
        'nav.book_now': 'نووسینەوە',
        
        // Hero Section
        'hero.title': 'شێوەی خۆت بگۆڕە بە چاندنی قژی پسپۆڕانە',
        'hero.subtitle': 'پێناسەکردنەوەی متمانە بەخۆبوون بە باشترین چاندنی قژ لە کوردستان-هەولێر',
        'hero.cta': 'ڕێکەوتەکەت دابنێ',
        'hero.years_experience': 'ساڵ ئەزموون',
        'hero.happy_clients': 'کڕیاری دڵخۆش',
        'hero.premium_quality': 'جۆری نایاب',
        
        // Services
        'services.title': 'خزمەتگوزارییەکانمان',
        'services.subtitle': 'خزمەتگوزارییەکانی قژکێش و جوانکاری پڕۆفیشناڵ بەگوێرەی پێداویستییەکانت',
        'services.hair_transplant': 'قژکێش',
        'services.hair_transplant_desc': 'تەکنیکی پێشکەوتووی FUE و FUT بۆ گەڕاندنەوەی قژی هەمیشەیی',
        'services.eyebrow_transplant': 'برۆکێش',
        'services.eyebrow_transplant_desc': 'گەڕاندنەوەی برۆی سروشتی بە بەکارهێنانی تەکنیکی میکرۆ-گرافت',
        'services.mustache_transplant': 'سەڵکێش',
        'services.mustache_transplant_desc': 'گەڕاندنەوەی سەڵکی پڕۆفیشناڵ بۆ قژی دەم پڕتر',
        'services.laser': 'چارەسەری لەیزەر',
        'services.laser_desc': 'چارەسەری پێشکەوتووی لەیزەر بۆ هاندانی گەشەی قژ و نوێکردنەوەی پێست',
        'services.hair_injections': 'دەرزی قژ',
        'services.hair_injections_desc': 'چارەسەری پلازما، مێزۆتێراپی، پڕکەری قژ، و ئێکسۆسۆم بۆ گەڕاندنەوەی قژ',
        'services.face_skin_beauty': 'جوانکاری دەم و پێست',
        'services.face_skin_beauty_desc': 'چارەسەری پلازما، مێزۆتێراپی، هایدرافەیشیاڵ، بۆتۆکس، و پڕکەر بۆ باشترکردنی دەم',
        
        // Gallery
        'gallery.title': 'کارەکانمان',
        'gallery.subtitle': 'گۆڕانکارییە جوانەکان ببینە کە دروستیان دەکەین',
        'gallery.portfolio': 'پۆرتفۆلیۆ',
        'gallery.badge': 'پۆرتفۆلیۆ',
        'gallery.description': 'ئەنجامە نایابەکان ببینە کە بەدەستمان هێناوە بۆ کڕیارەکانمان. هەر گۆڕانکارییەک شایەتی کردنی پسپۆڕی و پابەندبوونمانییە.',
        'gallery.view_more': 'زیاتر ببینە',
        
        // Products
        'products.title': 'بەرهەمەکانمان',
        'products.subtitle': 'بەرهەمی چاودێری قژ و ئەکسێسوارەکان بۆ هەموو پێداویستییەکانت',
        'products.badge': 'بەرهەمەکان',
        'products.shampoo': 'شامپۆ',
        'products.shampoo_desc': 'شامپۆی پڕۆفیشناڵ بۆ هەموو جۆرەکانی قژ و دۆخەکان',
        'products.lotion': 'لۆشەن',
        'products.lotion_desc': 'لۆشەنە تایبەتەکان بۆ چارەسەر و چاودێری قژ',
        'products.vitamin': 'ڤیتامین',
        'products.vitamin_desc': 'ڤیتامینە گرنگەکان و تەواوکەرەکان بۆ تەندروستی قژ',
        'products.spray': 'سپڕەی',
        'products.spray_desc': 'سپڕەی قژ و بەرهەمی شێوەدان بۆ گرتنەوەی تەواو',
        'products.meso': 'مێزۆ',
        'products.meso_desc': 'چارەسەری مێزۆتێراپی بۆ گەڕاندنەوەی قژ',
        'products.xso': 'ئێکسۆ',
        'products.xso_desc': 'چارەسەری پێشکەوتووی ئێکسۆسۆم بۆ گەشەی قژ',
        'products.gel': 'گێل',
        'products.gel_desc': 'گێلەکانی شێوەدان بۆ پێداویستییە جیاوازەکانی شێوەدانی قژ',
        'products.filler': 'پڕکەر',
        'products.filler_desc': 'چارەسەری پڕکەری قژ بۆ قەبارە و چڕی',
        'products.botox': 'بۆتۆکس',
        'products.botox_desc': 'چارەسەری بۆتۆکس بۆ چاودێری دەم و قژ',
        
        // Product Subcategories
        'products.subcategories': 'پۆلەکانی ژێرەوە',
        'products.shampoo_sub1': 'شامپۆی دژە قەڵە',
        'products.shampoo_sub2': 'شامپۆی شێدارکەر',
        'products.shampoo_sub3': 'شامپۆی قەبارەدەر',
        'products.shampoo_sub4': 'شامپۆی پارێزەری ڕەنگ',
        'products.lotion_sub1': 'لۆشەنی گەشەی قژ',
        'products.lotion_sub2': 'لۆشەنی چارەسەری سەرەکە',
        'products.lotion_sub3': 'لۆشەنی دژە لەدەستدانی قژ',
        'products.lotion_sub4': 'لۆشەنی شێدارکەر',
        'products.vitamin_sub1': 'تەواوکەری بایۆتین',
        'products.vitamin_sub2': 'ڤیتامینەکانی گەشەی قژ',
        'products.vitamin_sub3': 'کۆمپلێکسی فرەڤیتامین',
        'products.vitamin_sub4': 'تەواوکەری ئاسن و زینک',
        'products.spray_sub1': 'سپڕەی قژ',
        'products.spray_sub2': 'سپڕەی پارێزەری گەرمی',
        'products.spray_sub3': 'سپڕەی قەبارەدەر',
        'products.spray_sub4': 'سپڕەی کۆندیشەنەری ماوە',
        'products.meso_sub1': 'مێزۆتێراپی گەشەی قژ',
        'products.meso_sub2': 'مێزۆتێراپی سەرەکە',
        'products.meso_sub3': 'مێزۆی دژە لەدەستدانی قژ',
        'products.meso_sub4': 'مێزۆتێراپی خۆراک',
        'products.xso_sub1': 'ئێکسۆسۆمی گەشەی قژ',
        'products.xso_sub2': 'ئێکسۆسۆمەکانی خانەی سەرەکی',
        'products.xso_sub3': 'ئێکسۆسۆمەکانی دژە پیری',
        'products.xso_sub4': 'ئێکسۆسۆمەکانی نوێبوونەوە',
        'products.gel_sub1': 'گێلی شێوەدان',
        'products.gel_sub2': 'گێلی گەشەی قژ',
        'products.gel_sub3': 'گێلی شێدارکەر',
        'products.gel_sub4': 'گێلی دژە گەڕەک',
        'products.filler_sub1': 'پڕکەری قەبارەی قژ',
        'products.filler_sub2': 'پڕکەری سەرەکە',
        'products.filler_sub3': 'پڕکەری چڕی',
        'products.filler_sub4': 'پڕکەری قەڵەوەری',
        'products.botox_sub1': 'بۆتۆکسی سەرەکە',
        'products.botox_sub2': 'بۆتۆکسی گەشەی قژ',
        'products.botox_sub3': 'بۆتۆکسی دژە ئارەق',
        'products.botox_sub4': 'بۆتۆکسی چارەسەری',
        
        // Instructions
        'instructions.title': 'ڕێنماییەکانی قژکێش',
        'instructions.subtitle': 'ڕێنماییەکانی چاودێری تەواو بۆ نەشتەرگەری قژکێش',
        'instructions.description': 'ئەم ڕێنماییە تەواوانە بەدواداچوون بکە بۆ دڵنیابوون لە چاکبوونەوەی باشترین و ئەنجامی سەرکەوتووی قژکێش.',
        
        // Main Categories
        'instructions.before_surgery': 'ڕێنماییەکان پێش نەشتەرگەری قژکێش',
        'instructions.first_day': 'ڕێنماییەکان بۆ یەکەم ڕۆژی دوای نەشتەرگەری قژکێش',
        'instructions.after_surgery': 'ڕێنماییەکان بۆ بەدواداچوون دوای نەشتەرگەری قژکێش',
        'instructions.food_drinks': 'ڕێنماییەکان دەربارەی خواردن و خواردنەوە',
        'instructions.additional_notes': 'تێبینیە گرنگەکانی زیاتر',
        
        // Before Surgery Items
        'instructions.before_surgery_item1': 'کۆتایی بە جگەرەکێشان و خواردنەوەی مەی بێنە لانیکەم ٢ هەفتە پێش نەشتەرگەری',
        'instructions.before_surgery_item2': 'ڕێگری لە دەرمانەکانی کەمکردنەوەی خوێن (ئەسپیرین، ئایبوپڕۆفین) ١ هەفتە پێش',
        'instructions.before_surgery_item3': 'خەوی پێویست بەدەست بهێنە و خواردنی تەندروست بپارێزە',
        'instructions.before_surgery_item4': 'قژت بە تەواوی بشوورە شەوی پێش نەشتەرگەری',
        'instructions.before_surgery_item5': 'بە قژی پاک و وشک بگەرە بۆ کلینیک',
        
        // First Day Items
        'instructions.first_day_item1': 'سەرت بەرز بکەرەوە کاتێک دەخەویت (٢-٣ بالش بەکاربهێنە)',
        'instructions.first_day_item2': 'سەڵتەی سارد بەکاربهێنە بۆ کەمکردنەوەی وەرم (١٥ خولەک هەر کاتژمێرێک)',
        'instructions.first_day_item3': 'دەرمانە دەستنیشانکراوەکان وەک دکتۆرەکەت دەیڵێت بەکاربهێنە',
        'instructions.first_day_item4': 'ڕێگری لە دەست لێدان یان خەرەساندنی ناوچەی قژکێشکراو',
        'instructions.first_day_item5': 'لەسەر پشت بخەوە، ڕێگری لە خەوتن لەسەر لایەکان',
        
        // After Surgery Items
        'instructions.after_surgery_item1': 'قژت بە نەرمی بشوورە لە ڕۆژی ٣ەوە دەست پێبکە بە بەکارهێنانی شامپۆی پێشنیارکراو',
        'instructions.after_surgery_item2': 'ڕێگری لە چالاکیە قورسەکان و وەرزش بۆ ٢ هەفتە',
        'instructions.after_surgery_item3': 'سەرەکەت لە ڕووناکی ڕاستەخۆی خۆر بپارێزە بۆ ٣ مانگ',
        'instructions.after_surgery_item4': 'هەموو کاتی چاوپێکەوتنەکان بەدواداچوون بکە وەک ڕێکخراو',
        'instructions.after_surgery_item5': 'سەبر بە - گەشەی قژ لە دوای ٣-٤ مانگ دەست پێدەکات',
        
        // Food & Drinks Items
        'instructions.food_drinks_item1': 'ڕێگری لە خواردنی تیژ و گەرم بۆ یەکەم هەفتە',
        'instructions.food_drinks_item2': 'کەمکردنەوەی کافاین بۆ یەکەم ١٠ ڕۆژ',
        'instructions.food_drinks_item3': 'زیادکردنی پڕۆتین بۆ پشتگیری گەشەی قژ',
        'instructions.food_drinks_item4': 'هێڵەت بە خواردنەوەی زۆر ئاو',
        'instructions.food_drinks_item5': 'ڕێگری لە مەی بۆ لانیکەم ٢ هەفتە دوای نەشتەرگەری',
        
        // Additional Notes Items
        'instructions.additional_notes_item1': 'قەڵەکردن شتێکی ئاساییە و بە سروشتی دەکەوێت',
        'instructions.additional_notes_item2': 'هەندێک لە قژەکان لە یەکەم مانگدا دەکەون',
        'instructions.additional_notes_item3': 'یەکسەر پەیوەندی بە دکتۆرەکەتەوە بکە ئەگەر نیشانەی هەوکردن بینیت',
        'instructions.additional_notes_item4': 'ئەنجامەکان بەپێی کەس جیاوازن - ئەنجامی تەواو لە دوای ١٢ مانگ دەردەکەوێت',
        'instructions.additional_notes_item5': 'ژیانێکی تەندروست بپارێزە بۆ گەشەی باشترینی قژ',
        
        // Critical Guidelines
        'instructions.critical_guidelines': 'ڕێنماییە گرنگەکان',
        'instructions.critical_desc': 'ئەم ڕێنماییە گرنگانەی بەدواداچوون بکە بۆ ئەنجامێکی باشترین',
        'instructions.dos': 'بیکە',
        'instructions.donts': 'مەیکە',
        'instructions.dos_item1': 'هەموو ڕێنماییەکانی چاودێری دوای نەشتەرگەری بە وردی بەدواداچوون بکە',
        'instructions.dos_item2': 'ناوچەی قژکێشکراو پاک و وشک بپارێزە',
        'instructions.dos_item3': 'دەرمانە دەستنیشانکراوەکان بە کاتی بەکاربهێنە',
        'instructions.dos_item4': 'هەموو کاتی چاوپێکەوتنەکان بەدواداچوون بکە',
        'instructions.donts_item1': 'قەڵەکان خەرەس مەکە یان دەست لێیان مەدە',
        'instructions.donts_item2': 'سەرەکەت لە ڕووناکی ڕاستەخۆی خۆر مەخەرە',
        'instructions.donts_item3': 'چالاکیە قورسەکان مەکە',
        'instructions.donts_item4': 'جگەرە مەکێشە یان مەی مەخواردەوە',
        
        // Testimonials
        'testimonials.title': 'کڕیارەکانمان چی دەڵێن',
        'testimonials.subtitle': 'ئەزموونە ڕاستەقینەکان لە کڕیارە ڕازییەکان',
        
        // Contact
        'contact.title': 'پەیوەندیمان پێوە بکە',
        'contact.subtitle': 'ئامادەیت ڕووکارت بگۆڕیت؟ ئەمڕۆ پەیوەندیمان پێوە بکە',
        'contact.name': 'ناو',
        'contact.email': 'ئیمەیل',
        'contact.phone': 'تەلەفۆن',
        'contact.message': 'پەیام',
        'contact.send': 'پەیام بنێرە',
        
        // Footer
        'footer.description': 'خزمەتگوزارییەکانی تەراکی قژ و شێوەدانی نایاب لە کوردستان-هەولێر',
        'footer.follow_us': 'بەدواداچوونمان',
        'footer.rights': 'هەموو مافەکان پارێزراون',
      },




      ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.services': 'الخدمات',
        'nav.products': 'المنتجات',
        'nav.gallery': 'المعرض',
        'nav.instructions': 'التعليمات',
        'nav.testimonials': 'الشهادات',
        'nav.contact': 'اتصل بنا',
        'nav.book_now': 'احجز الآن',
        
        // Hero Section
        'hero.title': 'غيّر مظهرك مع عمليات زراعة الشعر على أيدي خبراء',
        'hero.subtitle': 'إعادة تعريف الثقة مع زراعة الشعر المتميزة في كوردستان-أربيل',
        'hero.cta': 'احجز استشارتك',
        'hero.years_experience': 'سنوات خبرة',
        'hero.happy_clients': 'عملاء سعداء',
        'hero.premium_quality': 'جودة متميزة',
        
        // Services
        'services.title': 'خدماتنا',
        'services.subtitle': 'خدمات زراعة الشعر والتجميل المهنية المصممة حسب احتياجاتك',
        'services.hair_transplant': 'زراعة الشعر',
        'services.hair_transplant_desc': 'تقنيات متقدمة FUE و FUT لاستعادة الشعر الدائم',
        'services.eyebrow_transplant': 'زراعة الحواجب',
        'services.eyebrow_transplant_desc': 'استعادة الحواجب الطبيعية باستخدام تقنيات الطعم الدقيق',
        'services.mustache_transplant': 'زراعة الشارب',
        'services.mustache_transplant_desc': 'استعادة الشارب المهنية للحصول على شعر وجه أكثر كثافة',
        'services.laser': 'العلاج بالليزر',
        'services.laser_desc': 'علاج ليزر متقدم لتحفيز نمو الشعر وتجديد البشرة',
        'services.hair_injections': 'حقن الشعر',
        'services.hair_injections_desc': 'علاجات البلازما، الميزوثيرابي، حشو الشعر، والإكسوسوم لاستعادة الشعر',
        'services.face_skin_beauty': 'جمال الوجه والبشرة',
        'services.face_skin_beauty_desc': 'علاجات البلازما، الميزوثيرابي، الهيدرافيشيال، البوتوكس، والحشو لتحسين الوجه',
        
        // Gallery
        'gallery.title': 'أعمالنا',
        'gallery.subtitle': 'شاهد التحولات الجميلة التي نصنعها',
        'gallery.portfolio': 'معرض الأعمال',
        'gallery.badge': 'معرض الأعمال',
        'gallery.description': 'شاهد النتائج المذهلة التي حققناها لعملائنا. كل تحول هو شهادة على خبرتنا وتفانينا.',
        'gallery.view_more': 'عرض المزيد',
        
        // Products
        'products.title': 'منتجاتنا',
        'products.subtitle': 'منتجات العناية بالشعر والإكسسوارات المتميزة لجميع احتياجاتك',
        'products.badge': 'المنتجات',
        'products.shampoo': 'شامبو',
        'products.shampoo_desc': 'شامبو مهني لجميع أنواع الشعر والحالات',
        'products.lotion': 'لوشن',
        'products.lotion_desc': 'لوشن متخصص لعلاج والعناية بالشعر',
        'products.vitamin': 'فيتامين',
        'products.vitamin_desc': 'فيتامينات ومكملات أساسية لصحة الشعر',
        'products.spray': 'سبراي',
        'products.spray_desc': 'سبراي الشعر ومنتجات التصفيف للحصول على تثبيت مثالي',
        'products.meso': 'ميزو',
        'products.meso_desc': 'علاجات الميزوثيرابي لاستعادة الشعر',
        'products.xso': 'إكسو',
        'products.xso_desc': 'علاجات الإكسوسوم المتقدمة لنمو الشعر',
        'products.gel': 'جل',
        'products.gel_desc': 'جل التصفيف لاحتياجات تصفيف الشعر المختلفة',
        'products.filler': 'حشو',
        'products.filler_desc': 'علاجات حشو الشعر للحجم والكثافة',
        'products.botox': 'بوتوكس',
        'products.botox_desc': 'علاجات البوتوكس للعناية بالوجه والشعر',
        
        // Product Subcategories
        'products.subcategories': 'الفئات الفرعية',
        'products.shampoo_sub1': 'شامبو مضاد للقشرة',
        'products.shampoo_sub2': 'شامبو مرطب',
        'products.shampoo_sub3': 'شامبو مكثف للحجم',
        'products.shampoo_sub4': 'شامبو حامي للون',
        'products.lotion_sub1': 'لوشن نمو الشعر',
        'products.lotion_sub2': 'لوشن علاج فروة الرأس',
        'products.lotion_sub3': 'لوشن مضاد لتساقط الشعر',
        'products.lotion_sub4': 'لوشن مرطب',
        'products.vitamin_sub1': 'مكملات البيوتين',
        'products.vitamin_sub2': 'فيتامينات نمو الشعر',
        'products.vitamin_sub3': 'مجمع الفيتامينات المتعددة',
        'products.vitamin_sub4': 'مكملات الحديد والزنك',
        'products.spray_sub1': 'سبراي الشعر',
        'products.spray_sub2': 'سبراي حماية من الحرارة',
        'products.spray_sub3': 'سبراي مكثف للحجم',
        'products.spray_sub4': 'سبراي كريم مرطب',
        'products.meso_sub1': 'ميزوثيرابي نمو الشعر',
        'products.meso_sub2': 'ميزوثيرابي فروة الرأس',
        'products.meso_sub3': 'ميزو مضاد لتساقط الشعر',
        'products.meso_sub4': 'ميزوثيرابي المغذيات',
        'products.xso_sub1': 'إكسوسوم نمو الشعر',
        'products.xso_sub2': 'إكسوسوم الخلايا الجذعية',
        'products.xso_sub3': 'إكسوسوم مضاد للشيخوخة',
        'products.xso_sub4': 'إكسوسوم التجديد',
        'products.gel_sub1': 'جل التصفيف',
        'products.gel_sub2': 'جل نمو الشعر',
        'products.gel_sub3': 'جل مرطب',
        'products.gel_sub4': 'جل مضاد للتجعد',
        'products.filler_sub1': 'حشو حجم الشعر',
        'products.filler_sub2': 'حشو فروة الرأس',
        'products.filler_sub3': 'حشو الكثافة',
        'products.filler_sub4': 'حشو السماكة',
        'products.botox_sub1': 'بوتوكس فروة الرأس',
        'products.botox_sub2': 'بوتوكس نمو الشعر',
        'products.botox_sub3': 'بوتوكس مضاد للعرق',
        'products.botox_sub4': 'بوتوكس علاجي',
        
        // Instructions
        'instructions.title': 'تعليمات زراعة الشعر',
        'instructions.subtitle': 'إرشادات العناية الشاملة لجراحة زراعة الشعر',
        'instructions.description': 'اتبع هذه التعليمات الشاملة لضمان الشفاء الأمثل والنتائج الناجحة لزراعة الشعر.',
        
        // Main Categories
        'instructions.before_surgery': 'تعليمات قبل جراحة زراعة الشعر',
        'instructions.first_day': 'تعليمات لليوم الأول بعد جراحة زراعة الشعر',
        'instructions.after_surgery': 'تعليمات للمتابعة بعد جراحة زراعة الشعر',
        'instructions.food_drinks': 'تعليمات حول الطعام والشراب',
        'instructions.additional_notes': 'ملاحظات مهمة إضافية',
        
        // Before Surgery Items
        'instructions.before_surgery_item1': 'توقف عن التدخين وشرب الكحول قبل أسبوعين على الأقل من الجراحة',
        'instructions.before_surgery_item2': 'تجنب الأدوية المميعة للدم (الأسبرين، الإيبوبروفين) قبل أسبوع',
        'instructions.before_surgery_item3': 'احصل على نوم كافٍ وحافظ على نظام غذائي صحي',
        'instructions.before_surgery_item4': 'اغسل شعرك جيداً في الليلة السابقة للجراحة',
        'instructions.before_surgery_item5': 'احضر إلى العيادة بشعر نظيف وجاف',
        
        // First Day Items
        'instructions.first_day_item1': 'احتفظ برأسك مرتفعاً أثناء النوم (استخدم 2-3 وسائد)',
        'instructions.first_day_item2': 'ضع أكياس الثلج لتقليل التورم (15 دقيقة كل ساعة)',
        'instructions.first_day_item3': 'تناول الأدوية الموصوفة حسب توجيهات طبيبك',
        'instructions.first_day_item4': 'تجنب لمس أو خدش المنطقة المزروعة',
        'instructions.first_day_item5': 'نم على ظهرك، تجنب النوم على جانبك',
        
        // After Surgery Items
        'instructions.after_surgery_item1': 'اغسل شعرك برفق بدءاً من اليوم الثالث باستخدام الشامبو الموصى به',
        'instructions.after_surgery_item2': 'تجنب الأنشطة الشاقة والتمارين لمدة أسبوعين',
        'instructions.after_surgery_item3': 'احم فروة رأسك من أشعة الشمس المباشرة لمدة 3 أشهر',
        'instructions.after_surgery_item4': 'احضر جميع مواعيد المتابعة كما هو مجدول',
        'instructions.after_surgery_item5': 'كن صبوراً - يبدأ نمو الشعر بعد 3-4 أشهر',
        
        // Food & Drinks Items
        'instructions.food_drinks_item1': 'تجنب الأطعمة الحارة والساخنة في الأسبوع الأول',
        'instructions.food_drinks_item2': 'قلل من تناول الكافيين في الأيام العشرة الأولى',
        'instructions.food_drinks_item3': 'زد من تناول البروتين لدعم نمو الشعر',
        'instructions.food_drinks_item4': 'حافظ على الترطيب بشرب الكثير من الماء',
        'instructions.food_drinks_item5': 'تجنب الكحول لمدة أسبوعين على الأقل بعد الجراحة',
        
        // Additional Notes Items
        'instructions.additional_notes_item1': 'التقشر طبيعي وسيسقط بشكل طبيعي',
        'instructions.additional_notes_item2': 'من المتوقع تساقط بعض الشعر في الشهر الأول',
        'instructions.additional_notes_item3': 'اتصل بطبيبك فوراً إذا لاحظت علامات العدوى',
        'instructions.additional_notes_item4': 'النتائج تختلف حسب الفرد - النتائج الكاملة تظهر بعد 12 شهراً',
        'instructions.additional_notes_item5': 'حافظ على نمط حياة صحي لنمو الشعر الأمثل',
        
        // Critical Guidelines
        'instructions.critical_guidelines': 'الإرشادات الحرجة',
        'instructions.critical_desc': 'اتبع هذه الإرشادات الأساسية للنتائج المثلى',
        'instructions.dos': 'افعل',
        'instructions.donts': 'لا تفعل',
        'instructions.dos_item1': 'اتبع جميع تعليمات العناية بعد الجراحة بعناية',
        'instructions.dos_item2': 'حافظ على المنطقة المزروعة نظيفة وجافة',
        'instructions.dos_item3': 'تناول الأدوية الموصوفة في الوقت المحدد',
        'instructions.dos_item4': 'احضر جميع مواعيد المتابعة',
        'instructions.donts_item1': 'لا تخدش أو تلتقط القشور',
        'instructions.donts_item2': 'لا تعرض فروة الرأس لأشعة الشمس المباشرة',
        'instructions.donts_item3': 'لا تشارك في أنشطة شاقة',
        'instructions.donts_item4': 'لا تدخن أو تشرب الكحول',
        
        // Testimonials
        'testimonials.title': 'ماذا يقول عملاؤنا',
        'testimonials.subtitle': 'تجارب حقيقية من عملاء راضين',
        
        // Contact
        'contact.title': 'تواصل معنا',
        'contact.subtitle': 'مستعد لتغيير مظهرك؟ تواصل معنا اليوم',
        'contact.name': 'الاسم',
        'contact.email': 'البريد الإلكتروني',
        'contact.phone': 'الهاتف',
        'contact.message': 'الرسالة',
        'contact.send': 'إرسال الرسالة',
        
        // Footer
        'footer.description': 'خدمات امتدادات الشعر والتصفيف المتميزة في كردستان-أربيل',
        'footer.follow_us': 'تابعنا',
        'footer.rights': 'جميع الحقوق محفوظة',
      }
    };

    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
