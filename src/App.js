import { BrowserRouter, Route, Routes } from "react-router-dom";
//import React from "react";
import Index from "./index";
import Youtube from "./pages/youtube";
import Insight from "./pages/insight";
import Column from "./pages/column";
import PcNav from "./layout/PcNav";
import styled from "styled-components";
import Subscribe from "./components/Subscribe";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Data } from "./atom";
import axios from "axios";
function App() {
  const [atomData, setAtomData] = useRecoilState(Data);
  const [sector, setSector] = useState(atomData.sector);
  const [content, setContent] = useState(atomData.content);
  const quest = "info/contents/";

  const defaultClient = () => {
    axios
      .get(`https://test.daground.io/${quest}`, {
        headers: {
          "TEST-AUTH": `wantedpreonboarding`,
        },
      })
      .then((res) => {
        setAtomData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    defaultClient();
    console.log(atomData, "all");
  }, []);
  console.log(sector, "sector");
  console.log(content, "content");

  return (
    <>
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
          <Subscribe />
        </Container>
      </BrowserRouter>
    </>
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
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
