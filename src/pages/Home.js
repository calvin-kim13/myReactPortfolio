import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import background from "../assets/background3.mp4";
import Button from "../components/Button";
import CodeSnippet from "../components/CodeSnippet";
import SideSocialLinks from "../components/SideSocialLinks";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <HomeWrapper className="main">
      {/* <video src={background} autoPlay loop muted playsInline></video> */}
      <video loop={true} muted={true} autoPlay={true} playsInline={true}>
        <source src={background} />
      </video>
      <Fade direction="up">
        <WelcomeWrapper>
          <div className="h2">Hi, I'm</div>
          <div className="h3 animation">Calvin Kim</div>
          <div className="h5">Software Developer</div>
          <div className="h6">Passion in the Front-End</div>
          <Button className="home-btn" onClick={handleClick}>
            Contact me
          </Button>
        </WelcomeWrapper>
      </Fade>
      <SideSocialLinks />
      <Fade delay={400}>
        <CodeSnippet />
      </Fade>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  height: 100vh;
  .animation {
    text-shadow: 0 0 15px;
    animation: animate 3s infinite linear;
  }
  @keyframes animate {
    0%,
    100% {
      color: #a5f8f6;
    }
    25% {
      color: #fe67fb;
    }
    50% {
      color: #5030e1;
    }
    75% {
      color: #de3dec;
    }
  }
  background: rgba(0, 0, 0, 0.8);
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
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    overflow: hidden;
    justify-content: space-evenly;
  }
`;

const WelcomeWrapper = styled.div`
  font-family: var(--titillium-font);
  padding: 2rem 3rem;
  .h2 {
    font-size: 2rem;
    font-weight: var(--titillium-regular);
    letter-spacing: 0.25rem;
    opacity: 0.8;
  }
  .h3 {
    font-size: 2.5rem;
    font-weight: var(--titillium-black);
    letter-spacing: 0.4rem;
  }
  .h5 {
    font-size: 1.1rem;
    font-weight: var(--titillium-regular);
    letter-spacing: 0.25rem;
    margin-bottom: 0.4rem;
    margin-top: 0.5rem;
    opacity: 0.8;
  }
  .h6 {
    font-size: 0.7rem;
    font-weight: var(--titillium-extra-light);
    letter-spacing: 0.2rem;
    opacity: 0.7;
  }
  @media screen and (min-width: 1024px) {
    .h2 {
      font-size: 1.6rem;
    }
    .h3 {
      font-size: 3rem;
      margin-top: -1rem;
    }
    .h5 {
      font-size: 1.1rem;
      margin-top: 0;
    }
    .h6 {
      font-size: 0.7rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .h2 {
      font-size: 2.2rem;
    }
    .h3 {
      font-size: 4rem;
      margin-top: -1.3rem;
    }
    .h5 {
      font-size: 1.4rem;
      margin-top: -0.6rem;
    }
    .h6 {
      font-size: 0.8rem;
    }
  }
`;

export default Home;
