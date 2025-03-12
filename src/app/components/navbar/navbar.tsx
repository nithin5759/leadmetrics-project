"use client";

import { navigationData } from "@/app/constants";
import Button from "../button/button";
import Image from "next/image";
import React, { useState } from "react";

interface NavbarProps {
  title: string;
  id: number;
  name: string;
}

const Navbar = React.memo(() => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="bg-white flex justify-center shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl w-full p-4 flex items-center justify-between relative">
        <Image src={"/images/logo.png"} alt="logo" width={170} height={28} />

        <div className="hidden w-full md:flex justify-end items-center">
          <div className="flex items-center gap-7 mr-7">
            {navigationData.map((items: NavbarProps) => {
              return (
                <a
                  key={items.id}
                  className="font-medium cursor-pointer text-base
 text-[#2C2C4B] hover:text-[#6E3BFF] transition-all duration-300"
                  onClick={() => scrollToSection(items.name)}
                >
                  {items.title}
                </a>
              );
            })}
          </div>
          <Button value="Get Started" variant="primary" />
        </div>
        <Image
          src={"/images/menu-icon.png"}
          alt="menu"
          height={23}
          width={15}
          className="md:hidden cursor-pointer w-6"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <div
          className={`md:hidden shadow-md h-screen fixed top-0 left-0 bg-white min-w-[12rem] px-8 py-16 z-50 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          <div className="flex flex-col items-start gap-7 mb-7 md:mr-7 ">
            {navigationData.map((items: NavbarProps) => {
              return (
                <a
                  key={items.id}
                  className="font-medium text-base cursor-pointer 
 text-[#2C2C4B] hover:text-[#6E3BFF] transition-all duration-300"
                  onClick={() => scrollToSection(items.name)}
                >
                  {items.title}
                </a>
              );
            })}
          </div>
          <Button value="Get Started" variant="primary" />
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
