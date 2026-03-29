import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PremiumServices from "@/components/PremiumServices";
import { AboutUs, WhyChooseUs } from "@/components/AboutWhyChoose";
import { Gallery, Testimonials } from "@/components/GalleryTestimonials";
import { Contact, FinalCTA, Footer } from "@/components/ContactFooter";
import FloatingButtons from "@/components/FloatingButtons";

function App() {
  return (
    <div className="bg-[#080808] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <PremiumServices />
      <AboutUs />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
