import styled from "styled-components";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import { Tooltip } from "antd";

const ProjectCard = ({
  title,
  description,
  // usedTech,
  image,
  alt,
  external,
  github,
}) => {
  return (
    <CardWrapper>
      <img src={image} alt={alt} />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      {/* <p className="usedTech">{usedTech}</p> */}
      <ul>
        <li>
          <Tooltip title="GitHub" placement="bottom">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FiIcons.FiGithub />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Live Link" placement="bottom">
            <a
              href={external}
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <HiIcons.HiOutlineExternalLink />
            </a>
          </Tooltip>
        </li>
      </ul>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  height: 275px;
  margin: 0 auto;
  padding: 20px 30px;
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  transition: 0.5s;
  font-family: var(--titillium-font);
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  &:hover {
    color: #333;
    background: #fff;
    z-index: 100;
    z-index: 100;
    .title,
    .description,
    .usedTech {
      display: flex;
    }
    ul {
      display: flex;
      z-index: 1000;
    }
    img {
      opacity: 0.05;
    }
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 275px;
    position: absolute;
    opacity: 0.6;
    top: 0;
    left: 0;
  }
  .title {
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    font-weight: var(--titillium-bold);
    display: none;
  }
  .description {
    opacity: 0.8;
    font-size: 0.8rem;
    display: none;
    margin-top: -0.7rem;
  }
  /* .usedTech {
    opacity: 0.8;
    font-weight: var(--titillium-bold);
    display: none;
  } */
  ul {
    display: flex;
    align-items: center;
    display: none;
  }
  ul li {
    list-style: none;
    padding-right: 1rem;
  }
  .social-link {
    color: #333;
    font-size: 1.3rem;
    opacity: 0.6;
  }
  .social-link:hover {
    opacity: 1;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;

export default ProjectCard;
