const MangaCard = ({ title, rating, genres, imageUrl }) => {
    return (
      <article className="overflow-hidden rounded-lg">
        <div
          className="bg-cover h-[400px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
          role="img"
          aria-label={`Cover image for ${title}`}
        />
        <div className="p-4 bg-neutral-900">
          <h3 className="mb-2 text-lg font-medium">{title}</h3>
          <div className="flex gap-2 items-center text-sm">
            <span className="text-yellow-400">{rating}</span>
            <div className="flex gap-2">
              {genres.map((genre, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-white bg-opacity-10 rounded-[100px]"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  };
  
  export default MangaCard;