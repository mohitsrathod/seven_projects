import React from "react";
import styled from "styled-components";
import logo from "./logo.png";
import fbb from "../Day_one-five/day_five/fbb.webp";
import ig from "../Day_one-five/day_five/ig.png";
import tw from "../Day_one-five/day_five/tw.png";
import kn from "../Day_one-five/day_five/kn.png";
import gtrs from "../Day_one-five/day_five/gtrs.png";

const DaySeven = () => {
  return (
    <Maindiv>
      <Heading>
        <span> 7 Profile Card</span>
      </Heading>

      <Main>
        <DesignOne>
          <Img>
            <img src={logo} />
          </Img>

          <Discription>
            <Div>
              <h2>Save To Grow</h2>
            </Div>

            <Divone>
              <span>
                We are providing best content on Social media platforms. Here
                are some Topics
              </span>
              <p>Click on Instagram Icon to reach page</p>
            </Divone>
            <Divtwo>
              <ul>
                <li>Self-development</li>
                <li>Business Ideas</li>
                <li>Marketing Strategies</li>
                <li>Motivation</li>
                <li>Advice from Successful people</li>
                <li>Money Making/Saving ideas</li>
                <li>Learning from diffrent books and much more</li>
              </ul>
            </Divtwo>
          </Discription>

          <Icons>
            <EachIcon>
              <img src={fbb} />
            </EachIcon>

            <EachIcon>
              <a href="https://www.instagram.com/save.to.grow" target="_blank">
                <img src={ig} />
              </a>
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
        </DesignOne>
      </Main>
    </Maindiv>
  );
};

export default DaySeven;

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 10px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`;

const Heading = styled.div`
  background-color: rgba(20, 19, 37, 0.95);
  margin: 4px 4px 10px 4px;
  padding: 4px;
  border-radius: 8px;

  span {
    font-size: 36px;
    font-weight: 500;
    line-height: 2;
    color: white;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const DesignOne = styled.div`
  display: flex;
  margin: 10px;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px rgba(67, 67, 67, 0.54);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(67, 67, 67, 0.54);
  -moz-box-shadow: 0px 0px 10px 0px rgba(67, 67, 67, 0.54);
  border-radius: 16px;
  padding: 10px;

  width: 350px;
`;

const Img = styled.div`
  padding: 6px;
  img {
    width: 100%;
    height: 100%;
    max-width: 100px;
    max-height: 100px;
    border-radius: 10%;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.54);
    -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.54);
  }
`;

const Discription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  h2 {
    margin: 4px;
    padding: 4px;
    color: black;
    font-size: 22px;
  }
`;

const Divone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin: 2px;
    padding: 6px;
    color: red;
    font-size: 18px;
    font-weight: 500;
  }
  span {
    color: limegreen;

    font-size: 18px;
    font-weight: 500;
    padding: 4px;
    border-radius: 4px;
    margin: 6px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.54);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.54);
  }
`;

const Divtwo = styled.div`
  display: flex;
  ul {
    margin: 0;
    li {
      margin: 8px;
      border-radius: 4px;
      padding: 4px;
      font-size: 16px;
      font-weight: 500;
      color: black;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.54);
      -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.54);
      -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.54);
    }
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const EachIcon = styled.div`
  -webkit-tap-highlight-color: transparent;

  a {
    -webkit-tap-highlight-color: transparent;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 40px;

  margin: 10px;
  padding: 5px 20px;
  border-radius: 20%;

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
    transition: 0.5s;
    box-shadow: none;

    color: black;

    box-shadow: 1px 1px 1px 1px rgba(113, 113, 113, 0.75);
    -webkit-box-shadow: 1px 1px 1px 1px rgba(113, 113, 113, 0.75);
    -moz-box-shadow: 1px 1px 1px 1px rgba(113, 113, 113, 0.75);
  }

  img {
    border-radius: 20%;
    padding: 4px;

    user-select: none;

    width: 30px;
    height: 30px;

    background: rgb(224, 224, 224);
    background: linear-gradient(
      90deg,
      rgba(224, 224, 224, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;
