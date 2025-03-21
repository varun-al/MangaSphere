import { Link } from "react-router-dom";

const BrowseMangaCard = ({ title, status, chapters, rating, views, imageUrl }) => {
  return (
    <Link to={`/manga/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <article className="w-[209px]">
        <div
          className="relative bg-center bg-cover rounded-lg h-[314px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="flex absolute inset-x-0 bottom-0 justify-between items-center p-4 rounded-none h-[53px]">
            <div className="text-sm text-yellow-400">{rating} ★</div>
            <div className="text-xs text-stone-500">{views} views</div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-1.5 text-base text-white">{title}</h3>
          <div className="flex gap-2 text-xs text-stone-500">
            <span>{status}</span>
            <span>{chapters} chapters</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BrowseMangaCard;