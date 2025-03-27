import React from "react";
import Testimonial from "./Testimonial";

const TestimonialList = ({ testimonials }) => {
  return (
    <ul className="flex flex-col gap-y-6 max-xl:gap-y-4 max-lg:nth-[3]:hidden">
      {testimonials?.map((test) => (
        <Testimonial test={test} key={test.name} />
      ))}
    </ul>
  );
};

export default TestimonialList;
