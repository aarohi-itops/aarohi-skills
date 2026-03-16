import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">Contact Us</h2>
          <div className="green-accent-line mx-auto mb-14" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-card p-8 rounded-lg shadow-md"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button type="submit" size="lg" className="w-full bg-accent hover:bg-primary text-accent-foreground">
              Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-secondary shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-heading font-semibold text-primary">Address</h4>
                <p className="text-muted-foreground">
                  Aarohi Skills Academy Pvt. Ltd., Basundhara, Kathmandu, Nepal
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-secondary shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-heading font-semibold text-primary">Phone</h4>
                <p className="text-muted-foreground">+977 1 4961807
+977-1-4962925
(Fax)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-secondary shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-heading font-semibold text-primary">Email</h4>
                <p className="text-muted-foreground">info@aarohiskills.com</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg overflow-hidden border h-56 bg-card flex items-center justify-center">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d209.78823961647984!2d85.32736676325872!3d27.737670413383363!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ac64a25553%3A0xba0a2ed52c24aa6d!2sAarohi%20HR%20Solutions!5e1!3m2!1sen!2snp!4v1773226466431!5m2!1sen!2snp"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
