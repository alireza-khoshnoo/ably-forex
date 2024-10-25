import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
type accordionProps = {
  faqsInfo: {
    title: string;
    content: string;
  }[];
};
const FaqAccordion = ({ faqsInfo }: accordionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="accordion">
      {faqsInfo.map((item, index) => (
        <div data-aos="fade-right" key={index} className="accordion-item mb-3">
          <div
            onClick={() => handleSetIndex(index)}
            className={`accordion-header flex items-center justify-between p-4 cursor-pointer font-semibold ${
              activeIndex === index ? "text-[#00D094]" : ""
            }`}
          >
            <h2 className="text-xl">{item.title}</h2>
            <div
              className={`border ${
                activeIndex === index ? "border-[#00D094]" : ""
              } rounded-full w-6 h-6 min-w-6 ml-5 flex items-center justify-center text-sm`}
            >
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          {activeIndex === index && (
            <div className="accordion-content p-4 pt-0 opacity-75 text-lg">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
