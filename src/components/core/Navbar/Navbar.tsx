"use client";

import * as React from "react";
import { Button } from "../../ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { PhoneIcon, Menu, X } from "lucide-react";
import Container from "../Container";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <Container>
      <div className="flex justify-between items-center pt-5 px-3 pb-0">
        <h1 className="text-2xl font-thin">
          AB<span className="font-bold">DI</span>
        </h1>

        {/* Desktop Contact Button */}
        <Button className="hidden md:inline">Contact</Button>

        {/* Mobile Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
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
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-4 py-2 space-y-3">
          <a href="/" className="block text-sm font-medium">
            Home
          </a>
          <a href="/#about" className="block text-sm font-medium">
            About
          </a>
          <a href="/#skill" className="block text-sm font-medium">
            Skills
          </a>
          <a href="/#alumniCareer" className="block text-sm font-medium">
            Alumni Career
          </a>
          <a href="/#portfolio" className="block text-sm font-medium">
            Portfolio
          </a>
          <a href="/#articles" className="block text-sm font-medium">
            Articles
          </a>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
