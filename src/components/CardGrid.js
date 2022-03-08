import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid: auto-flow / repeat(3, 1fr);
  grid-gap: 20px;
  margin: 50px auto;
  width: 70vw;
  @media screen and (max-width: 1080px) and (min-width: 768px) {
    display: grid;
    grid: auto-flow / repeat(2, 1fr);
  }
  @media screen and (max-width: 767px) {
    display: grid;
    grid: auto-flow / repeat(1, 1fr);
  }
`;

const CardGrid = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CardGrid;
