// import { Phone, ShieldCheck, UserCheck, Sparkles, Users, BadgeIndianRupee, Target } from "lucide-react";
// import { whyChooseData, PHONE, WHATSAPP_DEFAULT } from "@/data/services";

// const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
//   <svg viewBox="0 0 24 24" fill="white" className={className}>
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//   </svg>
// );

// const iconMap = {
//   "shield-check": ShieldCheck,
//   "user-check": UserCheck,
//   sparkles: Sparkles,
//   users: Users,
//   "badge-indian-rupee": BadgeIndianRupee,
//   target: Target,
// };

// function CTAButtons({ prefix }) {
//   return (
//     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
//       {/* <a
//         href={`tel:${PHONE}`}
//         data-testid={`${prefix}-cta-call`}
//         className="flex items-center gap-2 px-8 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors"
//       >
//         <Phone className="w-4 h-4" /> Call Now
//       </a> */}
//       {/* <a
//         href={WHATSAPP_DEFAULT}
//         target="_blank"
//         rel="noopener noreferrer"
//         data-testid={`${prefix}-cta-whatsapp`}
//         className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)]"
//       >
//         <WhatsAppIcon /> WhatsApp Now
//       </a> */}
//     </div>
//   );
// }

// export function AboutUs() {
//   return (
//     <section data-testid="about-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
//       <div className="max-w-5xl mx-auto text-center">
//         <p className="font-heading text-2xl md:text-3xl text-gold/80 mt-2 mb-1">ವಿನ್ ಪ್ಯಾರಡೈಸ್</p>
//         <p className="font-heading text-xl md:text-2xl text-cream/80 mt-4 mb-3">Vin Paradise – Where Luxury Meets Care</p>
//         <div className="w-20 h-[1px] bg-gold mx-auto mb-8" />
//         <p className="font-body text-cream/60 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-12">
//           Vin Paradise Unisex Salon & Spa is Nagarbhavi's most trusted premium wellness destination.
//           We combine ancient spa traditions with modern luxury treatments to deliver an experience that
//           rejuvenates your body, mind and soul. Our expert therapists are trained to give you the finest
//           care in a serene, welcoming environment.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
//           {[
//             { value: "5000+", label: "Happy Clients" },
//             { value: "8+", label: "Expert Therapists" },
//             { value: "10+", label: "Premium Services" },
//           ].map((stat) => (
//             <div
//               key={stat.label}
//               data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
//               className="border border-gold/30 rounded-lg p-6 hover:border-gold/60 transition-colors"
//             >
//               <div className="font-heading text-gold text-3xl md:text-4xl mb-2">{stat.value}</div>
//               <div className="font-body text-cream/50 text-sm">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <CTAButtons prefix="about" />
//       </div>
//     </section>
//   );
// }

// export function WhyChooseUs() {
//   return (
//     <section data-testid="why-choose-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#080808]">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gold mb-4">Why Choose Vin Paradise?</h2>
//           <p className="font-body text-cream/50 text-base md:text-lg">Because you deserve the best</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {whyChooseData.map((item, i) => {
//             const Icon = iconMap[item.icon] || Sparkles;
//             return (
//               <div
//                 key={i}
//                 data-testid={`why-card-${i}`}
//                 className="bg-[#111111] border border-white/5 rounded-lg p-6 hover:border-gold/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.05)]"
//               >
//                 <Icon className="w-8 h-8 text-gold mb-4" />
//                 <h3 className="font-heading text-gold text-lg mb-3">{item.title}</h3>
//                 <p className="font-body text-cream/60 text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             );
//           })}
//         </div>

//         <CTAButtons prefix="why" />
//       </div>
//     </section>
//   );
// }


import { Phone, ShieldCheck, UserCheck, Sparkles, Users, BadgeIndianRupee, Target } from "lucide-react";
import { whyChooseData, PHONE, WHATSAPP_DEFAULT } from "@/data/services";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const iconMap = {
  "shield-check": ShieldCheck,
  "user-check": UserCheck,
  sparkles: Sparkles,
  users: Users,
  "badge-indian-rupee": BadgeIndianRupee,
  target: Target,
};

export function AboutUs() {
  return (
    <section
      data-testid="about-section"
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">

        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 bg-gold/40" />
          <div className="w-1 h-1 rotate-45 bg-gold" />
          <div className="h-px w-10 bg-gold/40" />
        </div>

        {/* Kannada + English title */}
        <p className="font-heading text-2xl md:text-3xl text-gold mb-1">ವಿನ್ ಪ್ಯಾರಡೈಸ್</p>
        <p className="font-heading text-lg md:text-xl text-cream/60 mb-6">
          Where Luxury Meets Care
        </p>

        {/* Thin rule */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

        {/* Description */}
        <p className="font-body text-cream/55 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12">
          Vin Paradise Unisex Salon & Spa is Nagarbhavi's most trusted premium wellness destination.
          We combine ancient spa traditions with modern luxury treatments to deliver an experience that
          rejuvenates your body, mind and soul. Our expert therapists are trained to give you the finest
          care in a serene, welcoming environment.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-0 max-w-xl mx-auto border border-gold/20">
          {[
            { value: "5000+", label: "Happy Clients" },
            { value: "8+", label: "Expert Therapists" },
            { value: "10+", label: "Premium Services" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`py-6 px-4 text-center ${i !== 2 ? "border-r border-gold/20" : ""}`}
            >
              <div
                className="font-heading text-3xl mb-1"
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 50%, #A0722A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="font-body text-cream/40 text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section
      data-testid="why-choose-section"
      className="relative py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-[#080808] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold/40" />
            <div className="w-1 h-1 rotate-45 bg-gold" />
            <div className="h-px w-10 bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-cream mb-3">
            Why Choose{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #F0D080 40%, #A0722A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Vin Paradise?
            </span>
          </h2>
          <p className="font-body text-cream/35 text-sm tracking-widest uppercase mt-3">
            Because you deserve the best
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {whyChooseData.map((item, i) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={i}
                data-testid={`why-card-${i}`}
                className="group bg-[#080808] p-8 hover:bg-[#0e0e0e] transition-all duration-300 relative overflow-hidden"
              >
                {/* Corner accent on hover */}
                <div className="absolute top-0 left-0 w-0 h-0 group-hover:w-8 group-hover:h-8 border-t-2 border-l-2 border-gold/60 transition-all duration-500" />

                <div className="w-10 h-10 flex items-center justify-center border border-gold/30 mb-5 group-hover:border-gold/60 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-heading text-cream text-lg mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-cream/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}