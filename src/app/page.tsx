// TODO: Find new icons
/* eslint-disable @typescript-eslint/no-deprecated */
import { FileText, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 font-mono">
      <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">
        <div className="flex flex-col items-center space-y-6 p-6">
          {/* Profile Image */}
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-secondary">
            <Image
              alt="Profile Picture"
              className="object-cover"
              fill
              priority
              src="/Headshot.jpeg"
            />
          </div>

          {/* Name and Bio */}
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Nathan Drake</h1>
            <p className="max-w-sm text-balance text-muted-foreground">
              Frontend/vibe/whatever coder. I&apos;m good at building systems
              that solve problems for good.
            </p>
          </div>

          {/* Social Links */}
          <div className="w-full space-y-3">
            <Button
              asChild
              className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              variant="outline"
            >
              <a
                href="/nathan-drake-resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FileText className="h-5 w-5" />
                <span>Resume</span>
              </a>
            </Button>

            <Button
              asChild
              className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              variant="outline"
            >
              <a
                href="https://github.com/drake-nathan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>

            <Button
              asChild
              className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              variant="outline"
            >
              <a
                href="https://linkedin.com/in/drakenathan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>

            <Button
              asChild
              className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              variant="outline"
            >
              <a
                href="https://twitter.com/nathandrake"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </a>
            </Button>
          </div>
        </div>
      </Card>

      <footer className="mt-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nathan Drake
      </footer>
    </main>
  );
};

export default Home;
