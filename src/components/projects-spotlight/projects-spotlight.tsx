"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // shadcn/ui button
import ProjectCard from "@/components/project-card/project-card";
import Projects from "@/data/ProjectsList";

export default function ProjectsSpotlights() {
  const router = useRouter();

  // Filter projects that should be in the spotlight
  const projects = Projects.filter((project) => project.spotlight);

  return (
    <div className="w-full py-12 px-6 md:px-12 lg:px-20" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8">
        Projects Spotlight
      </h2>

      <div className="flex flex-wrap -m-6 items-stretch">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          variant="default"
          className="px-6 py-3 text-lg"
          onClick={() => router.push("/projects")}
        >
          See All Projects
        </Button>
      </div>
    </div>
  );
}
