import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid: auto-flow/1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 0 auto;
  margin: 50px;
`;

const CardGrid = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default CardGrid;
