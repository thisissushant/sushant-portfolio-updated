import { useLocation } from "react-router-dom";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconFolder,
  IconCode,
  IconMail,
} from "@tabler/icons-react";

const Navbar = () => {
  const location = useLocation();

  const links = [
    {
      title: "Home",
      href: "/",
      icon: (
        <IconHome
          className={`h-full w-full ${
            location.pathname === "/"
              ? "text-primary"
              : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
    {
      title: "About",
      href: "/about",
      icon: (
        <IconUser
          className={`h-full w-full ${
            location.pathname === "/about"
              ? "text-primary"
              : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
    {
      title: "Experience",
      href: "/experience",
      icon: (
        <IconBriefcase
          className={`h-full w-full ${
            location.pathname === "/experience"
              ? "text-primary"
              : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
    {
      title: "Projects",
      href: "/projects",
      icon: (
        <IconFolder
          className={`h-full w-full ${
            location.pathname === "/projects"
              ? "text-primary"
              : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
    {
      title: "Skills",
      href: "/skills",
      icon: (
        <IconCode
          className={`h-full w-full ${
            location.pathname === "/skills"
              ? "text-primary"
              : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
    {
      title: "Contact",
      href: "/contact",
      icon: (
        <IconMail
          className={`h-full w-full ${
            location.pathname === "/contact"
              ? "text-primary"
              : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-start md:justify-center px-4">
      <FloatingDock
        items={links.map((link) => ({
          ...link,
          icon: link.icon,
          href: link.href,
        }))}
      />
    </div>
  );
};

export default Navbar;
