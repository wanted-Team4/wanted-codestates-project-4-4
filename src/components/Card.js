import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  background: pink;
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

//스타일
// const ResponsiveContainer = styled.div`
//   //데스크탑
//   @media screen and (min-width: 1025px) {
//     body {
//       color: red;
//     }
//   }

//   // 태블릿
//   @media screen and (min-width: 768px) {
//     body {
//       color: blue;
//     }
//   }

//   //모바일
//   @media screen and(max-width:320px) {
//     body {
//       color: yellow;
//     }
//   }
// `;
