import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Container from "@/components/core/Container";
import Locavex from "../../../../public/assets/portfolio/locavex/landing-locavex-id.png";
import NiasPossi from "../../../../public/assets/portfolio/niaspossi/landing-niaspossi-jatim.png";

const Portfolio = () => {
  return (
    <Container>
      <section
        id="portfolio"
        className="space-y-7 px-6 md:px-16 py-10 md:py-16"
      >
        <h2 className="text-center uppercase text-gray-500">My Projects</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Card className="md:w-2/3 cursor-pointer md:relative overflow-hidden">
            <CardContent className="md:flex h-full items-center">
              <div className="mb-4">
                <CardTitle className="md:text-5xl uppercase">Locavex</CardTitle>
                <CardDescription>
                  Website landing page konveksi kaos
                </CardDescription>
              </div>
              <Image
                src={Locavex}
                alt="timeavenue"
                className="md:absolute top-0 -right-48 hover:-right-0 transition-all duration-500 delay-150"
                width={650}
              />
            </CardContent>
          </Card>
          <Card className="md:w-1/3 cursor-pointer">
            <CardHeader>
              <CardTitle>NIAS POSSI</CardTitle>
              <CardDescription>Website management data atlet</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://1322024341.rsc.cdn77.org/wp-content/uploads/2022/07/Frame-1680-1.svg"
                alt="timeavenue"
                className="m-auto"
                width={650}
                height={200}
              />
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          <Card className="md:w-1/3 cursor-pointer">
            <CardHeader>
              <CardTitle>NIAS POSSI</CardTitle>
              <CardDescription>Website management data atlet</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={NiasPossi}
                alt="timeavenue"
                className="m-auto"
                width={650}
                height={200}
              />
            </CardContent>
          </Card>
          <Card className="md:w-2/3 cursor-pointer md:relative overflow-hidden">
            <CardContent className="md:flex h-full items-center">
              <div className="mb-4">
                <CardTitle className="md:text-5xl uppercase">Locavex</CardTitle>
                <CardDescription>
                  Website landing page konveksi kaos
                </CardDescription>
              </div>
              <Image
                src={Locavex}
                alt="timeavenue"
                className="md:absolute top-0 -right-48 hover:-right-0 transition-all duration-500 delay-1000"
                width={650}
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </Container>
  );
};

export default Portfolio;
