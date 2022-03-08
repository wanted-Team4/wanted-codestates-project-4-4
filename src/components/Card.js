import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//스타일
const Container = styled.div`
  border: 1px solid #aaa;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 5px #eee;
  overflow: hidden;
  transition: all ease-in 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 7px 3px #a9aaa5;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 12rem;
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
  font-size: 1.1rem;
  padding-bottom: 20px;
  box-sizing: border;
  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

const Ect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Date = styled.div`
  font-size: 0.9rem;
`;

const Like = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform ease 1s;
  color: ${(props) => (props.color ? "#aaa" : "red")};
  font-weight: 400;
  .fa-heart {
    color: ${(props) => (props.color ? "#aaa" : "red")};
    margin-right: 3px;
    transform: scale(1.2);
  }
`;

const Share = styled.div`
  font-size: 0.9rem;
  color: #aaa;
  cursor: pointer;
  margin-left: 10px;
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
      <Like onClick={LikeClick} color={!LikeBools}>
        <i className="fa-solid fa-heart"></i>
        {LikeNums}
      </Like>
    </>
  );
};

const Card = ({ src, title, date, like, id, sector }) => {
  const navigate = useNavigate();
  const handleClickImage = () => {
    if (sector !== 1) {
      window.open(`/detail/${id}`);
    } else {
      navigate(`/detail/${id}`);
    }
  };
  const handleClickShare = () => {
    window.open(`/detail/${id}`);
  };

  return (
    <>
      <Container>
        <Image onClick={handleClickImage}>
          <img
            src={
              src !== "" || undefined || null
                ? src
                : "https://miro.medium.com/max/1400/1*13aMsbLvJjlg4NLltX3nLA.jpeg"
            }
            alt={`img${id}`}
          />
        </Image>
        <Content>
          <Title>{title}</Title>
          <Ect>
            <Date>{date}</Date>
            <div>
              <Likes />
              <Share onClick={handleClickShare}>
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                <span>공유</span>
              </Share>
            </div>
          </Ect>
        </Content>
      </Container>
    </>
  );
};

export default Card;
