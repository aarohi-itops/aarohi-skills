import { motion } from "framer-motion";
import { GraduationCap, Wrench, Briefcase } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Industry Experienced Trainers",
    desc: "Learn from professionals with years of real-world hospitality experience.",
  },
  {
    icon: Wrench,
    title: "Practical Hands-on Training",
    desc: "Gain confidence through immersive, practical training sessions.",
  },
  {
    icon: Briefcase,
    title: "Job-Oriented Programs",
    desc: "Programs designed to prepare you for immediate employment.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-muted">
    <div className="container mx-auto px-4 text-center">
      <h2 className="section-title">About Aarohi Skills Academy</h2>
      <div className="green-accent-line mx-auto mb-6" />
      <p className="section-subtitle mb-14">
        Aarohi Skills Academy Pvt. Ltd. provides practical hospitality training
        designed to prepare students for successful careers in hotels,
        restaurants, cafés, and bars.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border-t-4 border-secondary"
          >
            <c.icon className="mx-auto text-primary mb-4" size={40} />
            <h3 className="font-heading font-semibold text-xl text-primary mb-2">
              {c.title}
            </h3>
            <p className="text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
