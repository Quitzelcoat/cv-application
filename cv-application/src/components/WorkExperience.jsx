import FormField from "./FormField";

const WorkExperience = () => {
  return (
    <div className="workExp">
      <div className="workExpHeading">
        <h2>Work Experience</h2>
      </div>
      <form>
        <FormField label="Title" type="text" name="title" />
        <FormField label="Name" type="text" name="name" />
        <FormField label="Location" type="text" name="location" />
        <FormField label="Date Of Employment" type="date" name="doe" />
        <FormField label="Job Description" type="text" name="jobDes" />
      </form>
    </div>
  );
};

export default WorkExperience;
