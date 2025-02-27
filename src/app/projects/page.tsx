"use client";
import ProjectCard from "@/components/project-card";

import Projects from "@/data/ProjectsList";

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-4 max-w-[1720px] m-auto">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="flex flex-wrap -m-6">
        {Projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
