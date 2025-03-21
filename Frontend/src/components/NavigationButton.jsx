const NavigationButton = ({
    children,
    variant = "default",
    onClick,
    className = "",
  }) => {
    const baseClasses = "flex gap-2 px-4 py-2.5 text-center rounded-md";
    const variantClasses = {
      default: "bg-neutral-800 text-white",
      primary: "bg-indigo-700 text-white",
    };
  
    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default NavigationButton;