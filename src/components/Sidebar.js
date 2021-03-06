import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import { Avatar, Typography } from "@mui/material";
import profile from "../assets/profile.png";
import Pdf from "../assets/resume.pdf";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const NavIcon = styled(Link)`
  display: none;
  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem 1.5rem;
    width: 100%;
    .arrows {
      color: var(--grey);
    }
  }
`;

const SidebarNav = styled.nav`
  font-family: "Montserrat", sans-serif;
  background: var(--dark);
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  transition: 350ms;
  z-index: 100000;
  .nav-link-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e1e9fc;
    list-style: none;
    height: 60px;
    width: 20%;
    text-decoration: none;
    font-size: 1.3rem;
    opacity: 0.3;
    transition: 0.3s ease-in-out all;
    &:hover {
      opacity: 1;
      cursor: pointer;
      border-bottom: 4px solid var(--dark-purple);
      background-color: #2e313c;
      border-radius: 5px;
    }
  }
  .nav-link span {
    display: none;
  }
  a.active {
    opacity: 1;
    border-bottom: 4px solid var(--dark-purple);
    background-color: #2e313c;
    border-radius: 5px;
  }
  .link-wrap {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    font-family: var(--titillium-font);
    font-weight: var(--titillium-regular);
    letter-spacing: 0.1rem;
    align-items: flex-start;
    width: 300px;
    height: 100vh;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-229px")};
    transition: 350ms;
    z-index: 100000;
    .nav-link-wrapper {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .nav-link {
      display: flex;
      justify-content: space-between;
      color: #e1e9fc;
      padding: 27px;
      height: 80px;
      width: 100%;
      font-size: 1rem;
      &:hover {
        padding-left: 2.5rem;
        border-left: 4px solid var(--dark-purple);
        background: #2e313c;
        border-bottom: none;
        border-radius: 0;
      }
    }
    .nav-link span {
      display: flex;
      margin-left: 0.6rem;
    }
    a.active {
      border-left: 4px solid var(--dark-purple);
      border-bottom: none;
      border-radius: 0;
      background: #2e313c;
    }
    .link-wrap {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .icon {
      font-size: 1.2rem;
    }
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
  .image-social-wrapper {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    .image-social-wrapper {
      ${({ sidebar }) => (sidebar ? `display: flex;` : `display: none;`)}
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.5rem;
    }
    .social-links-wrapper ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .social-links-wrapper ul li {
      list-style: none;
      padding: 0.3rem;
    }
    .social-link {
      color: #fff;
      border-radius: 50%;
      background: #2e313c;
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
  }
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleNavClick = () => setSidebar(false);

  return (
    <>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap sidebar={sidebar}>
          <NavIcon to="#">
            {sidebar ? (
              <MenuFoldOutlined onClick={showSidebar} className="arrows" />
            ) : (
              <MenuUnfoldOutlined onClick={showSidebar} className="arrows" />
            )}
          </NavIcon>
          <div className="image-social-wrapper">
            <Avatar
              alt="Calvin Kim"
              src={profile}
              sx={{
                width: 100,
                height: 100,
                border: "4px solid #2e313c",
                marginBottom: ".8rem",
              }}
            />
            <Typography
              variant="overline"
              fontSize="1rem"
              fontWeight="bold"
              sx={{ color: "#e7dfdd" }}
            >
              @Calvin Kim
            </Typography>
            <Typography
              variant="overline"
              fontSize=".7rem"
              sx={{ color: "#666a78" }}
              marginTop="-.4rem"
              marginBottom=".5rem"
            >
              Software Developer
            </Typography>
            <div className="social-links-wrapper">
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
                    href={Pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <AiIcons.AiOutlineFile />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/" className="nav-link" onClick={handleNavClick}>
              <div className="link-wrap">
                <AiIcons.AiOutlineHome className="icon" />
                <span>Home</span>
              </div>
              {!sidebar ? <AiIcons.AiOutlineHome className="icon" /> : ""}
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={handleNavClick}>
              <div className="link-wrap">
                <BsIcons.BsPerson className="icon" />
                <span>About</span>
              </div>
              {!sidebar ? <BsIcons.BsPerson className="icon" /> : ""}
            </NavLink>
            <NavLink
              to="/projects"
              className="nav-link"
              onClick={handleNavClick}
            >
              <div className="link-wrap">
                <RiIcons.RiPagesLine className="icon" />
                <span>Projects</span>
              </div>
              {!sidebar ? <RiIcons.RiPagesLine className="icon" /> : ""}
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={handleNavClick}
            >
              <div className="link-wrap">
                <BiIcons.BiEnvelope className="icon" />
                <span>Contact</span>
              </div>
              {!sidebar ? <BiIcons.BiEnvelope className="icon" /> : ""}
            </NavLink>
          </div>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
