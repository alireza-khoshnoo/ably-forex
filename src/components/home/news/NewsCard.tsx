import { newsCardProps } from "../../../../types";
export default function NewsCard({
  tag,
  title,
  summary,
  publishDate,
}: newsCardProps) {
  return (
    <div className="group  bg-glass rounded-2xl border cursor-pointer m-3 mb-10">
      <div className="px-6 py-4">
        <span className="text-cyan my-2 bg-cyan bg-opacity-20 px-2 pt-0.5 pb-1 rounded-lg">
          {tag}
        </span>
        <div className="font-bold text-xl mb-2 mt-3 group-hover:text-cyan">
          {title}
        </div>
        <p className="dark:text-white/60 line-clamp-2">{summary}</p>
      </div>
      <p className="px-6 pb-5 text-sm opacity-50">{publishDate}</p>
    </div>
  );
}
