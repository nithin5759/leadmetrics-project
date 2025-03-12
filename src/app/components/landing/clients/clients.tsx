"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clientsData } from "@/app/constants";
import Image from "next/image";
import "swiper/css";

interface ClientsDataItems {
  icon: string;
  id: number;
}

const Clients = React.memo(() => {
  return (
    <section
      id="clients"
      className="w-full py-16 px-4 bg-white flex flex-col items-center"
    >
      <div className="w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-[#272735] mt-4 font-bold text-3xl lg:text-4xl !leading-snug">
          Brands that trust us
        </h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="!flex mt-16 w-full justify-center"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: { slidesPerView: 3, spaceBetween: 20 },

            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay]}
        >
          {clientsData.map((items: ClientsDataItems) => {
            return (
              <SwiperSlide
                key={items.id}
                className="!flex flex-row justify-center items-center bg-[#3DBCED0D] mx-2 rounded-lg px-5 py-2"
              >
                <Image
                  src={items.icon}
                  alt="clients"
                  width={112}
                  height={80}
                  className="object-contain w-28 h-20"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
});

export default Clients;
Clients.displayName = "Clients";
