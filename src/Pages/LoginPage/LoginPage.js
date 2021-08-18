import React from "react";

import SignIn from "../../components/sign-in/SignIn";

//Styling and Animation
import "./loginPage.styles.scss";

const LoginPage = () => {
  return (
    <div className="Login">
      <SignIn />
    </div>
  );
};
export default LoginPage;
