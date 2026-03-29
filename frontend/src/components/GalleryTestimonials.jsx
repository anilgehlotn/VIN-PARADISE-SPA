import { useState } from "react";
import { Phone, Star, X } from "lucide-react";
import { galleryImages, testimonials, PHONE, WHATSAPP_DEFAULT } from "@/data/services";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="white" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function CTAButtons({ prefix }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
      <a
        href={`tel:${PHONE}`}
        data-testid={`${prefix}-cta-call`}
        className="flex items-center gap-2 px-8 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <a
        href={WHATSAPP_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`${prefix}-cta-whatsapp`}
        className="flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)]"
      >
        <WhatsAppIcon /> WhatsApp Now
      </a>
    </div>
  );
}

export function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gold mb-4">Our Space</h2>
          <p className="font-body text-cream/50 text-base md:text-lg">A sanctuary built for your peace</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              data-testid={`gallery-image-${i}`}
              onClick={() => setLightbox(img)}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <CTAButtons prefix="gallery" />
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-gold" onClick={() => setLightbox(null)} data-testid="lightbox-close">
            <X className="w-8 h-8" />
          </button>
          <img src={lightbox} alt="Gallery preview" className="max-w-full max-h-[80vh] object-contain rounded-lg" />
        </div>
      )}
    </section>
  );
}

export function Testimonials() {
  const initials = ["PM", "RK", "SR", "AS"];
  const colors = ["#C9A84C", "#25D366", "#C9A84C", "#25D366"];

  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gold mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              data-testid={`testimonial-${i}`}
              className="bg-[#111111] border border-white/5 rounded-lg p-6 hover:border-gold/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#080808] font-body font-bold text-sm"
                  style={{ backgroundColor: colors[i] }}
                >
                  {initials[i]}
                </div>
                <div>
                  <p className="font-body text-cream font-medium text-sm">{t.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-body text-cream/70 text-sm leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>

        <CTAButtons prefix="testimonials" />
      </div>
    </section>
  );
}
