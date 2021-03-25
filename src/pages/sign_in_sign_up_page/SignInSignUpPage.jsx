import React from "react";
import "./SignInSignUpPage.scss";
import SignIn from "../../components/forms/sign_in/SignIn";
import SignUp from "../../components/forms/sign_up/SignUp";

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
