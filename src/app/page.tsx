"use client";

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
import posthog from "posthog-js";

import { LinkCard } from "@/components/link-card";
import { Button } from "@/components/ui/button";

const Home = () => {
  const handleLinkClick = (eventName: string, properties?: object) => {
    posthog.capture(eventName, properties);
  };

  const links = [
    {
      href: "/nathan-drake-resume.pdf",
      icon: FileText,
      label: "Resume",
      onClick: () => {
        handleLinkClick("resume_downloaded", {
          link_type: "resume",
        });
      },
    },
    {
      href: "mailto:nathan@nathandrake.dev",
      icon: Mail,
      label: "Email",
      onClick: () => {
        handleLinkClick("email_clicked", {
          email: "nathan@nathandrake.dev",
          link_type: "contact",
        });
      },
    },
    {
      href: "https://github.com/drake-nathan",
      icon: Github,
      label: "GitHub",
      onClick: () => {
        handleLinkClick("github_profile_clicked", {
          link_type: "social",
          platform: "github",
        });
      },
    },
    {
      href: "https://linkedin.com/in/drakenathan",
      icon: Linkedin,
      label: "LinkedIn",
      onClick: () => {
        handleLinkClick("linkedin_profile_clicked", {
          link_type: "social",
          platform: "linkedin",
        });
      },
    },
    {
      href: "https://twitter.com/nathandrake",
      icon: Twitter,
      label: "Twitter",
      onClick: () => {
        handleLinkClick("twitter_profile_clicked", {
          link_type: "social",
          platform: "twitter",
        });
      },
    },
  ];

  const projects = [
    {
      description: "A gold bar comparison site for credit card hackers",
      href: "https://dashboard.gold",
      icon: CreditCard,
      label: "dashboard.gold",
      onClick: () => {
        handleLinkClick("project_clicked", {
          project_name: "dashboard.gold",
          project_type: "live_site",
        });
      },
    },
    {
      description: "An open source ESLint/Prettier style guide",
      href: "https://github.com/drake-nathan/js-style-kit",
      icon: Code,
      label: "js-style-kit",
      onClick: () => {
        handleLinkClick("project_clicked", {
          project_name: "js-style-kit",
          project_type: "github",
        });
      },
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
              onClick={project.onClick}
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
