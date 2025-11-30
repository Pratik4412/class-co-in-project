import React from "react";
import trust from "../../assets/landingPage/trust-strip.webp";
const TruthStrip = () => {
  return (
    <section className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center gap-6 flex-col  ">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-secondary font-bold text-center ">
          Trust Badge Strip
        </h1>
        <img src={trust} alt="trust" />
      </div>
    </section>
  );
};

export default TruthStrip;
