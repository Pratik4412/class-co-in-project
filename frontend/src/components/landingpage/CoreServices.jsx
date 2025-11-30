import React from "react";
import { services } from "../../data/text";
import AOSWrapper from "../../common/AOSWrapper";

const CoreServices = () => {
  return (
    <section className="bg-gradient-to-b from-[#243B64] to-[#6A8EC4]">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 md:py-20">
        {/* Heading */}
        <h2 className="text-center text-yellow-400 text-3xl font-semibold mb-12">
          OUR CORE SERVICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-14 gap-8 justify-center">
          {services.map((item, i) => (
            <AOSWrapper key={i} animation="fade-up" delay={i * 100}>
              <div
                className={`
          flex flex-col gap-6 bg-white rounded-2xl p-6 shadow-lg transition hover:scale-105
          hover:ring-2 hover:ring-blue-500
          ${
            i >= 4
              ? "lg:col-span-2 lg:max-w-[300px] lg:justify-self-center"
              : ""
          }
        `}
              >
                <div className="flex flex-col gap-1">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-8 md:w-12"
                  />
                  <h4 className="font-semibold text-secondary">{item.title}</h4>
                </div>

                <p className="text-sm text-gray-500">{item.desc}</p>

                <button className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1">
                  Learn more →
                </button>
              </div>
            </AOSWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
