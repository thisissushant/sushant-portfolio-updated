"use client";
import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const HeroSection = () => {
  const words = [
    {
      text: "Sushant",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "Singh",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "Software",
      className: "text-gradient dark:text-blue-500",
    },
    {
      text: "Engineer",
      className: "text-gradient dark:text-blue-500",
    },
  ];
  return (
    <section className="hero-gradient relative min-h-[100vh] flex items-center pt-16">
      {/* Subtle grid pattern */}
      {/* <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      /> */}
      <div className="absolute inset-0">
        <WebcamPixelGrid
          gridCols={60}
          gridRows={40}
          maxElevation={50}
          motionSensitivity={0.25}
          elevationSmoothing={0.2}
          colorMode="webcam"
          backgroundColor="#030303"
          mirror={true}
          gapRatio={0.05}
          invertColors={false}
          darken={0.6}
          borderColor="#ffffff"
          borderOpacity={0.06}
          className="w-full h-full"
          onWebcamReady={() => console.log("Webcam ready!")}
          onWebcamError={(err) => console.error("Webcam error:", err)}
        />
      </div>

      <div className="section-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse pulse-red bg-green-600" />
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            <TypewriterEffectSmooth words={words} />
          </h1>
          <p className="text-lg sm:text-xl text-gradient font-medium mb-4">
            SDE-II | Mediversal Healthcare
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Software Engineer specializing in building mobile applications for
            both iOS and Android. Experienced in developing web applications
            across multiple domains including Healthcare, Legal, and
            Procurement.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            >
              <FolderOpen size={16} />
              View Projects
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm border border-border transition-all duration-200 hover:bg-secondary/80 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/thisissushant"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/sushantbibhu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
