"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lightbox } from "../components/ui/lightbox";
import { Header } from "../components/Header";

export default function GalleryPage() {
  const router = useRouter();
  
  const galleryImages = [
    "/images/IMG_4870.PNG",
    "/images/IMG_4871.PNG",
    "/images/IMG_4872.PNG",
    "/images/IMG_4873.PNG",
    "/images/IMG_4874.PNG",
    "/images/IMG_4875.PNG",
    "/images/IMG_4876.PNG",
    "/images/IMG_4877.PNG",
    "/images/IMG_4878.PNG",
    "/images/IMG_4879.PNG",
    "/images/IMG_4880.PNG",
    "/images/IMG_4881.PNG",
    "/images/IMG_4882.PNG",
    "/images/IMG_4883.PNG",
    "/images/IMG_4884.PNG",
    "/images/IMG_4885.PNG",
    "/images/IMG_4886.PNG",

    "/images/12.PNG",
    "/images/13.PNG",
    "/images/14.PNG",
    "/images/15.PNG",
    "/images/16.PNG",
    "/images/17.PNG",
    "/images/18.PNG",
    "/images/19.PNG",
    "/images/2 (2).PNG",
    "/images/20.PNG",
    "/images/21.PNG",
    "/images/22.PNG",
    "/images/23.PNG",
    "/images/24.PNG",
    "/images/25.PNG",
    "/images/26.PNG",
    "/images/27.PNG",
    "/images/28.PNG",
    "/images/29.PNG",
    "/images/3 (2).PNG",
    "/images/30.PNG",
    "/images/31.PNG",
    "/images/32.PNG",
    "/images/33.PNG",
    "/images/34.PNG",
    "/images/35.PNG",
    "/images/36.PNG",
    "/images/37.PNG",
    "/images/38.PNG",
    "/images/39.PNG",
    "/images/4 (2).PNG",
    "/images/40.PNG",
    "/images/41.PNG",
    "/images/42.PNG",
    "/images/43.PNG",
    "/images/44.PNG",
    "/images/45.PNG",
    "/images/46.PNG",
    "/images/47.PNG",
    "/images/48.PNG",
    "/images/49.PNG",
    "/images/5 (2).PNG",
    "/images/50.PNG",
    "/images/6.PNG",
    "/images/7.PNG",
    "/images/8.PNG",
    "/images/9.PNG",
    "/images/10.PNG",
    "/images/11.PNG",
    "/images/111 (1).JPG",
    "/images/111 (1).PNG",
    "/images/111 (10).PNG",
    "/images/111 (100).PNG",
    "/images/111 (101).PNG",
    "/images/111 (102).PNG",
    "/images/111 (103).PNG",
    "/images/111 (104).PNG",
    "/images/111 (105).PNG",
    "/images/111 (106).PNG",
    "/images/111 (107).PNG",
    "/images/111 (108).PNG",
    "/images/111 (109).PNG",
    "/images/111 (11).PNG",
    "/images/111 (110).PNG",
    "/images/111 (111).PNG",
    "/images/111 (112).PNG",
    "/images/111 (113).PNG",
    "/images/111 (114).PNG",
    "/images/111 (115).PNG",
    "/images/111 (116).PNG",
    "/images/111 (117).PNG",
    "/images/111 (118).PNG",
    "/images/111 (119).PNG",
    "/images/111 (12).PNG",
    "/images/111 (120).PNG",
    "/images/111 (121).PNG",
    "/images/111 (122).PNG",
    "/images/111 (123).PNG",
    "/images/111 (124).PNG",
    "/images/111 (125).PNG",
    "/images/111 (126).PNG",
    "/images/111 (127).PNG",
    "/images/111 (128).PNG",
    "/images/111 (129).PNG",
    "/images/111 (13).PNG",
    "/images/111 (130).PNG",
    "/images/111 (131).PNG",
    "/images/111 (132).PNG",
    "/images/111 (133).PNG",
    "/images/111 (134).PNG",
    "/images/111 (135).PNG",
    "/images/111 (136).PNG",
    "/images/111 (137).PNG",
    "/images/111 (138).PNG",
    "/images/111 (139).PNG",
    "/images/111 (14).PNG",
    "/images/111 (140).PNG",
    "/images/111 (141).PNG",
    "/images/111 (142).PNG",
    "/images/111 (143).PNG",
    "/images/111 (144).PNG",
    "/images/111 (145).PNG",
    "/images/111 (146).PNG",
    "/images/111 (147).PNG",
    "/images/111 (148).PNG",
    "/images/111 (149).PNG",
    "/images/111 (15).PNG",
    "/images/111 (150).PNG",
    "/images/111 (151).PNG",
    "/images/111 (152).PNG",
    "/images/111 (153).PNG",
    "/images/111 (154).PNG",
    "/images/111 (155).PNG",
    "/images/111 (156).PNG",
    "/images/111 (157).PNG",
    "/images/111 (158).PNG",
    "/images/111 (159).PNG",
    "/images/111 (16).PNG",
    "/images/111 (160).PNG",
    "/images/111 (161).PNG",
    "/images/111 (162).PNG",
    "/images/111 (163).PNG",
    "/images/111 (164).PNG",
    "/images/111 (165).PNG",
    "/images/111 (166).PNG",
    "/images/111 (167).PNG",
    "/images/111 (168).PNG",
    "/images/111 (169).PNG",
    "/images/111 (17).PNG",
    "/images/111 (18).PNG",
    "/images/111 (19).PNG",
    "/images/111 (2).JPG",
    "/images/111 (2).PNG",
    "/images/111 (20).PNG",
    "/images/111 (21).PNG",
    "/images/111 (22).PNG",
    "/images/111 (23).PNG",
    "/images/111 (24).PNG",
    "/images/111 (25).PNG",
    "/images/111 (26).PNG",
    "/images/111 (27).PNG",
    "/images/111 (28).PNG",
    "/images/111 (29).PNG",
    "/images/111 (3).JPG",
    "/images/111 (3).PNG",
    "/images/111 (30).PNG",
    "/images/111 (31).PNG",
    "/images/111 (32).PNG",
    "/images/111 (33).PNG",
    "/images/111 (34).PNG",
    "/images/111 (35).PNG",
    "/images/111 (36).PNG",
    "/images/111 (37).PNG",
    "/images/111 (38).PNG",
    "/images/111 (39).PNG",
    "/images/111 (4).JPG",
    "/images/111 (4).PNG",
    "/images/111 (40).PNG",
    "/images/111 (41).PNG",
    "/images/111 (42).PNG",
    "/images/111 (43).PNG",
    "/images/111 (44).PNG",
    "/images/111 (45).PNG",
    "/images/111 (46).PNG",
    "/images/111 (47).PNG",
    "/images/111 (48).PNG",
    "/images/111 (49).PNG",
    "/images/111 (5).JPG",
    "/images/111 (5).PNG",
    "/images/111 (50).PNG",
    "/images/111 (51).PNG",
    "/images/111 (52).PNG",
    "/images/111 (53).PNG",
    "/images/111 (54).PNG",
    "/images/111 (55).PNG",
    "/images/111 (56).PNG",
    "/images/111 (57).PNG",
    "/images/111 (58).PNG",
    "/images/111 (59).PNG",
    "/images/111 (6).PNG",
    "/images/111 (60).PNG",
    "/images/111 (61).PNG",
    "/images/111 (62).PNG",
    "/images/111 (63).PNG",
    "/images/111 (64).PNG",
    "/images/111 (65).PNG",
    "/images/111 (66).PNG",
    "/images/111 (67).PNG",
    "/images/111 (68).PNG",
    "/images/111 (69).PNG",
    "/images/111 (7).PNG",
    "/images/111 (70).PNG",
    "/images/111 (71).PNG",
    "/images/111 (72).PNG",
    "/images/111 (73).PNG",
    "/images/111 (74).PNG",
    "/images/111 (75).PNG",
    "/images/111 (76).PNG",
    "/images/111 (77).PNG",
    "/images/111 (78).PNG",
    "/images/111 (79).PNG",
    "/images/111 (8).PNG",
    "/images/111 (80).PNG",
    "/images/111 (81).PNG",
    "/images/111 (82).PNG",
    "/images/111 (83).PNG",
    "/images/111 (84).PNG",
    "/images/111 (85).PNG",
    "/images/111 (86).PNG",
    "/images/111 (87).PNG",
    "/images/111 (88).PNG",
    "/images/111 (89).PNG",
    "/images/111 (9).PNG",
    "/images/111 (90).PNG",
    "/images/111 (91).PNG",
    "/images/111 (92).PNG",
    "/images/111 (93).PNG",
    "/images/111 (94).PNG",
    "/images/111 (95).PNG",
    "/images/111 (96).PNG",
    "/images/111 (97).PNG",
    "/images/111 (98).PNG",
    "/images/111 (99).PNG",
   
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
        
        {/* <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1> */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </div>
  );
}