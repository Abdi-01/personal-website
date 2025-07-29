import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";

interface IProjectCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  layout: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  layout,
}: IProjectCardProps) => {
  const isLeft = layout === "left";

  return (
    <Card
      className={`md:w-${
        isLeft ? "2/3" : "1/3"
      } lg:h-96 cursor-pointer md:relative overflow-hidden`}
    >
      {isLeft ? (
        <CardContent className="md:flex h-full items-center">
          <div className="mb-4">
            <CardTitle className="md:text-5xl uppercase">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Image
            src={image}
            alt={title}
            className="md:absolute top-0 -right-80 lg:-right-48 hover:-right-0 transition-all duration-500 delay-150"
            width={650}
            height={400}
          />
        </CardContent>
      ) : (
        <>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={image}
              alt={title}
              className="m-auto"
              width={650}
              height={200}
            />
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default ProjectCard;
