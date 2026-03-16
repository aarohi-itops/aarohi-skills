import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryWaiter from "@/assets/gallery-waiter.jpg";
import galleryCoffee from "@/assets/gallery-coffee.jpg";

const posts = [
  {
    img: galleryKitchen,
    title: "How to Start a Career in Hospitality",
    desc: "Discover the essential steps to launch a rewarding career in the hospitality industry.",
  },
  {
    img: galleryWaiter,
    title: "Top Skills Every Waiter Must Have",
    desc: "From communication to multitasking, learn what makes a great waiter stand out.",
  },
  {
    img: galleryCoffee,
    title: "Barista vs Bartender Careers",
    desc: "Compare two exciting hospitality paths and find out which suits you best.",
  },
];

const InsightsSection = () => (
  <section id="insights" className="py-20 bg-muted">
    <div className="container mx-auto px-4 text-center">
      <h2 className="section-title">Hospitality Career Insights</h2>
      <div className="green-accent-line mx-auto mb-14" />

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
          >
            <div className="overflow-hidden h-48">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <Button variant="link" className="text-accent p-0 h-auto">
                Read More →
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;
