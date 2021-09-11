import React from "react";
import styled from "styled-components";
import Second from "./day_five/Second";
import Third from "./day_five/Third";
import fbb from "./day_five/fbb.webp";
import ig from "./day_five/ig.png";
import tw from "./day_five/tw.png";
import kn from "./day_five/kn.png";
import gtrs from "./day_five/gtrs.png";

const Dayfive = () => {
  return (
    <Maindiv>
      <Heading>
        <span>5 Social Media Icons</span>
      </Heading>

      <Info>
        <span>3 designs of icons will be shown here</span>
        <h4> Focus/Click on any icon to see effects</h4>
        <p>
          These icons will not redirect anywhere because shown as design purpose
          only
        </p>
      </Info>

      {/* one */}
      <DesignOne>
        <Header>
          <span> Design One</span>
        </Header>
        {/* icons */}
        <Icons>
          <a title="Facebook">
            <Each>
              <img src={fbb} />
              <span>Facebook</span>
            </Each>
          </a>

          <a title="Twitter">
            <Each>
              <img src={tw} />
              <span>Twitter</span>
            </Each>
          </a>

          <a title="Instagram">
            <Each>
              <img src={ig} />
              <span>Instagram</span>
            </Each>
          </a>

          <a title="GitHub">
            <Each>
              <img src={gtrs} />
              <span>GitHub</span>
            </Each>
          </a>

          <a title="LinkedIn">
            <Each>
              <img src={kn} />
              <span>LinkedIn</span>
            </Each>
          </a>
        </Icons>
      </DesignOne>

      {/* two */}
      <DesignTwo>
        <Second />
      </DesignTwo>

      <DesignThree>
        <Third />
      </DesignThree>
    </Maindiv>
  );
};

export default Dayfive;

/**heading and main */
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

const Info = styled.div`
  /* margin: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 4px;
    font-size: 16px;
    font-weight: 500;
    border: 2px solid black;
    padding: 4px;
    border-radius: 4px;
  }

  h4 {
    margin: 10px;
    padding: 6px;
    font-size: 20px;
    color: red;
  }

  span {
    border-bottom: 2px solid black;
    padding: 6px;
    font-size: 16px;
    color: blue;
    font-weight: 500;
  }
`;

const DesignOne = styled.div`
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
  border-radius: 4px;
  margin: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const Header = styled.div`
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

  span {
    text-decoration: none;
    border: none;
    color: black;
    font-size: 36px;
    padding: 6px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  svg {
    padding: 6px;
    width: 80px;
    height: 80px;
    color: black;
  }

  a {
    text-decoration: none;

    -webkit-tap-highlight-color: transparent;

    height: 120px;
    width: 360px;
  }
`;

const Each = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 2px 10px;
  cursor: pointer;

  background-color: white;
  border: 2px solid black;
  border-radius: 4px;
  transition: 0.2s;

  img {
    width: 50px;
    height: 50px;
  }

  :hover {
    border: 2px transparent;
    background: rgb(48, 255, 0);
    background: linear-gradient(
      90deg,
      rgba(48, 255, 0, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );

    span {
      color: white;
    }

    transform: scale(1.08, 1.08);
    z-index: -1;

    border-radius: 4px;

    transition: 0.2s;
    box-shadow: 0px 0px 14px 6px rgba(125, 125, 125, 0.64);
    -webkit-box-shadow: 0px 0px 14px 6px rgba(125, 125, 125, 0.64);
    -moz-box-shadow: 0px 0px 14px 6px rgba(125, 125, 125, 0.64);
  }
`;

const DesignTwo = styled.div`
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
  border-radius: 4px;
  margin: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  background-color: rgb(250, 250, 250);
`;

const DesignThree = styled.div`
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.64);
  border-radius: 4px;
  margin: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
