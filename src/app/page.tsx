import Navbar from "@/components/Navbar/navbar";
import React from "react";
import Header from "@/components/Header/header";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="max-h-[100vh] w-full">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default HomePage;
