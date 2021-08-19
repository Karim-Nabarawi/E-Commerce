import React, { useState } from "react";

//Styling and Animation
import "./signIn.styles.scss";

//compounent
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          id="email"
          name="email"
          label="Email"
          value={formData.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          id="password"
          name="password"
          label="Password"
          value={formData.password}
          handleChange={handleChange}
          required
        />

        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
};
export default SignIn;
