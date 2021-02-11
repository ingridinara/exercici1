import React from "react";

// Style
import {
  StyledCheckoutProduct,
  StyledCheckoutProductLeft,
  StyledCheckoutProductImage,
  StyledCheckoutProductInfo,
  StyledCheckoutProductTitle,
  StyledCheckoutProductPrice,
  StyledCheckoutProductRating,
  StyledCheckoutButton,
  StyledCheckoutProductRight,
  StyledCheckoutProductRightTextArea,
} from "./styles";

//Icon
import FavoriteIcon from "@material-ui/icons/Favorite";

//
import { useStateValue } from "StateProvider.js";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  productReference,
  productPresentation,
  productDescription,
  productNote,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE__FROM__BASKET",
      item: { id: id },
    });
  };
  return (
    <StyledCheckoutProduct>
      <StyledCheckoutProductLeft>
        <StyledCheckoutProductImage src={image} />
        <StyledCheckoutProductInfo>
          <StyledCheckoutProductTitle>
            <strong> {title}</strong>
            <small>
              - {productReference}- {productNote}
            </small>
          </StyledCheckoutProductTitle>
          <StyledCheckoutProductPrice>
            <small>
              <strong>£</strong>
            </small>
            {price} <small>/{productPresentation}</small>
          </StyledCheckoutProductPrice>
          <StyledCheckoutProductRating>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>
                  <FavoriteIcon style={{ color: "red" }} />
                </p>
              ))}
          </StyledCheckoutProductRating>
          <StyledCheckoutButton onClick={removeFromBasket}>
            Remove from Basket
          </StyledCheckoutButton>
        </StyledCheckoutProductInfo>
      </StyledCheckoutProductLeft>
      <StyledCheckoutProductRight>
        <StyledCheckoutProductRightTextArea>
          {productDescription}
        </StyledCheckoutProductRightTextArea>
      </StyledCheckoutProductRight>
    </StyledCheckoutProduct>
  );
}

export default CheckoutProduct;
