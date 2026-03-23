import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Mobile Development",
    skills: [
      "React Native CLI",
      "Expo",
      "Android",
      "iOS",
      "Xcode",
      "Android Studio",
      "React Navigation",
      "AsyncStorage",
      "Expo Router",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Bootstrap",
      "React Router",
      "Zustand",
      "Context API",
      "Styled Components",
    ],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "NodeJS",
      "ExpressJS",
      "Socket.io",
      "REST API",
      "GraphQL",
      "Firebase",
      "WebSockets",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Firebase Realtime DB", "SQLite"],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS Amplify",
      "EC2",
      "S3",
      "App Store Connect",
      "Google Play Console",
    ],
  },
  {
    title: "Testing & Tools",
    skills: ["Jest", "Cypress", "Git", "GitHub Actions", "Fastlane"],
  },
];

const SkillTags = () => {
  return (
    <div className="space-y-8">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            {cat.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span key={skill} className="skill-chip">
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
