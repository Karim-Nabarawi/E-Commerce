import React, { useState } from "react";

//Styling and Animation
import "./sign-up.styles.scss";

//components
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [fieldData, setFieldData] = useState({ displayName: "", email: "", password: "", confirmPassword: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = fieldData;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password); // using firebase auth to create new account and get it's data back (same as google one) (to get UID)
      await createUserProfileDocument(user, { displayName });
      setFieldData({ displayName: "", email: "", password: "", confirmPassword: "" }); // clear form
    } catch (error) {
      console.error(error.message);
    }
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
          handleChange={handleChange}
          label="Display Name"
        />
        <FormInput type="email" name="email" value={fieldData.email} handleChange={handleChange} label="Email" />
        <FormInput
          type="password"
          name="password"
          value={fieldData.password}
          handleChange={handleChange}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={fieldData.confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
export default SignUp;
