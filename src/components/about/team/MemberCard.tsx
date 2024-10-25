type memberCardProps = {
  image: string;
  name: string;
  position: string;
  id: number;
};
export default function MemberCard({
  image,
  name,
  position,
  id,
}: memberCardProps) {
  return (
    <div
      data-aos={
        id == 1 || id == 2 || id == 5 || id == 6 ? "fade-right" : "fade-left"
      }
      data-aos-delay={
        id == 1 || id == 4 || id == 5 || id == 8 ? "300" : "0"
      }
      className="rounded-2xl group overflow-hidden relative"
    >
      <img
      loading="lazy"
        className="group-hover:scale-105 transition-all min-w-full"
        src={image}
        alt="team member image"
      />
      <div className="absolute bottom-0 left-0 w-full h-24 p-2">
        <div className="w-full h-full bg-black/70 backdrop-blur-sm rounded-2xl text-center flex flex-col items-center justify-center text-lighttext">
          <p className="text-xl font-bold transition-all group-hover:text-c3 select-none">
            {name}
          </p>
          <p className="opacity-70 select-none">{position}</p>
        </div>
      </div>
    </div>
  );
}
