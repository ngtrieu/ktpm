import React from "react";

const TextAreaInput = ({
  name,
  value,
  onChange,
  error,
  label,
  placeholder,
}) => {
  return (
    <div className="form-group">
       <label className="block my-2 text-yt-blue">
        {label}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`border rounded-md bg-[#282828] text-sm font-normal text-yt-white p-2  mt-1 w-full h-32 ${
            error ? "border-yt-red" : ""
          }`}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default TextAreaInput;