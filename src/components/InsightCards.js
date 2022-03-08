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

const InsightCardList = () => {
  const data = useRecoilState(Data);
  const cardData = data[0].content;
  const insightData = cardData && cardData.filter((el) => el.sector_id === 1);

  const [more, setMore] = useState(false);
  return (
    <>
      {more ? (
        <>
          <CardGrid>
            {insightData &&
              insightData.map((el, i) => (
                <Card
                  src={insightData[i].image}
                  title={insightData[i].title}
                  date={insightData[i].upload_date}
                  like={insightData[i].like_cnt}
                  key={i}
                />
              ))}
          </CardGrid>
          <Alert>끝 입니다</Alert>

          <Button onClick={() => setMore(false)}>더보기</Button>
        </>
      ) : (
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

export default InsightCardList;
