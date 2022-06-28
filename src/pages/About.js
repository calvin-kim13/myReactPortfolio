import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import { Avatar } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import Button from "../components/Button";
import SideSocialLinks from "../components/SideSocialLinks";
import background from "../assets/background3.mp4";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import Pdf from "../assets/resume.pdf";
// import Zoom from "react-reveal/Zoom";
import { Fade } from "react-awesome-reveal";

const About = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <AboutWrapper className="main">
      <video loop={true} muted={true} autoPlay={true} playsInline={true}>
        <source src={background} />
      </video>
      <Fade>
        <PageHeader>Who am I?</PageHeader>
      </Fade>
      <Fade direction="up">
        <div className="about-content-wrapper">
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
            <div className="h3">I'm Calvin...</div>
            <p>
              {/* I am a softare developer specializing in front end development. */}
              Outside of coding, I love sports, especially basketball, hiking,
              and watching shows on Netflix.
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
                    <FiIcons.FiGithub />
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
                    href={Pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    <AiIcons.AiOutlineFile />
                  </a>
                </li>
              </ul>
            </div>
          </AboutGreetingWrapper>
          <AboutTextWrapper>
            <Fade direction="up">
              <div className="h3">About Me</div>
            </Fade>
            <Fade direction="up">
              <p>
                I am a Full-Stack Developer who is passionate about Front-End
                Development. I love to develop applications with React and
                creating polished user interfaces. <br />
                <br />I have a Full-Stack Web Development certificate from the
                University of California, Irvine. <br /> <br />I have great
                attention to detail, I am result-oriented, and I am always
                willing to learn new things,
              </p>
            </Fade>
            <Button className="home-btn about-btn" onClick={handleClick}>
              CONTACT ME
            </Button>
          </AboutTextWrapper>
        </div>
      </Fade>
      <SideSocialLinks />
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  height: fit-content;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    opacity: 0.9;
    z-index: -1;
  }
  .about-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    height: 88vh;
    .about-content-wrapper {
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      margin-top: 4rem;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
    overflow: hidden;
    .about-content-wrapper {
      margin-top: 3rem;
    }
  }
  @media screen and (min-width: 1600px) {
    .about-content-wrapper {
      margin-top: 5rem;
    }
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
    font-size: 1.2rem;
    margin: 0 0.3rem;
    color: #2e313c;
    border-radius: 50%;
    background: #fff;
    padding: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    transition: 0.3s ease-in-out all;
    &:hover {
      opacity: 1;
    }
  }
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 768px) {
    margin-top: 2rem;
    height: 24rem;
    width: 17rem;
    justify-content: flex-start;
    .h3 {
      margin-top: 1rem;
      text-align: center;
    }
    .social-link-wrapper {
      margin-top: 1.3rem;
    }
  }
  @media screen and (min-width: 1600px) {
    margin-top: 2rem;
    height: 29rem;
    width: 17rem;
    justify-content: flex-start;
    .h3 {
      margin-top: 1rem;
      text-align: center;
    }
    .social-link-wrapper {
      margin-top: 2.2rem;
    }
  }
`;

const AboutTextWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: var(--titillium-font);
  .h3 {
    font-weight: var(--titillium-black);
    font-size: 2.3rem;
    letter-spacing: 0.1rem;
    color: var(--grey);
  }
  p {
    margin-top: 0.6rem;
    text-align: center;
    font-weight: var(--titillium-light);
    color: #979797;
    font-size: 1.1rem;
    line-height: 1.7rem;
  }
  .about-btn {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 29rem;
    margin-left: 2rem;
    p {
      text-align: left;
    }
  }
  /* @media screen and (min-width: 1200px) {
    h3 {
      font-size: 2.8rem;
    }
    p {
      text-align: left;
      font-size: 1rem;
      letter-spacing: 0.07rem;
      line-height: 1.6rem;
    }
    .about-btn {
      width: 90%;
    }
  } */
`;

export default About;
