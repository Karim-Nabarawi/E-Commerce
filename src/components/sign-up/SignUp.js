import React, { useState } from "react";

//Styling and Animation
import "./sign-up.styles.scss";

//components
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [fieldData, setFieldData] = useState({ displayName: "", email: "", password: "", confirmPassword: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFieldData({ ...fieldData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={fieldData.displayName}
          onChange={handleChange}
          label="Display Name"
        />
      </form>
    </div>
  );
};
export default SignUp;
