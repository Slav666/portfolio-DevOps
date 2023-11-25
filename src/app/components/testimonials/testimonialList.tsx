import React, { FC } from "react";
import TestimonialCard from "./testimonialCard";
import { TestimonialData } from "@/data";

interface TestimonialsListProps {
  testimonials: TestimonialData[];
}

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
