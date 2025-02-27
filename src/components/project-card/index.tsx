import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CircleX, CircleMinus, Maximize2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  image: string;
  summary: string;
  skills: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div className="w-full lg:w-1/3 p-4">
      <Card
        className="bg-zinc-200 dark:bg-zinc-700 shadow-lg cursor-pointer hover:shadow-xl transition-all h-full"
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleCardClick()}
      >
        <CardHeader className="dark:bg-zinc-800 flex items-center p-3">
          <div className="flex items-center space-x-2">
            <CircleX className="text-red-500 w-4 h-4" />
            <CircleMinus className="text-yellow-500 w-4 h-4" />
            <Maximize2 className="text-green-700 border-2 border-green-700 w-4 h-4 text-green-700 rounded-full p-[1px]" />
          </div>
          <h3 className="ml-4 font-semibold text-lg xl:text-sm bg-zinc-200 dark:text-black w-[100%] rounded-md px-4 overflow-hidden text-ellipsis whitespace-nowrap">
            {project.title}
          </h3>
        </CardHeader>
        <div className="relative group">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            style={{ width: "100%", height: "250px" }}
            className="object-cover"
          />

          <div className="hidden lg:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ">
            <div className="bg-black/50 px-2 py-8 h-[100%] w-[100%] flex items-center justify-center flex-wrap ">
              {project.skills.map((skill) => (
                <Badge key={skill} className="m-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="dark:text-white mb-2">{project.summary}</p>
          <div
            className={`md:hidden flex flex-wrap ${windowWidth < 768 ? "block" : "flex"}`}
          >
            {project.skills.map((skill) => (
              <Badge key={skill} className="m-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
