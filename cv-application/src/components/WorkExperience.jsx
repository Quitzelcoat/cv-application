/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import FormField from "./FormField";

const WorkExp = ({ cvData, setCvData }) => {
  const handleChange = (e, id) => {
    const updateWorkExperience = cvData.workExperience.map((work) =>
      work.id === id ? { ...work, [e.target.name]: e.target.value } : work
    );

    setCvData({ ...cvData, workExperience: updateWorkExperience });
  };

  const addWorkExperience = () => {
    setCvData({
      ...cvData,
      workExperience: [
        ...cvData.workExperience,
        {
          id: uuidv4(),
          title: "",
          name: "",
          location: "",
          date: "",
          description: "",
        },
      ],
    });
  };

  const deleteWrokExp = (id) => {
    const updatedWorkExp = cvData.workExperience.filter(
      (work) => work.id !== id
    );

    setCvData({ ...cvData, workExperience: updatedWorkExp });
  };

  return (
    <div className="workExp">
      <div className="workExpHeading">
        <h2>Work Experience</h2>
      </div>

      {cvData.workExperience.map((work) => (
        <form key={work.id}>
          <FormField
            label="Title"
            type="text"
            name="title"
            value={work.title}
            onChange={(e) => handleChange(e, work.id)}
          />
          <FormField
            label="Name"
            type="text"
            name="name"
            value={work.name}
            onChange={(e) => handleChange(e, work.id)}
          />
          <FormField
            label="Location"
            type="text"
            name="location"
            value={work.location}
            onChange={(e) => handleChange(e, work.id)}
          />
          <FormField
            label="Date Of Employment"
            type="date"
            name="date"
            value={work.date}
            onChange={(e) => handleChange(e, work.id)}
          />
          <FormField
            label="Job Description"
            type="text"
            name="description"
            value={work.description}
            onChange={(e) => handleChange(e, work.id)}
          />

          <button type="button" onClick={() => deleteWrokExp(work.id)}>
            Delete
          </button>
        </form>
      ))}
      <button type="button" onClick={addWorkExperience}>
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExp;
