import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { industries } from "../../data/text";

const Industries = () => {
  return (
    <section className="py-10 md:py-20 bg-gradient-to-l from-[#243B64] to-[#6A8EC4]">
      <div className="container mx-auto px-5 md:px-10 lg:px-20">
        <h2 className="text-center text-yellow-400 text-2xl md:text-3xl font-semibold mb-12">
          INDUSTRIES WE SERVE
        </h2>

        <Swiper
          spaceBetween={16}
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            480: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {industries.map((team, i) => (
            <SwiperSlide key={i}>
              <div className="relative group overflow-hidden shadow-lg h-full ">
                <img
                  src={team.img}
                  alt={team.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                />

                <div className="absolute inset-0 px-6 py-12">
                  <div className="flex flex-col h-full justify-between">
                    <h6 className="text-white text-lg md:text-xl font-semibold font-inter px-2">
                      {team.title}
                    </h6>
                    <div className="flex flex-col gap-6">
                      <p className="text-white text-base font-normal font-inter  px-2">
                        {team.desc}
                      </p>
                      <button className="w-fit text-white text-base font-normal font-inter  px-6 py-2 bg-primary-700">
                        Read More +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Industries;
