import React from "react";

const Personal = ({ personalInfo, setPersonalInfo, errors }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  return (
    <>
      <div>
        <h1 className="flex text-[#248f59] justify-center items-center p-3 font-serif md:text-4xl text-2xl">
          Personal Info
        </h1>
        <div className="p-5 flex flex-col justify-center items-center">
          <form className="flex md:w-1/2 w-3/4 flex-col whitespace-nowrap rounded-md gap-2 justify-center items-center p-2 border-2 border-[#248f59]">
            {/* FIRST NAME */}
            <div className="flex flex-col w-full gap-2">
              <label className="font-sans md:text-xl items-center justify-start flex ">
                First Name
              </label>

              <input
                name="firstName"
                value={personalInfo.firstName}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter First Name"
                className="outline-none border shadow  border-[#f2f2f2] text-[#248f59] font-sans md:text-xl p-2 focus:ring-2 focus:ring-[#248f59] rounded-md"
              />
              <span className="text-red-500 flex justify-end items-center font-sans">
                {errors.firstName}
              </span>
            </div>
            {/* Last NAME */}
            <div className="flex flex-col w-full gap-2">
              <label className="font-sans md:text-xl items-center justify-start flex">
                Last Name
              </label>

              <input
                name="lastName"
                value={personalInfo.lastName}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter Last Name"
                className="outline-none border shadow border-[#f2f2f2] text-[#248f59] font-sans md:text-xl p-2 focus:ring-2 focus:ring-[#248f59] rounded-md"
              />
              <span className="text-red-500 flex justify-end items-center">
                {errors.lastName}
              </span>
            </div>
            {/* PHONE NO */}
            <div className="flex flex-col w-full gap-2">
              <label className="font-sans md:text-xl items-center justify-start flex">
                Phone Number
              </label>

              <input
                name="phoneNo"
                value={personalInfo.phoneNo}
                onChange={handleInputChange}
                type="tel"
                placeholder="Enter Phone Number"
                className="outline-none border shadow border-[#f2f2f2] text-[#248f59] font-sans md:text-xl p-2 focus:ring-2 focus:ring-[#248f59] rounded-md"
              />
              <span className="text-red-500 flex justify-end items-center">
                {errors.phoneNo}
              </span>
            </div>
            {/* EMAIL */}
            <div className="flex flex-col w-full gap-2">
              <label className="font-sans md:text-xl items-center justify-start flex">
                Email
              </label>

              <input
                name="email"
                value={personalInfo.email}
                onChange={handleInputChange}
                type="email"
                placeholder="Enter email address"
                className="outline-none border shadow border-[#f2f2f2] text-[#248f59] font-sans md:text-xl p-2 focus:ring-2 focus:ring-[#248f59] rounded-md"
              />
              <span className="text-red-500 flex justify-end items-center">
                {errors.email}
              </span>
            </div>
          </form>
          <div className="border-2 my-2 mx-auto rounded border-[#248f59] border-dashed w-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default Personal;
