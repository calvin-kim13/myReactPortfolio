import React from "react";
import styled from "styled-components";
import background from "../assets/background3.mp4";
import Button from "../components/Button";

const Home = () => {
  return (
    <HomeWrapper className="main">
      <video src={background} autoPlay loop muted></video>
      <WelcomeWrapper>
        <h2>Hey, I'm Calvin</h2>
        <h5>Software Developer</h5>
        <h6>Passion in the Front-End</h6>
        <Button className="home-btn">Contact me</Button>
      </WelcomeWrapper>
      <DependencyWrapper>
        <pre>
          <pre>&#123;</pre>
          <em className="parent">"owner"</em> :
          <em className="children"> "Calvin Kim"</em>
          , <br />
          <em className="parent">"email"</em> :
          <em className="children"> "calvinkim1230@gmail.com"</em>
          , <br />
          <em className="parent">"phone"</em> :
          <em className="children"> "(714) 477-3232"</em>
          , <br />
          <em className="parent">"description"</em> :
          <em className="children"> "Full-Stack Developer"</em>
          , <br />
          <em className="parent">"repository"</em> :
          <em className="children"> "https://github.com/calvin-kim13"</em>
          , <br />
          <em className="parent">"engines"</em> : [ <br />
          <em className="children"> "javascript"</em>, <br />
          <em className="children"> "css"</em>, <br />
          <em className="children"> "html"</em>, <br />
          <em className="children"> "nodejs"</em>, <br />
          <em className="children"> "graphql"</em>, <br />
          <em className="children"> "mongodb"</em>, <br />
          <em className="closing-braces">]</em>, <br />
          <em className="parent">"dependencies"</em> : [ <br />
          <em className="children"> "react"</em>, <br />
          <em className="children"> "styled-components"</em>, <br />
          <em className="children"> "express"</em>, <br />
          <em className="children"> "flexbox"</em>, <br />
          <em className="closing-braces">]</em>, <br />
          <em className="parent">"devDependencies"</em> : &#123; <br />
          <em className="parent-children"> "music"</em> :
          <em className="children"> true</em>, <br />
          <em className="parent-children"> "monitors"</em> :
          <em className="children"> "^2.0.0"</em>, <br />
          <em className="parent-children"> "mode"</em> :
          <em className="children"> "dark"</em>, <br />
        </pre>
      </DependencyWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    opacity: 0.9;
    z-index: -1;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeWrapper = styled.div`
  h2 {
    font-size: 2.4rem;
  }
  h5 {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
  }
  h6 {
    letter-spacing: 0.2rem;
  }
`;
const DependencyWrapper = styled.div`
  display: none;
`;

export default Home;
