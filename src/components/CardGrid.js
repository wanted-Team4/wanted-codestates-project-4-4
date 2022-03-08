import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid: auto-flow/ repeat(3, 1fr);
  grid-gap: 20px;
  margin: 50px auto;
  width: 100%;
`;

const CardGrid = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default CardGrid;
