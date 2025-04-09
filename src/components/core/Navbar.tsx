import * as React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { PhoneIcon } from "lucide-react";
import Container from "./Container";

const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between pt-5 px-3 pb-0">
        <h1 className="text-2xl font-thin">
          AB<span className="font-bold">DI</span>
        </h1>
        <Button className="hidden md:inline">Contact</Button>
        <Button className="md:hidden">
          <PhoneIcon />
        </Button>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuLink href="/" className="cursor-pointer">
            Home
          </NavigationMenuLink>
          <NavigationMenuLink href="/#about" className="cursor-pointer">
            About
          </NavigationMenuLink>
          <NavigationMenuLink href="/#skill" className="cursor-pointer">
            Skills
          </NavigationMenuLink>
          <NavigationMenuLink href="/#alumniCareer" className="cursor-pointer">
            Alumni Career
          </NavigationMenuLink>
          <NavigationMenuLink href="/#portfolio" className="cursor-pointer">
            Portfolio
          </NavigationMenuLink>
          <NavigationMenuLink href="/#articles" className="cursor-pointer">
            Articles
          </NavigationMenuLink>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Articles</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </Container>
  );
};

export default Navbar;
