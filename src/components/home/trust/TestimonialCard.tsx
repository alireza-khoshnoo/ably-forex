import { FaQuoteRight } from "react-icons/fa6";
import { TestimonialCardProps } from "../../../../types";

export default function TestimonialCard({
  comment,
  image,
  name,
}: TestimonialCardProps) {
  return (
    <div className="bg-glass px-6 py-5 border rounded-xl">
      <p className="pb-4 border-b border-b-white/20">{comment}</p>
      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-5">
          <img
            loading="lazy"
            className="w-11 h-11 rounded-full"
            src={image}
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold">{name}</span>
            <span className="opacity-60">trader</span>
          </div>
        </div>
        <FaQuoteRight className="text-3xl text-c4" />
      </div>
    </div>
  );
}
