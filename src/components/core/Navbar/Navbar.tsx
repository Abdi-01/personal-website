"use client";

import * as React from "react";
import { Button } from "../../ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Container from "../Container";
import Link from "next/link";

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
          <Link href="/" className="cursor-pointer">
            Home
          </Link>
          <Link href="/#about" className="cursor-pointer">
            About
          </Link>
          <Link href="/#skill" className="cursor-pointer">
            Skills
          </Link>
          <Link href="/#alumniCareer" className="cursor-pointer">
            Alumni Career
          </Link>
          <Link href="/#portfolio" className="cursor-pointer">
            Portfolio
          </Link>
          <Link href="/#articles" className="cursor-pointer">
            Articles
          </Link>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-4 py-2 space-y-3">
          <Link href="/" className="block text-sm font-medium">
            Home
          </Link>
          <Link href="/#about" className="block text-sm font-medium">
            About
          </Link>
          <Link href="/#skill" className="block text-sm font-medium">
            Skills
          </Link>
          <Link href="/#alumniCareer" className="block text-sm font-medium">
            Alumni Career
          </Link>
          <Link href="/#portfolio" className="block text-sm font-medium">
            Portfolio
          </Link>
          <Link href="/#articles" className="block text-sm font-medium">
            Articles
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
