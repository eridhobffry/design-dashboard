import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a href="/">Overview</a>
            <a href="/">Campaigns</a>
            <a href="/">Analytics</a>
          </NavLinks>
          <NavLinksButtons style={linkAnimation}>
            <button>
                Premium
            </button>
          </NavLinksButtons>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState} 
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: 1;
  font-size: 1.4rem;
  border-bottom: 1px solid #D8D8D8;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin-left: 5px !important;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin-top: auto;
    margin-bottom: auto;
    margin-left: 20px;
    margin-right: 370px;

  & a {
    color: #1880E7;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #1880E7;
      border-bottom: 1px solid #1880E7;
    }

    @media (max-width: 768px) {
      display: none;
      margin-right: 0px !important;
      margin-left: 0px !important;
    }
  }
`;
const NavLinksButtons = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0px;
  margin-right: -160px !important;

  & button {
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    background: blue;
    color: white;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    

    &:hover {
      color: white;
    }

    @media (max-width: 768px) {
      display: none;
      margin-right: 0px !important;
      margin-left: 0px !important;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;