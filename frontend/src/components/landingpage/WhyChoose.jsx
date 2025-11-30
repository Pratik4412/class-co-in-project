import React from "react";
import choose from "../../assets/landingPage/why-choose-us.webp";
const WhyChoose = () => {
  return (
    <section className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center gap-6 flex-col">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-secondary font-bold text-center ">
          Why choose us
        </h1>
        <img src={choose} alt="choose" />
      </div>
    </section>
  );
};

export default WhyChoose;
