import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Data } from "./atom";
import axios from "axios";
import PcNav from "./layout/PcNav";
import Youtube from "./pages/youtube";
import Insight from "./pages/insight";
import Column from "./pages/column";
import Detail from "./pages/Detail";
import Loading from "./components/Loading";

const App = () => {
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
          {loading === false ? <Loading></Loading> : null}

          <T>
            <Routes>
              <Route exact path="/" element={<Youtube />} />
              <Route exact path="column" element={<Column />} />
              <Route exact path="insight" element={<Insight />} />
              <Route exact path="detail/:id" element={<Detail />} />
            </Routes>
          </T>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

const T = styled.div`
  width: 70vw;
  margin: 0 auto;
`;
