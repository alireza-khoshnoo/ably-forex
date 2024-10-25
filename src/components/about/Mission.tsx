import { GoGoal, GoTelescope } from "react-icons/go";
import ServicesCard from "../home/ourServices/ServicesCard";
import missionImage from '../../assets/images/mission.webp'
import visionImage from '../../assets/images/vision.webp'

export default function Mission() {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold">
        Our <span className="glow">Mission</span> and{" "}
        <span className="glow">Vision</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7 my-7">
        <div className="grid gap-7 col-span-2 md:grid-cols-2">
          <div
            data-aos="fade-up"
            style={{ backgroundImage: `url(${missionImage})` }}
            className="bg-mission bg-glass h-full rounded-xl"
          ></div>
          <ServicesCard
            dataAos="fade-up"
            dataAosDelay="150"
            noClamp
            icon={<GoGoal />}
            title="our mission"
            summary="Empowering traders with innovative and reliable trading bots using cutting-edge MQL programming, simplifying strategies, and optimizing performance to help clients achieve financial success."
          />
          <ServicesCard
            dataAos="fade-up"
            noClamp
            icon={<GoTelescope />}
            title="our vision"
            summary="To revolutionize the trading industry, leading with intelligent trading solutions that enhance decision-making and profitability for all traders, regardless of experience."
          />
          <div
            data-aos="fade-up"
             data-aos-delay="150"
             style={{ backgroundImage: `url(${visionImage})` }}
            className="bg-vision bg-glass h-full rounded-xl"
          ></div>
        </div>
        {/* right panel */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-glass p-7 rounded-xl h-full w-[110%] md:w-full flex flex-col items-center border"
        >
          <div className="rounded-full border w-min p-4 text-4xl mb-7 text-cyan">
            <GoTelescope />
          </div>
          <div className="uppercase font-bold text-xl mb-5">
            Our Core Values
          </div>
          <p className="text-lg text-center">
            At <span className="font-bold glow">ABLY Forex</span>, our values
            are the compass that guides our journey in developing top-tier
            trading bots using MQL programming. They reflect our commitment to
            excellence, innovation, and customer satisfaction.
          </p>
          <ul className="text-xl flex flex-col gap-4 mt-7 list-disc text-start self-start ml-7">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Client-Centricity</li>
            <li>Collaboration</li>
            <li>Transparency</li>
            <li>Accountability</li>
            <li>Diversity</li>
          </ul>
        </div>
        {/* right panel */}
      </div>
    </div>
  );
}
