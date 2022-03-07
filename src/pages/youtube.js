import React from "react";
import styled from "styled-components";
import NewPosts from "../components/newPosts";
import YoutubeCards from "../components/YoutubeCards";

const MainContainer = styled.div``;

const Youtube = () => {
  return (
    <MainContainer>
      <NewPosts />
      <YoutubeCards />
    </MainContainer>
  );
};

export default Youtube;
