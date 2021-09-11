import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Main>
      <h2>
        Hello, I am Mohit Rathod. currently making some helpful blogs and
        learning development doing different projects.
      </h2>
      <h1>Visit My portfolio for more projects ⬇️⬇️⬇️</h1>
      <a href="" target="_blank">
        Portfolio Link
      </a>
      <span>here are my some project links</span>
      <Links>
        <a href="https://neflix-clone-c3186.web.app/" target="_blank">
          Netflix Clone
        </a>
        <a href="https://keep-notes-dc2ee.web.app/" target="_blank">
          Google Keep Notes clone
        </a>
        <a href="https://clone-69e30.web.app/" target="_blank">
          Amazon Clone
        </a>
        <a href="" target="_blank">
          Amazon 2.0 Clone
        </a>
        <a href="https://linked-clone-37a7c.web.app/" target="_blank">
          Linkedin clone
        </a>
      </Links>
    </Main>
  );
};

export default About;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 6px;
    color: black;
    font-weight: 600;
    font-size: 24px;
  }
  span {
    margin: 10px;
    padding: 8px;
    font-size: 22px;
    font-weight: 400;
  }
  a {
    border-bottom: 2px solid black;
    color: blue;
    letter-spacing: 1px;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    :hover {
      color: orange;
    }
    :active {
      color: red;
    }
  }
  h1 {
    font-size: 24px;
    color: black;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    margin: 8px;
    padding: 6px;
    color: blue;
    text-decoration: none;
    cursor: pointer;
    font-size: 26px;
    font-weight: 500;
    border-bottom: 2px solid black;
    display: flex;
    flex-wrap: wrap;
  }

  span {
    margin: 8px;
    padding: 6px;
    font-size: 22px;
    color: black;
    font-weight: 500;
  }
`;
