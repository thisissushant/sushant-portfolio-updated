import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "SDE-II",
    company: "Mediversal Healthcare Pvt Ltd",
    location: "Patna",
    period: "Apr 2025 – Current",
    points: [
      "Built Mediversal247 cross-platform app (Pharmacy, Lab Tests, Home Care, Doctor Consultation)",
      "Built Admin Panel using Next.js + Tailwind + TypeScript",
      "Auth via AWS Amplify + state management with Zustand",
      "Agora Video SDK for doctor-patient video consultations",
      "Razorpay payment integration & Shiprocket delivery tracking",
      "Mixpanel analytics & location services integration",
      "Managed Play Store + App Store releases",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "MexicaNFT",
    location: "Remote",
    period: "Sep 2024 – Mar 2025",
    points: [
      "React Native + TypeScript + Tailwind UI from Figma designs",
      "Built Reli AI mobile app architecture",
      "Cypress end-to-end testing implementation",
      "Landing pages in Next.js + Tailwind",
      "Worked on client projects including Boston Scientific",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company: "Easework AI",
    location: "Remote",
    period: "May 2024 – Aug 2024",
    points: [
      "Built React + JavaScript UI with Redux & Material UI",
      "Firebase authentication integration",
      "REST API integration with Axios",
      "Flutter-flow / Streamlit for MVP demos",
    ],
  },
  {
    title: "Co-Founder & Developer",
    company: "The Trendy",
    location: "Jaipur",
    period: "Feb 2021 – Dec 2023",
    points: [
      "Built sneaker e-commerce business using WordPress",
      "Shiprocket logistics + Cashfree payments",
      "Increased sales by 30%, delivered 9,000+ orders",
      "Achieved ₹90L+ revenue, managed full e-commerce lifecycle",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="space-y-0">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative pl-14 pb-10 last:pb-0"
        >
          {i < experiences.length - 1 && <div className="timeline-line" />}
          <div className="timeline-dot absolute left-0 top-0">
            <Briefcase size={16} className="text-primary" />
          </div>

          <div className="metro-tile p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <span className="text-xs text-muted-foreground font-medium bg-secondary px-2.5 py-1 rounded-md w-fit">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-1.5">
              {exp.points.map((point, j) => (
                <li
                  key={j}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
