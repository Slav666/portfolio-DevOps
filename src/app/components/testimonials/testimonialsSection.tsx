import React, { FC } from "react";
import { UsersIcon } from "@heroicons/react/solid";
import TestimonialsList from "./testimonialList";
import { testimonials } from "../../../data";

const TestimonialsSection: FC = () => {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <TestimonialsList testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
