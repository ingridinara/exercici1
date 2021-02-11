/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";



//Styles
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderSearch,
  StyledSearchInput,
  StyledHeaderNav,
  StyledHeaderOption,
  StyledHeaderOptionLineOne,
  StyledHeaderOptionLineTwo,
  StyledHeaderOptionBasket,
  StyledHeaderOptionBasketCount,
} from "./styles.js";

//Icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

//
import { Link } from "react-router-dom";


import { useStateValue } from "StateProvider.js";

//Img
const logo = "https://github.com/ingridinara/pics/blob/main/logo.jpg?raw=true";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <StyledHeader>
      <Link to="/">
        <StyledHeaderLogo src={logo} alt="companyLogo" />
      </Link>
      <StyledHeaderSearch>
        <StyledSearchInput type="text" />
        <SearchIcon
          style={{
            backgroundColor: "red",
            padding: "5px",
            height: "22px !important",
          }}
        />
      </StyledHeaderSearch>
      <StyledHeaderNav>
        <Link to="/login">
          <StyledHeaderOption>
            <StyledHeaderOptionLineOne>Welcome</StyledHeaderOptionLineOne>
            <StyledHeaderOptionLineTwo>Sign In</StyledHeaderOptionLineTwo>
          </StyledHeaderOption>
        </Link>
        <Link to="/blog">
          <StyledHeaderOption>
            <StyledHeaderOptionLineOne>Our Community</StyledHeaderOptionLineOne>
            <StyledHeaderOptionLineTwo>Blog</StyledHeaderOptionLineTwo>
          </StyledHeaderOption>
        </Link>
        <Link to="/checkout">
          <StyledHeaderOptionBasket>
            <ShoppingBasketIcon />
            <StyledHeaderOptionBasketCount>
              {basket.length}
            </StyledHeaderOptionBasketCount>
          </StyledHeaderOptionBasket>
        </Link>
      </StyledHeaderNav>
    </StyledHeader>
  );
}

export default Header;
