"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-semibold text-lg">TalentLoop</span>
        </div>
        <div className="mb-4 md:mb-0 text-center">
          <span className="text-sm">
            &copy; {new Date().getFullYear()} TalentLoop. All rights reserved.
          </span>
        </div>
        <div className="flex space-x-4 justify-center md:justify-end">
          <a href="#" className="hover:text-slate-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-400 transition">
            Terms
          </a>
          <a href="#" className="hover:text-slate-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
