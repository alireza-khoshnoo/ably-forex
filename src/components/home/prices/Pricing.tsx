import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <div>
      <div className="my-5">
        <h3 className="text-4xl font-bold text-center mb-5">
          Our <span className="glow ">Pricings </span> Plans
        </h3>
        <p className="text-center text-lg text-white/50">
          Hey there pro traders, check out these articles with tips to take your
          trading game to the next level!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 md:px-20 gap-10 mt-10 items-center">
        <PricingCard title="basic" price={99} />
        <PricingCard title="standard" price={149} isDefault/>
        <PricingCard title="premium" price={199} />
      </div>
    </div>
  );
}
