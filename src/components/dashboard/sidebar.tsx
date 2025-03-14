import { ComponentType } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SideBarProps {
  links: ReadonlyArray<{
    readonly title: string;
    readonly href: string;
    readonly icon: ComponentType;
  }>;
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideBar = ({
  links,
  className = "",
  isOpen,
  setIsOpen,
}: SideBarProps) => {
  return (
    <div
      className={`bg-background h-screen p-4 transition-all duration-300 ${
        isOpen ? "w-60" : "w-24"
      } ${className}`}
    >
      <div className="flex justify-end mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full"
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav>
        <ul className="space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-accent transition-colors ${
                    isOpen ? "" : "justify-center"
                  }`}
                >
                  <Icon />
                  {isOpen && <span>{link.title}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
