"use client";

import React, { useState } from "react";
import Image from "next/image";
import { serviceOptions, serviceOptionsData } from "@/app/constants";

interface ServiceOptionsItems {
  id: number;
  option: string;
}

interface ServiceOptionsDataItems {
  id: number;
  title: string;
  icon: string;
  description: string;
  services: ServiceOptionsItems[];
}

const Services = React.memo(() => {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  const optionSelectHandler = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <section
      id="services"
      className="w-full flex justify-center bg-white bg-no-repeat bg-center bg-cover px-4 py-5 md:py-10"
      style={{ backgroundImage: `url(${"/images/services-bg.png"})` }}
    >
      <div className="w-full flex flex-col items-center max-w-7xl">
        <p className="text-[#6E3BFF] font-semibold uppercase text-sm tracking-[5px]">
          SERVICES
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#272735] mt-4 !leading-snug">
          Our Services
        </h2>
        <div className="my-10 w-full">
          <div className="w-full mb-10 rounded-md flex justify-center sm:justify-between bg-[#F4F6FA] text-center text-[#30313E] flex-wrap gap-3  px-4 py-4  sm:py-2">
            {serviceOptions.map((items: ServiceOptionsItems) => {
              return (
                <div
                  key={items.id}
                  className={`cursor-pointer px-8 py-2 rounded-lg w-[16rem] sm:w-[14rem] flex justify-center items-center transition-all duration-300 ${
                    items.id === selectedOption
                      ? "bg-[#FAAA01] text-white"
                      : "text-black"
                  }`}
                  onClick={() => optionSelectHandler(items.id)}
                >
                  {items.option}
                </div>
              );
            })}
          </div>
          {serviceOptionsData.map((options: ServiceOptionsDataItems) => {
            if (selectedOption === options.id) {
              return (
                <div
                  key={options.id}
                  className="flex w-full flex-col sm:flex-row gap-4"
                >
                  <div className="w-full sm:w-1/2 flex flex-col gap-4">
                    <h3 className="text-[#272735] font-bold text-2xl lg:text-3xl">
                      {options.title}
                    </h3>
                    <p className="text-black">{options.description}</p>
                    <p className="text-[#6E3BFF] mt-3 font-semibold">
                      Our services include:
                    </p>
                    {options.services.map((options: ServiceOptionsItems) => {
                      return (
                        <div
                          key={options.id}
                          className="w-full flex gap-2 items-center"
                        >
                          <div className="bg-[#6E3BFF] w-2 h-2"></div>
                          <p className="text-black">{options.option}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
                    <Image
                      src={options.icon}
                      width={220}
                      alt="ai-driven"
                      height={160}
                      className="w-full max-w-[32rem] object-contain"
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
});

export default Services;
Services.displayName = "Services";
