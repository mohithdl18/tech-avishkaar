
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import SponsorsSection from "@/components/SponsorsSection";
import FaqSection from "@/components/FaqSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <SponsorsSection />
      <FaqSection />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Index;
