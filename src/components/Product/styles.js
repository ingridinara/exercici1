import styled from "styled-components";
// product

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
  padding-bottom: 20px;
  width: 30%;
  max-height: 400px;
  min-width: 100px;
  background-color: rgb(234, 237, 237);
  z-index: 1;
  margin-top: 3rem;
  margin-left: 1rem;
  color: white;
`;

export const StyledProductImg = styled.img`
  max-height: 10rem;
  width: 85%;
  object-fit: contain;
  margin-bottom: 0px;
  position: relative;
`;

export const StyledProductInfo = styled.div`
  height: 4rem;
  padding-top: 10px;
  width: 10rem;
  background-color: white;
`;

export const StyledProductTitle = styled.div`
  color: black;
  text-align: center;
  padding-bottom: 5px;
`;

export const StyledProductPrice = styled.div`
  color: black;
  text-align: center;
  font-size: 14px;
  padding-bottom: 2px;
`;

export const StyledProductButton = styled.button`
  background: black;
  border: 1px dotted;
  border-color: white;
  padding: 3px 10px;
  color: white;
  z-index: -1;
  width: 10rem;
  margin-bottom: 0px;
`;

export const StyledProductRatting = styled.div`
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
