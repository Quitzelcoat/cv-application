import FormField from "./FormField";

function Skills() {
  return (
    <>
      <div className="skills">
        <h2>Skills</h2>
      </div>

      <form>
        <FormField label="Skill Title" type="text" name="skillTitle" />
        <FormField label="Skill Description" type="text" name="skillText" />
        <FormField label="Start Date" type="date" name="skillStartDate" />
        <FormField label="End Date" type="date" name="skillEndDate" />

        <div>
          <FormField type="submit" value="Cancel" name="skillAdd" />
          <FormField type="submit" value="Add" name="skillCancel" />
        </div>
      </form>

      <div className="eachSkill">
        <p>Title goes here</p>

        <FormField type="submit" value="Delete" name="skillAdd" />
      </div>

      <FormField type="submit" value="s" name="newSkill" />
    </>
  );
}

export default Skills;
