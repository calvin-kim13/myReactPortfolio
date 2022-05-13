import React from "react";
import styled from "styled-components";
import background from "../assets/background3.mp4";
import Button from "../components/Button";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";

const Home = () => {
  return (
    <HomeWrapper className="main">
      {/* <video src={background} autoPlay loop muted playsInline></video> */}
      <video loop={true} muted={true} autoPlay={true} playsInline={true}>
        <source src={background} />
      </video>
      <WelcomeWrapper>
        <h2>Hi, I'm</h2>
        <h3 className="animation">Calvin Kim</h3>
        <h5>Software Developer</h5>
        <h6>Passion in the Front-End</h6>
        <Button className="home-btn">Contact me</Button>
      </WelcomeWrapper>
      <SocialLinkWrapper>
        <span></span>
        <ul>
          <li>
            <a
              href="https://github.com/calvin-kim13"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FiIcons.FiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/calvin-kim-143aa51a2/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FaIcons.FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="../assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <AiIcons.AiOutlineFile />
            </a>
          </li>
        </ul>
      </SocialLinkWrapper>
      <DependencyWrapper>
        <pre>
          <pre>&#123;</pre>
          <em className="parent">"name"</em> {""} :
          <em className="children"> "portfolio"</em>
          , <br />
          <em className="parent">"version"</em> {""} :
          <em className="children"> "2.0.0"</em>
          , <br />
          <em className="parent">"owner"</em> {""} :
          <em className="children"> "Calvin Kim"</em>
          , <br />
          <em className="parent">"email"</em> {""} :
          <em className="children"> "calvinkim1230@gmail.com"</em>
          , <br />
          <em className="parent">"phone"</em> {""} :
          <em className="children"> "(714) 477-3232"</em>
          , <br />
          <em className="parent">"description"</em> {""} :
          <em className="children"> "Full-Stack Developer"</em>
          , <br />
          <em className="parent">"repository"</em> {""} :
          <em className="children"> "github.com/calvin-kim13"</em>
          , <br />
          <em className="parent">"engines"</em> {""} : {""} [ <br />
          <em className="nested-children"> "javascript"</em>, <br />
          <em className="nested-children"> "css"</em>, <br />
          <em className="nested-children"> "html"</em>, <br />
          <em className="nested-children"> "nodejs"</em>, <br />
          <em className="nested-children"> "graphql"</em>, <br />
          <em className="nested-children"> "mongodb"</em>, <br />
          <pre className="closing-braces">] ,</pre>
          <em className="parent">"dependencies"</em> {""} : {""} [ <br />
          <em className="nested-children"> "react"</em>, <br />
          <em className="nested-children"> "styled-components"</em>, <br />
          <em className="nested-children"> "express"</em>, <br />
          <em className="nested-children"> "flexbox"</em>, <br />
          <pre className="closing-braces">] ,</pre>
          <em className="parent">"devDependencies"</em> {""} : {""} &#123;{" "}
          <br />
          <em className="nested-children"> "music"</em> {""} :
          <em className="children"> true</em>, <br />
          <em className="nested-children"> "monitors"</em> {""} :
          <em className="children">"^2"</em>, <br />
          <em className="nested-children"> "mode"</em> {""} :
          <em className="children"> "dark"</em>, <br />
          <pre className="closing-braces"> &#125; ,</pre>
          <pre>&#125;</pre>
        </pre>
      </DependencyWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
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
    justify-content: space-evenly;
  }
`;

const WelcomeWrapper = styled.div`
  font-family: var(--titillium-font);
  padding: 2rem 3rem;
  h2 {
    font-size: 2.2rem;
    font-weight: var(--titillium-regular);
    letter-spacing: 0.4rem;
  }
  h3 {
    font-size: 2.2rem;
    font-weight: var(--titillium-black);
    letter-spacing: 0.4rem;
  }
  h5 {
    font-size: 1.1rem;
    font-weight: var(--titillium-regular);
    letter-spacing: 0.25rem;
    margin-bottom: 0.4rem;
    margin-top: 0.5rem;
    opacity: 0.8;
  }
  h6 {
    font-size: 0.7rem;
    font-weight: var(--titillium-extra-light);
    letter-spacing: 0.2rem;
    opacity: 0.7;
  }
  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 3rem;
      margin-top: -1rem;
    }
    h5 {
      font-size: 1.1rem;
      margin-top: 0;
    }
    h6 {
      font-size: 0.7rem;
    }
  }
  @media screen and (min-width: 1200px) {
    h2 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 4rem;
      margin-top: -1.3rem;
    }
    h5 {
      font-size: 1.4rem;
      margin-top: -0.6rem;
    }
    h6 {
      font-size: 0.8rem;
    }
  }
`;

const SocialLinkWrapper = styled.div`
  height: 10rem;
  width: 4rem;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  ul li {
    list-style: none;
    line-height: 2.5rem;
  }
  .social-link {
    color: #fff;
    font-size: 1.3rem;
    opacity: 0.7;
  }
  .social-link:hover {
    opacity: 1;
    color: var(--dark-purple);
    transition: 0.3s ease-in-out all;
  }
  /* .icon {
    text-shadow: 0 0 0.5rem;
    animation: animate 1s infinite linear;
  }
  @keyframes animate {
    0%,
    100% {
      color: deeppink;
    }
    25% {
      color: deepskyblue;
    }
    50% {
      color: lawngreen;
    }
    75% {
      color: yellow;
    }
  } */
  @media screen and (min-width: 768px) {
    width: 6rem;
    bottom: 5rem;
    ul li {
      line-height: 2.3rem;
    }
    .social-link {
      font-size: 1.1rem;
    }
    span {
      border-left: 1px solid #fff;
      height: 11vh;
      position: absolute;
      bottom: -5rem;
    }
  }
`;

const DependencyWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    pre {
      font-family: var(--source-code-font);
      font-size: 0.7rem;
      line-height: 1.2rem;
    }
    pre .parent {
      color: #fd6767be;
      margin-left: 0.8rem;
    }
    pre .children {
      margin-left: 0.4rem;
      color: #71c05f;
    }
    pre .nested-children {
      margin-left: 2rem;
      color: #71c05f;
    }
    pre .closing-braces {
      margin-left: 0.9rem;
    }
  }
  @media screen and (min-width: 1200px) {
    pre {
      font-size: 0.8rem;
    }
  }
`;

export default Home;
