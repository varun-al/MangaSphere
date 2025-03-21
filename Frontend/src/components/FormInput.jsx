import React from "react";

const FormInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className="text-[14px] text-white">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full h-[40px] bg-neutral-950 border border-neutral-800 rounded-[4px] px-[16px] text-[14px] text-white placeholder-stone-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;