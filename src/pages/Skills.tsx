import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SkillTags from "@/components/SkillTags";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container">
        <PageHeader
          title="Skills"
          subtitle="Technologies and tools I work with daily."
        />
        <div className="pb-16 max-w-3xl">
          <SkillTags />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
