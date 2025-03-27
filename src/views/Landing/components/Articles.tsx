import Container from "@/components/core/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import * as React from "react";

interface IArticlesProps {}

const Articles: React.FunctionComponent<IArticlesProps> = (props) => {
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
        <div className="flex flex-col md:flex-row gap-5">
          <Card className="h-56 p-0 overflow-hidden">
            <CardContent className="p-0 flex">
              <div className="relative w-2/3 h-56">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="article-1"
                  objectFit="cover"
                  fill
                />
              </div>
              <div className="h-full p-3 md:p-5 flex flex-col justify-between">
                <Badge variant="outline">Javascript</Badge>
                <h3 className="font-bold text-xl md:text-2xl">
                  Top 5 Framework CSS
                </h3>
                <p className="text-xs md:text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  perspiciatis dolor dolore explicabo recusandae voluptatem
                  alias rerum possimus.
                </p>
                <Button>View Article</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="h-56 p-0 overflow-hidden">
            <CardContent className="p-0 flex">
              <div className="relative w-2/3 h-56">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="article-1"
                  objectFit="cover"
                  fill
                />
              </div>
              <div className="h-full p-3 md:p-5 flex flex-col justify-between">
                <Badge variant="outline">Javascript</Badge>
                <h3 className="font-bold text-xl md:text-2xl">
                  Top 5 Framework CSS
                </h3>
                <p className="text-xs md:text-sm font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  perspiciatis dolor dolore explicabo recusandae voluptatem
                  alias rerum possimus.
                </p>
                <Button>View Article</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Container>
  );
};

export default Articles;
