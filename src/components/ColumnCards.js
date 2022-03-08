import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { Data } from "../atom";
import Card from "./Card";
import CardGrid from "./CardGrid";
import Title from "./Title";

const Container = styled.div``;

const Button = styled.div`
  transition: all ease 0.25s;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  border: 1px solid #669cff;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 400;
  width: 30%;
  height: 60px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ColumnCards = () => {
  const data = useRecoilState(Data);
  const cardData = data[0].content;
  const columnData = cardData && cardData.filter((el) => el.sector_id === 1);
  const [more, setMore] = useState(true);
  console.log(columnData);

  return (
    <Container>
      <Title type={"Column"} name={"알쓸B잡"} />
      {more ? (
        <>
          <CardGrid>
            {columnData &&
              columnData
                .slice(0, 6)
                .map((el, i) => (
                  <Card
                    src={columnData[i].image}
                    title={columnData[i].title}
                    date={columnData[i].upload_date}
                    like={columnData[i].like_cnt}
                    id={columnData[i].id}
                    sector={columnData[i].sector_id}
                    key={i}
                  />
                ))}
          </CardGrid>

          <Button onClick={() => setMore(false)} bg={"#669cff"} color={"#fff"}>
            더보기
          </Button>
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
                  sector={columnData[i].sector_id}
                  key={i}
                />
              ))}
          </CardGrid>
          <Button onClick={() => setMore(true)} bg={"#fff"} color={"#669cff"}>
            접기
          </Button>
        </>
      )}
    </Container>
  );
};

export default ColumnCards;
