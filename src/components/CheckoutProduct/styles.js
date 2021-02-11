import styled from "styled-components";
//checkout product

export const StyledCheckoutProduct = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledCheckoutProductLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding-bottom: 20px;
  width: 50%;
  min-height: 400px;
  min-width: 100px;
  background-color: rgb(234, 237, 237);
  z-index: 1;
  margin-top: 10px;
  color: white;
`;

export const StyledCheckoutProductRight = styled.div`
  background-color: rgb(234, 237, 237);
  margin-bottom: 10px;
  padding-bottom: 20px;
  min-height: 400px;
  width: 50%;
  min-height: 400px;
  min-width: 100px;
  margin-top: 10px;
`;

export const StyledCheckoutProductRightTextArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 300px;
  width: 300px;
  margin: 120px 0px 50px 0px;
  color: black;
  padding: 0px 5px 0px 10px;
`;
export const StyledCheckoutProductImage = styled.img`
  max-height: 10rem;
  width: 77%;
  object-fit: contain;
  margin-bottom: 0px;
  position: relative;
`;

export const StyledCheckoutProductInfo = styled.div`
  height: 3rem;
  padding-top: 15px;
  width: 10rem;
  background-color: white;
`;

export const StyledCheckoutProductTitle = styled.div`
  color: black;
  text-align: center;
  padding-bottom: 5px;
`;

export const StyledCheckoutProductPrice = styled.div`
  color: black;
  text-align: center;
  font-size: 14px;
  padding-bottom: 2px;
`;

export const StyledCheckoutProductRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(234, 237, 237);
  margin-bottom: 0px;
  width: 10rem;
  height: 3rem;
  z-index: 1;
  border-bottom: 1px solid black;
`;

export const StyledCheckoutButton = styled.button`
  background: black;
  border: 1px dotted;
  border-color: white;
  padding: 3px 10px;
  color: white;
  z-index: -1;
  width: 10rem;
  margin-bottom: 0px;
`;
