import { Phone, MapPin, Clock } from "lucide-react";
import { services, PHONE, WHATSAPP_DEFAULT } from "@/data/services";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="white" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="py-28 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 60px)`,
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1 h-1 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-3">
            Find <span style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 40%, #C9A84C 70%, #A0722A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Us</span>
          </h2>
          <p className="font-body text-cream/40 text-sm md:text-base tracking-widest uppercase mt-4">
            Visit our sanctuary in Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="group bg-[#111111] border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,168,76,0.1)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-gold text-lg mb-2">Address</h3>
                  <p className="font-body text-cream/70 text-sm leading-relaxed">
                    Vin Paradise Unisex Salon & Spa<br />
                    Nagarbhavi, Bangalore 560072<br />
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-[#111111] border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,168,76,0.1)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-gold text-lg mb-2">Phone</h3>
                  <a href={`tel:${PHONE}`} className="font-body text-cream/70 text-sm hover:text-gold transition-colors duration-300 font-semibold">
                    {PHONE}
                  </a>
                  <p className="font-body text-cream/50 text-xs mt-1">Click to call us directly</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group bg-[#111111] border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,168,76,0.1)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-gold text-lg mb-2">Operating Hours</h3>
                  <div className="space-y-1">
                    <p className="font-body text-cream/70 text-sm">
                      <span className="text-gold">Monday – Sunday</span><br />
                      <span className="font-semibold">9:00 AM – 9:00 PM</span>
                    </p>
                    <p className="font-body text-cream/50 text-xs mt-2">Open all days • Appointments recommended</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-gold/20 h-[350px] md:h-[450px] shadow-[0_8px_40px_rgba(201,168,76,0.1)] hover:shadow-[0_12px_50px_rgba(201,168,76,0.15)] transition-shadow duration-300">
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
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section data-testid="final-cta-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#111111] to-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 60px)`,
      }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-gold/40" />
          <div className="w-1 h-1 rotate-45 bg-gold" />
          <div className="h-px w-12 bg-gold/40" />
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream mb-4 leading-tight">
          Book Your <span style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 40%, #C9A84C 70%, #A0722A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Relaxation</span>
        </h2>
        <p className="font-body text-cream/50 text-base md:text-lg mb-12 tracking-wide">
          Experience luxury wellness at Vin Paradise • Walk-in or book your appointment today
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            data-testid="final-cta-call"
            className="group flex items-center gap-3 px-8 py-4 border border-gold/50 text-gold font-body font-semibold rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 text-base"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Call Now
          </a>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-whatsapp"
            className="group flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-body font-semibold rounded-full hover:bg-[#20bd5a] transition-all duration-300 text-base shadow-[0_8px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            WhatsApp Now
          </a>
        </div>

        <p className="font-body text-cream/40 text-xs tracking-widest uppercase mt-10">
          Available Monday – Sunday, 9 AM – 9 PM
        </p>
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
    <footer data-testid="footer" className="bg-[#050505] relative overflow-hidden">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Col 1 - Brand */}
            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-gold text-2xl mb-1">Vin Paradise</h3>
                <div className="h-px w-12 bg-gradient-to-r from-gold to-transparent" />
              </div>
              <p className="font-body text-cream/50 text-sm leading-relaxed">
                Premium spa & salon services for your body, mind & soul. Nagarbhavi's most trusted wellness destination.
              </p>
            </div>

            {/* Col 2 - Quick Links */}
            <div>
              <h4 className="font-heading text-cream text-sm font-semibold mb-6 tracking-widest uppercase">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => {
                  const id = link.toLowerCase().replace(/\s/g, "-").replace("premium-services", "premium");
                  return (
                    <li key={link}>
                      <button
                        onClick={() => scrollTo(id === "home" ? "home" : id)}
                        className="font-body text-cream/50 text-sm hover:text-gold transition-colors duration-300 relative group"
                      >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Col 3 - Services */}
            <div>
              <h4 className="font-heading text-cream text-sm font-semibold mb-6 tracking-widest uppercase">Services</h4>
              <ul className="space-y-3">
                {serviceNames.slice(0, 5).map((name) => (
                  <li key={name}>
                    <button
                      onClick={() => scrollTo("services")}
                      className="font-body text-cream/50 text-sm hover:text-gold transition-colors duration-300 relative group"
                    >
                      {name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 - Contact Info */}
            <div>
              <h4 className="font-heading text-cream text-sm font-semibold mb-6 tracking-widest uppercase">Get In Touch</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-body text-cream/70 text-xs font-semibold uppercase tracking-wider text-gold mb-1">Address</p>
                  <p className="font-body text-cream/50 text-sm leading-relaxed">
                    Nagarbhavi, Bangalore 560072, India
                  </p>
                </div>
                <div>
                  <p className="font-body text-cream/70 text-xs font-semibold uppercase tracking-wider text-gold mb-1">Phone</p>
                  <a href={`tel:${PHONE}`} className="font-body text-cream/50 text-sm hover:text-gold transition-colors">
                    {PHONE}
                  </a>
                </div>
                <div>
                  <p className="font-body text-cream/70 text-xs font-semibold uppercase tracking-wider text-gold mb-1">Hours</p>
                  <p className="font-body text-cream/50 text-sm">
                    Mon–Sun: 9AM – 9PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent my-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-body text-cream/40 text-xs leading-relaxed">
              &copy; 2025 Vin Paradise Unisex Salon & Spa. All rights reserved. | Crafted for your wellness
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${PHONE}`}
                data-testid="footer-call-btn"
                className="group flex items-center gap-2 px-5 py-2.5 border border-gold/40 text-gold text-xs font-body font-semibold rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Call
              </a>
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-btn"
                className="group flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-body font-semibold rounded-full hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
