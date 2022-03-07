import React from "react";
import styled from "styled-components";
import NewPosts from "../components/newPosts";
import { useRecoilValue } from 'recoil';
import { Data } from '../atom';
import YoutubeCards from "../components/YoutubeCards";

const MainContainer = styled.div``;

const Youtube = () => {
  const data = useRecoilValue(Data);
  const MainPosts = data.content?.filter((el) => el.sector_id === 2 && el.like_top === 1);

  return (
    <MainContainer>
      <NewPosts />
      <YoutubeCards posts={MainPosts} />
    </MainContainer>
  );
};

export default Youtube;
