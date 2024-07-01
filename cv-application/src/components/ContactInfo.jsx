/* eslint-disable react/prop-types */
import FormField from "./FormField";

const ContactInfo = ({ cvData, setCvData }) => {
  const handleChange = (e) => {
    setCvData({ ...cvData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactInfo">
      <div className="contactHeading">
        <h2>Contact Information</h2>
      </div>
      <form>
        <FormField
          label="First Name"
          type="text"
          name="firstName"
          value={cvData.firstName}
          onChange={handleChange}
        />
        <FormField
          label="Last Name"
          type="text"
          name="lastName"
          value={cvData.lastName}
          onChange={handleChange}
        />
        <FormField
          label="Phone Number"
          type="number"
          name="phoneNumber"
          value={cvData.phoneNumber}
          onChange={handleChange}
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          value={cvData.email}
          onChange={handleChange}
        />
        <FormField
          label="Date Of Birth"
          type="date"
          name="dateOfBirth"
          value={cvData.dateOfBirth}
          onChange={handleChange}
        />
      </form>

      <div className="profSummary">
        <div className="profHeading">
          <h2>Professional Summary</h2>
        </div>
        <form>
          <FormField
            label="Summary"
            type="text"
            name="summary"
            value={cvData.summary}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;
