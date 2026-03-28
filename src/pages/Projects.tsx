import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container">
        <PageHeader
          title="Projects"
          subtitle="A few things I’ve worked on across mobile and web."
        />

        <div className="pb-16 grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="metro-tile p-6 md:col-span-2"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Library
            </span>

            <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
              mediversal-rn-image-intelligence
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Built and published a React Native library for image processing
              using on-device ML models. It supports face detection, text
              recognition, and object detection, all running locally on the
              device without sending data to a server.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Designed to be simple to use and reusable across projects, with a
              focus on keeping user data on-device.
            </p>

            <a
              href="https://www.npmjs.com/package/mediversal-rn-image-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              <ExternalLink size={14} />
              View Package
            </a>
          </motion.div>

          {/* MEDIVERSAL */}
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
              Worked on a healthcare app covering pharmacy, lab tests, homecare,
              and online consultations. Involved in building features,
              integrating APIs, and handling app releases.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Also worked on admin tools and handled production issues to keep
              the app stable.
            </p>

            <a
              href="https://onelink.to/e7vbmn?&dev=macos&ref=aHR0cHM6Ly93d3cubWVkaXZlcnNhbDI0Ny5pbi8="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              <ExternalLink size={14} />
              View App
            </a>
          </motion.div>

          {/* RELI AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="metro-tile p-6"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Mobile App
            </span>

            <h3 className="text-lg font-bold text-foreground mt-2 mb-2">
              Reli AI
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Worked on the Reli AI mobile app during my time at MexicaNFT.
              Built screens, added new features, and integrated APIs based on
              product requirements.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Also contributed to testing and improvements. The app is available
              on both Android and iOS.
            </p>

            <a
              href="https://app.reli.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              <ExternalLink size={14} />
              View App
            </a>
          </motion.div>
        </div>
      </div>
      <BackgroundBeams />

      <Footer />
    </div>
  );
};

export default Projects;
