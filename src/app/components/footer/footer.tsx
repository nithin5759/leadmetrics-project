"use client";

import React from "react";
import Image from "next/image";
import { navigationData } from "@/app/constants";

interface NavbarProps {
  title: string;
  id: number;
  name: string;
}

const Footer = React.memo(() => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="w-full flex justify-center px-4 pt-10 bg-white">
      <div className="w-full flex max-w-7xl flex-col text-black">
        <div className="flex flex-col md:flex-row gap-4 w-full border-b border-b-[#0000001A] py-8">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div>
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={176}
                height={27}
              />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-sm mt-1">support@leadmetrics.ai</p>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-sm mt-1">
                +91 8590468816 <br /> +971 507540395 (UAE)
              </p>
            </div>
            <div>
              <h3 className="font-medium">Our Offices</h3>
              <div className="flex gap-4">
                <p className="mt-4 text-sm">
                  India
                  <br />
                  Leadmetrics AI Private Limited
                  <br />
                  Kerala Startup Mission,
                  <br />
                  Integrated Startup Complex
                  <br />
                  Kinfra Hi-Tech Park, Kalamassery, Kochi,
                  <br />
                  Kerala 683503
                </p>
                <p className="mt-4 text-sm">
                  U.S.A
                  <br />
                  Leadmetrics, Inc
                  <br />
                  169 Madison Avenue, STE 2570, NY 10016, USA
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center md:justify-end  md:items-end">
            <div className="flex flex-row flex-wrap justify-center md:flex-col items-start gap-7 mb-7 md:mr-7 ">
              {navigationData.map((items: NavbarProps) => {
                return (
                  <div
                    key={items.id}
                    className="font-medium text-base cursor-pointer 
             text-[#2C2C4B] hover:text-[#6E3BFF] transition-all duration-300"
                    onClick={() => scrollToSection(items.name)}
                  >
                    {items.title}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-black text-center py-6 lg:text-start">
          <p>
            © 2025 All rights reserved. Digital Marketing with AI powered by
            Leadmetrics
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
Footer.displayName = "Footer";
