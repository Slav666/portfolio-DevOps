"use client";
import Image from "next/image";
import React from "react";
import { infoData } from "@/constants";

const About = () => {
  return (
    <div className="w-full  bg-[#222] text-white overflow-x-hidden" id="about">
      <div className="max-w-screen-xl mx-auto px-5 py-8">
        <div className="flex flex-col md:flex-row items-center justify-around pt-12">
          <div className="w-72 h-72 rounded-full overflow-hidden border-[15px] border-[#444] shadow-xl">
            <Image
              src="/slav.jpg"
              alt="profile pic"
              width={300}
              height={300}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="max-w-md flex flex-col mt-10 md:mt-0 px-4">
            <h5 className="text-sm mb-2">Hi, I'm Frontend Developer/DevOps</h5>
            <h1 className="text-4xl text-blue-500 font-bold mb-4">
              Slawomir Dyk
            </h1>
            <p className="text-gray-200 text-sm leading-relaxed">{infoData}</p>

            <div className="mt-8 space-x-3">
              {/* <a
                href="#"
                className="px-5 py-3 bg-[#333] border-2 border-blue-500 text-white rounded-full shadow-md"
              >
                Download CV
              </a> */}
              {/* <a
                href="/contact"
                className="px-5 py-3 bg-[#333] border-2 border-gray-300 text-white rounded-full shadow-md"
              >
                Contact
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
