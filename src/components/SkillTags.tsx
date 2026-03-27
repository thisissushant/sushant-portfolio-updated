import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Mobile",
    skills: [
      "React Native",
      "Expo",
      "Android",
      "iOS",
      "Native Modules",
      "Notifications",
    ],
  },
  {
    title: "Web",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Routing",
      "SSR",
      "Svelet",
    ],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C", "Bash Scripting"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "REST APIs", "WebSockets", "Firebase"],
  },
  {
    title: "Data",
    skills: ["MongoDB", "SQLite"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "EC2", "S3", "VPC", "CloudFormation", "Terraform"],
  },
  {
    title: "Release & Deployment",
    skills: ["Play Store", "App Store", "Build & Release", "AWS Amplify"],
  },
  {
    title: "Testing & Tools",
    skills: [
      "Jest",
      "Cypress",
      "Git",
      "Agora",
      "Figma",
      "Postman",
      "Mixpannel",
      "Sentry",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];

const SkillTags = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="metro-tile p-5"
        >
          <h3 className="text-sm font-semibold text-foreground mb-3">
            {cat.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-3 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillTags;
