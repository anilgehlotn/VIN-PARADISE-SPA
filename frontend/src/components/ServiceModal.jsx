import { useState } from "react";
import { Phone, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PHONE } from "@/data/services";

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="white" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ServiceModal({ service, open, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(0);

  if (!service) return null;

  const images = service.extraImages || [service.image];

  const nextImage = () => setCurrentImage((p) => (p + 1) % images.length);
  const prevImage = () => setCurrentImage((p) => (p - 1 + images.length) % images.length);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        data-testid={`service-modal-${service.id}`}
        className="max-w-2xl w-[95vw] max-h-[90vh] p-0 bg-[#151515] border border-gold/30 shadow-[0_0_30px_rgba(201,168,76,0.1)] overflow-hidden flex flex-col"
      >
        <DialogTitle className="sr-only">{service.name}</DialogTitle>
        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="pb-20">
            {/* Image Slider */}
            <div className="relative w-full h-[220px] md:h-[280px] overflow-hidden">
              <img
                src={images[currentImage]}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/60 to-transparent" />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    data-testid="modal-prev-image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#080808]/60 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    data-testid="modal-next-image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#080808]/60 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === currentImage ? "bg-gold" : "bg-cream/30"}`}
                  />
                ))}
              </div>

              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 bg-gold/90 text-[#080808] text-xs font-body font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  {service.badge === "Premium" ? <Star className="w-3 h-3" /> : <Star className="w-3 h-3" />}
                  {service.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="px-5 md:px-6 pt-5 space-y-6">
              {/* Name */}
              <h2 className="font-heading text-2xl md:text-3xl text-gold">{service.name}</h2>

              {/* Duration Tabs */}
              <div className="flex flex-wrap gap-2">
                {service.durations.map((d, i) => (
                  <button
                    key={i}
                    data-testid={`modal-duration-${i}`}
                    onClick={() => setSelectedDuration(i)}
                    className={`px-4 py-2 text-sm font-body rounded-lg border transition-colors ${
                      i === selectedDuration
                        ? "bg-gold text-[#080808] border-gold font-semibold"
                        : "border-gold/30 text-cream/70 hover:border-gold/60"
                    }`}
                  >
                    {d.label} — ₹{d.price.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>

              {/* Description */}
              <p className="font-body text-cream/70 text-sm leading-relaxed">{service.shortDesc}</p>

              {/* Benefits */}
              <div>
                <h3 className="font-heading text-gold text-lg mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-cream/80 text-sm font-body">
                      <span className="text-gold mt-0.5">&#10003;</span> {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products Used */}
              <div>
                <h3 className="font-heading text-gold text-lg mb-3">Products Used</h3>
                <div className="space-y-3">
                  {service.products.map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-gold text-lg">&#9672;</span>
                      <div>
                        <span className="text-cream font-body font-medium text-sm">{p.name}</span>
                        <span className="text-cream/50 font-body text-sm"> — {p.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div>
                <h3 className="font-heading text-gold text-lg mb-3">What to Expect</h3>
                <p className="font-body text-cream/70 text-sm leading-relaxed">{service.whatToExpect}</p>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Sticky CTA */}
        <div className="sticky bottom-0 left-0 right-0 bg-[#151515]/95 backdrop-blur-md border-t border-gold/20 p-4 flex gap-3">
          <a
            href={`tel:${PHONE}`}
            data-testid="modal-call-btn"
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-gold text-gold font-body rounded-full hover:bg-gold/10 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href={service.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="modal-whatsapp-btn"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-body rounded-full hover:bg-[#20bd5a] transition-colors text-sm shadow-[0_0_15px_rgba(37,211,102,0.3)]"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
