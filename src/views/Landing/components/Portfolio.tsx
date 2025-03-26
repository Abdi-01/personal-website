import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LucideExternalLink } from "lucide-react";
import Container from "@/components/core/Container";

interface IPortfolioProps {}

const Portfolio: React.FunctionComponent<IPortfolioProps> = (props) => {
  return (
    <Container>
      <section id="portfolio" className="space-y-7 px-6 md:px-16 py-16">
        <h2 className="text-center text-sm uppercase text-gray-500">
          My Projects
        </h2>
        <div className="flex flex-wrap md:flex-nowrap md:gap-4">
          <Card className="md:w-2/3 cursor-pointer">
            <CardHeader>
              <CardTitle>Timeavenue</CardTitle>
              <CardDescription>Website jual beli jam tangan</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://1322024341.rsc.cdn77.org/wp-content/uploads/2022/07/Frame-1680-1.svg"
                alt="timeavenue"
                className="m-auto"
                width={400}
                height={200}
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
                width={400}
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
                src="https://1322024341.rsc.cdn77.org/wp-content/uploads/2022/07/Frame-1680-1.svg"
                alt="timeavenue"
                className="m-auto"
                width={400}
                height={200}
              />
            </CardContent>
          </Card>
          <Card className="md:w-2/3 cursor-pointer">
            <CardHeader>
              <CardTitle>Timeavenue</CardTitle>
              <CardDescription>Website jual beli jam tangan</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://1322024341.rsc.cdn77.org/wp-content/uploads/2022/07/Frame-1680-1.svg"
                alt="timeavenue"
                className="m-auto"
                width={400}
                height={200}
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </Container>
  );
};

export default Portfolio;
