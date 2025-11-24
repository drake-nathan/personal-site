"use client";

import { BookOpen, Code, ExternalLink, Video } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";
import { useEffect } from "react";

import { LinkCard } from "@/components/link-card";

const ConvexPage = () => {
  // Track page view for conversion funnel
  useEffect(() => {
    posthog.capture("convex_page_viewed", {
      page: "convex_talk",
      referrer: document.referrer,
    });
  }, []);

  const handleLinkClick = (eventName: string, properties?: object) => {
    posthog.capture(eventName, properties);
  };
  const links = [
    {
      href: "https://github.com/drake-nathan/gold-dashboard-rr",
      icon: Code,
      label: "Demo Project - GitHub",
      onClick: () => {
        handleLinkClick("convex_demo_project_clicked", {
          link_label: "Demo Project",
          resource_type: "github",
        });
      },
    },
    {
      href: "https://dashboard.gold/",
      icon: ExternalLink,
      label: "Live Demo - dashboard.gold",
      onClick: () => {
        handleLinkClick("convex_live_demo_clicked", {
          link_label: "dashboard.gold",
          resource_type: "live_demo",
        });
      },
    },
    {
      href: "https://convex.dev/referral/NATHAN385",
      icon: ExternalLink,
      label: "Convex - Use my referral!",
      onClick: () => {
        handleLinkClick("convex_referral_clicked", {
          conversion_value: "high",
          referral_code: "NATHAN385",
          resource_type: "referral",
        });
      },
    },
    {
      href: "https://docs.convex.dev/home",
      icon: BookOpen,
      label: "Convex Docs",
      onClick: () => {
        handleLinkClick("convex_docs_clicked", {
          link_label: "Convex Docs",
          resource_type: "documentation",
        });
      },
    },
    {
      href: "https://stack.convex.dev/how-convex-works",
      icon: Code,
      label: "How Convex Works",
      onClick: () => {
        handleLinkClick("convex_docs_clicked", {
          link_label: "How Convex Works",
          resource_type: "documentation",
        });
      },
    },
    {
      href: "https://youtu.be/gZ4Tdwz1L7k?si=0vBUg5THvRBBlnU1",
      icon: Video,
      label: "Theo's Video",
      onClick: () => {
        handleLinkClick("convex_video_clicked", {
          creator: "theo",
          platform: "youtube",
          resource_type: "video",
        });
      },
    },
  ];

  return (
    <LinkCard
      footer={
        <footer className="mt-8 text-sm text-muted-foreground">
          <Link
            className="transition-colors hover:text-foreground"
            href="/"
            onClick={() => {
              handleLinkClick("home_navigation_clicked", {
                source_page: "convex_talk",
              });
            }}
          >
            ← Back to home
          </Link>
        </footer>
      }
      header={
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Convex Talk</h1>
          <p className="max-w-sm text-balance text-muted-foreground">
            Resources and links from the Convex meetup talk
          </p>
        </div>
      }
      links={links}
    />
  );
};

export default ConvexPage;
