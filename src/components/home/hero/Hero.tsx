import { useEffect, useRef } from "react";
import banner from "../../../assets/images/banner-02.png";
import Button from "../../Button";
import TypeWriter from "./Typewriter";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  let animationFrameId: number | null;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const middle = windowWidth / 2;
      const mousePosition = e.clientX - middle;

      if (imageRef.current) {
        imageRef.current.style.transform = `translate(calc(${
          mousePosition * -0.05
        }px - 50%), -50%)`;
      }
      if (backRef.current) {
        backRef.current.style.transform = `translateX(${
          mousePosition * 0.01
        }px)`;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          handleMouseMove(e);
          animationFrameId = null;
        });
      }
    };

    if (heroRef.current) {
      heroRef.current.addEventListener("mousemove", onMouseMove);
    }

    // Cleanup event listener
    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="text-darktext dark:text-lighttext relative mb-14"
    >
      <div className="box-glow hidden lg:block top-1/2 -translate-y-2/3"></div>
      <div className="flex flex-col lg:flex-row">
        {/* left */}
        <div className="text-center flex flex-col justify-between lg:text-start mx-10 md:mx-20 flex-1">
          <div className="texts">
            <h1 className="text-black dark:text-white text-5xl lg:text-7xl font-bold glow mt-14 mb-8">
              ABLY Forex
            </h1>
            <p className="text-lg font-bold opacity-80 mb-5">
              Discover innovative trading solutions with ABLY Forex, <br />{" "}
              leading the industry with cutting-edge technology.
            </p>
            <div className="text-3xl">We specialize in </div>
            <TypeWriter />
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 mb-20 lg:mb-32 mt-14">
            <Button>
              <span className="mx-3 text-xl">Hire A Aro MQL Developer</span>
            </Button>
            <Button>
              <span className="mx-3 text-xl">Explore Trading Bots</span>
            </Button>
          </div>
        </div>
        {/* left */}
        {/* right */}
        <div className="flex-1 flex items-center justify-center relative my-10 lg:mt-32 md:mb-20">
          <div
            ref={backRef}
            className="w-[75%] md:w-[60%] aspect-square rounded-full bg-glass border z-0 back-glow "
          ></div>
          <img
            ref={imageRef}
            className="w-40 md:w-64 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
            src={banner}
            alt=""
          />
        </div>
        {/* right */}
      </div>
    </div>
  );
}
