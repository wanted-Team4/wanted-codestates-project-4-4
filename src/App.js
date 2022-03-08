import { BrowserRouter, Route, Routes } from "react-router-dom";
//import React from "react";
// import Index from "./index";
import Youtube from "./pages/youtube";
import Insight from "./pages/insight";
import Column from "./pages/column";
import PcNav from "./layout/PcNav";
import styled from "styled-components";
import Detail from "./pages/Detail";
// import Subscribe from "./components/Subscribe";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Data } from "./atom";
import axios from "axios";
import Loading from "./components/Loading";
function App() {
  const [atomData, setAtomData] = useRecoilState(Data);
  const [sector, setSector] = useState(atomData.sector);
  const [content, setContent] = useState(atomData.content);
  const quest = "info/contents/";
  const [loading, setLoading] = useState(false);
  const defaultClient = () => {
    axios
      .get(`https://test.daground.io/${quest}`, {
        headers: {
          "TEST-AUTH": `wantedpreonboarding`,
        },
        params: {
          sector: sector,
          content: content,
        },
      })
      .then((res) => {
        const data = res.data;
        setAtomData(data);
        setSector(data.sector);
        setContent(data.content);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    defaultClient();
  }, []);

  return (
    <>
      <BrowserRouter>
        <PcNav />

        <Container>
          {/* <ContentBox> */}
          {/* 합치면서 레이아웃이 깨져서 임시적으로 주석처리 해놨습니다~ 마지막에 다시 정리하면 좋을것 같아요*/}
          {loading === false ? <Loading></Loading> : null}

          <T>
            <Routes>
              <Route exact path="/" element={<Youtube />} />
              <Route exact path="column" element={<Column />} />
              <Route exact path="insight" element={<Insight />} />
              <Route exact path="detail/:id" element={<Detail />} />
            </Routes>
            {/* </ContentBox>
          <Subscribe /> */}
          </T>
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

const T = styled.div`
  width: 70vw;
  margin: 0 auto;
`;
