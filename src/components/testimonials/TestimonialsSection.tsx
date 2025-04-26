import { FC } from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { Title } from "../composite-components/composite-components";
import { testimonials } from "../../constants";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection: FC = () => (
  <div id="testimonials">
    <div className=" mx-auto py-5 text-center bg-[#222]">
      <Title
        icon={<UsersIcon className="text-blue-500" />}
        title="Testimonial"
        iconSize="w-12 h-12"
        titleSize={{ sm: "text-2xl", lg: "text-4xl" }}
      />
      <div className="flex flex-wrap m-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
