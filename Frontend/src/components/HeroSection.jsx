const HeroSection = () => {
    return (
      <section
        className="relative flex items-end p-12 bg-cover h-[600px]"
        style={{
          backgroundImage: "url('https://placehold.co/1920x600/808080/808080')",
        }}
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold max-sm:text-3xl">Attack on Titan</h2>
          <p className="text-lg text-stone-300 max-sm:text-base">
            The epic conclusion to the saga
          </p>
          <div className="flex gap-2">
            <button
              className="flex justify-center items-center w-10 h-10 rounded-full bg-black bg-opacity-50"
              aria-label="Play"
            >
              <i className="ti ti-player-play" aria-hidden="true" />
            </button>
            <button
              className="flex justify-center items-center w-10 h-10 rounded-full bg-black bg-opacity-50"
              aria-label="More information"
            >
              <i className="ti ti-info-circle" aria-hidden="true" />
            </button>
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            className="w-3 h-3 rounded-full bg-neutral-500"
            aria-label="Go to slide 1"
          ></button>
          <button
            className="w-3 h-3 rounded-full bg-neutral-700"
            aria-label="Go to slide 2"
          ></button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;