import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Testimonies from "./Testimonies";

const Portfolio = () => {
  return (
    <Container>
      <Title number="04" title="Portfolio" />
      <Text>lorem ipsum</Text>
      <Projects>
        <Pro>
          <Img src="/images/1.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/2p.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/3.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/4.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/5.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/6.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/7.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/8.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/9.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/10.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/11.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
        <Pro>
          <Img src="/images/12.png" />
          <Cover className="cover">
            <Span className="span">Branding</Span>
            <P className="p">Creactive Design</P>
          </Cover>
        </Pro>
      </Projects>
      <Testimonies />
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

const Text = styled.div``;

const Projects = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
`;

const Pro = styled.div`
  width: 250px;
  height: 220px;
  background: red;
  margin: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover > .cover {
    opacity: 1;
    .span {
      margin-bottom: 3px;
    }
    .p {
      margin-bottom: 20px;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Cover = styled.div`
  width: 80%;
  height: 80%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  opacity: 0;
  transition: 400ms;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Span = styled.div`
  font-weight: 600;
  font-size: 14px;
  transition-duration: 400ms;
  margin-left: 20px;
  opacity: 0.7;
  margin-bottom: 40px;
`;

const P = styled.div`
  font-family: "Dosis", "sans-serif";
  margin-left: 20px;
  font-size: 22px;
  font-weight: 700;
  transition-duration: 400ms;
  :hover {
    color: #e9204f;
  }
`;

// const Projects =styled.div``

// const Projects =styled.div``

// const Projects =styled.div``

// const Projects =styled.div``
