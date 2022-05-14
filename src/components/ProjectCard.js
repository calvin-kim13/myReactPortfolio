import styled from "styled-components";
import * as FiIcons from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import Button from "../components/Button";

const ProjectCard = ({
  title,
  description,
  usedTech,
  image,
  alt,
  external,
  github,
}) => {
  return (
    <CardWrapper>
      <img src={image} alt={alt} />
      <div className="btn-wrapper">
        <Button className="home-btn project-btn">{title}</Button>
      </div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="usedTech">{usedTech}</p>
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
  width: 300px;
  height: 320px;
  border-radius: 15px;
  margin: 7px;
  padding: 20px 30px;
  position: relative;
  background: rgba(35, 35, 35, 1);
  box-shadow: 10px 20px 25px rgba(0, 0, 0, 0.9);
  transition: all 0.5s;
  font-family: var(--titillium-font);
  display: flex;
  flex-direction: column;
  .btn-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
  }
  .project-btn {
    width: 85%;
    font-weight: var(--titillium-bold);
    font-size: 1.2rem;
  }
  &:hover {
    border: 2px solid var(--dark-purple);
    box-shadow: inset 0 0 320px 0 var(--dark-purple);
    transform: scale(1.03);
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
    .project-btn {
      display: none;
    }
    img {
      opacity: 0.1;
    }
  }
  img {
    object-fit: cover;
    width: 300px;
    height: 320px;
    position: absolute;
    opacity: 0.15;
    border-radius: 15px;
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
  .usedTech {
    opacity: 0.8;
    font-weight: var(--titillium-bold);
    display: none;
  }
  ul {
    display: flex;
    align-items: center;
    display: none;
  }
  ul li {
    list-style: none;
    /* padding: 1rem 1rem 1rem 0; */
    padding-right: 1rem;
  }
  .social-link {
    color: #fff;
    font-size: 1.2rem;
    opacity: 0.6;
  }
  .social-link:hover {
    opacity: 1;
  }
`;

export default ProjectCard;
