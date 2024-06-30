/* eslint-disable react/prop-types */
const FormField = ({ label, type, name, value }) => {
  return (
    <div>
      <label>
        {label} <input type={type} name={name} value={value} />
      </label>
    </div>
  );
};

export default FormField;
