import FormField from "./FormField";

const Education = () => {
  return (
    <div className="Education">
      <div className="profHeading">
        <h2>Education</h2>
      </div>
      <form>
        <FormField label="Degree Obtained" type="text" name="degree" />
        <FormField label="Institute Name" type="text" name="instName" />
        <FormField label="Location" type="text" name="location" />
        <FormField label="Completed Date" type="date" name="complete" />
      </form>
    </div>
  );
};

export default Education;
