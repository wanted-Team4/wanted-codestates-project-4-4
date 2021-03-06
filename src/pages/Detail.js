import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { Data } from "../atom";
import Like from "../components/Like";
import PropTypes from "prop-types";
const Detail = ({}) => {
  const [atomData, setAtomData] = useRecoilState(Data);
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const title = ["블록체인 NOW", "알쓸B잡", "어떻게 투자할까"];
  const link = ["/", "/column", "/insight"];

  useEffect(() => {
    if (atomData.length !== 0) {
      setDetail(atomData.content.filter((data) => data.id === Number(id)));
      setLoading(true);
    }
  }, [atomData]);

  return (
    <Warraper>
      {loading ? (
        <>
          <Header>
            <Link to={link[detail[0].sector_id - 1]}>
              <i
                style={{ verticalAlign: "baseline" }}
                className="fa-solid fa-chevron-left fa-lg"
              ></i>
            </Link>
            <H2>{title[detail[0].sector_id - 1]}</H2>
          </Header>
          <Content>
            {detail[0].sector_id !== 2 ? (
              <Img src={detail[0].image}></Img>
            ) : (
              <Iframe
                src={`https://www.youtube.com/embed/${detail[0].link}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></Iframe>
            )}
            <Title>{detail[0].title}</Title>
            <Body>{detail[0].body}</Body>
            <LikeAndShare>
              <Like id={detail[0].id} likeCnt={detail[0].likeCnt}></Like>
              <Share>
                <i
                  style={{ verticalAlign: "baseline" }}
                  className="fa-solid fa-arrow-up-from-bracket"
                ></i>
                공유
              </Share>
            </LikeAndShare>
            {detail[0].sector_id !== 2 ? (
              <Open>
                <a href={detail[0].link} target="_blank">
                  전체리포트 열기
                </a>
              </Open>
            ) : null}
          </Content>
        </>
      ) : null}
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
  padding-top: 25px;
`;

const Header = styled.div`
  margin-bottom: 30px;
  padding-left: 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 700;
`;

const Title = styled.div`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin: 30px 20px;
  padding: 10px 25px 10px 25px;
  line-height: 2rem;
`;

const Body = styled.div`
  width: 40rem;
  font-weight: normal;
  text-align: justify;
  font-size: 1rem;
  padding-bottom: 15px;
  line-height: 1.4rem;
  @media screen and (min-width: 1150px) {
    width: 55rem;
  }
`;

const H2 = styled.h2`
  display: inline;
  padding-left: 20px;
`;

const Img = styled.img`
  height: 20rem;
  width: 40rem;
  @media screen and (min-width: 1150px) {
    width: 55rem;
    height: 30rem;
  }
`;

const Iframe = styled.iframe`
  border: none;
  height: 20rem;
  width: 40rem;
  @media screen and (min-width: 1150px) {
    width: 55rem;
    height: 30rem;
  }
`;
const LikeAndShare = styled.div`
  display: flex;
  text-align: right;
  font-size: 1.2rem;
  font-weight: normal;
  color: gray;
  justify-content: space-around;
  align-self: flex-end;
  width: 7rem;
`;

const Share = styled.div`
  width: 9rem;
  font-weight: 500;
  color: #9d9d9d;
  @media screen and (max-width: 450px) {
    width: 3rem;
    font-weight: 500;
    font-size: 0.8rem;
  }
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
