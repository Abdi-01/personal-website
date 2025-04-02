import * as React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { PhoneIcon } from "lucide-react";
import Container from "./Container";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
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
          <NavigationMenuLink className="cursor-pointer">
            Home
          </NavigationMenuLink>
          <NavigationMenuLink className="cursor-pointer">
            About
          </NavigationMenuLink>
          <NavigationMenuLink className="cursor-pointer">
            Skills
          </NavigationMenuLink>
          <NavigationMenuLink className="cursor-pointer">
            Portfolio
          </NavigationMenuLink>
          <NavigationMenuLink className="cursor-pointer" href="/blog">
            Blogs
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
