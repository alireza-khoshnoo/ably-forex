import TestimonialCard from "./TestimonialCard";
import { testimonialsInfo } from "../../../data/data";

export default function Testimonials() {
  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-20 mt-10"
    >
      {testimonialsInfo.map((item, index) => (
        <TestimonialCard key={index} {...item} />
      ))}
    </div>
  );
}
