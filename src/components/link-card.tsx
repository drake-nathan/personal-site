import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface LinkItem {
  href: string;
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

interface LinkCardProps {
  children?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  links: LinkItem[];
}

export const LinkCard = ({
  children,
  footer,
  header,
  links,
}: LinkCardProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 font-mono">
      <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">
        <div className="flex flex-col items-center space-y-6 p-6">
          {/* Optional Header (profile, title, etc.) */}
          {header}

          {/* Links */}
          <div className="w-full space-y-3">
            {links.map((link) => (
              <Button
                asChild
                className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
                key={link.href}
                variant="outline"
              >
                <a
                  href={link.href}
                  onClick={link.onClick}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Optional Children (custom content) */}
          {children}
        </div>
      </Card>

      {/* Optional Footer */}
      {footer}
    </main>
  );
};
