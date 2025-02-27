import Navbar from "@/components/navbar/navbar";
import React from "react";
import Header from "@/components/header/header";
import ProjectsSpotlights from "@/components/projects-spotlight/projects-spotlight";
import ExperienceTimeline from "@/components/experience-timeline/experience-timeline";
import Footer from "@/components/footer/footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="max-h-[100vh] w-full">
        <Navbar />
        <Header />
        <div className="m-auto max-w-[1720px]">
          <ProjectsSpotlights />
          <ExperienceTimeline />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
