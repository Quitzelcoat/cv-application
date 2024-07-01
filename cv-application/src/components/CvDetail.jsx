/* eslint-disable react/prop-types */
import FormField from "./FormField";
import ContactInfo from "./ContactInfo";
import WorkExp from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

const CvDetail = ({ cvData, setCvData }) => {
  return (
    <>
      <ContactInfo cvData={cvData} setCvData={setCvData} />
      <WorkExp cvData={cvData} setCvData={setCvData} />
      <Education cvData={cvData} setCvData={setCvData} />
      <Skills cvData={cvData} setCvData={setCvData} />

      <div className="formBtns">
        <FormField type="submit" value="Submit Form" name="formSubmit" />
        <FormField type="submit" value="Edit Form" name="formEdit" />
      </div>
    </>
  );
};

export default CvDetail;
