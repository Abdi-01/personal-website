import * as React from "react";
import Container from "@/components/core/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Top 5 Framework CSS",
    category: "Javascript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perspiciatis dolor dolore explicabo recusandae voluptatem alias rerum possimus.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Why TypeScript Matters",
    category: "TypeScript",
    description:
      "TypeScript helps catch errors early and improves the developer experience. Learn how it transforms JavaScript projects.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "React vs Vue: 2025 Showdown",
    category: "Frontend",
    description:
      "A detailed comparison between the two most popular frontend frameworks — React and Vue — to help you choose wisely.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const Articles = () => {
  return (
    <Container>
      <section id="articles" className="space-y-7 px-6 md:px-16 py-10 md:py-16">
        <div>
          <h2 className="text-center uppercase text-gray-500">
            Code, Teach, Explore
          </h2>
          <p className="text-center text-sm">
            Articles on web development, programming insights, and lessons from
            my journey as a developer & educator.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="lg:h-56 p-0 overflow-hidden">
              <CardContent className="p-0 flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative w-full lg:w-2/3 h-56">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-3 md:p-5 flex flex-col justify-between w-full">
                  <Badge variant="outline" className="mb-2 w-fit">
                    {article.category}
                  </Badge>
                  <h3 className="font-bold text-xl md:text-2xl">
                    {article.title}
                  </h3>
                  <p className="text-xs md:text-sm font-light mb-4">
                    {article.description}
                  </p>
                  <Button className="w-fit">View Article</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link href="/blogs">
          <Button variant="ghost" className="block m-auto">
            See More
          </Button>
        </Link>
      </section>
    </Container>
  );
};

export default Articles;
