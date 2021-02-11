import React from "react";

//Styles
import {
  StyledCheckout,
  StyledCheckoutLeft,
  StyledCheckoutAd,
  StyledCheckoutTitle,
  StyledCheckoutBottom,
} from "./styles.js";

//Component
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "components/CheckoutProduct/CheckoutProduct";

//
import { useStateValue } from "StateProvider.js";

//Img
const checkout =
  "https://github.com/ingridinara/pics/blob/main/checkout.jpg?raw=true";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <StyledCheckout>
      <StyledCheckoutLeft>
        <StyledCheckoutAd src={checkout} />
      </StyledCheckoutLeft>

      <StyledCheckoutBottom>
        <StyledCheckoutTitle>Shopping Basket</StyledCheckoutTitle>
        <Subtotal />
      </StyledCheckoutBottom>

      <div>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            productReference={item.productReference}
            productPresentation={item.productPresentation}
            productDescription={item.productDescription}
            productNote={item.productNote}
          />
        ))}
      </div>
    </StyledCheckout>
  );
}

export default Checkout;
