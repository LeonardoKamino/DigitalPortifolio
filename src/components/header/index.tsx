"use client";
import React, { useEffect } from "react";
import "../../styles/header.scss";
import SocialIconRow from "../social-icon-row";

const Header: React.FunctionComponent = () => {
  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) {
      const stars: HTMLDivElement[] = [];
      const shootingStars: HTMLDivElement[] = [];
      const maxStars = 150;
      const maxShootingStars = window.matchMedia(
        "(prefers-color-scheme: light)",
      ).matches
        ? 100
        : 35; // Increased for light theme

      // Function to create a star
      const createStar = () => {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 6}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 2}s`;
        header.appendChild(star);
        stars.push(star);
      };

      // Function to maintain a consistent number of stars
      const maintainStars = () => {
        while (stars.length < maxStars) {
          createStar();
        }
      };

      // Create initial stars
      maintainStars();

      // Create shooting stars
      const createShootingStar = () => {
        if (shootingStars.length >= maxShootingStars) return;

        const shootingStar = document.createElement("div");
        shootingStar.className = "shooting-star";
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.width = `${Math.random() * 5}px`;
        shootingStar.style.height = shootingStar.style.width;
        shootingStar.style.animationDuration = `${Math.random() * 3000 + 1000}ms`;

        const angle = Math.random() * 360;
        shootingStar.style.setProperty("--angle", `${angle}deg`);

        header.appendChild(shootingStar);
        shootingStars.push(shootingStar);

        shootingStar.addEventListener("animationend", () => {
          shootingStar.remove();
          const index = shootingStars.indexOf(shootingStar);
          if (index > -1) {
            shootingStars.splice(index, 1);
          }
        });
      };

      // Maintain stars and create shooting stars at intervals
      const starInterval = setInterval(maintainStars, 1000);
      const shootingStarInterval = setInterval(createShootingStar, 1000);

      // Cleanup on component unmount
      return () => {
        clearInterval(starInterval);
        clearInterval(shootingStarInterval);
        stars.forEach((star) => star.remove());
        shootingStars.forEach((shootingStar) => shootingStar.remove());
      };
    }
  }, []);

  return (
    <div className="header">
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
