import React from "react";
import Accordion from "../../accordion/accordion";
import { questionsData } from "@/app/constants";

const Questions = React.memo(() => {
  return (
    <section
      id="questions"
      className="w-full py-16 bg-white flex justify-center px-4 md:py-10"
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        <p className="font-semibold text-[#6E3BFF] uppercase tracking-[5px] text-sm">
          FAQ’S
        </p>
        <h2 className="text-[#272735] font-bold mt-4 text-3xl lg:text-4xl !leading-snug">
          Frequently Asked Questions
        </h2>
        <div className="w-full mt-16">
          <Accordion items={questionsData} />
        </div>
      </div>
    </section>
  );
});

export default Questions;
Questions.displayName = "Questions";
