const StatsCard = ({ label, value }) => {
    return (
      <div className="flex flex-col p-4 rounded-lg bg-neutral-900 flex-1 min-w-[200px]">
        <div className="text-sm leading-5 text-stone-500">{label}</div>
        <div className="mt-1.5 text-base leading-6 text-white">{value}</div>
      </div>
    );
  };
  
  export default StatsCard;