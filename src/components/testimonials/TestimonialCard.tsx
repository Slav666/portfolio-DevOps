import React, { FC } from "react";
import { TerminalIcon } from "@heroicons/react/solid";
import { TestimonialCardProps } from "@/types";
import Image from "next/image";

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="p-4 md:w-1/2 w-full">
      <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
        <TerminalIcon className="block w-8 text-gray-500 mb-4" />
        <p className="leading-relaxed mb-6">{testimonial.quote}</p>
        <div className="inline-flex items-center">
          <Image
            alt="testimonial"
            src={testimonial.image}
            className="w-12 rounded-full flex-shrink-0 object-cover object-center"
            width={20}
            height={20}
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-white">
              {testimonial.name}
            </span>
            <span className="text-gray-500 text-sm uppercase">
              {testimonial.company}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
