import styled from "styled-components";

import bgImage from "../../assets/background.jpg";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200%;
    display: block;
    padding: 0 20px;
  }
`;
