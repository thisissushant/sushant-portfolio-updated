import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Phone, Mail, FolderGit, BookUser, Globe, Send } from "lucide-react";

const contactLinks = [
  { icon: Phone, label: "+91 9565441245", href: "tel:+919565441245" },
  { icon: Mail, label: "Get in touch", href: "mailto:sushant@example.com" },
  {
    icon: FolderGit,
    label: "github.com/thisissushant",
    href: "https://github.com/thisissushant",
  },
  {
    icon: BookUser,
    label: "linkedin.com/in/sushantbibhu",
    href: "https://linkedin.com/in/sushantbibhu",
  },
  { icon: Globe, label: "persional-portfolio.app", href: "#" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="section-container">
        <PageHeader
          title="Contact"
          subtitle="Let's connect — I'm open to exciting opportunities and collaborations."
        />

        <div className="pb-16 max-w-2xl">
          <div className="grid gap-3">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="metro-tile p-4 flex items-center gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <link.icon size={18} />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {link.label}
                </span>
                <Send
                  size={14}
                  className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
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
