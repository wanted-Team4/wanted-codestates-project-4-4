import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//스타일
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #aaa;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.div`
  width: 100%;
  height: 20vh;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  padding: 10px;
  box-sizing: border;
`;

const Title = styled.h1`
  font-size: 0.9rem;
  padding-bottom: 20px;
  box-sizing: border;
`;

const Ect = styled.div`
  display: grid;
  grid: auto-flow/ 1.5fr 0.5fr 0.5fr;
  box-sizing: border;
`;

const Date = styled.div`
  font-size: 0.8rem;
`;

const Like = styled.div`
  font-size: 0.8rem;
  .fa-heart {
    color: #aaa;
  }
  span {
    font-weight: 500;
    padding: 5px;
    color: #aaa;
  }
`;

const Share = styled.div`
  font-size: 0.8rem;
  color: #aaa;
  cursor: pointer;

  span {
    font-weight: 500;
    padding: 5px;
    color: #aaa;
  }
`;

//좋아요기능
const Likes = (id) => {
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
        <i className="fa-solid fa-heart"></i>
        {LikeNums}
      </Like>
    </>
  );
};

const Card = ({ src, title, date, like, id }) => {
  const navigate = useNavigate();
  const handleClickDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Container>
        <Image onClick={handleClickDetail}>
          <img
            src={
              src !== "" || undefined || null
                ? src
                : "https://sandbank.io/img/thumbnail/thumbnail.png"
            }
            alt={`img${id}`}
          />
        </Image>
        <Content>
          <Title>{title}</Title>
          <Ect>
            <Date>{date}</Date>
            <Likes />
            <Share onClick={handleClickDetail}>
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              <span>공유</span>
            </Share>
          </Ect>
        </Content>
      </Container>
    </>
  );
};

export default Card;
