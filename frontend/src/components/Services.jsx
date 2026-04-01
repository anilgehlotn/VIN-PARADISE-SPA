// import { useState } from "react";
// import { Phone } from "lucide-react";
// import { services, PHONE } from "@/data/services";
// import ServiceModal from "@/components/ServiceModal";

// const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
//   <svg viewBox="0 0 24 24" fill="white" className={className}>
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//   </svg>
// );

// function ServiceCard({ service, onClick }) {
//   const [selectedDuration, setSelectedDuration] = useState(0);

//   return (
//     <div
//       data-testid={`service-card-${service.id}`}
//       onClick={() => onClick(service)}
//       className="group bg-[#111111] border border-white/5 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_25px_rgba(201,168,76,0.08)]"
//     >
//       {/* Image */}
//       <div className="relative w-full h-[220px] overflow-hidden">
//         <img
//           src={service.image}
//           alt={service.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300" />
//         {service.badge && (
//           <span className="absolute top-3 right-3 bg-gold/90 text-[#080808] text-[11px] font-body font-semibold px-2.5 py-0.5 rounded-full">
//             {service.badge}
//           </span>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-5 space-y-4">
//         <h3 className="font-heading text-gold text-xl">{service.name}</h3>
//         <p className="font-body text-cream/60 text-sm line-clamp-2">{service.shortDesc}</p>

//         {/* Duration tabs */}
//         <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
//           {service.durations.map((d, i) => (
//             <button
//               key={i}
//               data-testid={`card-duration-${service.id}-${i}`}
//               onClick={(e) => { e.stopPropagation(); setSelectedDuration(i); }}
//               className={`px-3 py-1.5 text-xs font-body rounded border transition-colors ${
//                 i === selectedDuration
//                   ? "bg-gold text-[#080808] border-gold font-semibold"
//                   : "border-gold/20 text-cream/60 hover:border-gold/40"
//               }`}
//             >
//               {d.label}
//             </button>
//           ))}
//         </div>

//         {/* Price */}
//         <div className="font-heading text-gold text-2xl">
//           ₹{service.durations[selectedDuration].price.toLocaleString("en-IN")}
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
//           <a
//             href={`tel:${PHONE}`}
//             data-testid={`card-call-${service.id}`}
//             className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-gold text-gold text-sm font-body rounded-full hover:bg-gold/10 transition-colors"
//           >
//             <Phone className="w-3.5 h-3.5" /> Call
//           </a>
//           <a
//             href={service.whatsapp}
//             target="_blank"
//             rel="noopener noreferrer"
//             data-testid={`card-whatsapp-${service.id}`}
//             className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#25D366] text-white text-sm font-body rounded-full hover:bg-[#20bd5a] transition-colors"
//           >
//             <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Services() {
//   const [modalService, setModalService] = useState(null);

//   return (
//     <section id="services" data-testid="services-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#080808]">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gold mb-4">Our Services</h2>
//           <p className="font-body text-cream/50 text-base md:text-lg">Crafted for your body, mind & soul</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <ServiceCard key={service.id} service={service} onClick={setModalService} />
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
//           <a
//             href={`tel:${PHONE}`}
//             data-testid="services-cta-call"
//             className="flex items-center gap-2 px-8 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors"
//           >
//             <Phone className="w-4 h-4" /> Call Now
//           </a>
//           <a
//             href="https://wa.me/919535848946?text=Hi%2C%20I%20want%20to%20book%20a%20service%20at%20Vin%20Paradise%20Nagarbhavi"
//             target="_blank"
//             rel="noopener noreferrer"
//             data-testid="services-cta-whatsapp"
//             className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)]"
//           >
//             <WhatsAppIcon /> WhatsApp Now
//           </a>
//         </div>
//       </div>

//       <ServiceModal service={modalService} open={!!modalService} onClose={() => setModalService(null)} />
//     </section>
//   );
// }


import { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { services, PHONE } from "@/data/services";
import ServiceModal from "@/components/ServiceModal";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function ServiceCard({ service, onClick, index }) {
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-testid={`service-card-${service.id}`}
      onClick={() => onClick(service)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
      className="group relative bg-[#111111] border border-white/5 overflow-hidden cursor-pointer
        transition-all duration-300 hover:border-gold/40 hover:shadow-[0_4px_40px_rgba(201,168,76,0.1)]"
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/40 pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/40 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/40 pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/40 pointer-events-none z-10" />

      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        {service.badge && (
          <span className="absolute top-3 right-3 bg-[#111111]/80 backdrop-blur-sm border border-gold/50 text-gold text-[10px] font-body font-semibold px-2.5 py-1 tracking-widest uppercase">
            {service.badge}
          </span>
        )}
        {/* Service name on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-heading text-cream text-xl leading-tight">{service.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4 relative">
        <div className="h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent" />

        <p className="font-body text-cream/50 text-sm leading-relaxed line-clamp-2">
          {service.shortDesc}
        </p>

        {/* Duration tabs */}
        <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
          {service.durations.map((d, i) => (
            <button
              key={i}
              data-testid={`card-duration-${service.id}-${i}`}
              onClick={(e) => { e.stopPropagation(); setSelectedDuration(i); }}
              className={`px-3 py-1 text-[11px] font-body tracking-wider uppercase transition-all duration-200 ${
                i === selectedDuration
                  ? "bg-gold text-[#080808] font-bold"
                  : "border border-gold/20 text-cream/40 hover:border-gold/40 hover:text-cream/70"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline justify-between">
          <span
            className="font-heading text-2xl"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #A0722A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ₹{service.durations[selectedDuration].price.toLocaleString("en-IN")}
          </span>
          <span className="text-[11px] text-gold/40 font-body tracking-widest uppercase group-hover:text-gold/70 transition-colors">
            Details →
          </span>
        </div>

        {/* Discount hint */}
        <p className="text-[11px] font-body text-gold/45 italic tracking-wide text-center border-t border-gold/10 pt-3">
          ✦ Visit us in-store for exclusive walk-in discounts
        </p>

        {/* WhatsApp CTA */}
        <div onClick={(e) => e.stopPropagation()}>
          <a
            href={service.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`card-whatsapp-${service.id}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-body tracking-[0.15em] uppercase hover:bg-[#25D366] hover:text-white transition-all duration-300"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [modalService, setModalService] = useState(null);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#080808] relative overflow-hidden"
    >
      {/* Subtle bg texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg, #C9A84C 0px, #C9A84C 1px,
            transparent 1px, transparent 60px
          )`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-gold/40" />
            <div className="w-1 h-1 rotate-45 bg-gold" />
            <div className="h-px w-10 bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-cream mb-3">
            Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 40%, #A0722A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h2>
          <p className="font-body text-cream/40 text-sm tracking-widest uppercase mt-3">
            Crafted for your body, mind & soul
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} onClick={setModalService} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-5">
          <p className="text-cream/30 text-xs tracking-[0.3em] uppercase font-body">
            Prefer to speak with us?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${PHONE}`}
              data-testid="services-cta-call"
              className="flex items-center gap-2 px-10 py-3.5 border border-gold/50 text-gold font-body text-xs tracking-[0.2em] uppercase hover:bg-gold/10 hover:border-gold transition-all duration-300 min-w-[180px] justify-center"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
            <a
              href="https://wa.me/919535848946?text=Hi%2C%20I%20want%20to%20book%20a%20service%20at%20Vin%20Paradise%20Nagarbhavi"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="services-cta-whatsapp"
              className="flex items-center gap-2 px-10 py-3.5 bg-[#25D366] text-white font-body text-xs tracking-[0.2em] uppercase hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)] min-w-[180px] justify-center"
            >
              <WhatsAppIcon /> WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      <ServiceModal service={modalService} open={!!modalService} onClose={() => setModalService(null)} />
    </section>
  );
}