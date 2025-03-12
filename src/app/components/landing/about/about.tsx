"use client";

import React from "react";
import { aboutData } from "@/app/constants";
import Image from "next/image";
import Button from "../../button/button";

interface AboutDataItems {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const About = React.memo(() => {
  return (
    <section
      id="about"
      className="w-full bg-white flex flex-col items-center px-4 py-5 md:py-10"
    >
      <div className="w-full max-w-7xl ">
        <p className="text-[#6E3BFF] font-semibold uppercase text-sm tracking-[5px]">
          WHY LEADMETRICS
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#272735] mt-4 !leading-snug">
          Digital Marketing with AI <br />
          for Every Business
        </h2>
        <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.map((options: AboutDataItems) => {
            return (
              <div
                key={options.id}
                className="w-full bg-[#F6F5FA] flex flex-col gap-4 rounded-xl px-5 py-6 "
              >
                <Image
                  src={options.icon}
                  alt={options.title}
                  height={56}
                  width={54}
                />
                <h3 className=" text-[#30313E] font-bold text-lg">
                  {options.title}
                </h3>
                <p className="text-[#262730]">{options.description}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Button value="Contact Us" variant="primary" />
        </div>
      </div>
    </section>
  );
});

export default About;
About.displayName = "About";
