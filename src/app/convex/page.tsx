import { BookOpen, Code, ExternalLink, Video } from "lucide-react";
import Link from "next/link";

import { LinkCard } from "@/components/link-card";

const ConvexPage = () => {
  const links = [
    {
      href: "https://convex.dev/referral/NATHAN385",
      icon: ExternalLink,
      label: "Convex - Use my referral!",
    },
    {
      href: "https://docs.convex.dev/home",
      icon: BookOpen,
      label: "Convex Docs",
    },
    {
      href: "https://stack.convex.dev/how-convex-works",
      icon: Code,
      label: "How Convex Works",
    },
    {
      href: "https://youtu.be/gZ4Tdwz1L7k?si=0vBUg5THvRBBlnU1",
      icon: Video,
      label: "Theo's Video",
    },
  ];

  return (
    <LinkCard
      footer={
        <footer className="mt-8 text-sm text-muted-foreground">
          <Link className="transition-colors hover:text-foreground" href="/">
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
