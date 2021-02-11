import React from "react";

//Styles
import { StyledHome, StyledHomeImg, StyledHomeRow } from "./styles.js";

// Components
import Product from "../Product/Product";

//Data
import data from "../data/productdata.js";

//Img
const red = "https://github.com/ingridinara/pics/blob/main/rojo.jpg?raw=true";

function Home() {
  const products = data.map((item) => (
    <Product
      key={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}
      productReference={item.productReference}
      productPresentation={item.productPresentation}
      productDescription={item.productDescription}
      productNote={item.productNote}
    />
  ));

  return (
    <StyledHome>
      <div className="home__container">
        <StyledHomeImg src={red} alt="woman with red lipstick on" />
        <StyledHomeRow>{products}</StyledHomeRow>
      </div>
    </StyledHome>
  );
}

export default Home;
