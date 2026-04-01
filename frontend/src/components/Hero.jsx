// import { Phone } from "lucide-react";
// import { PHONE, WHATSAPP_DEFAULT } from "@/data/services";

// const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
//   <svg viewBox="0 0 24 24" fill="white" className={className}>
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//   </svg>
// );

// export default function Hero() {
//   return (
//     <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80"
//           alt="Spa ambience"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-[#080808]/85" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
//         <h1
//           data-testid="hero-heading"
//           className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6"
//         >
//           Relax. Rejuvenate. Restore.
//         </h1>
//         <p className="font-body text-cream/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
//           Premium spa & salon services for your body, mind & soul
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
//           <a
//             href={`tel:${PHONE}`}
//             data-testid="hero-call-btn"
//             className="flex items-center gap-2 px-8 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors w-full sm:w-auto justify-center"
//           >
//             <Phone className="w-4 h-4" /> Call Now
//           </a>
//           <a
//             href={WHATSAPP_DEFAULT}
//             target="_blank"
//             rel="noopener noreferrer"
//             data-testid="hero-whatsapp-btn"
//             className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors animate-pulse-glow w-full sm:w-auto justify-center"
//           >
//             <WhatsAppIcon className="w-4 h-4" /> WhatsApp Now
//           </a>
//           <button
//             onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//             data-testid="hero-book-btn"
//             className="flex items-center gap-2 px-8 py-3 bg-gold text-[#080808] font-body font-semibold rounded-full hover:bg-gold-light transition-colors w-full sm:w-auto justify-center"
//           >
//             Book Appointment
//           </button>
//         </div>

//         <p className="text-cream/40 text-sm font-body">
//           Open Daily 9AM-9PM | Nagarbhavi, Bangalore
//         </p>
//       </div>
//     </section>
//   );
// }


import { Phone } from "lucide-react";
import { PHONE, WHATSAPP_DEFAULT } from "@/data/services";

const VIDEO_URL = "https://res.cloudinary.com/dqp0pkern/video/upload/q_auto,f_auto/v1775081129/SPA_FINAL_VIDEO_levlkq.mp4";

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="white" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#080808]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
        <h1
          data-testid="hero-heading"
          className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight mb-6"
        >
          Relax. Rejuvenate. Restore.
        </h1>
        <p className="font-body text-cream/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
          Premium spa & salon services for your body, mind & soul
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={`tel:${PHONE}`}
            data-testid="hero-call-btn"
            className="flex items-center gap-2 px-8 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors w-full sm:w-auto justify-center"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors animate-pulse-glow w-full sm:w-auto justify-center"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp Now
          </a>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="hero-book-btn"
            className="flex items-center gap-2 px-8 py-3 bg-gold text-[#080808] font-body font-semibold rounded-full hover:bg-gold-light transition-colors w-full sm:w-auto justify-center"
          >
            Book Appointment
          </button>
        </div>

        <p className="text-cream/40 text-sm font-body">
          Open Daily 9AM-9PM | Nagarbhavi, Bangalore
        </p>
      </div>
    </section>
  );
}