import Image from "next/image";
import * as React from "react";
import Hero from "./components/Hero";
import Container from "@/components/core/Container";
import Skills from "./components/Skills";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import AlumniCareer from "./components/AlumniCareer";

interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  return (
    <div>
      <div className="w-full flex items-center py-36 md:py-56">
        <div className="md:w-3/5 m-auto text-center">
          <Hero />
        </div>
        {/* <div>cek</div> */}
      </div>
      <Skills />
      <About />
      <Portfolio />
      <AlumniCareer />
    </div>
  );
};

export default LandingPage;
