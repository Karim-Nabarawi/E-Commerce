import React, { useState } from "react";
import { useDispatch } from "react-redux";

//redux
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

//Styling and Animation
import "./signIn.styles.scss";

//component
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";

const SignIn = () => {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });
  const { email, password } = userCredentials;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart(userCredentials));
    setUserCredentials({ email: "", password: "" });
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   setUserCredentials({ email: "", password: "" });
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
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
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          id="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
