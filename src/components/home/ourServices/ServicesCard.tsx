import { ServicesCardProps } from "../../../../types";

export default function ServicesCard({
  title,
  summary,
  icon,
  noClamp,
  dataAos,
  dataAosDelay,
}: ServicesCardProps) {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      className="bg-glass border rounded-xl p-7 flex flex-col items-center"
    >
      <div className="rounded-full border w-min p-4 text-4xl mb-7 text-cyan">
        {icon}
      </div>
      <div className="uppercase font-bold text-xl">{title}</div>
      <p
        className={`text-lg mt-5 text-center ${noClamp ? "" : "line-clamp-3"}`}
      >
        {summary}
      </p>
    </div>
  );
}
