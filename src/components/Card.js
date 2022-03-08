import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Like from "./Like";
//스타일
const Container = styled.div`
  border: 1px solid #aaa;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 5px #eee;
  overflow: hidden;
  transition: all ease-in 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 7px 3px #a9aaa5;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 12rem;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  padding: 10px;
  box-sizing: border;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  padding-bottom: 20px;
  box-sizing: border;
  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

const Ect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Date = styled.div`
  font-size: 0.9rem;
`;

const Share = styled.div`
  font-size: 0.9rem;
  color: #aaa;
  cursor: pointer;
  margin-left: 10px;
  span {
    font-weight: 500;
    padding: 5px;
    color: #aaa;
  }
`;

const Card = ({ src, title, date, like, id, sector }) => {
  const navigate = useNavigate();
  const handleClickImage = () => {
    if (sector !== 1) {
      window.open(`/detail/${id}`);
    } else {
      navigate(`/detail/${id}`);
    }
  };
  const handleClickShare = () => {
    window.open(`/detail/${id}`);
  };

  return (
    <>
      <Container>
        <Image onClick={handleClickImage}>
          <img
            src={
              src !== "" || undefined || null
                ? src
                : "https://miro.medium.com/max/1400/1*13aMsbLvJjlg4NLltX3nLA.jpeg"
            }
            alt={`img${id}`}
          />
        </Image>
        <Content>
          <Title>{title}</Title>
          <Ect>
            <Date>{date}</Date>
            <div>
              <Like id={id} likeCnt={like}></Like>
              <Share onClick={handleClickShare}>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                <span>공유</span>
              </Share>
            </div>
          </Ect>
        </Content>
      </Container>
    </>
  );
};

export default Card;
