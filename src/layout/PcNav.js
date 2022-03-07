import { Link } from "react-router-dom";
import styled from "styled-components";

const PcNav = () => {
  return (
    <Navbar>
      <NavContainer>
        <Link to="/">
          <Logo>SAND BANK</Logo>
        </Link>
        <MenuTab>
          <Link to="/">
            <li> 유튜브</li>
          </Link>
          <Link to="/column">
            <li>알쓸B동</li>
          </Link>
          <Link to="/insight">
            <li>인사이트</li>
          </Link>
        </MenuTab>
      </NavContainer>
    </Navbar>
  );
};

export default PcNav;

const Navbar = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #111;
`;

const NavContainer = styled.ul`
  width: 70%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.h1``;

const MenuTab = styled.ul`
  margin-left: auto;
  display: flex;
  li {
    margin-right: 50px;
  }
`;
