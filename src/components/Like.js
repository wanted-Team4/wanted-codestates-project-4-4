import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
const Like = ({ id, likeCnt }) => {
  // 좋아요 기능
  likeCnt = 0;
  let like_cnt = likeCnt;
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
    console.log(like_cnt);
  };
  return (
    <>
      <Likes onClick={LikeClick} color={!LikeBools} className="is">
        <i className="fa-solid fa-heart"></i>
        {LikeNums}
      </Likes>
    </>
  );
};
const Likes = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform ease 1s;
  color: ${(props) => (props.color ? "#aaa" : "red")};
  font-weight: 400;
  padding-right: 10px;
  width: 3rem;
  .fa-heart {
    color: ${(props) => (props.color ? "#aaa" : "red")};
    margin-right: 3px;
    transform: scale(1.2);
  }
`;
Like.propsTypes = {
  id: PropTypes.number,
  likeCnt: PropTypes.number,
  LikeNums: PropTypes.number,
};
export default Like;
