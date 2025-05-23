import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import ShowsSection from "@/components/ShowsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ShowsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}