import React from "react";
import styled from "styled-components";

const CodeSnippet = () => {
  return (
    <DependencyWrapper>
      <pre>
        <pre>&#123;</pre>
        <em className="parent">"name"</em> {""} :
        <em className="children"> "portfolio"</em>
        , <br />
        <em className="parent">"version"</em> {""} :
        <em className="children"> "2.0.0"</em>
        , <br />
        <em className="parent">"owner"</em> {""} :
        <em className="children"> "Calvin Kim"</em>
        , <br />
        <em className="parent">"email"</em> {""} :
        <em className="children"> "calvinkim1230@gmail.com"</em>
        , <br />
        <em className="parent">"phone"</em> {""} :
        <em className="children"> "(714) 477-3232"</em>
        , <br />
        <em className="parent">"description"</em> {""} :
        <em className="children"> "Full-Stack Developer"</em>
        , <br />
        <em className="parent">"repository"</em> {""} :
        <em className="children"> "github.com/calvin-kim13"</em>
        , <br />
        <em className="parent">"engines"</em> {""} : {""} [ <br />
        <em className="nested-children"> "javascript"</em>, <br />
        <em className="nested-children"> "css"</em>, <br />
        <em className="nested-children"> "html"</em>, <br />
        <em className="nested-children"> "nodejs"</em>, <br />
        <em className="nested-children"> "graphql"</em>, <br />
        <em className="nested-children"> "mongodb"</em>, <br />
        <pre className="closing-braces">] ,</pre>
        <em className="parent">"dependencies"</em> {""} : {""} [ <br />
        <em className="nested-children"> "react"</em>, <br />
        <em className="nested-children"> "typescript"</em>, <br />
        <em className="nested-children"> "redux-toolkit"</em>, <br />
        <em className="nested-children"> "styled-components"</em>, <br />
        <em className="nested-children"> "express"</em>, <br />
        <em className="nested-children"> "flexbox"</em>, <br />
        <pre className="closing-braces">] ,</pre>
        <em className="parent">"devDependencies"</em> {""} : {""} &#123; <br />
        <em className="nested-children"> "music"</em> {""} :
        <em className="children"> true</em>, <br />
        <em className="nested-children"> "monitors"</em> {""} :
        <em className="children">"^2"</em>, <br />
        <em className="nested-children"> "mode"</em> {""} :
        <em className="children"> "dark"</em>, <br />
        <pre className="closing-braces"> &#125; ,</pre>
        <pre>&#125;</pre>
      </pre>
    </DependencyWrapper>
  );
};

const DependencyWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    pre {
      font-family: var(--source-code-font);
      font-size: 0.7rem;
      line-height: 1.2rem;
    }
    pre .parent {
      color: #fd6767be;
      margin-left: 0.8rem;
    }
    pre .children {
      margin-left: 0.4rem;
      color: #71c05f;
    }
    pre .nested-children {
      margin-left: 2rem;
      color: #71c05f;
    }
    pre .closing-braces {
      margin-left: 0.9rem;
    }
  }
  @media screen and (min-width: 1200px) {
    pre {
      font-size: 0.8rem;
    }
  }
`;

export default CodeSnippet;
