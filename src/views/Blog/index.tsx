import Container from "@/components/core/Container";
import * as React from "react";
import ArticleTimeline from "./components/ArticleTimeline";

const BlogPage = () => {
  return (
    <Container>
      <div className="px-16 py-16">
        <ArticleTimeline />
      </div>
    </Container>
  );
};

export default BlogPage;
