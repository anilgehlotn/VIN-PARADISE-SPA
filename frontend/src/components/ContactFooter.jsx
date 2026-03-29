import { Phone, MapPin, Clock } from "lucide-react";
import { services, PHONE, WHATSAPP_DEFAULT } from "@/data/services";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="white" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gold mb-4">Find Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-body text-cream font-medium mb-1">Address</h3>
                <p className="font-body text-cream/60 text-sm">Vin Paradise Unisex Salon & Spa, Nagarbhavi, Bangalore 560072</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-body text-cream font-medium mb-1">Phone</h3>
                <a href={`tel:${PHONE}`} className="font-body text-cream/60 text-sm hover:text-gold transition-colors">
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
              <div>
                <h3 className="font-body text-cream font-medium mb-1">Hours</h3>
                <p className="font-body text-cream/60 text-sm">Monday – Sunday: 9:00 AM – 9:00 PM</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={`tel:${PHONE}`}
                data-testid="contact-call-btn"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)]"
              >
                <WhatsAppIcon /> WhatsApp Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-gold/20 h-[300px] md:h-[350px]">
            <iframe
              title="Vin Paradise Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.956!2d77.5097!3d12.9614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e42fbfffff%3A0x0!2sNagarbhavi%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="contact-map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section data-testid="final-cta-section" className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gold mb-4">Book Your Relaxation Today</h2>
        <p className="font-body text-cream/60 text-base md:text-lg mb-10">Walk in or book ahead — we are ready for you</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            data-testid="final-cta-call"
            className="flex items-center gap-2 px-10 py-3.5 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-whatsapp"
            className="flex items-center gap-2 px-10 py-3.5 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors text-lg shadow-[0_0_20px_rgba(37,211,102,0.3)]"
          >
            <WhatsAppIcon className="w-5 h-5" /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const navLinks = ["Home", "Services", "Premium Services", "Gallery", "Testimonials", "Contact"];
  const serviceNames = services.map((s) => s.name);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-[#050505] py-16 px-6 md:px-12 lg:px-24 border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 - Logo */}
          <div>
            <h3 className="font-heading text-gold text-xl mb-2">Vin Paradise</h3>
            <p className="font-body text-cream/40 text-sm italic mb-3">Relax. Rejuvenate. Restore.</p>
            <p className="font-body text-cream/40 text-xs leading-relaxed">
              Nagarbhavi's most trusted premium wellness destination.
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="font-body text-cream font-medium text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => {
                const id = link.toLowerCase().replace(/\s/g, "-").replace("premium-services", "premium");
                return (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(id === "home" ? "home" : id)}
                      className="font-body text-cream/40 text-sm hover:text-gold transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-body text-cream font-medium text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceNames.map((name) => (
                <li key={name}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="font-body text-cream/40 text-sm hover:text-gold transition-colors"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-body text-cream font-medium text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="font-body text-cream/40 text-sm">
                Vin Paradise Unisex Salon & Spa, Nagarbhavi, Bangalore 560072
              </p>
              <a href={`tel:${PHONE}`} className="font-body text-cream/40 text-sm hover:text-gold transition-colors block">
                {PHONE}
              </a>
              <p className="font-body text-cream/40 text-sm">Mon–Sun: 9AM – 9PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-cream/30 text-xs">
            &copy; 2025 Vin Paradise Unisex Salon & Spa. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href={`tel:${PHONE}`}
              data-testid="footer-call-btn"
              className="flex items-center gap-2 px-5 py-2 border border-gold text-gold text-sm font-body rounded-full hover:bg-gold/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-btn"
              className="flex items-center gap-2 px-5 py-2 bg-[#25D366] text-white text-sm font-body rounded-full hover:bg-[#20bd5a] transition-colors shadow-[0_0_12px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
