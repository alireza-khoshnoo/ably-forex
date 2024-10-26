import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  const texts = ["MQL Language", "Trading Bots", "Forex Market", "Trading Strategies"];

  return (
    <span className="text-4xl font-semibold">
      <Typewriter
        words={texts}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={3000}
      />
    </span>
  );
}
