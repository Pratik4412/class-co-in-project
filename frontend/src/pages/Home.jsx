import React from "react";
import AOSWrapper from "../common/AOSWrapper";
import AboutSection from "../components/landingpage/AboutSection";
import CoreServices from "../components/landingpage/CoreServices";
import TruthStrip from "../components/landingpage/TruthStrip";
import Industries from "../components/landingpage/Industries";
import WhyChoose from "../components/landingpage/WhyChoose";
import Contact from "../components/landingpage/Contact";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-14 lg:gap-20 ">
      <div className="hero-section px-5 md:px-10 lg:px-20 py-6 md:py-10">
        <div className="container mx-auto flex items-center justify-center flex-col gap-12 w-full h-full">
          <div className="flex items-center flex-col gap-4">
            <AOSWrapper animation="slide-up">
              <h6 className="text-base md:text-lg font-normal text-white font-heading">
                ENVISION . LEAD . EXECUTE
              </h6>
            </AOSWrapper>
            <AOSWrapper animation="slide-up">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-center text-white font-heading">
                STARS & Co. LLP — <br />
                Chartered Accountants{" "}
              </h1>
            </AOSWrapper>
            <AOSWrapper animation="slide-up">
              <h6 className="text-base md:text-lg text-center font-normal text-white font-heading">
                An ISO Certified and Peer-Reviewed Firm <br /> Delivering
                excellence in audits, taxation, and financial advisory since
                2013.
              </h6>
            </AOSWrapper>
          </div>
          <div className="flex items-center md:flex-row flex-col gap-3">
            <button className="bg-transparent text-white px-6 py-2 rounded-lg text-sm font-normal font-heading border border-primary-300">
              Explore Services
            </button>
            <button className="bg-btn-gradient text-white px-6 py-2 rounded-lg text-sm font-normal font-heading">
              Get Consultation
            </button>
          </div>
        </div>
      </div>
      <AboutSection />
      <div id="services">
        <CoreServices />
      </div>
      <TruthStrip />
      <Industries />
      <WhyChoose />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
