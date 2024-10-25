import { articleCardProps } from "../../../../types";
export default function ArticleCard({
  image,
  tag,
  title,
  summary,
  authorImage,
  authorName,
  publishDate,
}: articleCardProps) {
  return (
    <div className="group  bg-glass rounded-2xl border cursor-pointer m-3 mb-10">
      <div className="image-container m-3 mb-0 rounded-xl overflow-hidden">
        <img
          loading="lazy"
          className=" transition-all group-hover:scale-105"
          src={image}
          alt="Article"
        />
      </div>
      <div className="px-6 py-4">
        <span className="text-cyan my-2 bg-cyan bg-opacity-20 px-2 pt-0.5 pb-1 rounded-lg">
          {tag}
        </span>
        <div className="font-bold text-xl mb-2 mt-3 group-hover:text-cyan">
          {title}
        </div>
        <p className="dark:text-white/60 line-clamp-2">{summary}</p>
      </div>
      <div className="px-6 pb-5 flex items-center">
        <img
          loading="lazy"
          className="w-10 h-10 rounded-full mr-4"
          src={authorImage}
          alt="Author"
        />
        <div className="">
          <p className="text-lg capitalize font-semibold">{authorName}</p>
          <p className="text-sm opacity-50">{publishDate}</p>
        </div>
      </div>
    </div>
  );
}
