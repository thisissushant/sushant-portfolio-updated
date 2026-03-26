import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import TileGrid from "@/components/TileGrid";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
// import { BackgroundBeams } from "@/components/ui/background-beams";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ImpactMetrics />
      <TileGrid />
      <FeaturedWork />
      <Footer />
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default Index;
