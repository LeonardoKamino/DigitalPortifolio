import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  description: React.ReactNode;
  skills: string[];
  logo: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  duration,
  description,
  skills,
  logo,
}) => {
  return (
    <>
      <div className="hidden md:flex relative z-10 items-center justify-center ml-[3px] w-10 h-10 bg-zinc-700 text-white rounded-full mt-6">
        <Calendar className="w-5 h-5" />
      </div>
      <div className="md:ml-8 w-full mx-[10px] ">
        <Card className="dark:bg-zinc-800 dark:text-white py-6 px-3 md:p-6 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-1 mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={68}
                  height={68}
                  className="rounded-md"
                />
              </div>
              <div className="ml-3 flex flex-col justify-center">
                <h2 className="text-lg md:text-xl font-semibold">{company}</h2>
                <h3 className=" md:text-lg font-medium">{role}</h3>
              </div>
            </div>

            <p className="font-bold md:ml-auto ">{duration}</p>
          </div>
          <CardContent className="p-2">
            <div className=" timeline-card-description">{description}</div>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-100 px-3 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ExperienceCard;
