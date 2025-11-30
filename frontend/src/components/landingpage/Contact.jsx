import React from "react";
import AOSWrapper from "../../common/AOSWrapper";
import contactImg from "../../assets/landingPage/contact-img.webp";
const Contact = () => {
  return (
    <section className="contact-bg ">
      <div className="container mx-auto max-w-7xl px-5 md:px-10 lg:px-20 flex flex-col gap-8">
        <div>
          <AOSWrapper animation="fade-up">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-secondary rounded-full"></div>
                <h6 className="text-xl text-secondary font-inter">
                  Get a Quote
                </h6>
              </div>
              <h2 className="text-xl md:text-4xl text-secondary font-inter font-bold">
                Need Expert Guidance?
              </h2>
            </div>
          </AOSWrapper>
        </div>

        <div className="bg-white flex items-center gap-8 w-full">
          <form className="flex flex-col gap-8 w-full p-6">
            <div className="flex items-center flex-col md:flex-row gap-4">
              <input
                type="text"
                name="fname"
                placeholder="Yout first name"
                className="outline-none w-full text-sm text-gray-500 border border-gray-400 py-2 px-3"
              />
              <input
                type="text"
                name="lname"
                placeholder="Your last name"
                className="outline-none w-full text-sm text-gray-500 border border-gray-400 py-2 px-3"
              />
            </div>
            <div className="flex items-center flex-col md:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="outline-none w-full text-sm text-gray-500 border border-gray-400 py-2 px-3"
              />
              <input
                type="text"
                name="phone"
                placeholder="Yout phune number"
                className="outline-none w-full text-sm text-gray-500 border border-gray-400 py-2 px-3"
              />
            </div>
            <textarea
              name=""
              id=""
              className="outline-none w-full resize-none text-sm text-gray-500 border border-gray-400 py-2 px-3"
            ></textarea>
            <button className="w-fit text-white text-base font-normal font-inter  px-6 py-2 bg-primary-700">
              Send Message
            </button>
          </form>
          <div className="w-full hidden md:block">
            <img src={contactImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
