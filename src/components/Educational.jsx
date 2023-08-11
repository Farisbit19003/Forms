import React from "react";
import { AiOutlinePlusSquare, AiTwotoneDelete } from "react-icons/ai";

const Educational = ({ educationalForms, setEducationalForms, errors, setErrors }) => {
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const updatedForms = [...educationalForms];
    updatedForms[index][name] = value;
    const updatedErrors = [...errors];
    if (updatedErrors[index] && updatedErrors[index][name]) {
      updatedErrors[index][name] = "";
      setErrors(updatedErrors);
    }

    setEducationalForms(updatedForms);
  };
  
  const addForm = () => {
    setEducationalForms((prevForms) => [
      ...prevForms,
      {
        educationalLevel: "",
        passingYear: "",
        totalMarks: "",
        marksObtained: "",
        institute: "",
      },
    ]);
  };

  const deleteForm = (index) => {
    setEducationalForms((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms.splice(index, 1);
      return updatedForms;
    });
  };

  return (
    <>
      <div>
        <h1 className="flex text-[#248f59] justify-center items-center p-3 font-serif md:text-4xl text-2xl">
          Educational Info
        </h1>
        {educationalForms.map((form, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="p-3 w-3/4 md:w-1/2">
              <form className="flex whitespace-nowrap flex-col rounded-md gap-2 justify-between items-start p-2 border-2 border-[#248f59]">
                {/* EDUCATIONAL LEVEL */}
                <div className="flex flex-col w-full gap-2">
                  <label className="font-sans md:text-xl items-center justify-start flex">
                    Educational Level
                  </label>
                  <input
                    type="text"
                    name="educationalLevel"
                    value={form.educationalLevel}
                    onChange={(event) => handleInputChange(event, index)}
                    placeholder="Enter Educational Level"
                    className="outline-none  justify-end border shadow border-[#f2f2f2] text-[#248f59] font-sans md:text-xl p-2 focus:ring-2 focus:ring-[#248f59] rounded-md"
                  />
                  <span className="text-red-500 flex justify-end items-center">
                    {errors[index]?.educationalLevel}
                  </span>
                </div>

                {/* Institute */}
                <div className="flex gap-2 flex-col w-full">
                  <label className="font-sans md:text-xl items-center justify-start flex">
                    Institute
                  </label>
                  <input
                    type="text"
                    name="institute"
                    value={form.institute}
                    onChange={(event) => handleInputChange(event, index)}
                    placeholder="Enter Institute"
                    className="outline-none justify-end border shadow border-[#f2f2f2] text-[#248f59] font-sans md:text-xl p-2 focus:ring-2 focus:ring-[#248f59] rounded-md"
                  />
                  <span className="text-red-500 flex justify-end items-center">
                    {errors[index]?.institute}
                  </span>
                </div>

                {/* Total Marks */}
                <div className="flex gap-2 flex-col w-full">
                  <label className="font-sans text-start md:text-xl items-center justify-start flex">
                    Totak marks
                  </label>
                  <input
                    type="number"
                    name="totalMarks"
                    value={form.totalMarks}
                    onChange={(event) => handleInputChange(event, index)}
                    placeholder="Total Marks"
                    className="outline-none border shadow border-[#f2f2f2] text-[#248f59] font-sans md:text-xl p-2 focus:ring-2 focus:ring-[#248f59] rounded-md"
                  />
                  <span className="text-red-500 flex justify-end items-center">
                    {errors[index]?.totalMarks}
                  </span>
                </div>

                {/* Obtained Marks */}
                <div className="flex gap-2 flex-col w-full">
                  <label className="font-sans text-start md:text-xl items-center justify-start flex">
                    Marks Obtained
                  </label>
                  <input
                    type="number"
                    name="marksObtained"
                    value={form.marksObtained}
                    onChange={(event) => handleInputChange(event, index)}
                    placeholder="Marks Obtained"
                    className="outline-none border shadow border-[#f2f2f2] text-[#248f59] font-sans md:text-xl p-2 focus:ring-2 focus:ring-[#248f59] rounded-md"
                  />
                  <span className="text-red-500 flex justify-end items-center">
                    {errors[index]?.marksObtained}
                  </span>
                </div>

                {/* Passing Year */}
                <div className="flex gap-2 flex-col w-full">
                  <label className="font-sans text-start md:text-xl items-center justify-start flex">
                    Passing Year
                  </label>
                  <select
                    name="passingYear"
                    value={form.passingYear}
                    onChange={(event) => handleInputChange(event, index)}
                    className="outline-none border shadow border-[#f2f2f2] text-[#248f59] font-sans md:text-xl p-2 focus:ring-2 focus:ring-[#248f59] rounded-md"
                  >
                    <option value="">Select Year</option>
                    {Array.from(
                      { length: new Date().getFullYear() - 1980 + 1 },
                      (_, index) => (
                        <option key={index} value={1980 + index}>
                          {1980 + index}
                        </option>
                      )
                    )}
                  </select>
                  <span className="text-red-500 flex justify-end items-center">
                    {errors[index]?.passingYear}
                  </span>
                </div>
              </form>
              <div className="border-2 my-2 mx-auto rounded border-[#248f59] border-dashed w-full"></div>
              {/* Delete */}
              <button
                onClick={() => deleteForm(index)}
                className="text-red-600 flex gap-2 transition-transform hover:scale-95  items-center justify-center"
              >
                <AiTwotoneDelete size={20} />
                Delete
              </button>
            </div>
          </div>
        ))}
        {/* EDUCATIONAL LEVEL */}
        <div className="flex justify-end">
          <button
            onClick={addForm}
            className="text-[#248f59] mr-7 gap-2 transition-transform hover:scale-95 flex items-center justify-center"
          >
            <AiOutlinePlusSquare size={20} />
            Add Educational Info
          </button>
        </div>
      </div>
    </>
  );
};

export default Educational;
