import React from "react";
import styled from "styled-components";
import NewPosts from "../components/NewPosts";
import { useRecoilValue } from "recoil";
import { Data } from "../atom";
import InsightCards from "../components/InsightCards";
import Subscribe from "../components/Subscribe";

const MainContainer = styled.div``;

const Insight = () => {
  const data = useRecoilValue(Data);
  const posts = data.content?.filter(
    (el) => el.sector_id === 3 && el.like_top === 1
  );

  return (
    <MainContainer>
      <NewPosts posts={posts} />
      <Subscribe />
      <InsightCards />;
    </MainContainer>
  );
};

export default Insight;
