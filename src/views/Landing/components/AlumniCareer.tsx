import * as React from "react";
import Container from "@/components/core/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface IAlumniCareerProps {}

const AlumniCareer: React.FunctionComponent<IAlumniCareerProps> = (props) => {
  return (
    <Container>
      <section id="alumniCareer" className="space-y-7 px-6 md:px-16 py-16">
        <div>
          <h2 className="text-center uppercase text-gray-500">
            From Learning to Earning
          </h2>
          <p className="text-center text-sm">
            Watching my students grow and land amazing jobs is the best feeling!
            Here's what they've been up to.
          </p>
        </div>
        <div className="flex justify-evenly">
          <Card>
            <CardContent className="flex gap-4">
              <Image
                src="https://avatar.iran.liara.run/public"
                alt="student-01"
                width={50}
                height={50}
              />
              <div>
                <h3 className="font-bold italic">Fullstack Engineer</h3>
                <p>Hans</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex gap-4">
              <Image
                src="https://avatar.iran.liara.run/public"
                alt="student-01"
                width={50}
                height={50}
              />
              <div>
                <h3 className="font-bold italic">Fullstack Engineer</h3>
                <p>Hans</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex gap-4">
              <Image
                src="https://avatar.iran.liara.run/public"
                alt="student-01"
                width={50}
                height={50}
              />
              <div>
                <h3 className="font-bold italic">Fullstack Engineer</h3>
                <p>Hans</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Container>
  );
};

export default AlumniCareer;
