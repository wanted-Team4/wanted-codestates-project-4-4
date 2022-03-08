import React from "react";
import styled from "styled-components";
import NewPosts from "../components/newPosts";
import { useRecoilValue } from "recoil";
import { Data } from "../atom";
import YoutubeCards from "../components/YoutubeCards";
import Subscribe from "../components/Subscribe";

const MainContainer = styled.div``;

const Youtube = () => {
  const data = useRecoilValue(Data);
  const posts = data.content?.filter(
    (el) => el.sector_id === 2 && el.like_top === 1
  );

  console.log(posts);

  return (
    <MainContainer>
      <NewPosts posts={posts} />
      <Subscribe />
      <YoutubeCards />
    </MainContainer>
  );
};

export default Youtube;
