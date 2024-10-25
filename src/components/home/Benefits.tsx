import forexImg from "../../assets/images/forex-hero-m.webp"
export default function Benefits() {
  return (
    <div className="px-10 md:px-20 my-20">
      <div className="my-5">
        <h3 className="text-4xl font-bold text-center mb-5">
          <span className="glow ">Trading Bots</span> Key Features
        </h3>
        <p className="section-text">
          Unlock the full potential of our product with our amazing custom
          developed bots
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col min-w-fit gap-7">
          <div data-aos="fade-right" className="bg-glass border rounded-xl p-5 text-xl cursor-pointer">
            <span className="font-bold underline">Customization</span> by experienced MQL developers
          </div>
          <div data-aos="fade-right" className="bg-glass border rounded-xl p-5 text-xl cursor-pointer">
            Tested and Proved <span className="font-bold underline">Efficiency</span> and <span className="font-bold underline">Reliability</span>
          </div>
          <div data-aos="fade-right" className="bg-glass border rounded-xl p-5 text-xl cursor-pointer">
            24/7 <span className="font-bold underline">Support</span> and Strategy Consultation
          </div>
          <div data-aos="fade-right" className="bg-glass border rounded-xl p-5 text-xl cursor-pointer">
            machine learning and AI powered <span className="font-bold underline">improvements</span>
          </div>
        </div>
        <div className="mt-10 flex-1">
          
          <img loading="lazy" className=" max-w-full" src={forexImg} alt="features" />
          
        </div>
      </div>
    </div>
  );
}
