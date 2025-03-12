"use client";

import Image from "next/image";
import React, { useState } from "react";

interface AccordionItemProps {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = React.memo(({ items }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const toggleAccordion = (selectedId: number) => {
    setSelectedItem(selectedItem === selectedId ? null : selectedId);
  };

  return (
    <div className="flex flex-col items-center ">
      {items.map((item: AccordionItemProps) => {
        return (
          <div
            key={item.id}
            className="w-full max-w-5xl p-4 lg:p-8 rounded-lg gap-4 flex flex-col"
          >
            <div
              className="flex justify-between gap-4 cursor-pointer"
              onClick={() => toggleAccordion(item.id)}
            >
              <h3 className="font-medium text-[#121229]  w-3/4">
                {item.question}
              </h3>
              <Image
                src={"/images/expand.png"}
                alt=""
                height={24}
                width={24}
                className={`transform transition-transform h-6 w-6 ${
                  selectedItem === item.id ? "rotate-45" : "rotate-0"
                }`}
              />
            </div>
            {selectedItem === item.id && (
              <p
                className={`overflow-hidden transition-all duration-300 ease-in-out text-sm text-[#121229] w-[90%] ${
                  selectedItem === item.id
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
});

export default Accordion;
Accordion.displayName = "Accordion";
