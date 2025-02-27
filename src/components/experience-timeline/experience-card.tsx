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
      <div className="relative z-10 flex items-center justify-center ml-[3px] w-10 h-10 bg-blue-900 text-white rounded-full mt-6">
        <Calendar className="w-5 h-5" />
      </div>
      <div className="ml-8 w-full">
        <Card className="bg-[#0D1B2A] text-white p-6 rounded-2xl shadow-lg">
          <div className="flex gap-4 mb-4">
            <Image
              src={logo}
              alt={`${company} logo`}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div>
              <h2 className="text-xl font-semibold">{company}</h2>
              <h3 className="text-lg font-medium">{role}</h3>
            </div>
            <p className="font-bold text-gray-100 ml-auto">{duration}</p>
          </div>
          <CardContent className="p-2">
            <div className="timeline-card-description">{description}</div>
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
