import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20courses"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:shadow-xl transition-all px-4 py-3"
    >
      <MessageCircle size={24} />
      {hovered && (
        <span className="text-sm font-semibold whitespace-nowrap">Enquire Now</span>
      )}
    </a>
  );
};

export default WhatsAppButton;
