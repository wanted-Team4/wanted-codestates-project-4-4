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

const ColumnCards = () => {
  const data = useRecoilState(Data);
  const cardData = data[0].content;
  const columnData = cardData && cardData.filter((el) => el.sector_id === 3);
  const [more, setMore] = useState(false);

  return (
    <>
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
