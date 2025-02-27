import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialIconRow: React.FC = () => {
  return (
    <div className="flex space-x-6 mt-4 md:mt-0">
      <a
        href="https://github.com/LeonardoKamino"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-zinc-400 hover:text-gray-100 dark:hover:text-zinc-700 transition"
      >
        <Github size={32} />
      </a>
      <a
        href="https://linkedin.com/in/LeoKAmino"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-zinc-400 hover:text-gray-100 dark:hover:text-zinc-700 transition"
      >
        <Linkedin size={32} />
      </a>
      <a
        href="mailto:leo.kamino@gmail.com"
        className="text-gray-900 dark:text-zinc-400 hover:text-gray-100 dark:hover:text-zinc-700 transition"
      >
        <Mail size={32} />
      </a>
    </div>
  );
};

export default SocialIconRow;
