import React from "react";
import Image from "next/image";
import { principlesData } from "@/app/constants";

interface PrincipleDataItems {
  id: number;
  icon: string;
  title: string;
  description: string;
  background: string;
}

const Principles = React.memo(() => {
  return (
    <section className="w-full py-16 bg-white flex justify-center px-4 md:py-10">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <p className="font-semibold text-[#6E3BFF] uppercase tracking-[5px] text-sm">
          WHY LEADMETRICS
        </p>
        <h2 className="text-[#272735] font-bold mt-4 text-3xl lg:text-4xl !leading-snug">
          Our core Principles & Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 mt-16">
          {principlesData.map((options: PrincipleDataItems) => {
            return (
              <div
                key={options.id}
                style={{ backgroundColor: options.background }}
                className="max-w-[400px] rounded-xl px-5 py-6"
              >
                <div className="p-4 flex justify-center bg-gradient-to-b from-white to-[#ffffff00] rounded-xl">
                  <Image
                    src={options.icon}
                    alt={options.title}
                    height={120}
                    width={200}
                  />
                </div>

                <h3 className="mt-6 text-[#30313E] font-bold text-lg">
                  {options.title}
                </h3>
                <p className="text-[#262730] my-4">{options.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default Principles;
Principles.displayName = "Principles";
