"use client";
import Image from "next/image";
import React from "react";
import { infoData } from "@/constants";
import Link from "next/link";

const About = () => {
  return (
    <section
      className="w-full bg-[#222] text-white overflow-x-hidden"
      id="about"
    >
      <div className="max-w-screen-xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-around pt-12">
        <figure className="w-72 h-72 rounded-full overflow-hidden border-[15px] border-[#444] shadow-xl">
          <Image
            src="/slav.jpg"
            alt="Slawomir Dyk Profile Picture"
            width={300}
            height={300}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </figure>

        <article className="max-w-md flex flex-col mt-10 md:mt-0 px-4 text-center md:text-left">
          <header className="mb-4">
            <h5 className="text-sm mb-2">Hi, I'm Frontend Developer/DevOps</h5>
            <h1 className="text-4xl text-blue-500 font-bold">Slawomir Dyk</h1>
          </header>

          <p className="text-gray-200 text-sm leading-relaxed">{infoData}</p>

          <div className="mt-8">
            <Link
              href="./Slawomir_Dyk_CV.pdf"
              className="inline-block px-5 py-3 bg-[#333] border-2 border-blue-500 text-white rounded-full shadow-md hover:bg-blue-500 hover:border-blue-600 transition-colors"
            >
              Download CV
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
