import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: black;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const StyledHeaderLogo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 4px 20px;
`;

export const StyledHeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
  background-color: white;
`;

export const StyledSearchInput = styled.div`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;

export const StyledHeaderNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledHeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;

export const StyledHeaderOptionLineOne = styled.span`
  font-size: 10px;
`;

export const StyledHeaderOptionLineTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
`;

export const StyledHeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const StyledHeaderOptionBasketCount = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
