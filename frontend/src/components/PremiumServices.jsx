// import { useState } from "react";
// import { Phone, Star } from "lucide-react";
// import { premiumServices, PHONE } from "@/data/services";
// import ServiceModal from "@/components/ServiceModal";

// const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
//   <svg viewBox="0 0 24 24" fill="white" className={className}>
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//   </svg>
// );

// function PremiumCard({ service, onClick }) {
//   const [selectedDuration, setSelectedDuration] = useState(0);

//   return (
//     <div
//       data-testid={`premium-card-${service.id}`}
//       onClick={() => onClick(service)}
//       className="group bg-[#111111] border border-gold/20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-gold/60 hover:shadow-[0_0_40px_rgba(201,168,76,0.12)]"
//     >
//       {/* Image */}
//       <div className="relative w-full h-[280px] overflow-hidden">
//         <img
//           src={service.image}
//           alt={service.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
//         <span className="absolute top-4 right-4 bg-gold text-[#080808] text-xs font-body font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(201,168,76,0.4)]">
//           <Star className="w-3 h-3" /> PREMIUM
//         </span>
//       </div>

//       {/* Content */}
//       <div className="p-6 space-y-4">
//         <h3 className="font-heading text-gold text-2xl">{service.name}</h3>
//         <p className="font-body text-cream/60 text-sm leading-relaxed">{service.shortDesc}</p>

//         {/* Duration tabs */}
//         <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
//           {service.durations.map((d, i) => (
//             <button
//               key={i}
//               data-testid={`premium-duration-${service.id}-${i}`}
//               onClick={(e) => { e.stopPropagation(); setSelectedDuration(i); }}
//               className={`px-4 py-2 text-sm font-body rounded border transition-colors ${
//                 i === selectedDuration
//                   ? "bg-gold text-[#080808] border-gold font-semibold"
//                   : "border-gold/30 text-cream/60 hover:border-gold/50"
//               }`}
//             >
//               {d.label} — ₹{d.price.toLocaleString("en-IN")}
//             </button>
//           ))}
//         </div>

//         {/* Benefits */}
//         <ul className="space-y-1.5">
//           {service.benefits.map((b, i) => (
//             <li key={i} className="flex items-start gap-2 text-cream/70 text-sm font-body">
//               <span className="text-gold mt-0.5">&#10003;</span> {b}
//             </li>
//           ))}
//         </ul>

//         {/* Pricing Disclaimer */}
//         <p className="text-xs font-body text-gold/60 italic text-center pt-1">
//           💬 Prices may vary — call or visit us for exclusive discounts!
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
//           <a
//             href={`tel:${PHONE}`}
//             data-testid={`premium-call-${service.id}`}
//             className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gold text-gold text-sm font-body rounded-full hover:bg-gold/10 transition-colors"
//           >
//             <Phone className="w-3.5 h-3.5" /> Call Now
//           </a>
//           <a
//             href={service.whatsapp}
//             target="_blank"
//             rel="noopener noreferrer"
//             data-testid={`premium-whatsapp-${service.id}`}
//             className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white text-sm font-body rounded-full hover:bg-[#20bd5a] transition-colors shadow-[0_0_12px_rgba(37,211,102,0.3)]"
//           >
//             <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function PremiumServices() {
//   const [modalService, setModalService] = useState(null);

//   return (
//     // <section id="premium" data-testid="premium-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#161616]">
//     <section id="premium" data-testid="premium-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#161616] relative">
//   {/* Premium highlight glow */}
//   <div className="absolute inset-0 pointer-events-none border-y border-gold/20" />
//   <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
//   <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <span className="inline-block bg-gold/10 border border-gold/40 text-gold text-xs font-body font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">⭐ Signature Collection</span>
// <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gold mb-4">Our Premium Services</h2>
// <p className="font-body text-cream/50 text-base md:text-lg">Exclusive luxury experiences — only at Vin Paradise</p>
//           {/* <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gold mb-4">Our Premium Services</h2>
//           <p className="font-body text-cream/50 text-base md:text-lg">Exclusive luxury experiences — only at Vin Paradise</p> */}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {premiumServices.map((service) => (
//             <PremiumCard key={service.id} service={service} onClick={setModalService} />
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
//           <a
//             href={`tel:${PHONE}`}
//             data-testid="premium-cta-call"
//             className="flex items-center gap-2 px-8 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors"
//           >
//             <Phone className="w-4 h-4" /> Call Now
//           </a>
//           <a
//             href="https://wa.me/919535848946?text=Hi%2C%20I%20want%20to%20book%20a%20service%20at%20Vin%20Paradise%20Nagarbhavi"
//             target="_blank"
//             rel="noopener noreferrer"
//             data-testid="premium-cta-whatsapp"
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
import { Phone, Star } from "lucide-react";
import { premiumServices, PHONE } from "@/data/services";
import ServiceModal from "@/components/ServiceModal";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Ornamental divider
const OrnamentDivider = () => (
  <div className="flex items-center justify-center gap-3 my-4">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
    <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
    <div className="w-2 h-2 rotate-45 border border-gold" />
    <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
  </div>
);

function PremiumCard({ service, onClick, index }) {
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-testid={`premium-card-${service.id}`}
      onClick={() => onClick(service)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
      className="group relative bg-[#0e0e0e] border border-gold/20 rounded-none overflow-hidden cursor-pointer
        hover:border-gold/50 hover:shadow-[0_8px_60px_rgba(201,168,76,0.15)] transition-all duration-500"
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/70 z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold/70 z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold/70 z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold/70 z-10 pointer-events-none" />

      {/* Shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.06) 50%, transparent 60%)" }}
      />

      {/* Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Premium badge */}
        <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
          <span className="bg-[#0e0e0e]/80 backdrop-blur-sm border border-gold/60 text-gold text-[10px] font-body font-bold px-3 py-1.5 tracking-[0.2em] uppercase flex items-center gap-1.5">
            <Star className="w-2.5 h-2.5 fill-gold" /> SIGNATURE
          </span>
        </div>

        {/* Price overlay on image bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-heading text-cream text-2xl lg:text-3xl leading-tight drop-shadow-lg">
            {service.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 space-y-5">

        {/* Thin gold rule */}
        <div className="h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />

        <p className="font-body text-cream/55 text-sm leading-relaxed tracking-wide">
          {service.shortDesc}
        </p>

        {/* Duration tabs */}
        <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
          {service.durations.map((d, i) => (
            <button
              key={i}
              data-testid={`premium-duration-${service.id}-${i}`}
              onClick={(e) => { e.stopPropagation(); setSelectedDuration(i); }}
              className={`px-4 py-2 text-xs font-body tracking-wider uppercase transition-all duration-300 ${
                i === selectedDuration
                  ? "bg-gold text-[#080808] font-bold shadow-[0_0_20px_rgba(201,168,76,0.4)]"
                  : "border border-gold/25 text-cream/50 hover:border-gold/50 hover:text-cream/80"
              }`}
            >
              {d.label} — ₹{d.price.toLocaleString("en-IN")}
            </button>
          ))}
        </div>

        {/* Benefits */}
        <ul className="space-y-2">
          {service.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-cream/65 text-sm font-body">
              <span className="text-gold text-xs mt-1 shrink-0">◆</span>
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {/* Disclaimer */}
        <p className="text-[11px] font-body text-gold/45 italic text-center tracking-wide border-t border-gold/10 pt-3">
          ✦ Prices may vary — call or visit us for exclusive discounts
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-1" onClick={(e) => e.stopPropagation()}>
          <a
            href={`tel:${PHONE}`}
            data-testid={`premium-call-${service.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-gold/50 text-gold text-xs font-body tracking-widest uppercase hover:bg-gold/10 hover:border-gold transition-all duration-300"
          >
            <Phone className="w-3 h-3" /> Call Now
          </a>
          <a
            href={service.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`premium-whatsapp-${service.id}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-body tracking-widest uppercase hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.25)]"
          >
            <WhatsAppIcon className="w-3 h-3" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PremiumServices() {
  const [modalService, setModalService] = useState(null);

  return (
    <section
      id="premium"
      data-testid="premium-section"
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A84C 0px, #C9A84C 1px,
            transparent 1px, transparent 60px
          )`,
        }}
      />

      {/* Top & bottom gold borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">

          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1 h-1 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-3">
            Our{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 40%, #C9A84C 70%, #A0722A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Premium
            </span>{" "}
            Services
          </h2>

          <OrnamentDivider />

          <p className="font-body text-cream/40 text-sm md:text-base tracking-widest uppercase mt-4">
            Exclusive luxury experiences — only at Vin Paradise
          </p>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-gold/40" />
            <div className="w-1 h-1 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {premiumServices.map((service, i) => (
            <PremiumCard key={service.id} service={service} onClick={setModalService} index={i} />
          ))}
        </div>


      </div>

      <ServiceModal service={modalService} open={!!modalService} onClose={() => setModalService(null)} />
    </section>
  );
}