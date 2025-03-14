"use client";
import React, { useEffect } from "react";
import "../../styles/header.scss";
import SocialIconRow from "../social-icon-row";

const Header: React.FunctionComponent = () => {
  // Function to create stars and shooting stars
  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) {
      // Create regular stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 4}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 2}s`;
        header.appendChild(star);
      }

      // Create shooting stars
      const createShootingStar = () => {
        const shootingStar = document.createElement("div");
        shootingStar.className = "shooting-star";
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.width = `${Math.random() * 5}px`;
        shootingStar.style.height = shootingStar.style.width;
        shootingStar.style.animationDuration = `${Math.random() * 3000 + 1000}ms`; // Random duration

        // Generate a random angle between 0 and 360 degrees
        const angle = Math.random() * 360;
        shootingStar.style.setProperty("--angle", `${angle}deg`);

        header.appendChild(shootingStar);

        // Remove the shooting star after the animation ends
        shootingStar.addEventListener("animationend", () => {
          shootingStar.remove();
        });
      };

      // Create shooting stars at random intervals
      const shootingStarInterval = setInterval(createShootingStar, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(shootingStarInterval);
    }
  }, []);

  return (
    <div className="header">
      {/* Centered Content */}
      <header className="viewport-header text-black dark:text-white">
        <div className="my-32 xlg:my-64 mx-8">
          <h1 className="mb-12 text-5xl md:text-7xl xlg:text-8xl">
            Hey, I&apos;m Leo
          </h1>
          <div className="mb-12 ">
            <p className="mb-2 text-xl md:text-3xl ">Software Engineer</p>
            <p className="text-lg md:text-xl xlg:text-2xl">
              Computer Engineering @ UBC
            </p>
          </div>
          <SocialIconRow />
        </div>
      </header>
    </div>
  );
};

export default Header;
