import React, { FC } from "react";
import Map from "./Map";
import CustomLink from "../CustomLink";

const Contact: FC = () => {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <Map />
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-gray-500 text-center">
          <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font ">
            How to contact me?
          </h2>
          <p className="leading-relaxed mb-2 p-2">
            I look forward to hearing from you. You can contact me via LinkedIn,
            Email or Phone.
          </p>
          <div className="relative mb-2">
            <CustomLink
              href="mailto:slawomirdyk@gmail.com"
              text="Send Email"
              textColor="black"
              additionalClasses="hover:bg-sky-700"
            />
          </div>
          <div className="relative mb-2">
            <CustomLink
              href="https://www.linkedin.com/in/slawomir-dyk-b35ab1177/"
              text="Send me a message by LinkedIn"
              textColor="black"
              additionalClasses="hover:bg-sky-700"
            />
          </div>
          <div className="relative mb-4">My Phone Number: 07562760261</div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
