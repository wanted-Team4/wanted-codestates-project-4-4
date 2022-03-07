import React from "react";
import styled from "styled-components";
import NewPosts from "../components/newPosts";
import InsightCards from "../components/InsightCards";

const MainContainer = styled.div``;

const Insight = () => {
  return (
    <MainContainer>
      <NewPosts />
      <InsightCards />;
    </MainContainer>
  );
};

export default Insight;
