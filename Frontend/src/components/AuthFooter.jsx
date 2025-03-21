import React from "react";

const AuthFooter = ({ isSignIn, onToggle }) => {
  return (
    <footer>
      {isSignIn && (
        <div className="mt-[24px] text-center">
          <a href="#" className="text-[14px] text-indigo-700">
            Forgot password?
          </a>
        </div>
      )}
      <div className="mt-[24px] text-center">
        <span className="text-[14px] text-stone-500">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
        </span>
        <span> </span>
        <button
          onClick={() => onToggle(!isSignIn)}
          className="text-[14px] text-indigo-700"
        >
          {isSignIn ? "Create one" : "Sign in"}
        </button>
      </div>
    </footer>
  );
};

export default AuthFooter;