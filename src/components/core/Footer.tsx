import Image from "next/image";
import * as React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="flex flex-wrap items-start justify-evenly p-16">
      <div>
        <p>Stay ahead with insights</p>
        <div className="flex gap-3">
          <Input type="email" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </div>
      <div>
        <h2 className="font-bold">Contact</h2>
        <p>alghifarfn@gmail.com</p>
        <p>+62 8273-6453-6271</p>
      </div>
      <div>
        <h2 className="font-bold">Pages</h2>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Alumni Career</li>
          <li>Articles</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold">Social</h2>
        <ul>
          <li>
            <Instagram />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Linkedin />
          </li>
          <li>
            <Youtube />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
