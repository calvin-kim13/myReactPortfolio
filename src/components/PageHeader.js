import React from "react";
import styled from "styled-components";

const PageHeader = (props) => {
  return (
    <HeaderWrapper>
      <h3 className="header">{props.children}</h3>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  padding: 2rem 0 0 1rem;
  font-family: var(--titillium-font);
  .header {
    font-weight: var(--titillium-bold);
    color: var(--grey);
    font-size: 2.7rem;
  }
  @media screen and (min-width: 768px) {
    padding: 3rem 0 0 3rem;
  }
`;

export default PageHeader;
