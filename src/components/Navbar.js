import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { FaRockrms } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { ImParagraphRight } from 'react-icons/im';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;

  &.active {
    transition: 0.2s ease-in;
    background: rgb(20, 48, 76);
    opacity: 0.9;
  }
`;
export const SocialIcon = styled(FaRockrms)`
  margin-right: 10px;
  color: #6ce6ec;
`;
const NavLink = css`
  color: #6ce6ec;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
  font-weight: 800;
`;

const MenuBars = styled(ImParagraphRight)`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    height: 25px;
    width: 25px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    transform: translate(-50%, 55%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  // useEffect(() => {}, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Nav className={navbar ? 'navbar active' : 'navbar'}>
      <Logo to="/">
        {' '}
        <SocialIcon /> RISE REAL ESTATE
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
