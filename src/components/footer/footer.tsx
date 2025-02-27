import { Button } from "@/components/ui/button";
import SocialIconRow from "../social-icon-row";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-zinc-900 text-white py-6 px-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col  gap-6 justify-between items-center">
        <p className="text-gray-900 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Leo Kamino 2025. All rights
          reserved.
        </p>
        <SocialIconRow />
        {/* Download Button */}
        <a href="/resume.pdf" download="LeoKamino_Resume.pdf">
          <Button className="text-lg text-grey dark:bg-zinc-600 hover:bg-zinc-700 dark:hover:bg-zinc-800">
            Download Resume
          </Button>
        </a>
      </div>
    </footer>
  );
}
