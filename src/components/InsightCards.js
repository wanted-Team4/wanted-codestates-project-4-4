import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Data } from "../atom";
import Card from "./Card";
import CardGrid from "./CardGrid";
import Title from "./Title";

const Button = styled.div`
  transition: all ease 0.25s;

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

const InsightCards = () => {
  const data = useRecoilState(Data);
  const cardData = data[0].content;
  const insightData = cardData && cardData.filter((el) => el.sector_id === 3);
  const [more, setMore] = useState(true);
  return (
    <>
      <Title name="인사이트" type="column" />
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
                    sector={insightData[i].sector_id}
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
                  sector={insightData[i].sector_id}
                  key={i}
                />
              ))}
          </CardGrid>

          <Button onClick={() => setMore(true)}>접기</Button>
        </>
      )}
    </>
  );
};

export default InsightCards;
