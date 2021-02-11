import styled from "styled-components";
//Blog

export const StyledBlogImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledBlogFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledBlogTitle = styled.h1`
  width: 50%;
  height: 6rem;
  text-align: center;
  padding: 20px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const StyledBlogLogo = styled.img`
  width: 50%;
  height: 10rem;
`;

export const StyledBlogBottom = styled.div`
  background-color: rgb(234, 237, 237);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 6rem;
  padding: 80px 70px 50px 50px;

  text-align: justify;
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin-top: 20px;
`;
