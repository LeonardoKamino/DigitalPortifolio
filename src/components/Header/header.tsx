import React from "react";
import { Button } from "@/components/ui/button";
import "../../styles/header.scss";

const Header: React.FunctionComponent = () => {
  // Path to your resume PDF file
  const resumePdfPath = "/resume.pdf"; // Update this path

  return (
    <div className="header">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src="/Background.mp4" type="video/mp4" />
      </video>

      {/* Centered Content */}
      <header className="viewport-header">
        <div className="my-32 md:my-64 mx-8">
          <h1 className="mb-12 text-5xl md:text-8xl">Hey, I`&apos;`m Leo</h1>
          <div className="mb-12 text-xl md:text-3xl">
            <p className="mb-2">
              Computer Engineering student @ UBC, Vancouver.
            </p>
            <p>Looking for new grad opportunities for May 2025.</p>
          </div>

          {/* Download Button */}
          <a href={resumePdfPath} download="LeoKamino_Resume.pdf">
            <Button className="link-button md:text-xl">
              Download my resume
            </Button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
