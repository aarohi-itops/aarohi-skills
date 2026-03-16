import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryCoffee from "@/assets/gallery-coffee.jpg";
import galleryBar from "@/assets/gallery-bar.jpg";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryWaiter from "@/assets/gallery-waiter.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const images = [
  { src: galleryClassroom, alt: "Classroom sessions" },
  { src: galleryKitchen, alt: "Kitchen practice" },
  { src: galleryCoffee, alt: "Coffee training" },
  { src: galleryBar, alt: "Bar training" },
  { src: galleryWaiter, alt: "Waiter training" },
  { src: heroBg, alt: "Restaurant service" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Gallery</h2>
        <div className="green-accent-line mx-auto mb-14" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              onClick={() => setLightbox(i)}
              className="cursor-pointer overflow-hidden rounded-lg aspect-[4/3] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
