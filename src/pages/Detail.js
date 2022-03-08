import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { Data } from "../atom";

const Detail = () => {
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

  console.log(detail);

  const Likes = (id) => {
    // 좋아요 기능
    let like_cnt = 0;
    let like_bool = false;

    if (localStorage.getItem(id)) {
      const more = JSON.parse(localStorage.getItem(id))[0];
      like_cnt += more;
      like_bool = JSON.parse(localStorage.getItem(id))[1];
    }

    const [LikeNums, setLikeNums] = useState(like_cnt);
    const [LikeBools, setLikeBools] = useState(like_bool);

    const LikeClick = () => {
      if (!LikeBools) {
        /* 좋아요를 누르지 않은 경우 */
        setLikeBools(!LikeBools);
        setLikeNums(LikeNums + 1);
        if (localStorage.getItem(id)) {
          const more = JSON.parse(localStorage.getItem(id))[0];
          localStorage.setItem(id, JSON.stringify([more + 1, true]));
        } else {
          localStorage.setItem(id, JSON.stringify([1, true]));
        }
      } else {
        /* 좋아요를 누른 경우 */
        setLikeBools(!LikeBools);
        setLikeNums(LikeNums - 1);
        const more = JSON.parse(localStorage.getItem(id))[0];
        localStorage.setItem(id, JSON.stringify([more - 1, false]));
      }
    };
    return (
      <>
        <Like onClick={LikeClick}>
          <i
            style={{ verticalAlign: "baseline", marginLeft: "10px" }}
            className="fa-solid fa-heart"
          ></i>
          {LikeNums}
          <i
            style={{ verticalAlign: "baseline" }}
            className="fa-solid fa-arrow-up-from-bracket"
          ></i>
          공유하기
        </Like>
      </>
    );
  };

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
            <Likes></Likes>
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

const Like = styled.div`
  display: flex;
  text-align: right;
  font-size: 1.2rem;
  font-weight: normal;
  color: gray;
  justify-content: space-around;
  align-self: flex-end;
  width: 10rem;
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
