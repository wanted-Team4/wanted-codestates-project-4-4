import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Data } from "../atom";
import Card from "./Card";
import CardGrid from "./CardGrid";
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
  transition:0.1s ease-out;
  &:hover{
    color:#669cff
    background: #fff;
  }
`;

const Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const InsightCards = () => {
  const data = useRecoilState(Data);
  const cardData = data[0].content;
  const insightData = cardData && cardData.filter((el) => el.sector_id === 3);
  const [more, setMore] = useState(true);
  return (
    <>
      <Title>
        <h1>인사이트</h1>
        <div>New</div>
      </Title>
      {more ? (
        <>
          <CardGrid>
            {insightData &&
              insightData
                .slice(0, 6)
                .map((el, i) => (
                  <Card
                    src={insightData[i].image}
                    title={insightData[i].title}
                    date={insightData[i].upload_date}
                    like={insightData[i].like_cnt}
                    id={insightData[i].id}
                    key={i}
                  />
                ))}
          </CardGrid>

          <Button onClick={() => setMore(false)}>더보기</Button>
        </>
      ) : (
        <>
          <CardGrid>
            {insightData &&
              insightData.map((el, i) => (
                <Card
                  src={insightData[i].image}
                  title={insightData[i].title}
                  date={insightData[i].upload_date}
                  like={insightData[i].like_cnt}
                  id={insightData[i].id}
                  key={i}
                />
              ))}
          </CardGrid>
          <Alert>끝 입니다</Alert>

          <Button onClick={() => setMore(true)}>접기</Button>
        </>
      )}
    </>
  );
};

export default InsightCards;
