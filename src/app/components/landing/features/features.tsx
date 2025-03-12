import React from "react";
import Button from "../../button/button";
import { featuresData } from "@/app/constants";
import Image from "next/image";

interface FeaturesDataItems {
  id: number;
  title: string;
  icon: string;
}

const Features = React.memo(() => {
  return (
    <section
      id="features"
      className="w-full bg-white flex flex-col items-center px-4 py-5 md:py-10"
    >
      <div className="w-full max-w-7xl">
        <p className="font-semibold text-[#6E3BFF] uppercase tracking-[5px] text-sm">
          FEATURES
        </p>
        <h2 className="text-[#272735] font-bold mt-4 text-3xl lg:text-4xl !leading-snug">
          Other Product Features
        </h2>
        <div className="grid grid-cols-1 gap-16 mt-16 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {featuresData.map((options: FeaturesDataItems) => {
            return (
              <div
                key={options.id}
                className="flex flex-col w-full justify-start max-w-[25rem]"
              >
                <Image
                  src={options.icon}
                  alt="features"
                  width={32}
                  height={32}
                  className="w-8"
                />
                <p className="text-[#262730] mt-4">{options.title}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-16">
          <Button value="Get A Call Back" variant="primary" />
        </div>
      </div>
    </section>
  );
});

export default Features;
Features.displayName = "Features";
