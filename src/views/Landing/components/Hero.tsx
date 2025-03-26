import Container from "@/components/core/Container";
import * as React from "react";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <section id="hero" className="space-y-7 p-4">
      <p className="text-sm uppercase text-gray-500">
        Learning technology, exploring possibilities.
      </p>
      <h2 className="text-2xl md:text-4xl font-bold">
        Bridging the gap between learning and building
      </h2>
      <h2 className="text-xs md:text-base font-light">
        Transforming ideas into impactful digital solutions while guiding the
        next generation of developers.
      </h2>
    </section>
  );
};

export default Hero;
