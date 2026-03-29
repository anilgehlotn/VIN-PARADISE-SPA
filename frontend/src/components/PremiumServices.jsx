import { useState } from "react";
import { Phone, Star } from "lucide-react";
import { premiumServices, PHONE } from "@/data/services";
import ServiceModal from "@/components/ServiceModal";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="white" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function PremiumCard({ service, onClick }) {
  const [selectedDuration, setSelectedDuration] = useState(0);

  return (
    <div
      data-testid={`premium-card-${service.id}`}
      onClick={() => onClick(service)}
      className="group bg-[#111111] border border-gold/20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-gold/60 hover:shadow-[0_0_40px_rgba(201,168,76,0.12)]"
    >
      {/* Image */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <span className="absolute top-4 right-4 bg-gold text-[#080808] text-xs font-body font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(201,168,76,0.4)]">
          <Star className="w-3 h-3" /> PREMIUM
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-heading text-gold text-2xl">{service.name}</h3>
        <p className="font-body text-cream/60 text-sm leading-relaxed">{service.shortDesc}</p>

        {/* Duration tabs */}
        <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
          {service.durations.map((d, i) => (
            <button
              key={i}
              data-testid={`premium-duration-${service.id}-${i}`}
              onClick={(e) => { e.stopPropagation(); setSelectedDuration(i); }}
              className={`px-4 py-2 text-sm font-body rounded border transition-colors ${
                i === selectedDuration
                  ? "bg-gold text-[#080808] border-gold font-semibold"
                  : "border-gold/30 text-cream/60 hover:border-gold/50"
              }`}
            >
              {d.label} — ₹{d.price.toLocaleString("en-IN")}
            </button>
          ))}
        </div>

        {/* Benefits */}
        <ul className="space-y-1.5">
          {service.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-cream/70 text-sm font-body">
              <span className="text-gold mt-0.5">&#10003;</span> {b}
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
          <a
            href={`tel:${PHONE}`}
            data-testid={`premium-call-${service.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gold text-gold text-sm font-body rounded-full hover:bg-gold/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
          <a
            href={service.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`premium-whatsapp-${service.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white text-sm font-body rounded-full hover:bg-[#20bd5a] transition-colors shadow-[0_0_12px_rgba(37,211,102,0.3)]"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PremiumServices() {
  const [modalService, setModalService] = useState(null);

  return (
    <section id="premium" data-testid="premium-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#161616]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gold mb-4">Our Premium Services</h2>
          <p className="font-body text-cream/50 text-base md:text-lg">Exclusive luxury experiences — only at Vin Paradise</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {premiumServices.map((service) => (
            <PremiumCard key={service.id} service={service} onClick={setModalService} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <a
            href={`tel:${PHONE}`}
            data-testid="premium-cta-call"
            className="flex items-center gap-2 px-8 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href="https://wa.me/919535848946?text=Hi%2C%20I%20want%20to%20book%20a%20service%20at%20Vin%20Paradise%20Nagarbhavi"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="premium-cta-whatsapp"
            className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)]"
          >
            <WhatsAppIcon /> WhatsApp Now
          </a>
        </div>
      </div>

      <ServiceModal service={modalService} open={!!modalService} onClose={() => setModalService(null)} />
    </section>
  );
}
