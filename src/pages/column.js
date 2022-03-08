import React from "react";
import styled from "styled-components";
import NewPosts from "../components/newPosts";
import { useRecoilValue } from 'recoil';
import { Data } from '../atom';
import ColumnCards from "../components/ColumnCards";

const MainContainer = styled.div``;

const Column = () => {
  const data = useRecoilValue(Data);
  const posts = data.content?.filter((el) => el.sector_id === 1 && el.like_top === 1);

  return (
    <MainContainer>
      <NewPosts posts={posts} />
      <ColumnCards />
    </MainContainer>
  );
};

export default Column;
