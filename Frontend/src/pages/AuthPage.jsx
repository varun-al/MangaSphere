"use client";
import React, { useState } from "react";
import AuthHeader from "../components/AuthHeader";
import AuthTabs from "../components/AuthTabs";
import FormInput from "../components/FormInput";
import AuthFooter from "../components/AuthFooter";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Name validation (for Create Account)
    if (!isSignIn && !formData.name) {
      newErrors.name = "Name is required";
    }

    // Confirm Password validation (for Create Account)
    if (!isSignIn && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isSignIn) {
        console.log("Sign in", { email: formData.email, password: formData.password });
      } else {
        console.log("Create account", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-screen bg-neutral-950 font-[Inter] text-white">
      <section className="w-[400px] max-sm:w-[90%] bg-neutral-900 p-[32px] rounded-[8px] border border-neutral-800">
        <AuthHeader />
        <AuthTabs isSignIn={isSignIn} onToggle={setIsSignIn} />

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[24px]">
            {!isSignIn && (
              <div>
                <FormInput
                  label="Name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange("name")}
                />
                {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
              </div>
            )}
            <div>
              <FormInput
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange("email")}
              />
              {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
            </div>
            <div>
              <FormInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange("password")}
              />
              {errors.password && <p className="text-red-500 text-[12px] mt-1">{errors.password}</p>}
            </div>
            {!isSignIn && (
              <div>
                <FormInput
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-[12px] mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}
            <button
              type="submit"
              className="w-full h-[40px] bg-indigo-700 rounded-[4px] text-[14px] font-[500] mt-[16px]"
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </button>
          </div>
        </form>

        <AuthFooter isSignIn={isSignIn} onToggle={setIsSignIn} />
      </section>
    </main>
  );
};

export default AuthPage;