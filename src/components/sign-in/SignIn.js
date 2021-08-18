import React, { useState } from "react";

//Styling and Animation
import "./signIn.styles.scss";

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
        <label htmlFor="email">Email </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="password">Password </label>
        <input type="password" id="password" name="password" value={formData.password} required />

        <input type="submit" value="submit Form" />
      </form>
    </div>
  );
};
export default SignIn;
