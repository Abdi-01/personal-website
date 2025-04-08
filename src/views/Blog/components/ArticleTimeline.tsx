import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Dummy data
const dummyArticles = [
  {
    objectId: "1",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=JS+Fundamentals",
    title: "JavaScript Fundamentals: A Beginner’s Guide",
    accountData: { username: "DevJohn" },
    category: "JavaScript",
  },
  {
    objectId: "2",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=React+Hooks",
    title: "Understanding React Hooks and State Management",
    accountData: { username: "JaneCoder" },
    category: "React",
  },
  {
    objectId: "3",
    thumbnail:
      "https://dummyimage.com/600x400/000/fff&text=Next.js+Optimization",
    title: "Optimizing Performance in Next.js",
    accountData: { username: "NextGuru" },
    category: "Next.js",
  },
  {
    objectId: "4",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=TypeScript",
    title: "Why TypeScript is Essential for Modern Web Development",
    accountData: { username: "TSMaster" },
    category: "TypeScript",
  },
  {
    objectId: "5",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Node.js",
    title: "Building Scalable APIs with Node.js and Express",
    accountData: { username: "APIBuilder" },
    category: "Node.js",
  },
  {
    objectId: "6",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=TailwindCSS",
    title: "How to Use Tailwind CSS Effectively",
    accountData: { username: "CSSNinja" },
    category: "CSS",
  },
  {
    objectId: "7",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=MongoDB",
    title: "Getting Started with MongoDB for Web Applications",
    accountData: { username: "DBExpert" },
    category: "Database",
  },
  {
    objectId: "8",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=GraphQL",
    title: "GraphQL vs REST: Which One Should You Use?",
    accountData: { username: "APIExplorer" },
    category: "GraphQL",
  },
  {
    objectId: "9",
    thumbnail:
      "https://dummyimage.com/600x400/000/fff&text=React+Server+Components",
    title: "React Server Components: The Future of Web Development",
    accountData: { username: "FrontendPro" },
    category: "React",
  },
  {
    objectId: "10",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Vite",
    title: "Why Vite is the Fastest Build Tool for JavaScript Projects",
    accountData: { username: "BuildMaster" },
    category: "JavaScript",
  },
  {
    objectId: "11",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Prisma",
    title: "Simplifying Database Queries with Prisma ORM",
    accountData: { username: "DBWizard" },
    category: "Database",
  },
  {
    objectId: "12",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Deno",
    title: "Deno vs Node.js: Key Differences Explained",
    accountData: { username: "JSExplorer" },
    category: "JavaScript",
  },
  {
    objectId: "13",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Remix",
    title: "What Makes Remix Different from Next.js?",
    accountData: { username: "WebInnovator" },
    category: "Next.js",
  },
  {
    objectId: "14",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Svelte",
    title: "Why Developers Are Loving Svelte",
    accountData: { username: "SvelteFan" },
    category: "JavaScript",
  },
  {
    objectId: "15",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Astro",
    title: "Astro: The Best Static Site Generator?",
    accountData: { username: "SSGExpert" },
    category: "JavaScript",
  },
  {
    objectId: "16",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=React+Testing",
    title: "How to Test React Applications with Jest and React Testing Library",
    accountData: { username: "TestGuru" },
    category: "React",
  },
  {
    objectId: "17",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Web3",
    title: "Introduction to Web3 and Decentralized Applications",
    accountData: { username: "CryptoDev" },
    category: "Blockchain",
  },
  {
    objectId: "18",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=NextAuth",
    title: "Secure Authentication in Next.js with NextAuth.js",
    accountData: { username: "AuthExpert" },
    category: "Next.js",
  },
  {
    objectId: "19",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Vue3",
    title: "Vue 3: What’s New and Why You Should Upgrade",
    accountData: { username: "VueLover" },
    category: "JavaScript",
  },
  {
    objectId: "20",
    thumbnail: "https://dummyimage.com/600x400/000/fff&text=Rust+for+Web",
    title: "Rust for Web Development: A Game Changer?",
    accountData: { username: "Rustacean" },
    category: "Programming",
  },
];

const ArticleTimeline = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {Array.from({ length: Math.ceil(dummyArticles.length / 4) }).map(
          (_, index) => {
            const data = dummyArticles.slice(index * 4, index * 4 + 4);
            return (
              <CarouselItem key={index}>
                <div className="flex flex-wrap md:flex-nowrap md:gap-4">
                  <Card className="md:w-2/3 cursor-pointer">
                    <CardHeader>
                      <CardTitle>{data[0]?.category}</CardTitle>
                      <CardDescription>{data[0]?.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={data[0]?.thumbnail || ""}
                        alt={data[0]?.title || "Article Thumbnail"}
                        className="m-auto"
                        width={400}
                        height={200}
                      />
                    </CardContent>
                  </Card>
                  <Card className="md:w-1/3 cursor-pointer">
                    <CardHeader>
                      <CardTitle>{data[1]?.category}</CardTitle>
                      <CardDescription>{data[1]?.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={data[1]?.thumbnail || ""}
                        alt={data[1]?.title || "Article Thumbnail"}
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
                      <CardTitle>{data[2]?.category}</CardTitle>
                      <CardDescription>{data[2]?.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={data[2]?.thumbnail || ""}
                        alt={data[2]?.title || "Article Thumbnail"}
                        className="m-auto"
                        width={400}
                        height={200}
                      />
                    </CardContent>
                  </Card>
                  <Card className="md:w-2/3 cursor-pointer">
                    <CardHeader>
                      <CardTitle>{data[3]?.category}</CardTitle>
                      <CardDescription>{data[3]?.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={data[3]?.thumbnail || ""}
                        alt={data[3]?.title || "Article Thumbnail"}
                        className="m-auto"
                        width={400}
                        height={200}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          }
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ArticleTimeline;
