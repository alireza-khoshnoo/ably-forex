export default function TimelineCard({
  title,
  text,
  id,
}: {
  title: string;
  text: string;
  id: number;
}) {
  return (
    <div
      data-aos={id % 2 == 0 ? "fade-right" : "fade-left"}
      className=" bg-glass px-7 py-5 rounded-3xl z-30"
    >
      <div className="flex items-center justify-between text-2xl font-bold mb-5">
        <span>{title}</span>
        <span className="dark:text-c1 glow">P{id}</span>
      </div>
      <p>{text}</p>
    </div>
  );
}
