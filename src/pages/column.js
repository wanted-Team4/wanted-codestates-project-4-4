import React from "react";
import styled from "styled-components";
import NewPosts from "../components/newPosts";
import ColumnCards from "../components/ColumnCards";

const MainContainer = styled.div``;

const Column = () => {
  return (
    <MainContainer>
      <NewPosts />
      <ColumnCards />
    </MainContainer>
  );
};

export default Column;
