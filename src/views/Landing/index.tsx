import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import AlumniCareer from "./components/AlumniCareer";
import Articles from "./components/Articles";

const LandingPage = () => {
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
      <Articles />
    </div>
  );
};

export default LandingPage;
