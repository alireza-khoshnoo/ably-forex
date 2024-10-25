import ServicesCard from "./ServicesCard";
// import icons
import { GiRobotGolem, GiSpaceShuttle } from "react-icons/gi";
import { FaMapSigns } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { RiNewspaperLine } from "react-icons/ri";
import { BiChalkboard } from "react-icons/bi";
// import icons

const services = [
  {
    dataAos: "fade-right",
    icon: <GiRobotGolem />,
    title: "custom bot development",
    summary:
      "A social assistant that's flexible can accommodate your schedule and needs, making life easier.",
  },
  {
    dataAos: "fade-up",
    icon: <GiSpaceShuttle />,
    title: "strategy optimization",
    summary:
      "Modules transform smart trading by automating processes and improving decision-making.",
  },
  {
    dataAos: "fade-left",
    icon: <FaMapSigns />,
    title: "consultation",
    summary:
      "There, it's me, your friendly neighborhood reporter's news analyst processes and improving",
  },
  {
    dataAos: "fade-right",
    icon: <RiNewspaperLine />,
    title: "articles",
    summary:
      "Hey guys, just a quick update on exchange orders. There have been some changes currency!",
  },
  {
    dataAos: "fade-up",
    icon: <FaRegNewspaper />,
    title: "news",
    summary:
      "Hey, have you checked out that new cryptocurrency platform? It's pretty cool and easy  to use!",
  },
  {
    dataAos: "fade-left",
    icon: <BiChalkboard />,
    title: "education",
    summary:
      "Hey! Just wanted to let you know that the price notification module processes is now live!",
  },
];

export default function Services() {
  return (
    <div className="mb-20 bg-candle">
      <div className="my-5">
        <h3 className="text-4xl font-bold text-center mb-5">
          <span className="glow ">Services </span> We offer
        </h3>
        <p className="section-text">
          Hey there pro traders, check out these articles with tips to take your
          trading game to the next level!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 md:px-20 gap-10 mt-10 items-center">
        {services.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
