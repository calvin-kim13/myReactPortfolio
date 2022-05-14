import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import { Avatar } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Button from "../components/Button";
import SideSocialLinks from "../components/SideSocialLinks";
import background from "../assets/background3.mp4";

const About = () => {
  return (
    <AboutWrapper className="main">
      <video loop={true} muted={true} autoPlay={true} playsInline={true}>
        <source src={background} />
      </video>
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
        <div className="h3">Hello, I'm Calvin</div>
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
        <div className="h3">About Me</div>
        <p>
          I am a Full-Stack Developer who is passionate about Front-End
          Development. I love to develop applications with React and have a
          strong ability to work with API's thorugh GraphQL. <br />
          <br />I am currently a student at the University of California, Irvine
          bootcamp as I am working towards my Full-Stack Development
          Certificate.
        </p>
        <Button className="home-btn about-btn">CONTACT ME</Button>
      </AboutTextWrapper>
      <SideSocialLinks />
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  /* background-color: #1d1d1d; */
  /* color: #fff; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
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
  .h3 {
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
    opacity: 0.6;
  }
  .link:hover {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
    height: 60%;
    width: 17rem;
    justify-content: flex-start;
    .h3 {
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
  .h3 {
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
  .about-btn {
    width: 80%;
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
    .about-btn {
      width: 100%;
    }
  }
`;

export default About;
