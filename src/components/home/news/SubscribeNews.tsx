import Button from "../../Button";
import subscribeImg from '../../../assets/images/cta-2.png'

export default function SubscribeNews() {
  return (
    <div className="flex flex-col md:flex-row py-3 items-center bg-glass border rounded-3xl w-[90vw] md:w-[70vw] mx-auto">
      <img
        loading="lazy"
        className="px-10 md:px-20 mx-auto my-5"
        src={subscribeImg}
        alt="wallete"
      />
      <div className="flex-1 text-center md:text-start">
        <span className="text-4xl">
          <span className="glow font-bold">Subscribe</span> Our News
        </span>
        <div className="my-5 text-lg mx-5 md:mx-0">
          <p>Hey! Are you tired of missing out on our updates?</p>
          <p>Subscribe to our news now and stay in the loop!</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} action="">
          <input
            type="email"
            className="bg-transparent border border-white/30 px-5 py-2 mb-5 md:mb-0 mr-3 rounded-full"
            placeholder="your email address"
            required
          />
          <Button>
            <span className="mx-3">submit</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
