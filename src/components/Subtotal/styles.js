import styled from "styled-components";
//Subtotal

export const StyledSubtotal = styled.div`
  background-color: rgb(234, 237, 237);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 6rem;
  padding: 5px 20px 25px 20px;
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin-top: 20px;
`;

export const StyledSubtotalGift = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledSubtotalInput = styled.input`
  margin-right: 5px;
`;

export const StyledProductButton = styled.button`
  background: red;
  border: 1px dotted;
  border-color: black;
  padding: 3px 10px;
  color: white;
  z-index: 1;
  width: 10rem;
  margin-bottom: 0px;
`;
