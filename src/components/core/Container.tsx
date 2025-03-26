import * as React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FunctionComponent<IContainerProps> = ({ children }) => {
  return <main className="container m-auto sm:px-16 2xl:px-0">{children}</main>;
};

export default Container;
