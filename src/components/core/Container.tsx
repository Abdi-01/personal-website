import * as React from "react";
import Transition from "../motion/Transition";
import AnimatedSection from "../motion/SectionTransition";

interface IContainerProps {
  children: React.ReactNode;
  id?: string;
}

const Container: React.FunctionComponent<IContainerProps> = ({
  children,
  id,
}) => {
  return (
    <main id={id} className="container m-auto sm:px-16 2xl:px-0">
      <AnimatedSection id={id}>{children}</AnimatedSection>
    </main>
  );
};

export default Container;
