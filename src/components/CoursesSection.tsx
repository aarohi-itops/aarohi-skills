import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, ChefHat, ShoppingBag, Wine, Coffee, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: UtensilsCrossed,
    title: "Waiter Training",
    preview: "Master professional table service and customer interaction.",
    details: [
      "Table service skills",
      "Customer interaction",
      "Order management",
      "Food & beverage service",
    ],
  },
  {
    icon: ChefHat,
    title: "Cook / Chef Training",
    preview: "Learn kitchen operations, food prep, and professional cooking.",
    details: [
      "Kitchen operations",
      "Food preparation",
      "Hygiene & safety",
      "Professional cooking techniques",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Busboy Training",
    preview: "Efficient table clearing, setup, and restaurant support skills.",
    details: [
      "Table clearing & resetting",
      "Assisting waitstaff",
      "Dining area maintenance",
      "Guest assistance",
    ],
  },
  {
    icon: Wine,
    title: "Bartender Training",
    preview: "Cocktail crafting, bar setup, and customer engagement.",
    details: [
      "Drink preparation",
      "Cocktail basics",
      "Bar setup",
      "Customer service",
    ],
  },
  {
    icon: Coffee,
    title: "Barista Training",
    preview: "Specialty coffee making, latte art, and café operations.",
    details: [
      "Espresso techniques",
      "Latte art",
      "Coffee bean knowledge",
      "Café workflow management",
    ],
  },
];

const CoursesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title">Our Hospitality Training Programs</h2>
        <div className="green-accent-line mx-auto mb-14" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelected(i)}
              className="cursor-pointer bg-card border rounded-lg p-8 shadow-sm hover:shadow-lg hover:border-accent transition-all group"
            >
              <c.icon
                className="mx-auto text-primary group-hover:text-accent transition-colors mb-4"
                size={44}
              />
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                {c.title}
              </h3>
              <p className="text-muted-foreground text-sm">{c.preview}</p>
              <Button
                variant="link"
                className="mt-3 text-accent p-0 h-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(i);
                }}
              >
                Learn More →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-lg max-w-md w-full p-8 relative shadow-2xl"
            >
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>
              {(() => {
                const c = courses[selected];
                return (
                  <>
                    <c.icon className="text-primary mb-4" size={48} />
                    <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                      {c.title}
                    </h3>
                    <div className="green-accent-line mb-4" />
                    <ul className="space-y-2 text-left">
                      {c.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-foreground"
                        >
                          <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6 w-full bg-accent hover:bg-primary text-accent-foreground" asChild>
                      <a href="#contact">Enquire Now</a>
                    </Button>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CoursesSection;
