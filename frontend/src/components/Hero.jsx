// import { Phone } from "lucide-react";
// import { PHONE, WHATSAPP_DEFAULT } from "@/data/services";

// const VIDEO_URL = "https://res.cloudinary.com/dqp0pkern/video/upload/q_auto,f_auto/v1775081129/SPA_FINAL_VIDEO_levlkq.mp4";

// const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
//   <svg viewBox="0 0 24 24" fill="white" className={className}>
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//   </svg>
// );

// export default function Hero() {
//   return (
//     <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">

//       {/* Video Background */}
//       <div className="absolute inset-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source src={VIDEO_URL} type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-[#080808]/75" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6">
//         <style>{`
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//             }
//             to {
//               opacity: 1;
//             }
//           }
//           .hero-title {
//             animation: fadeIn 1s ease-out;
//             letter-spacing: 0.08em;
//             font-weight: 400;
//           }
//         `}</style>

//         {/* Top decorative line */}
//         <div className="flex items-center justify-center gap-3 mb-12">
//           <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
//           <div className="w-1 h-1 rotate-45 bg-gold/70" />
//           <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
//         </div>

//         {/* Main Title */}
//         <h1
//           data-testid="hero-heading"
//           className="hero-title font-heading text-7xl sm:text-8xl lg:text-9xl leading-tight tracking-wide"
//           style={{
//             background: "linear-gradient(135deg, #F0D080 0%, #C9A84C 50%, #F0D080 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             textShadow: "0 0 30px rgba(201, 168, 76, 0.15)",
//           }}
//         >
//           ವಿನ್ ಪ್ಯಾರಡೈಸ್
//         </h1>

//         {/* Bottom decorative line */}
//         <div className="flex items-center justify-center gap-3 mt-12">
//           <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
//           <div className="w-1 h-1 rotate-45 bg-gold/70" />
//           <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
//         </div>
//       </div>
//     </section>
//   );
// }

import { Phone } from "lucide-react";
import { PHONE, WHATSAPP_DEFAULT } from "@/data/services";

const VIDEO_URL =
  "https://res.cloudinary.com/dqp0pkern/video/upload/q_auto,f_auto/v1775081129/SPA_FINAL_VIDEO_levlkq.mp4";

const WhatsAppIcon = ({ className = "w-3 h-3" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const DiamondRule = () => (
  <div className="flex items-center justify-center gap-3.5">
    <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold/40" />
    <div className="w-1.5 h-1.5 rotate-45 bg-gold/50 flex-shrink-0" />
    <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold/40" />
  </div>
);

export default function Hero() {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
        {/* Dark overlay + vignette */}
        <div className="absolute inset-0 bg-[#080808]/78" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      {/* Top navigation bar */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-12 py-7 z-20"
        style={{ animation: "fadeDown 1.2s ease both" }}
      >
        <span
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 200,
            fontSize: "10px",
            letterSpacing: "0.35em",
            color: "rgba(200,165,90,0.55)",
            textTransform: "uppercase",
          }}
        >
          Est. 2019 · Bangalore
        </span>
        <nav className="hidden md:flex gap-9">
          {["Services", "About", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300,
                fontSize: "10px",
                letterSpacing: "0.3em",
                color: "rgba(255,255,255,0.3)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "rgba(200,165,90,0.75)")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.3)")}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Raleway:wght@200;300;400&display=swap');

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.25; }
            50%       { opacity: 0.7; }
          }
          .hero-anim-1 { animation: fadeUp 1s 0.3s ease both; }
          .hero-anim-2 { animation: fadeUp 1s 0.55s ease both; }
          .hero-anim-3 { animation: fadeUp 1s 0.75s ease both; }
          .hero-anim-4 { animation: fadeUp 1s 0.9s ease both; }
          .hero-anim-5 { animation: fadeUp 1s 1.05s ease both; }
          .hero-anim-6 { animation: fadeUp 1s 1.25s ease both; }
          .hero-anim-7 { animation: fadeUp 1s 1.45s ease both; }

          .cta-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 13px 32px;
            border: 0.5px solid rgba(200,165,90,0.5);
            color: rgba(200,165,90,0.9);
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
            font-size: 10px;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            text-decoration: none;
            background: transparent;
            cursor: pointer;
            transition: border-color 0.3s, color 0.3s, background 0.3s;
          }
          .cta-btn-primary:hover {
            border-color: rgba(200,165,90,0.85);
            color: rgba(220,185,100,1);
            background: rgba(200,165,90,0.05);
          }
          .cta-btn-ghost {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 13px 28px;
            border: none;
            color: rgba(255,255,255,0.28);
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
            font-size: 10px;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            text-decoration: none;
            background: transparent;
            cursor: pointer;
            transition: color 0.3s;
          }
          .cta-btn-ghost:hover { color: rgba(255,255,255,0.6); }

          .scroll-line {
            width: 0.5px;
            height: 36px;
            background: linear-gradient(to bottom, rgba(200,165,90,0.4), transparent);
            animation: scrollPulse 2.5s ease infinite;
          }
        `}</style>

        {/* Eyebrow */}
        <p
          className="hero-anim-1"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 200,
            fontSize: "10px",
            letterSpacing: "0.5em",
            color: "rgba(200,165,90,0.55)",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          Unisex Salon &amp; Spa
        </p>

        {/* Rule above */}
        <div className="hero-anim-2" style={{ marginBottom: "36px" }}>
          <DiamondRule />
        </div>

        {/* Kannada title */}
        <h1
          data-testid="hero-heading"
          className="hero-anim-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(64px, 10vw, 120px)",
            lineHeight: 1.0,
            letterSpacing: "0.04em",
            background:
              "linear-gradient(160deg, #E8C97A 0%, #C9A84C 35%, #F0D890 55%, #BFA048 75%, #E8C97A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "18px",
          }}
        >
          ವಿನ್ ಪ್ಯಾರಡೈಸ್
        </h1>

        {/* English subtitle */}
        {/* <p
          className="hero-anim-4"
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 200,
            fontSize: "clamp(10px, 1.4vw, 13px)",
            letterSpacing: "0.55em",
            color: "rgba(255,255,255,0.22)",
            textTransform: "uppercase",
            marginBottom: "36px",
          }}
        >
          Vin Paradise
        </p> */}

        {/* Rule below */}
        <div className="hero-anim-5" style={{ marginBottom: "36px" }}>
          <DiamondRule />
        </div>

        {/* Tagline */}
        {/* <p
          className="hero-anim-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(14px, 1.8vw, 18px)",
            color: "rgba(220,190,120,0.45)",
            letterSpacing: "0.12em",
            marginBottom: "52px",
          }}
        >
          Where luxury meets artistry
        </p> */}

        {/* CTA buttons */}
        {/* <div
          className="hero-anim-7 flex items-center gap-0"
          style={{ gap: "0" }}
        >
          <a className="cta-btn-primary" href={`https://wa.me/${WHATSAPP_DEFAULT}`}>
            <WhatsAppIcon />
            Book Now
          </a>

          <div
            style={{
              width: "0.5px",
              height: "20px",
              background: "rgba(255,255,255,0.1)",
              margin: "0 4px",
            }}
          />

          <a className="cta-btn-ghost" href={`tel:${PHONE}`}>
            <Phone size={12} strokeWidth={1.2} />
            Call Us
          </a>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5"
        style={{ animation: "fadeUp 1s 1.7s ease both" }}
      >
        <span
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 200,
            fontSize: "9px",
            letterSpacing: "0.45em",
            color: "rgba(255,255,255,0.18)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}