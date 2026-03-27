import {
  User,
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Mail,
} from "lucide-react";
import MetroTile from "./MetroTile";

const tiles = [
  {
    icon: User,
    title: "Who I Am",
    summary:
      "Software engineer building mobile and web apps, handling everything from development to deployment across Android, iOS, and the web.",
    to: "/about",
    size: "large" as const,
    stat: "SDE-II",
  },
  {
    icon: Briefcase,
    title: "Work Journey",
    summary:
      "Worked with Mediversal Healthcare, MexicaNFT, Easework AI, and The Trendy — building and shipping products for over 2+ years.",
    to: "/experience",
    size: "large" as const,
    stat: "2+ years",
  },
  {
    icon: Code2,
    title: "Technical Strengths",
    summary:
      "Strong foundation in developing, building, and maintaining applications across platforms with a focus on performance and clean architecture.",
    to: "/skills",
    size: "medium" as const,
  },
  {
    icon: FolderGit2,
    title: "Things I’ve Built",
    summary:
      "Built and shipped multiple projects including the Mediversal247 app, e-commerce platforms, and npm packages across both professional and personal work.",
    to: "/projects",
    size: "medium" as const,
  },
  {
    icon: GraduationCap,
    title: "Education",
    summary: "B.Tech in Information Technology from SKIT Jaipur",
    to: "/about",
    size: "small" as const,
  },
  {
    icon: Mail,
    title: "Get in Touch",
    summary:
      "Open to opportunities and collaborations — feel free to connect via phone, LinkedIn, GitHub, or email.",
    to: "/contact",
    size: "small" as const,
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
