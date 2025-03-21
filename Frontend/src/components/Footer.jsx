const Footer = () => {
    return (
      <footer className="px-4 py-12 border-t border-solid border-t-neutral-800">
        <div className="flex justify-between max-sm:flex-col max-sm:gap-8">
          <div className="max-w-[300px]">
            <h2 className="mb-4 text-lg font-bold">MangaSphere</h2>
            <p className="text-sm leading-normal text-stone-500">
              Your ultimate destination for manga reading.
            </p>
          </div>
          <nav className="flex gap-16">
            <div>
              <h3 className="mb-4 text-base font-medium">Browse</h3>
              <ul>
                <li className="mb-2 text-sm text-stone-500">Popular</li>
                <li className="mb-2 text-sm text-stone-500">Latest</li>
                <li className="mb-2 text-sm text-stone-500">Genres</li>
              </ul>
            </div>
            <div>
              <h3 className="pb-4 text-base font-medium">Legal</h3>
            </div>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;