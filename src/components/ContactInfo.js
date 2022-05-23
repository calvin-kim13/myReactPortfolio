import React from "react";
import styled from "styled-components";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import Pdf from "../assets/resume.pdf";

const ContactInfo = () => {
  return (
    <ContactInfoWrapper>
      <div className="item">
        <LocalPhoneOutlinedIcon className="icon" />{" "}
        <span className="item-content">(714) 477-3232</span>
      </div>
      <div className="item">
        <AlternateEmailOutlinedIcon className="icon" />{" "}
        <span className="item-content">calvinkim1230@gmail.com</span>
      </div>
      <div className="item">
        <RoomOutlinedIcon className="icon" />{" "}
        <span className="item-content">Brea, CA 92821</span>
      </div>
      <h3>Resume and Social Links</h3>
      <div className="social-links-container">
        <div>
          <a
            href="https://github.com/calvin-kim13"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FiIcons.FiGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/calvin-kim-143aa51a2/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaIcons.FaLinkedinIn />
          </a>
        </div>
        <div>
          <a
            href={Pdf}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <AiIcons.AiOutlineFile />
          </a>
        </div>
      </div>
    </ContactInfoWrapper>
  );
};

const ContactInfoWrapper = styled.div`
  // margin-top: 1rem;
  padding: 1rem;
  font-family: var(--titillium-font);
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-weight: var(--titillium-extra-light);
  }
  .icon {
    font-size: 0.9rem;
  }
  .item-content {
    margin-left: 0.5rem;
    letter-spacing: 0.1rem;
  }
  h3 {
    margin-top: 1rem;
    font-size: 1.4rem;
    color: var(--grey);
    font-weight: var(--titillium-bold);
  }
  .social-links-container {
    display: flex;
    align-items: center;
  }
  .social-link {
    font-size: 1rem;
    margin: 0.2rem 0.5rem 0 0.7rem;
    color: #fff;
    border-radius: 50%;
    background: #2e313c;
    padding: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    transition: 0.3s ease-in-out all;
    &:hover {
      opacity: 1;
    }
  }
  @media screen and (min-width: 768px) {
    padding-left: 6.5rem;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 3.5rem;
    .item-content {
      font-weight: var(--titillium-extra-light);
      font-size: 0.8rem;
      letter-spacing: 0.15rem;
    }
  }
`;

export default ContactInfo;
