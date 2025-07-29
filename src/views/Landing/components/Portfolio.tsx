import Container from "@/components/core/Container";
import { projects } from "@/lib/data/sample";
import ProjectCard from "@/components/core/ProjectCard";

const Portfolio = () => {
  const grouped = [];
  for (let i = 0; i < projects.length; i += 2) {
    grouped.push(projects.slice(i, i + 2));
  }
  return (
    <Container id="portfolio">
      <section className="space-y-7 px-4 2xl:px-16 py-16">
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
