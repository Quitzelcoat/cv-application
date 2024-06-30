import FormField from "./FormField";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <div className="contactHeading">
        <h2>Contact Information</h2>
      </div>
      <form>
        <FormField label="First Name" type="text" name="firstName" />
        <FormField label="Last Name" type="text" name="lastName" />
        <FormField label="Phone Number" type="number" name="number" />
        <FormField label="Email" type="email" name="email" />
        <FormField label="Date Of Birth" type="date" name="date" />
      </form>
    </div>
  );
};

export default ContactInfo;
