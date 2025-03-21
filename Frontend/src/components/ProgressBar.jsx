const ProgressBar = ({ progress }) => {
    return (
      <div className="mt-2 w-full h-1 rounded-full bg-neutral-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };
  
  export default ProgressBar;