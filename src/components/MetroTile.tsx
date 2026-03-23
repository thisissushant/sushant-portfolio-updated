import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface MetroTileProps {
  icon: LucideIcon;
  title: string;
  summary: string;
  stat?: string;
  to: string;
  size?: "small" | "medium" | "large";
  delay?: number;
}

const MetroTile = ({
  icon: Icon,
  title,
  summary,
  stat,
  to,
  size = "small",
  delay = 0,
}: MetroTileProps) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 sm:col-span-2 row-span-1",
    large: "col-span-1 sm:col-span-2 row-span-1 lg:row-span-2",
  };

  const paddingClasses = {
    small: "p-5",
    medium: "p-6",
    large: "p-7",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={sizeClasses[size]}
    >
      <Link
        to={to}
        className={`metro-tile block h-full ${paddingClasses[size]} group`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
              <Icon size={size === "small" ? 20 : 24} />
            </div>
            {stat && (
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">
                {stat}
              </span>
            )}
          </div>

          <h3 className="text-base font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {summary}
          </p>

          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Explore</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default MetroTile;
