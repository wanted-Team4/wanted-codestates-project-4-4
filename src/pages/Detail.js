import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  return (
    <Warraper>
      <Header>
        <Link to="/">
          <i
            style={{ verticalAlign: "baseline" }}
            class="fa-solid fa-chevron-left fa-lg"
          ></i>
        </Link>
        <H2>블록체인 NOW</H2>
      </Header>
      <Content>
        <img src={process.env.PUBLIC_URL + "/bjob_026.png"}></img>
        <Title>슈퍼볼과 올림픽</Title>
        <Like>
          <i
            style={{ verticalAlign: "baseline" }}
            class="fa-solid fa-chevron-left fa-lg"
          ></i>
          0
          <i
            style={{ verticalAlign: "baseline" }}
            class="fa-solid fa-arrow-up-from-square"
          ></i>
          공유하기
        </Like>
        <Open>전체리포트 열기</Open>
      </Content>
    </Warraper>
  );
};

export default Detail;

const Warraper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin: 40px 10px 0px 10px;
`;

const Header = styled.div`
  align-self: flex-start;
  margin-bottom: 30px;
  padding-left: 10px;
`;

const Content = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;

const Title = styled.div`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin: 30px 20px;
  padding: 20px;
`;

const H2 = styled.h2`
  display: inline;
  padding-left: 20px;
`;

const Like = styled.div`
  text-align: right;
  font-size: 1.2rem;
  font-weight: normal;
  color: gray;
`;

const Open = styled.span`
  display: block;
  color: white;
  font-size: 1.2rem;
  font-weight: normal;
  text-align: center;
  background-color: #669cff;
  border-radius: 20px;
  padding: 15px;
  width: 30%;
  margin: 30px auto;
`;
