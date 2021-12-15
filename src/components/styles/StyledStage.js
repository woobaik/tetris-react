import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(${(props) => props.height})
  grid-template-columns: repeat(10, 50px);

`;
