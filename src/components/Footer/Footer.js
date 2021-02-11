import React from "react";
//Style
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <>
      <StyledFooter>
        <div>
          <p>
            <strong>Thank You</strong>
          </p>
          <ul>
            <li>&copy; muchomasguapa.com</li>
            <li>todos los derechos reservados</li>
            <li>Aviso Legal &ndash; Privacidad &ndash; Cookies</li>
          </ul>
        </div>
      </StyledFooter>
    </>
  );
}

export default Footer;
