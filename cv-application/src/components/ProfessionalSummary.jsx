import FormField from "./FormField";

const ProfessionalSummary = () => {
  return (
    <div className="profSummary">
      <div className="profHeading">
        <h2>Professional Summary</h2>
      </div>
      <form>
        <FormField label="Summary" type="text" name="summary" />
      </form>
    </div>
  );
};

export default ProfessionalSummary;
