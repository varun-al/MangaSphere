const ChapterCard = ({ title, chapter, timeAgo, imageUrl }) => {
    return (
      <article className="overflow-hidden rounded-lg">
        <div
          className="bg-cover h-[250px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
          role="img"
          aria-label={`Cover image for ${title}`}
        />
        <div className="p-4">
          <h3 className="mb-2 text-base font-medium">{title}</h3>
          <div className="flex justify-between text-sm text-stone-500">
            <span>Ch. {chapter}</span>
            <time>{timeAgo}</time>
          </div>
        </div>
      </article>
    );
  };
  
  export default ChapterCard;