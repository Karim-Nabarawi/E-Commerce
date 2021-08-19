import React from "react";

//Styling and Animation
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherData }) => {
  return (
    <div className="group">
      <input {...otherData} className="form-input" onChange={handleChange} />
      {label ? <label className={`${otherData.value.lenght ? "shrink" : ""} form-input-label`}>{label}</label> : null}
    </div>
  );
};
export default FormInput;
