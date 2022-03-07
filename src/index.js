import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  line-height: 1.2;
  background-color: white;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

ReactDOM.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
