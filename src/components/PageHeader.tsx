import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-10"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default PageHeader;
