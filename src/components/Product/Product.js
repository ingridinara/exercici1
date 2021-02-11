import React from "react";
import {
  StyledProduct,
  StyledProductImg,
  StyledProductInfo,
  StyledProductTitle,
  StyledProductPrice,
  StyledProductButton,
  StyledProductRatting,
} from "./styles.js";

import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStateValue } from "StateProvider.js";

function Product({
  title,
  image,
  price,
  rating,
  id,
  productReference,
  productPresentation,
  productDescription,
  productNote,
}) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basked >>>>>", basket);
  const addToBasket = () => {
    // DISPATCH THE ITEM INTO THE DATA LAYER
    dispatch({
      type: "ADD__TO__BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        productReference: productReference,
        productPresentation: productPresentation,
        productDescription: productDescription,
        productNote: productNote,
      },
    });
  };
  return (
    <StyledProduct>
      <StyledProductInfo>
        <StyledProductTitle>
          <strong> {title}</strong>
          <small>
            - {productReference} - {productNote}
          </small>
        </StyledProductTitle>
        <StyledProductPrice>
          <small>
            <strong>£</strong>
          </small>
          {price} <small>/{productPresentation}</small>
        </StyledProductPrice>
      </StyledProductInfo>

      <StyledProductImg src={image} alt="abanico" />

      <StyledProductButton onClick={addToBasket}>
        Add to Basket
      </StyledProductButton>
      <StyledProductRatting>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>
              <FavoriteIcon style={{ color: "red" }} />
            </p>
          ))}
      </StyledProductRatting>
    </StyledProduct>
  );
}

export default Product;
