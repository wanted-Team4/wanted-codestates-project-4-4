import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #aaa;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
`;

const Content = styled.div`
  padding: 10px;
  box-sizing: border;
`;

const Title = styled.h1`
  font-size: 0.9rem;
  padding-bottom: 20px;
  box-sizing: border;
`;

const Ect = styled.div`
  display: grid;
  grid: auto-flow/ 1.5fr 0.5fr 0.5fr;
  box-sizing: border;
`;

const Date = styled.div`
  font-size: 0.8rem;
`;

const Like = styled.div`
  font-size: 0.8rem;
  .fa-heart {
    color: #aaa;
  }
  span {
    font-weight: 500;
    padding: 5px;
    color: #aaa;
  }
`;

const Share = styled.div`
  font-size: 0.8rem;
  color: #aaa;

  span {
    font-weight: 500;
    padding: 5px;
    color: #aaa;
  }
`;
const Card = ({ src, title, date, id, like }) => {
  console.log({ like });
  return (
    <Container>
      <Image src={src} alt={`img${id}`} />
      <Content>
        <Title>{title}</Title>
        <Ect>
          <Date>{date}</Date>
          <Like>
            <i className="fa-solid fa-heart"></i>
            <span>{like}</span>
          </Like>
          <Share>
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
            <span>공유</span>
          </Share>
        </Ect>
      </Content>
    </Container>
  );
};

export default Card;
