import {
  User,
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Mail,
  Award,
} from "lucide-react";
import MetroTile from "./MetroTile";

const tiles = [
  {
    icon: User,
    title: "About Me",
    summary:
      "Cross-platform engineer focused on performance, scalable architecture, and product-quality UI.",
    to: "/about",
    size: "large" as const,
    stat: "SDE-II",
  },
  {
    icon: Briefcase,
    title: "Experience",
    summary:
      "Mediversal, MexicaNFT, Easework AI, The Trendy — 4+ years building production apps.",
    to: "/experience",
    size: "large" as const,
    stat: "4+ years",
  },
  {
    icon: Code2,
    title: "Skills",
    summary:
      "React Native, Next.js, TypeScript, AWS, APIs, Testing — full-stack mobile & web.",
    to: "/skills",
    size: "medium" as const,
  },
  {
    icon: FolderGit2,
    title: "Projects",
    summary:
      "Sneaker E-commerce platform built with Next.js, Prisma & MongoDB.",
    to: "/projects",
    size: "medium" as const,
  },
  {
    icon: GraduationCap,
    title: "Education",
    summary: "B.Tech IT, SKIT Jaipur (2017–2021)",
    to: "/about",
    size: "small" as const,
  },
  {
    icon: Mail,
    title: "Contact",
    summary: "Phone, LinkedIn, GitHub, Email.",
    to: "/contact",
    size: "small" as const,
  },
  {
    icon: Award,
    title: "Impact",
    summary: "9,000+ orders, ₹90L+ revenue, 30% sales boost.",
    to: "/experience",
    size: "small" as const,
    stat: "₹90L+",
  },
];

const TileGrid = () => {
  return (
    <section className="section-container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
        {tiles.map((tile, i) => (
          <MetroTile key={tile.title} {...tile} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
};

export default TileGrid;
