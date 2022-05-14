import React from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";

const SideSocialLinks = () => {
  return (
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
  );
};

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
      height: 6rem;
      position: absolute;
      margin-top: 14rem;
    }
  }
`;

export default SideSocialLinks;
