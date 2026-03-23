import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ExternalLink, FolderGit } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container">
        <PageHeader
          title="Projects"
          subtitle="Selected work showcasing full-stack engineering."
        />

        <div className="pb-16 grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="metro-tile p-6 md:col-span-2"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Full-Stack
            </span>
            <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
              Sneaker E-commerce Platform
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A complete e-commerce platform for sneakers with Next.js SSR for
              performance and SEO, Prisma ORM with MongoDB, Tailwind CSS for UI,
              and full shopping flow including listing, cart, and checkout.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Next.js", "Prisma", "MongoDB", "Tailwind CSS", "SSR"].map(
                (t) => (
                  <span key={t} className="skill-chip text-xs">
                    {t}
                  </span>
                ),
              )}
            </div>
            <a
              href="https://github.com/thisissushant/sneaker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              <FolderGit size={14} />
              View on GitHub
              <ExternalLink size={12} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="metro-tile p-6"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Healthcare
            </span>
            <h3 className="text-lg font-bold text-foreground mt-2 mb-2">
              Mediversal247
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Cross-platform healthcare super-app with pharmacy, lab tests,
              homecare, and doctor video consultations.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React Native",
                "TypeScript",
                "Zustand",
                "AWS Amplify",
                "Agora SDK",
              ].map((t) => (
                <span key={t} className="skill-chip text-xs">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metro-tile p-6"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              AI
            </span>
            <h3 className="text-lg font-bold text-foreground mt-2 mb-2">
              Reli AI Mobile
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Built the mobile app architecture and UI for Reli AI at MexicaNFT,
              with Cypress E2E testing.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React Native", "TypeScript", "Cypress", "Tailwind"].map(
                (t) => (
                  <span key={t} className="skill-chip text-xs">
                    {t}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
