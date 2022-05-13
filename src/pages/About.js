import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import { Avatar } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import Button from "../components/Button";

const About = () => {
  return (
    <AboutWrapper className="main">
      <AboutGreetingWrapper>
        <Avatar
          alt="Calvin Kim"
          src={profile}
          sx={{
            width: 200,
            height: 200,
          }}
          className="avatar"
        />
        <h3>Hello, I'm Calvin</h3>
        <p>
          I am a softare developer who specializes in front end development.
        </p>
        <div className="social-link-wrapper">
          <ul>
            <li>
              <a
                href="https://github.com/calvin-kim13"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <FaIcons.FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/calvin-kim-143aa51a2/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <FaIcons.FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="../assets/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <AiIcons.AiFillFilePdf />
              </a>
            </li>
          </ul>
        </div>
      </AboutGreetingWrapper>
      <AboutTextWrapper>
        <h3>About Me</h3>
        <p>
          I am a Full-Stack Developer who is passionate about Front-End
          Development. I love to develop applications with React and have a
          strong ability to work with API's thorugh GraphQL. <br />
          <br />I am currently a student at the University of California, Irvine
          bootcamp as I am working towards my Full-Stack Development
          Certificate.
        </p>
        <Button className="home-btn">CONTACT ME</Button>
      </AboutTextWrapper>
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
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  background-color: #1d1d1d;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  @media screen and (min-width: 768px) {
    height: 88vh;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
  }
`;

const AboutGreetingWrapper = styled.div`
  background-color: var(--dark-purple);
  height: 22rem;
  width: 18rem;
  padding: 2rem;
  margin-top: 8rem;
  font-family: var(--open-sans-font);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .avatar {
    margin-top: -7rem;
  }
  h3 {
    text-transform: uppercase;
    font-weight: var(--open-sans-bold);
    font-size: 1.5rem;
  }
  p {
    text-align: center;
    letter-spacing: 0.05rem;
    opacity: 0.8;
    font-size: 0.9rem;
  }
  .social-link-wrapper {
    width: 60%;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  ul li {
    list-style: none;
  }
  .link {
    color: #fff;
    font-size: 1.4rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
    height: 60%;
    width: 17rem;
    justify-content: flex-start;
    h3 {
      margin-top: 1rem;
      text-align: center;
    }
    p {
      margin-top: 1rem;
    }
    .social-link-wrapper {
      margin-top: 2.2rem;
    }
  }
`;

const AboutTextWrapper = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.2rem 1.2rem 5rem;
  font-family: var(--titillium-font);
  h3 {
    font-weight: var(--titillium-black);
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    font-weight: var(--titillium-light);
    color: #979797;
    font-size: 1rem;
    line-height: 1.7rem;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 22rem;
    margin-left: 2rem;
    p {
      text-align: left;
    }
  }
  @media screen and (min-width: 1200px) {
    width: 28rem;
    h3 {
      font-size: 3rem;
    }
    p {
      text-align: left;
      font-size: 1.2rem;
      letter-spacing: 0.07rem;
      line-height: 1.8rem;
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

export default About;
