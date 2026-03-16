import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-footer text-primary-foreground/80 pt-14 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">

        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center mb-4">
            <img
              src="src/assets/logo.png"
              alt="Aarohi Skills Academy"
              className="h-10 w-auto object-contain"
            />
          </a>

          <p className="text-sm">
            Empowering students with world-class hospitality skills for a brighter future.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Courses", "Insights", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="hover:text-accent transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">
            Contact
          </h4>

          <p className="text-sm mb-1">Basundhara, Kathmandu, Nepal</p>

          <p className="text-sm mb-1">
            +977 1 4961807 <br />
            +977 1 4962925 (Fax)
          </p>

          <p className="text-sm mb-4">info@aarohiskills.com</p>

          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm">
        © 2026 Aarohi Skills Academy Pvt. Ltd. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;