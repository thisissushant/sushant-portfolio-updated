import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container">
        <PageHeader
          title="About Me"
          subtitle="Cross-platform engineer focused on performance, scalable architecture, and product-quality UI."
        />

        <div className="grid md:grid-cols-2 gap-6 pb-16">
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
              I'm Sushant Singh, an SDE-II specializing in React Native and
              Next.js. With 4+ years of experience, I've built production apps
              for healthcare, e-commerce, and AI products — shipping to both iOS
              and Android.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I care deeply about clean architecture, performance optimization,
              and creating UIs that feel native and polished. I've co-founded a
              business that handled 9,000+ orders and generated ₹90L+ revenue.
            </p>
          </motion.div>

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
              <p className="text-xs text-muted-foreground">2017 – 2021</p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
