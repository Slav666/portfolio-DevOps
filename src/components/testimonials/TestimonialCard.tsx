"use client";
import React, { FC } from "react";
import { TerminalIcon } from "@heroicons/react/solid";
import { TestimonialCardProps } from "@/types";
import Image from "next/image";

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  const { quote, image, name, company } = testimonial;

  return (
    <div className="p-4 md:w-1/2 max-w-lg bg-slate-500 mx-auto">
      <div className="h-full bg-gray-300 bg-opacity-40 p-8 rounded-lg">
        <TerminalIcon className="w-8 h-8 text-gray-500 mb-4" />
        <blockquote className="leading-relaxed mb-6">
          <p>{quote}</p>
        </blockquote>
        <div className="flex items-center">
          <Image
            alt={`${name}'s testimonial`}
            src={image}
            className="w-12 h-12 rounded-full object-cover object-center"
            width={20}
            height={20}
          />
          <div className="flex flex-col pl-4">
            <span className="title-font font-medium text-white">{name}</span>
            <cite className="text-gray-500 text-sm uppercase">{company}</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
