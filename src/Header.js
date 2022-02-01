import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src="/images/2.png" />
        <Nav>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/">Services</NavLinks>
          <NavLinks to="/">About</NavLinks>
          <NavLinks to="/">Portfolio</NavLinks>
          <NavLinks to="/">Contact</NavLinks>
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: white;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  top: 0;
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 70px;
`;

const Nav = styled.div`
  display: flex;
`;

const NavLinks = styled.div`
  font-weight: bold;
  font-size: 16px;
  font-family: inter, sans-serif;
  margin-left: 50px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

// const Container = styled.div``;
