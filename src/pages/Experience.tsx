import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Experience = () => {
  return (
    <div className="min-h-screen ">
      <BackgroundBeams />

      <Navbar />
      <div className="section-container">
        <PageHeader
          title="Experience"
          subtitle="4+ years building production applications across healthcare, e-commerce, and AI."
        />
        <div className="pb-16 max-w-3xl">
          <ExperienceTimeline />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
