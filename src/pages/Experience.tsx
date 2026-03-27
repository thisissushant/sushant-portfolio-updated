import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Experience = () => {
  return (
    <div className="min-h-screen">
      <BackgroundBeams />
      <Navbar />

      <div className="section-container">
        <PageHeader
          title="Experience"
          subtitle="2+ years of building and maintaining mobile and web applications across different domains."
        />

        <div className="pb-10 max-w-3xl">
          <ExperienceTimeline />
        </div>

        {/* Extra section to balance space */}
        <div className="metro-tile p-6 mb-16 max-w-3xl">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            What I Do
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            I work on both mobile and web applications, handling everything from
            feature development to deployment. This includes building user
            flows, integrating APIs, and making sure the app works reliably in
            real scenarios.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            I’m also involved in releasing updates, fixing issues in production,
            and keeping the apps stable as they grow.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;
