import React from "react";
import ProjectCard from "../components/ProjectCard";
import styled from "styled-components";
import { data } from "../components/json/ProjectData";
import background from "../assets/background3.mp4";
import PageHeader from "../components/PageHeader";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <ProjectsWrapper className="main">
      <video loop={true} muted={true} autoPlay={true} playsInline={true}>
        <source src={background} />
      </video>
      <Fade>
        <PageHeader>My Works</PageHeader>
      </Fade>
      <div className="cards">
        <Fade direction="up">
          <ProjectCard
            title={data[0].title}
            description={data[0].description}
            usedTech={data[0].usedTech}
            image={data[0].image}
            alt={data[0].alt}
            external={data[0].external}
            github={data[0].github}
          />
          <ProjectCard
            title={data[1].title}
            description={data[1].description}
            usedTech={data[1].usedTech}
            image={data[1].image}
            alt={data[1].alt}
            external={data[1].external}
            github={data[1].github}
          />
          <ProjectCard
            title={data[2].title}
            description={data[2].description}
            usedTech={data[2].usedTech}
            image={data[2].image}
            alt={data[2].alt}
            external={data[2].external}
            github={data[2].github}
          />
          <ProjectCard
            title={data[4].title}
            description={data[4].description}
            usedTech={data[4].usedTech}
            image={data[4].image}
            alt={data[4].alt}
            external={data[4].external}
            github={data[4].github}
          />
          <ProjectCard
            title={data[3].title}
            description={data[3].description}
            usedTech={data[3].usedTech}
            image={data[3].image}
            alt={data[3].alt}
            external={data[3].external}
            github={data[3].github}
          />
          <ProjectCard
            title={data[5].title}
            description={data[5].description}
            usedTech={data[5].usedTech}
            image={data[5].image}
            alt={data[5].alt}
            external={data[5].external}
            github={data[5].github}
          />
        </Fade>
      </div>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
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
  .cards {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    .cards {
      grid-template-columns: repeat(2, 50%);
    }
  }
  @media screen and (min-width: 1024px) {
    height: 100vh;
    overflow: hidden;
    .cards {
      grid-template-columns: repeat(4, 25%);
    }
  }
  @media screen and (min-width: 1700px) {
    overflow: hidden;
  }
`;

export default Projects;
