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
    period: "Apr 2025 – Present",
    points: [
      "Worked on the Mediversal247 app covering pharmacy, lab tests, home care, and consultations",
      "Built and maintained both mobile app and admin panel",
      "Handled authentication, payments, and order tracking flows",
      "Integrated video consultations between doctors and patients",
      "Set up analytics and handled location-based features",
      "Managed app releases on Play Store and App Store",
      "Fixed production issues and ensured stable releases",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "MexicaNFT",
    location: "Remote",
    period: "Sep 2024 – Mar 2025",
    points: [
      "Built mobile app screens based on design and product requirements",
      "Worked on app structure and improved code organization",
      "Set up end-to-end testing for key user flows",
      "Developed landing pages and handled UI updates",
      "Contributed to client projects with regular feature updates and fixes",
    ],
  },
  {
    title: "Frontend Engineer Intern",
    company: "Easework AI",
    location: "Remote",
    period: "May 2024 – Aug 2024",
    points: [
      "Worked on UI development and basic state management",
      "Integrated APIs and handled data flow in the app",
      "Implemented authentication and user flows",
      "Helped build quick demo versions for internal use",
    ],
  },
  {
    title: "Co-Founder & Developer",
    company: "The Trendy",
    location: "Jaipur",
    period: "Feb 2021 – Dec 2023",
    points: [
      "Built and managed a sneaker e-commerce store",
      "Handled product listings, orders, and payments",
      "Managed deliveries and customer orders end-to-end",
      "Delivered over 9,000 orders and handled day-to-day operations",
      "Maintained and updated the platform as the business grew",
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
