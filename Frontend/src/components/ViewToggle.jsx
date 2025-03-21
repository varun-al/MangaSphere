const ViewToggle = () => {
    return (
      <section>
        <h3 className="mb-4 text-base text-white">View</h3>
        <div className="flex gap-2">
          <button className="flex-1 h-10 text-base rounded cursor-pointer bg-neutral-800 text-stone-500">
            Grid
          </button>
          <button className="flex-1 h-10 text-base rounded cursor-pointer bg-neutral-800 text-stone-500">
            List
          </button>
        </div>
      </section>
    );
  };
  
  export default ViewToggle;