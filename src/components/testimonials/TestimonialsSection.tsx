import React, { FC } from "react";
import { UsersIcon } from "@heroicons/react/solid";
import TestimonialsList from "./TestimonialList";
import { testimonials } from "../../constants";

const TestimonialsSection: FC = () => {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12">
          My colleagues testimonials
        </h1>
        <TestimonialsList testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
