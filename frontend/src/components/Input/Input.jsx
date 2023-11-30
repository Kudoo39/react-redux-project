import React from "react";
import "../Edit/Edit.css";

const Input = ({ inputType, className, label, data, setData }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      {inputType === "textarea" ? (
        <textarea
          type="text"
          className={className}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
