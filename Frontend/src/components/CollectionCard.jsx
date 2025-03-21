const CollectionCard = ({ title, description, imageUrl }) => {
    return (
      <article className="overflow-hidden relative rounded-lg">
        <div
          className="bg-cover h-[200px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
          role="img"
          aria-label={`Cover image for ${title}`}
        />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="mb-2 text-2xl font-bold">{title}</h3>
          <p className="text-sm text-stone-300">{description}</p>
        </div>
      </article>
    );
  };
  
  export default CollectionCard;