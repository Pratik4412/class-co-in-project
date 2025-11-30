import React from "react";
import { about_icons } from "../../data/text";
import anoutImage from "../../assets/landingPage/about.webp";
import AOSWrapper from "../../common/AOSWrapper";
const AboutSection = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center gap-6 flex-col md:flex-row" id="about">
      <div className="w-full flex flex-col gap-4">
        <AOSWrapper animation="fade-up">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded-full"></div>
              <h6 className="text-xl text-secondary font-inter">About Us</h6>
            </div>
            <h2 className="text-xl md:text-4xl text-secondary font-inter font-bold">
              A Firm Built on Integrity, Insight & Innovation
            </h2>
          </div>
        </AOSWrapper>
        <div className="flex flex-col">
          {about_icons.map((item, i) => (
            <AOSWrapper key={i} animation="fade-up" delay={i * 200}>
              <div className="flex items-center gap-3 border-b border-gray-200 py-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="md:w-12 w-8 md:h-12 h-8"
                />
                <h4 className="text-base md:text-lg font-semibold font-inter">
                  {item.title}
                </h4>
              </div>
            </AOSWrapper>
          ))}
        </div>
      </div>
      <div className="w-full">
        <AOSWrapper animation="fade-up">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-400 font-inter">
              S T A R S & Co. LLP is a Category I Chartered Accountancy firm
              headquartered in Mumbai.We specialize in assurance, taxation,
              forensic audits, corporate finance, and regulatory consulting.With
              a partner-driven approach and technology-enabled processes, we
              deliver precise, transparent, and value-centric professional
              services.
            </p>
            <img
              src={anoutImage}
              alt="anoutImage"
              className="w-full h-full rounded-lg"
            />{" "}
          </div>
        </AOSWrapper>{" "}
      </div>
    </div>
  );
};

export default AboutSection;
