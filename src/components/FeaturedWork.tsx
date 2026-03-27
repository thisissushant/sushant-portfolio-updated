import { motion } from "framer-motion";
import {
  Pill,
  FlaskConical,
  HeartPulse,
  Video,
  CreditCard,
  Truck,
} from "lucide-react";

const features = [
  { icon: Pill, label: "Pharmacy" },
  { icon: FlaskConical, label: "Lab Tests" },
  { icon: HeartPulse, label: "Homecare" },
  { icon: Video, label: "Consultations" },
  { icon: CreditCard, label: "Payments" },
  { icon: Truck, label: "Logistics" },
];

const FeaturedWork = () => {
  return (
    <section className="section-container pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="metro-tile p-6 sm:p-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          <div className="flex-1">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Featured Work
            </span>

            <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
              Mediversal247
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Worked on a healthcare platform covering pharmacy, diagnostics,
              homecare, and online consultations. Involved in building and
              maintaining key features across the app, along with handling
              deployments and ensuring smooth end-to-end operations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-sm text-secondary-foreground"
                >
                  <f.icon size={14} className="text-primary" />
                  {f.label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedWork;
