import React from "react";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const SocialIconRow: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex space-x-6">
        <a
          href="https://github.com/LeonardoKamino"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-100 dark:bg-zinc-800/50 text-gray-900 dark:text-zinc-400 hover:text-[#333333] dark:hover:text-[#333333] hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/20 rounded-full p-2"
        >
          <Github size={32} />
        </a>
        <a
          href="https://linkedin.com/in/LeoKAmino"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-100 dark:bg-zinc-800/50 text-gray-900 dark:text-zinc-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 rounded-full p-2"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="mailto:leonardo.kaminobarros@gmail.com"
          className="bg-zinc-100 dark:bg-zinc-800/50 text-gray-900 dark:text-zinc-400 hover:text-[#EA4335] dark:hover:text-[#EA4335] hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-400/20 rounded-full p-2"
        >
          <Mail size={32} />
        </a>
      </div>
      {/* Download Button */}
      <a
        href="/resume.pdf"
        download="LeoKamino_Resume.pdf"
        className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/50 text-gray-900 dark:text-zinc-400 hover:text-primary dark:hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 rounded-full px-4 py-2"
      >
        <FileDown size={20} />
        <span className="font-medium">Download Resume</span>
      </a>
    </div>
  );
};

export default SocialIconRow;
