import React from "react";
import CurrencyFormat from "react-currency-format";

//Styles
import {
  StyledSubtotal,
  StyledSubtotalGift,
  StyledSubtotalInput,
  StyledProductButton,
} from "./styles.js";

//
import { useStateValue } from "StateProvider.js";
import { getBasketTotal } from "reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <StyledSubtotal>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              <strong>Subtotal</strong> ({basket.length} items):
              <strong> {value}</strong>
            </p>
            <StyledSubtotalGift>
              <StyledSubtotalInput type="checkbox" />I accept the terms
            </StyledSubtotalGift>
          </>
        )}
        deciamlScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />

      <StyledProductButton> Proceed to checkout</StyledProductButton>
    </StyledSubtotal>
  );
}

export default Subtotal;
