import styled from "styled-components";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";

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
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FiIcons.FiGithub />
          </a>
        </li>
        <li>
          <a
            href={external}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <HiIcons.HiOutlineExternalLink />
          </a>
        </li>
      </ul>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  height: 280px;
  margin: 0 auto;
  padding: 20px 30px;
  position: relative;
  background: rgba(0, 0, 0, 0.9);
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
    height: 280px;
    position: absolute;
    opacity: 0.6;
    top: 0;
    left: 0;
  }
  .title {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-weight: var(--titillium-bold);
    display: none;
  }
  .description {
    opacity: 0.8;
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
