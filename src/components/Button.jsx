import React from "react";

const Button = ({ handleSubmit }) => {
  return (
    <>
      <div className="flex justify-end items-center mr-7">
        <button
          onClick={handleSubmit}
          className="text-xl border-[#248f59] border-2 text-[#248f59]  rounded-md shadow-xl my-2  bg-[#f2f2f2] p-3 items-center font-semibold transition-transform hover:scale-95 font-serif"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Button;
