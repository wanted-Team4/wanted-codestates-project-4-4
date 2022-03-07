import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const PcNav = () => {
  const [activeIndex, setActiveIndex] = useState(0); // active를 담아줄 상태값
  const tabClickHandler = (index) => {
    setActiveIndex(index);
  }; // 저장된 인덱스 정보로 active 핸들링을 하기 위한 이벤트

  const youTubeMetch = useMatch("/");
  const columnMetch = useMatch("/column");
  const insightMetch = useMatch("/insight");
  return (
    <Navbar>
      <NavContainer>
        <Link to="/">
          <Logo>SAND BANK</Logo>
        </Link>
      </NavContainer>
      <MenuTab>
        <Link to="/">
          <li
            className={activeIndex === 0 ? "is-active isToggle" : "Nottoggle"}
            onClick={() => tabClickHandler(0)}
          >
            {youTubeMetch && <Slider layoutId="Slider" />}
            유튜브
          </li>
        </Link>
        <Link to="/column">
          <li
            className={activeIndex === 1 ? "is-active isToggle" : "Nottoggle"}
            onClick={() => tabClickHandler(1)}
          >
            {columnMetch && <Slider layoutId="Slider" />}
            알쓸B동
          </li>
        </Link>
        <Link to="/insight">
          <li
            className={activeIndex === 2 ? "is-active isToggle" : "Nottoggle"}
            onClick={() => tabClickHandler(2)}
          >
            {insightMetch && <Slider layoutId="Slider" />}
            인사이트
          </li>
        </Link>
      </MenuTab>
    </Navbar>
  );
};

export default PcNav;

const Navbar = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.ul`
  width: 30%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 17px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const MenuTab = styled.ul`
  margin-right: auto;
  display: flex;
  li {
    position: relative;
    margin-right: 50px;
    cursor: pointer;
    font-size: 1rem;
    color: #000;
    width: 80px;
    text-align: center;
    @media screen and (max-width: 768px) {
      margin-right: 30px;
      font-size: 14px;
    }
  }
  .isToggle {
    font-weight: bold;
    transition: opacity 0.3s ease;
  }
  .Nottoggle {
    opacity: 0.5;
  }
`;
const Slider = styled(motion.span)`
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: -15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #669cff;
  @media screen and (max-width: 768px) {
    bottom: -17px;
  }
`;
