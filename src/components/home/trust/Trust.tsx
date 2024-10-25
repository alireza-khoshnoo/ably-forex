import Slider from "./Slider";
import Testimonials from "./Testimonials";

export default function Trust() {
  return (
    <div className="my-20">
      <div className="my-5">
        <h3 className="text-4xl font-bold text-center mb-5">
          We Are <span className="glow ">Trusted</span> By Many
        </h3>
        <p className="section-text">
          Unlock the full potential of our product with our amazing features and
          top-notch.
        </p>
      </div>
      <Testimonials />
      <Slider />
    </div>
  );
}
