import React from "react";
import ExperienceCard from "./experience-card";
import experiences from "@/data/experiences";
import "../../styles/experienceTimeline.scss";

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="mx-auto ">
      <h2 className="text-3xl font-bold  mb-8 text-center">Experience</h2>
      <div className="relative w-full md:w-[85%] mx-auto">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-5 top-0 w-[2px] h-full bg-gray-300"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start mb-8">
            {/* Experience Card */}
            <ExperienceCard
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              description={exp.description}
              skills={exp.skills}
              logo={exp.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
