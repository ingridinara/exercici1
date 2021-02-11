import styled from "styled-components";
//login page

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  margin: 10px 50px 250px 50px;
`;

export const StyledLoginImage = styled.img`
  margin-top: 0px;
  margin-bottom: 0px;
  width: 100px;
  object-fit: contain;
  margin-right: auto;
  margin-left: auto;
  z-index: -1;
`;

export const StyledLoginContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  background-color: rgb(234, 237, 237);
  padding: 5px 5px 40px 20px;
  z-index: 1;
  margin-bottom: 20px;
`;

export const StyledLoginTitle = styled.h1`
  font-weight: 400px;
  margin-bottom: 20px;
  color: black;
`;

export const StyledLoginAgreementText = styled.div`
  margin-top: 15px;
  font-size: 10px;
  width: 90%;
  margin-left: 5px;
  text-align: center;
`;

export const StyledSignUpButton = styled.button`
  background: red;
  border: 1px dotted;
  border-color: black;
  margin-left: 4px;
  color: white;
  z-index: 1;
  width: 90%;
  margin-bottom: 0px;
  margin-top: 10px;
`;
