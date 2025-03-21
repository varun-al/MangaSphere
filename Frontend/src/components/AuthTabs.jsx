import React from "react";

const AuthTabs = ({ isSignIn, onToggle }) => {
  return (
    <nav className="flex gap-[24px] mb-[32px]">
      <button
        onClick={() => onToggle(true)}
        className={`text-[24px] font-[700] ${isSignIn ? "text-white" : "text-stone-500"}`}
      >
        Sign In
      </button>
      <button
        onClick={() => onToggle(false)}
        className={`text-[24px] font-[700] ${!isSignIn ? "text-white" : "text-stone-500"}`}
      >
        Create Account
      </button>
    </nav>
  );
};

export default AuthTabs;