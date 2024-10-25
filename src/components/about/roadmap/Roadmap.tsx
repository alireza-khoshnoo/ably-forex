import React from "react";
import TimelineCard from "./TimelineCard";

import { timelineKeys } from "../../../data/data";

export default function Roadmap() {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold">
        Our <span className="glow">Journey</span> Timeline
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-10 relative">
        <div className="bottom-[20%] right-0 box-glow hue-rotate-60"></div>
        <div className="top-[20%] -left-20 box-glow"></div>
        {timelineKeys.map((item) => (
          <React.Fragment key={item.id}>
            <div className="hidden lg:block"></div>
            <TimelineCard {...item} />
            <div className="hidden lg:block"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
