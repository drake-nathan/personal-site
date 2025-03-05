import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, FileText } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4 text-white">
      <Card className="w-full max-w-md border-zinc-800 bg-zinc-900">
        <div className="flex flex-col items-center space-y-6 p-6">
          {/* Profile Image */}
          <div className="border-primary relative h-32 w-32 overflow-hidden rounded-full border-2">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name and Bio */}
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Your Name</h1>
            <p className="max-w-sm text-zinc-400">
              Frontend Developer specializing in React and Next.js. Passionate
              about creating beautiful, user-friendly interfaces and solving
              complex problems.
            </p>
          </div>

          {/* Social Links */}
          <div className="w-full space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              asChild
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              asChild
            >
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              asChild
            >
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start space-x-2 border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5" />
                <span>Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </Card>

      <footer className="mt-8 text-sm text-zinc-500">
        © {new Date().getFullYear()} Your Name
      </footer>
    </main>
  );
}
