import Image from "next/image";
import * as React from "react";

interface ISkillsProps {}

interface ILogo {
  alt: string;
  imgUrl: string;
}

const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
  const logo: ILogo[] = [
    {
      alt: "js",
      imgUrl:
        "https://img.icons8.com/?size=100&id=39853&format=png&color=000000",
    },
    {
      alt: "ts",
      imgUrl:
        "https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000",
    },
    {
      alt: "css",
      imgUrl:
        "https://img.icons8.com/?size=100&id=38273&format=png&color=000000",
    },
    {
      alt: "html",
      imgUrl:
        "https://img.icons8.com/?size=100&id=9nmz9TYzN8iO&format=png&color=000000",
    },
    {
      alt: "react",
      imgUrl:
        "https://img.icons8.com/?size=100&id=35989&format=png&color=000000",
    },
    {
      alt: "nextjs",
      imgUrl:
        "https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=000000",
    },
    {
      alt: "mysql",
      imgUrl:
        "https://img.icons8.com/?size=100&id=39858&format=png&color=000000",
    },
    {
      alt: "postgresql",
      imgUrl:
        "https://img.icons8.com/?size=100&id=25010&format=png&color=000000",
    },
    {
      alt: "prisma",
      imgUrl:
        "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=000000",
    },
  ];
  return (
    <section id="skill" className="bg-slate-100 p-4">
      <h2 className="text-center text-sm uppercase text-gray-500">
        Things I Build & Teach
      </h2>
      <div className="flex items-center justify-center gap-10 flex-wrap py-5">
        {logo.map((e: ILogo) => (
          <div key={e.alt} className="relative w-8 md:w-10 h-8 md:h-10">
            <Image
              src={e.imgUrl}
              alt={e.alt}
              objectFit="cover"
              fill
              className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
