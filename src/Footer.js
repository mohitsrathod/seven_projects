import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Maindiv>
      <span>Projects by mohit rathod </span>
    </Maindiv>
  );
};

export default Footer;

const Maindiv = styled.div`
  background-color: rgba(9, 0, 114, 0.431);

  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  z-index: 1;
  span {
    padding: 6px;
    font-size: 22px;
    color: black;
    font-weight: 400;
  }
`;
