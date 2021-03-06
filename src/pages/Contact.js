import React from "react";
import styled from "styled-components";
import background from "../assets/background3.mp4";
import Form from "../components/Form";
import ContactInfo from "../components/ContactInfo";
import PageHeader from "../components/PageHeader";
import Map from "../components/Map";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <ContactWrapper className="main">
      <video loop={true} muted={true} autoPlay={true} playsInline={true}>
        <source src={background} />
      </video>
      <div className="contact-page-wrapper">
        <div className="left-container">
          <Fade>
            <PageHeader>Contact Me</PageHeader>
          </Fade>
          <Fade direction="up">
            <Form />
          </Fade>
          <Fade delay={500}>
            <ContactInfo />
          </Fade>
        </div>
        <div className="map-wrapper">
          <Map />
        </div>
      </div>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  height: 87.9vh;
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    opacity: 0.9;
    z-index: -1;
  }
  .contact-page-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    height: fit-content;
  }
  .left-container {
    height: 100%;
    @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  /* .map-wrapper {
    display: none;
  } */
  @media screen and (min-width: 1024px) {
    height: 100vh;
    .contact-page-wrapper {
      grid-template-columns: repeat(2, 50%);
    }
    .map-wrapper {
      display: grid;
      height: 100vh;
    }
  }
`;

export default Contact;
