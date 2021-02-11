import React, { useState } from "react";

//Styles
import {
  StyledLogin,
  StyledLoginImage,
  StyledLoginContainer,
  StyledLoginTitle,
  StyledLoginAgreementText,
  StyledSignUpButton,
} from "./styles.js";

//
import { Link } from "react-router-dom";

//Data
import USERS from "../data/userData";

// Components
import InputLogin from "../InputLogin/InputLogin";
import LabelLogin from "../LabelLogin/LabelLogin";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
//Img
const logo = "https://github.com/ingridinara/pics/blob/main/logo.jpg?raw=true";
//
const authenticateUser = (email, password) => {
  let authenticated = false;
  for (let i = 0; i < USERS.length; i++) {
    const user = USERS[i];
    if (user.email === email && user.password === password) {
      authenticated = true;
      alert("AUTENTICACION CONCLUIDA");
      localStorage.setItem("TOKEN", "MMGBLOGSHOP");
    }
  }
  if (authenticated) {
    console.log("HEMOS ENCONTRADO AL USUARIO");
  } else {
    console.error("NO EXISTE, NO HEMOS ENCONTRADO AL USUARIO");
    alert("NO EXISTE, NO HEMOS ENCONTRADO AL USUARIO");
  }
};

function Login() {
  //input
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  //
  const validateEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  };
  //
  const validatePassword = (password) => {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(password) && password.length > 3;
  };
  //
  const handleChange = (e) => {
    if (e.target.name === "userEmail") {
      setUserEmail(e.target.value);
      const val = e.target.value;
      const isEmail = validateEmail(val);
      //
      console.log(isEmail);
      setIsEmailError(!isEmail);
    } else if (e.target.name === "passwordInput") {
      setPasswordInput(e.target.value);
      const password = e.target.value;
      const isPassword = validatePassword(password);
      setIsPasswordError(!isPassword);
      //
      console.log(isPassword);
    }
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      //
      authenticateUser(userEmail, passwordInput);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledLogin>
      <Link to="/">
        <StyledLoginImage src={logo} alt="companyLogo" />
      </Link>
      <StyledLoginContainer>
        <StyledLoginTitle>Sign In</StyledLoginTitle>

        <form onSubmit={(e) => handleSubmit(e)}>
          <LabelLogin name="Email" labelText="Email"></LabelLogin>
          <InputLogin
            type="email"
            name="userEmail"
            value={userEmail}
            onChange={handleChange}
            error={isEmailError}
            errorText="<p>Introduce una dirección de correo electrónico válido.</p>"
          />
          <LabelLogin name="Password" labelText="PASSWORD"></LabelLogin>
          <InputLogin
            type="password"
            name="passwordInput"
            value={passwordInput}
            onChange={handleChange}
            error={isPasswordError}
            errorText="<p>La contraseña debe tener al menos 4 caracteres e incluir  </p>
            <p> al menos una letra y un número.</p>"
          />
          <ButtonLogin type="submit" text="Sign In"></ButtonLogin>
        </form>
        <StyledLoginAgreementText>
          By signing-in you agree to the Company 's Conditions of Use & Sale's
          policy.
        </StyledLoginAgreementText>
        <StyledSignUpButton>Create your Account</StyledSignUpButton>
      </StyledLoginContainer>
    </StyledLogin>
  );
}

export default Login;
