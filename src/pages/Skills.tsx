import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SkillTags from "@/components/SkillTags";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container">
        <PageHeader
          title="Skills"
          subtitle="Tools and technologies I use to build and ship applications."
        />

        <div className="pb-16 max-w-4xl">
          <SkillTags />
        </div>
      </div>
      <BackgroundBeams />

      <Footer />
    </div>
  );
};

export default Skills;
