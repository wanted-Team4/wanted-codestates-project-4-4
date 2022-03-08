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

const YoutubeCards = () => {
  const data = useRecoilState(Data);
  const cardData = data[0].content;
  const youtubeData = cardData && cardData.filter((el) => el.sector_id === 2);
  const [more, setMore] = useState(true);

  return (
    <>
      <Title>
        <div>New</div>
        <h1>인사이트</h1>
      </Title>
      {more ? (
        <>
          <CardGrid>
            {youtubeData &&
              youtubeData
                .slice(0, 6)
                .map((el, i) => (
                  <Card
                    src={youtubeData[i].image}
                    title={youtubeData[i].title}
                    date={youtubeData[i].upload_date}
                    like={youtubeData[i].like_cnt}
                    id={youtubeData[i].id}
                    key={i}
                  />
                ))}
          </CardGrid>
          <Button onClick={() => setMore(false)}>더보기</Button>
        </>
      ) : (
        <>
          <CardGrid>
            {youtubeData &&
              youtubeData.map((el, i) => (
                <>
                  <Card
                    src={youtubeData[i].image}
                    title={youtubeData[i].title}
                    date={youtubeData[i].upload_date}
                    like={youtubeData[i].like_cnt}
                    id={youtubeData[i].id}
                    key={i}
                  />
                </>
              ))}
          </CardGrid>
          <Alert>끝 입니다</Alert>
          <Button onClick={() => setMore(true)}>접기</Button>
        </>
      )}
    </>
  );
};

export default YoutubeCards;
