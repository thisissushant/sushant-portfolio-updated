import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Phone, Mail, ArrowUpRight } from "lucide-react";

const primaryContacts = [
  {
    icon: Mail,
    label: "Email",
    value: "sushantbibhu@gmail.com",
    href: "mailto:sushantbibhu@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9565441245",
    href: "tel:+919565441245",
  },
];

const profiles = [
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/thisissushant",
    href: "https://github.com/thisissushant",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sushantbibhu",
    href: "https://linkedin.com/in/sushantbibhu",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container">
        <PageHeader
          title="Contact"
          subtitle="If you’d like to work together or have something in mind, feel free to reach out."
        />

        <div className="pb-16 max-w-2xl space-y-6">
          {/* Intro */}
          <div className="metro-tile p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              I’m currently open to new opportunities and collaborations.
              Whether it’s a full-time role, freelance work, or just a quick
              discussion, I’m happy to connect.
            </p>
          </div>

          {/* Primary Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              Reach out directly
            </h3>

            {primaryContacts.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="metro-tile p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>

          {/* Profiles */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Profiles</h3>

            {profiles.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="metro-tile p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
