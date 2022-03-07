import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Index from "./index";
import Youtube from "./pages/youtueb";
import Insight from "./pages/insight";
import Column from "./pages/column";
import PcNav from "./layout/PcNav";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <PcNav />
      <Container>
        <ContentBox>
          <Routes>
            <Route exact path="/" element={<Youtube />} />
            <Route exact path="column" element={<Column />} />
            <Route exact path="insight" element={<Insight />} />
          </Routes>
        </ContentBox>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.section`
  background: rgb(247, 247, 251);
  width: 100%;
  height: 100vh;
`;

const ContentBox = styled.div`
  width: 73%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  background-color: #fff;
`;
