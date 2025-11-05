// TODO: Find new icons
/* eslint-disable @typescript-eslint/no-deprecated */
import {
  Code,
  CreditCard,
  FileText,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Image from "next/image";

import { LinkCard } from "@/components/link-card";
import { Button } from "@/components/ui/button";

const Home = () => {
  const links = [
    {
      href: "/nathan-drake-resume.pdf",
      icon: FileText,
      label: "Resume",
    },
    {
      href: "mailto:nathan@nathandrake.dev",
      icon: Mail,
      label: "Email",
    },
    {
      href: "https://github.com/drake-nathan",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/drakenathan",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/nathandrake",
      icon: Twitter,
      label: "Twitter",
    },
  ];

  const projects = [
    {
      description: "A gold bar comparison site for credit card hackers",
      href: "https://dashboard.gold",
      icon: CreditCard,
      label: "dashboard.gold",
    },
    {
      description: "An open source ESLint/Prettier style guide",
      href: "https://github.com/drake-nathan/js-style-kit",
      icon: Code,
      label: "js-style-kit",
    },
  ];

  return (
    <LinkCard
      footer={
        <footer className="mt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nathan Drake
        </footer>
      }
      header={
        <>
          {/* Profile Image */}
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-secondary">
            <Image
              alt="Profile Picture"
              className="object-cover"
              fill
              priority
              src="/Headshot.png"
            />
          </div>

          {/* Name and Bio */}
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Nathan Drake</h1>
            <p className="max-w-sm text-balance text-muted-foreground">
              Frontend/Product Engineer. I&apos;m good at building systems that
              solve problems for good.
            </p>
          </div>
        </>
      }
      links={links}
    >
      {/* Projects Section */}
      <div className="w-full space-y-3">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-700" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-zinc-900 px-2 text-muted-foreground">
              Projects
            </span>
          </div>
        </div>

        {projects.map((project) => (
          <Button
            asChild
            className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
            key={project.href}
            variant="outline"
          >
            <a
              href={project.href}
              rel="noopener noreferrer"
              target="_blank"
              title={project.description}
            >
              <project.icon className="h-5 w-5" />
              <span>{project.label}</span>
            </a>
          </Button>
        ))}
      </div>
    </LinkCard>
  );
};

export default Home;
