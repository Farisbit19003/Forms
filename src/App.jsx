import React, { useState } from "react";
import Personal from "././components/Personal";
import Educational from "././components/Educational";
import Button from "./components/Button";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
  });
  const [educationalForms, setEducationalForms] = useState([
    {
      educationalLevel: "",
      passingYear: "",
      totalMarks: "",
      marksObtained: "",
      institute: "",
    },
  ]);
  const [personalErrors, setPersonalErrors] = useState({});
  const [educationalErrors, setEducationalErrors] = useState([]);

  const handleSubmit = () => {
    const personalErrors = {};
    const educationalErrors = [];

    // Personal Info Validation
    if (personalInfo.firstName.trim() === "") {
      personalErrors.firstName = "First Name is required.";
    }
    if (personalInfo.lastName.trim() === "") {
      personalErrors.lastName = "Last Name is required.";
    }
    if (personalInfo.email.trim() === "") {
      personalErrors.email = "Email address is required.";
    }
    if (personalInfo.phoneNo.trim() === "") {
      personalErrors.phoneNo = "Phone number is required.";
    }

    // Educational Forms Validation
    const updatedEducationalErrors = educationalForms.map((form, index) => {
      const errors = [];

      if (form.educationalLevel.trim() === "") {
        errors.educationalLevel = "Educational Level is required.";
      }
      if (form.institute.trim() === "") {
        errors.institute = "Institute is required.";
      }
      if (form.totalMarks === "") {
        errors.totalMarks = "Total Marks are required.";
      } else if (isNaN(form.totalMarks) || form.totalMarks < 0) {
        errors.totalMarks = "Invalid Total Marks.";
      }
      if (form.marksObtained === "") {
        errors.marksObtained = "Marks Obtained are required.";
      } else if (isNaN(form.marksObtained) || form.marksObtained < 0) {
        errors.marksObtained = "Invalid Marks Obtained.";
      }
      if (form.passingYear.trim() === "") {
        errors.passingYear = "Passing Year is required.";
      }
      if (
        form.totalMarks !== "" &&
        form.marksObtained !== "" &&
        Number(form.totalMarks) < Number(form.marksObtained)
      ) {
        errors.totalMarks =
          "Total Marks must be greater than or equal to Marks Obtained.";
      }

      console.log(errors);
      return errors;
    });

    setPersonalErrors(personalErrors);
    setEducationalErrors(updatedEducationalErrors);

    // If there are no errors, proceed with form submission
    if (
      Object.keys(personalErrors).length === 0 &&
      updatedEducationalErrors.every(
        (errors) => Object.keys(errors).length === 0
      )
    ) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <>
      <Personal
        setPersonalInfo={setPersonalInfo}
        personalInfo={personalInfo}
        errors={personalErrors}
        setErrors={setPersonalErrors}
      />
      <Educational
        educationalForms={educationalForms}
        setEducationalForms={setEducationalForms}
        errors={educationalErrors}
        setErrors={setEducationalErrors}
      />

      <Button handleSubmit={handleSubmit} />
    </>
  );
};

export default App;
