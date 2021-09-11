import React from "react";
import styled from "styled-components";
import fbb from "./fbb.webp";
import ig from "./ig.png";
import tw from "./tw.png";
import kn from "./kn.png";
import gtrs from "./gtrs.png";

const Second = () => {
  return (
    <DesignTwo>
      <Header>
        <span> Design Two</span>
      </Header>

      <Icons>
        <EachIcon>
          <img src={fbb} />
        </EachIcon>

        <EachIcon>
          <img src={ig} />
        </EachIcon>

        <EachIcon>
          <img src={tw} />
        </EachIcon>

        <EachIcon>
          <img src={kn} />
        </EachIcon>

        <EachIcon>
          <img src={gtrs} />
        </EachIcon>
      </Icons>
    </DesignTwo>
  );
};

export default Second;

const DesignTwo = styled.div`
  border-radius: 4px;
  margin: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const Header = styled.div`
  margin-bottom: 20px;
  span {
    background-color: black;
    font-size: 18px;
    font-weight: 500;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding: 6px;

    border-radius: 8px;
  }
`;

const Icons = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const EachIcon = styled.div`
  -webkit-tap-highlight-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 80px;

  margin: 10px;
  padding: 10px 40px;
  border-radius: 100%;

  cursor: pointer;

  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(224, 224, 224, 1) 100%
  );
  box-shadow: 2px 6px 7px 3px rgba(113, 113, 113, 0.75);
  -webkit-box-shadow: 2px 6px 7px 3px rgba(113, 113, 113, 0.75);
  -moz-box-shadow: 2px 6px 7px 3px rgba(113, 113, 113, 0.75);
  transition: 0.5s;

  color: blue;
  :hover {
    transition: 0.8s;
    box-shadow: none;

    color: black;

    box-shadow: 1px 1px 1px 1px rgba(113, 113, 113, 0.75);
    -webkit-box-shadow: 1px 1px 1px 1px rgba(113, 113, 113, 0.75);
    -moz-box-shadow: 1px 1px 1px 1px rgba(113, 113, 113, 0.75);
  }

  img {
    border-radius: 50%;
    padding: 8px;

    user-select: none;

    width: 60px;
    height: 60px;

    background: rgb(224, 224, 224);
    background: linear-gradient(
      90deg,
      rgba(224, 224, 224, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;
