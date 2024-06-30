import FormField from "./FormField";
import ContactInfo from "./ContactInfo";
import ProfessionalSummary from "./ProfessionalSummary";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

const CvDetail = () => {
  return (
    <>
      <ContactInfo />
      <ProfessionalSummary />
      <WorkExperience />
      <Education />
      <Skills />

      <div className="formBtns">
        <FormField type="submit" value="Submit Form" name="formSubmit" />
        <FormField type="submit" value="Edit Form" name="formEdit" />
      </div>
    </>
  );
};

export default CvDetail;
