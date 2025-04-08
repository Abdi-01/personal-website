import * as React from "react";
import { BookOpen, Laptop, LucideHandshake, RocketIcon } from "lucide-react";
import Photo from "../../../../public/assets/abdi.jpg";
import Image from "next/image";
import Container from "@/components/core/Container";

const About = () => {
  return (
    <Container>
      <section id="about" className="md:flex px-8 md:px-16 py-16 items-center">
        <div className="md:flex-1/2 space-y-7">
          <h2 className="uppercase text-gray-500">About Me</h2>
          <div>
            <h2 className="text-2xl">More Than Just Code</h2>
            <p>Here&apos;s what I do:</p>
          </div>
          <div className="md:grid grid-cols-2 grid-rows-2 gap-4 py-4 space-y-5 md:space-y-0">
            <div>
              <BookOpen className="w-10 md:w-16 h-10 md:h-16" />
              <h3 className="text-xl font-bold">Teaching is My Main Gig</h3>
              <p className="text-sm font-light">
                I spend most of my time helping aspiring developers learn
                programming—breaking down complex concepts into something
                practical and easy to understand.
              </p>
            </div>
            <div>
              <Laptop className="w-10 md:w-16 h-10 md:h-16" />
              <h3 className="text-xl font-bold">Building Apps on Request</h3>
              <p className="text-sm font-light">
                Outside of teaching, I take on web development projects, turning
                ideas into functional applications that solve real problems.
              </p>
            </div>
            <div>
              <RocketIcon className="w-10 md:w-16 h-10 md:h-16" />
              <h3 className="text-xl font-bold">
                Making Tech Less Intimidating
              </h3>
              <p className="text-sm font-light">
                Whether in class or through projects, I believe technology
                should be accessible, understandable, and fun to learn.
              </p>
            </div>
            <div>
              <LucideHandshake className="w-10 md:w-16 h-10 md:h-16" />
              <h3 className="text-xl font-bold">
                Let&apos;s Learn & Build Together
              </h3>
              <p className="text-sm font-light">
                Need guidance in coding or a custom-built web app? Let’s make it
                happen!
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex-1/2">
          <div
            id="photo"
            className="relative w-80 md:w-96 h-80 md:h-96 m-auto mb-4"
          >
            <Image src={Photo} alt="photo" objectFit="cover" fill />
          </div>
          <p className="text-center font-semibold">
            Abdi Alghifara Felinanda, S.Tr.T
          </p>
          <p className="text-center font-extralight">
            Fullstack Web Development Instructor
          </p>
        </div>
      </section>
    </Container>
  );
};

export default About;
