import React from "react";

//Styles
import {
  StyledBlogImg,
  StyledBlogTitle,
  StyledBlogLogo,
  StyledBlogFlexDiv,
  StyledBlogBottom,
} from "./styles.js";

//Img
const gym = "https://github.com/ingridinara/pics/blob/main/gym.jpg?raw=true";
const mmg = "https://github.com/ingridinara/pics/blob/main/mmg.png?raw=true";
function Blog() {
  return (
    <>
      <StyledBlogImg src={gym} alt="woman doing exercise "></StyledBlogImg>
      <StyledBlogFlexDiv>
        <StyledBlogTitle>For women like you... </StyledBlogTitle>
        <StyledBlogLogo src={mmg} alt="Blog Logo"></StyledBlogLogo>
      </StyledBlogFlexDiv>
      <StyledBlogBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
        scelerisque eros, eget blandit justo. Mauris elementum aliquet velit,
        vitae venenatis dolor laoreet aliquam. Sed semper, ante sit amet rhoncus
        mollis, ipsum est varius nisi, eu fermentum ante lacus sollicitudin
        ante. Proin nec velit a nibh venenatis cursus. Aenean viverra, diam
        vitae aliquet vehicula, tortor lectus mollis odio, vitae vulputate mi
        felis at velit. Etiam sodales scelerisque tortor, sed condimentum diam
        mattis sit amet. Integer sed nisl egestas, pellentesque est id,
      </StyledBlogBottom>
    </>
  );
}

export default Blog;
