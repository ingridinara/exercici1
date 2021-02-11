import React from "react";

//Styles
import { StyledLoginLabel } from "./styles.js";

function LabelLogin({ name, labelText }) {
  return (
    <>
      <StyledLoginLabel htmlFor={name}>{labelText}</StyledLoginLabel>
    </>
  );
}

export default LabelLogin;
