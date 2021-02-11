import React from "react";

//Styles
import { StyledLoginSigninButton } from "./styles.js";

function ButtonLogin({ type, text }) {
  return (
    <>
      <StyledLoginSigninButton type={type}>{text}</StyledLoginSigninButton>
    </>
  );
}

export default ButtonLogin;
