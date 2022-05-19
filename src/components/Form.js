import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const Form = () => {
  return (
    <FormWrapper>
      <form
        action="https://formsubmit.co/calvinkim1230@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="Portfolio Form" />
        {/* <input type="hidden" name="_next" value="https://localhost3000/thanks" /> */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="input"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          className="input"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          className="input"
          required
        />
        <div className="btn-wrapper">
          <Button type="submit" className="home-btn contact-btn">
            SEND
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 1rem;
  }
  .input {
    width: 100%;
    margin-bottom: 0.6rem;
    border-style: none;
    background-color: #2e313c;
    padding: 0.6rem 1rem;
    transition: all 0.4s;
    font-family: var(--titillium-font);
    letter-spacing: 0.2rem;
  }
  .input::placeholder {
    font-family: var(--titillium-font);
    letter-spacing: 0.2rem;
  }
  .input:focus {
    outline: none !important;
    box-shadow: inset 0 0 20px 0 var(--dark-purple);
  }
  .btn-wrapper {
    width: 100%;
    margin-top: -1.9rem;
  }
  .contact-btn {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    .input {
      width: 80%;
    }
    .btn-wrapper {
      width: 80%;
    }
    .contact-btn {
      width: 50%;
    }
  }
  @media screen and (min-width: 1024px) {
    form {
      align-items: center;
    }
    .input {
      width: 90%;
    }
    .btn-wrapper {
      width: 90%;
    }
    .contact-btn {
      width: 50%;
    }
  }
  @media screen and (min-width: 1024px) {
    .contact-btn {
      width: 50%;
      height: 3rem;
      font-size: 0.8rem;
    }
    .contact-btn span {
      top: -11px;
    }
  }
`;

export default Form;
