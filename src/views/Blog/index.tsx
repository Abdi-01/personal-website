import Container from "@/components/core/Container";
import * as React from "react";
import ArticleTimeline from "./components/ArticleTimeline";

interface IBlogPageProps {}

const BlogPage: React.FunctionComponent<IBlogPageProps> = (props) => {
  return (
    <Container>
      <div className="px-16">
        <ArticleTimeline />
      </div>
    </Container>
  );
};

export default BlogPage;
