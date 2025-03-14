import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { Code2, Server, Wrench, Blocks } from "lucide-react";
import SocialIconRow from "@/components/social-icon-row";
import ExperienceTimeline from "@/components/experience-timeline/experience-timeline";
import Footer from "@/components/footer/footer";
import { siteConfig } from "../metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about my experience as a software engineer, my technical skills, and professional background.",
};

export default function AboutMe() {
  const skills = [
    {
      category: "Languages",
      icon: Code2,
      items: [
        { name: "Python", iconPath: "/icons/python.svg" },
        { name: "JavaScript", iconPath: "/icons/javascript.svg" },
        { name: "TypeScript", iconPath: "/icons/typescript.svg" },
        { name: "Java", iconPath: "/icons/openjdk.svg" },
        { name: "Ruby", iconPath: "/icons/ruby.svg" },
      ],
    },
    {
      category: "Frontend",
      icon: Blocks,
      items: [
        { name: "React", iconPath: "/icons/react.svg" },
        { name: "Next.js", iconPath: "/icons/nextdotjs.svg" },
        { name: "HTML5", iconPath: "/icons/html5.svg" },
        { name: "CSS3", iconPath: "/icons/css3.svg" },
        { name: "Sass", iconPath: "/icons/sass.svg" },
        { name: "Bootstrap", iconPath: "/icons/bootstrap.svg" },
        { name: "TailwindCSS", iconPath: "/icons/tailwindcss.svg" },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      items: [
        { name: "Node.js", iconPath: "/icons/nodedotjs.svg" },
        { name: "Express", iconPath: "/icons/express.svg" },
        { name: "FastAPI", iconPath: "/icons/fastapi.svg" },
        { name: "Rails", iconPath: "/icons/rubyonrails.svg" },
        { name: "MongoDB", iconPath: "/icons/mongodb.svg" },
        { name: "MySQL", iconPath: "/icons/mysql.svg" },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: Wrench,
      items: [
        { name: "AWS", iconPath: "/icons/amazonwebservices.svg" },
        { name: "Docker", iconPath: "/icons/docker.svg" },
        { name: "GitHub", iconPath: "/icons/github.svg" },
        { name: "GitHub Actions", iconPath: "/icons/githubactions.svg" },
        { name: "Bamboo", iconPath: "/icons/bamboo.svg" },
        { name: "Terraform", iconPath: "/icons/terraform.svg" },
        { name: "Jira", iconPath: "/icons/jira.svg" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leonardo Kamino",
    jobTitle: "Software Engineer",
    description: siteConfig.description,
    url: `${siteConfig.url}/aboutme`,
    sameAs: [
      "https://github.com/LeonardoKamino",
      "https://linkedin.com/in/LeoKAmino",
    ],
    knowsAbout: skills.flatMap((group) =>
      group.items.map((skill) => skill.name),
    ),
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-12 px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <header className="flex flex-col items-center space-y-6">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/media/profile.jpg"
                alt="Leonardo Kamino - Software Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Social Links */}
            <nav className="flex gap-4">
              <SocialIconRow />
            </nav>
          </header>

          {/* Description Section */}
          <section className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-lg text-muted-foreground">
              Software engineer with experience in full-stack development,
              software testing, and software automation. Skilled in building
              scalable applications using JavaScript/Typescript, Python, Ruby,
              and Java, with a strong understanding of API development,
              databases, and cloud technologies.
            </p>
            <p className="text-lg text-muted-foreground">
              Adept at translating user requirements into technical
              implementations. Experienced in Agile development, CI/CD
              integration, test-driven development, and automated testing to
              ensure high-quality software solutions.
            </p>
          </section>
        </article>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <skillGroup.icon className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="text-sm flex items-center gap-1"
                      >
                        <Image
                          src={skill.iconPath}
                          alt={`${skill.name} icon`}
                          width={25}
                          height={25}
                          className="dark:invert"
                        />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <div className="mt-16">
          <ExperienceTimeline />
        </div>
      </main>
      <Footer />
    </>
  );
}
