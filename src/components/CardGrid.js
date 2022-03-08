import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid: auto-flow/1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 50px; auto;
  
  div{
  @media screen and(max-width:900px) {
    grid: auto-flow/1fr 1fr

  }
  @media screen and (max-width: 400px){
    grid: auto-flow/1fr 1fr 1fr;

  }
}
`;

const CardGrid = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default CardGrid;
