import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Data } from "../atom";
import Card from "./Card";
import CardGrid from "./CardGrid";
const Button = styled.div`
  background: #669cff;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  width: 30%;
  height: 60px;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s ease-out;
`;

const Title = styled.div`
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

const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const ColumnCards = () => {
  const data = useRecoilState(Data);
  const cardData = data[0].content;
  const columnData = cardData && cardData.filter((el) => el.sector_id === 3);
  const [more, setMore] = useState(false);

  return (
    <>
      <Title>
        <div>New</div>
        <h1>알쓸B잡</h1>
      </Title>
      {more ? (
        <>
          <CardGrid>
            {columnData &&
              columnData.map((el, i) => (
                <Card
                  src={columnData[i].image}
                  title={columnData[i].title}
                  date={columnData[i].upload_date}
                  like={columnData[i].like_cnt}
                  id={columnData[i].id}
                  key={i}
                />
              ))}
          </CardGrid>
          <Alert>끝 입니다</Alert>

          <Button onClick={() => setMore(false)}>접기</Button>
        </>
      ) : (
        <>
          <CardGrid>
            {columnData &&
              columnData.map((el, i) => (
                <Card
                  src={columnData[i].image}
                  title={columnData[i].title}
                  date={columnData[i].upload_date}
                  like={columnData[i].like_cnt}
                  id={columnData[i].id}
                  key={i}
                />
              ))}
          </CardGrid>
          <Button onClick={() => setMore(true)}>더보기</Button>
        </>
      )}
    </>
  );
};

export default ColumnCards;
