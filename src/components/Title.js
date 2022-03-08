import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 400px) {
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  div {
    margin-left: 0.5rem;
    border-radius: 0.3rem;
    background-color: #669cff;
    padding: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    color: #fff;
    @media screen and (max-width: 400px) {
      padding: 0.2rem;
      font-size: 0.5rem;
    }
  }
`;

const Title = ({ name, type }) => {
  return (
    <Container>
      <div>{type}</div>
      <h1>{name}</h1>
    </Container>
  );
};

export default Title;
