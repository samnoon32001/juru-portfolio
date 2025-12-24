import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ShortFormSection from "@/components/ShortFormSection";
import LongFormSection from "@/components/LongFormSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <ShortFormSection />
      <LongFormSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
