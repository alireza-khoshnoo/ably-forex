import FaqAccordion from "./FaqAccordion";
import { faqsInfo } from "../../../data/data";
import questionImg from "../../../assets/images/faq.png"

export default function Faq() {
  return (
    <>
      <div className="my-5">
        <h3 className="text-4xl font-bold text-center mb-5">
          <span className="glow ">Frequently</span> Asked Questions
        </h3>
        <p className="section-text">
          Hey there! Got questions? We've got answers. Check out our FAQ page
          for all
          <br /> the deets. Still not satisfied? Hit us up.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row my-14 px-10 md:px-20 gap-14">
        <div className="accordion flex-1">
          {/* the accordion */}
          <FaqAccordion faqsInfo={faqsInfo} />
          {/* the accordion */}
        </div>
        <div className="back-glow flex flex-1 items-center justify-center">
          <img
            loading="lazy"
            className="hue-rotate-90 animate-bounce "
            src={questionImg}
            alt="faq image"
          />
        </div>
      </div>
    </>
  );
}
