"use client";

const SimilarMangaCard = ({ title, rating, imageUrl }) => {
  return (
    <article className="flex gap-4 p-4 rounded-lg bg-neutral-900">
      <img
        src={imageUrl}
        alt={title}
        className="w-[80px] h-[120px] rounded-[4px]"
      />
      <div>
        <h3 className="mb-1 text-base font-medium text-white">{title}</h3>
        <div className="text-sm text-yellow-400">{rating} ★</div>
      </div>
    </article>
  );
};

export default SimilarMangaCard;