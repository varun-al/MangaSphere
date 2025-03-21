const CollectionHeader = ({ title, count }) => {
    return (
      <header className="flex justify-between items-center mt-12">
        <h3 className="text-lg leading-7 text-white">{title}</h3>
        <div className="text-sm leading-5 text-stone-500">{count} items</div>
      </header>
    );
  };
  
  export default CollectionHeader;