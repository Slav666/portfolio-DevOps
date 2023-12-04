import React, { FC } from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialsListProps } from "@/types";


const TestimonialsList: FC<TestimonialsListProps> = ({ testimonials }) => {
  return (
    <div className="flex flex-wrap m-4">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialsList;
