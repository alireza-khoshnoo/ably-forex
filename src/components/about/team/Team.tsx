import MemberCard from "./MemberCard";
import { team } from "../../../data/data";

export default function Team() {
  return (
    <div className="">
      <h3 className="text-3xl font-bold">
        Meet Our <span className="glow">Team</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 my-7">
        {team.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}
