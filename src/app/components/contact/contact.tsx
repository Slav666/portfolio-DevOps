import React from "react";
import Map from "./map";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <Map />
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-gray-500 text-center">
          <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font ">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 p-2">
            I look forward to hearing from you. You can contact me via LinkedIn,
            email or phone.
          </p>
          <div className="relative mb-4">
            <a
              href="mailto:slawomirdyk@gmail.com"
              className="bg-blue-400 rounded-full p-2 inline-block"
            >
              Send Email
            </a>
          </div>
          <div className="relative mb-4">
            <a
              href="https://www.linkedin.com/in/slawomir-dyk-b35ab1177/"
              className="bg-blue-400 rounded-full p-2 inline-block"
            >
              Send me a message by LinkedIn
            </a>
          </div>
          <div className="relative mb-4">My Phone Number: 07562760261</div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
