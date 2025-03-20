import ProjectsList from "@/data/ProjectsList";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = ProjectsList.find((project) => project.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto p-4 md:p-6">
      <Link href="/projects" className="block">
        <ArrowLeft className="cursor-pointer" size={24} />
      </Link>
      <div className="  lg:max-w-4xl m-auto mt-3 ">
        <Card className="shadow-lg p-2 md:p-6 rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="rounded-lg m-auto"
          />
          <CardContent className="mt-4 p-2">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="mb-4">{project.summary}</p>
            <p className="mb-4">{project.description}</p>

            <h2 className="text-xl font-semibold mt-4">Skills Used</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="text-xl font-semibold mt-6">Key Features</h2>
            <ul className="list-disc list-inside mt-2">
              {project.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-4">
              {project.deploymentLink && (
                <Link href={project.deploymentLink} target="_blank">
                  <Button variant="default">Live Demo</Button>
                </Link>
              )}
              {project.githubLink && (
                <Link href={project.githubLink} target="_blank">
                  <Button variant="outline">GitHub</Button>
                </Link>
              )}
              {project.reportLink && (
                <Link href={project.reportLink} target="_blank">
                  <Button variant="secondary">Project Report</Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
