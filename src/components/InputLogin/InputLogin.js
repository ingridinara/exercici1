import React from "react";

//Styles
import { StyledLoginInput, StyledLoginSpan } from "./styles.js";

function InputLogin({ type, name, value, onChange, error, errorText }) {
  return (
    <>
      <StyledLoginInput
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />

      {error ? (
        <StyledLoginSpan
          dangerouslySetInnerHTML={{ __html: errorText }}
        ></StyledLoginSpan>
      ) : null}
    </>
  );
}

export default InputLogin;
