import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const About = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />

      <div className="section-container">
        <PageHeader
          title="About"
          subtitle="Software engineer working across mobile and web, taking products from development to release."
        />

        <div className="grid md:grid-cols-2 gap-6 pb-10">
          {/* Who I Am */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="metro-tile p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Who I Am
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              I'm Sushant Singh, a software engineer with 2+ years of experience
              building mobile and web applications. I work on both Android and
              iOS apps, along with web platforms, and handle their deployment as
              well.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              In my current role, I’m involved in most parts of the product from
              building features and fixing issues to releasing updates and
              keeping things running smoothly.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              I focus on writing clean code, keeping things simple, and making
              sure the app works reliably in real use.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="metro-tile p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Swami Keshvanand Institute of Technology, Management & Gramothan
                (SKIT)
              </p>
              <p className="text-sm text-muted-foreground">Jaipur, Rajasthan</p>
              <p className="text-sm text-primary font-medium">
                B.Tech in Information Technology
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Section to balance space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="metro-tile p-6 mb-16"
        >
          <h3 className="text-lg font-semibold text-foreground mb-3">
            What I Work On
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            I’ve worked on healthcare apps, e-commerce platforms, and internal
            tools. This includes building user-facing features, integrating
            APIs, handling edge cases, and making sure everything works well
            across devices.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            I also take care of app releases — preparing builds, managing store
            updates, and fixing issues that come up after deployment.
          </p>
        </motion.div>
      </div>
      <BackgroundBeams />

      <Footer />
    </div>
  );
};

export default About;
