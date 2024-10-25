import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../Button";

type pricingCardProps = {
  title: string;
  price: number;
  isDefault?: boolean;
};

export default function PricingCard({
  title,
  price,
  isDefault,
}: pricingCardProps) {
  return (
    <div
      className={`bg-glass border ${isDefault ? "" : ""} rounded-xl px-5 py-4`}
    >
      <div className=" uppercase font-bold text-2xl">{title}</div>
      <div className="text-lg text-white/70 py-3 border-b border-white/30">
        <span className="font-bold text-3xl text-cyan">{price}$/</span>Monthly
      </div>
      <div className="text-lg flex gap-3 items-center mt-5">
        <IoMdCheckmarkCircleOutline className="text-2xl text-cyan" />
        <p>Weekly online meeting</p>
      </div>
      <div className="text-lg flex gap-3 items-center mt-5">
        <IoMdCheckmarkCircleOutline className="text-2xl text-cyan" />
        <p>Unlimited learning access</p>
      </div>
      <div className="text-lg flex gap-3 items-center mt-5">
        <IoMdCheckmarkCircleOutline className="text-2xl text-cyan" />
        <p>24/7 technical support</p>
      </div>
      <div className="text-lg flex gap-3 items-center mt-5">
        <IoMdCheckmarkCircleOutline className="text-2xl text-cyan" />
        <p>Personal training</p>
      </div>
      {isDefault && (
        <div className="text-lg flex gap-3 items-center mt-5">
          <IoMdCheckmarkCircleOutline className="text-2xl text-cyan" />
          <p>Business analysis</p>
        </div>
      )}
      <div className="mb-3 mt-5 flex items-center justify-center">
        <Button>
          <span className="px-5">Choose Plan</span>
        </Button>
      </div>
    </div>
  );
}
