"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ui/ToggleTheme";
import { navItems } from "@/constants";
import { Button } from "./ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed z-10 w-full flex items-center justify-between py-4 px-10 bg-gray-100 dark:bg-blue-600 shadow-md">
      {/* logo */}
      <div className="flex items-center">
        <Link href="/">
          <h1 className="font-extrabold md:text-[2vw]">TalentLoop</h1>
        </Link>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex gap-8 items-center">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
          <div>
            <SignedOut>
              <SignUpButton>
                <Button className="bg-[#6c47ff] dark:bg-white dark:text-black text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 text-white sm:px-5 cursor-pointer">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full flex justify-center bg-gray-100 dark:bg-blue-600 shadow-md md:hidden z-50">
          <div className="flex justify-between w-full p-10 items-center">
            <div className="flex gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-end gap-6 w-full">
              <SignedOut>
                <SignUpButton>
                  <Button className="bg-[#6c47ff] dark:bg-white dark:text-black text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 text-white sm:px-5 cursor-pointer">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
