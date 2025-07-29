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
import { projects } from "@/lib/data/sample";
import ProjectCard from "@/components/core/ProjectCard";

const Portfolio = () => {
  const grouped = [];
  for (let i = 0; i < projects.length; i += 2) {
    grouped.push(projects.slice(i, i + 2));
  }
  return (
    <Container id="portfolio">
      <section className="space-y-7 px-6 md:px-16 py-10 md:py-16">
        <h2 className="text-center uppercase text-gray-500">My Projects</h2>
        <div className="space-y-6">
          {grouped.map((pair, i) => (
            <div key={i} className="flex flex-wrap md:flex-nowrap gap-4">
              {pair.map((proj) => (
                <ProjectCard
                  key={proj.id}
                  title={proj.title}
                  description={proj.description}
                  image={proj.image}
                  layout={proj.layout}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Portfolio;
