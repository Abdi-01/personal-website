"use client";

import * as React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Stay ahead with insights</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1"
            />
            <Button className="w-full sm:w-auto">Subscribe</Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-sm">alghifarfn@gmail.com</p>
          <p className="text-sm">+62 8273-6453-6271</p>
        </div>

        {/* Page Links */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Pages</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/#skill" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="hover:underline">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/#alumniCareer" className="hover:underline">
                Alumni Career
              </a>
            </li>
            <li>
              <a href="/#articles" className="hover:underline">
                Articles
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Social</h2>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:text-blue-600">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FiLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-red-500">
              <FiYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t text-sm text-center text-gray-500 py-4">
        © {new Date().getFullYear()} ABDI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
