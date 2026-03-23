import { motion } from "framer-motion";
import { FolderGit, BookUser, Download, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-[70vh] flex items-center pt-16">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

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
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
            Sushant Singh
          </h1>

          <p className="text-lg sm:text-xl text-primary font-medium mb-4">
            SDE-II | React Native & Next.js Engineer
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Building scalable cross-platform apps & dashboards for healthcare,
            e-commerce and AI products.
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
              <FolderGit size={18} />
            </a>
            <a
              href="https://linkedin.com/in/sushantbibhu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
            >
              <BookUser size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
