import { motion } from "framer-motion";
import { Clock, ShoppingBag, TrendingUp, Smartphone } from "lucide-react";

const metrics = [
  { icon: Clock, label: "Years Experience", value: "4+" },
  { icon: ShoppingBag, label: "Orders Handled", value: "9,000+" },
  { icon: TrendingUp, label: "Revenue Impact", value: "₹90L+" },
  { icon: Smartphone, label: "Apps Shipped", value: "iOS + Android" },
];

const ImpactMetrics = () => {
  return (
    <section className="section-container py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="stat-card group hover:border-primary/30 transition-all duration-300"
          >
            <m.icon size={20} className="mx-auto mb-2 text-primary" />
            <div className="text-xl font-bold text-foreground">{m.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactMetrics;
