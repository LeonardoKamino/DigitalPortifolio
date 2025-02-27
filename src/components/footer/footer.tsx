import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-white py-6 px-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col  gap-6 justify-between items-center">
        <p className="text-gray-900 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Leo Kamino 2025. All rights
          reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/LeonardoKamino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-400 hover:text-white transition"
          >
            <Github size={32} />
          </a>
          <a
            href="https://linkedin.com/in/LeoKAmino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-400 hover:text-white transition"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:leo.kamino@gmail.com"
            className="text-gray-900 dark:text-gray-400 hover:text-white transition"
          >
            <Mail size={32} />
          </a>
        </div>
        {/* Download Button */}
        <a href="/resume.pdf" download="LeoKamino_Resume.pdf">
          <Button className="text-lg text-grey dark:bg-blue-600 hover:bg-blue-700">
            Download Resume
          </Button>
        </a>
      </div>
    </footer>
  );
}
