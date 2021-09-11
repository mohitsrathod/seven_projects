import React from "react";
import styled from "styled-components";

const Third = () => {
  return (
    <DesignThree>
      <Header>
        <span> Design Three</span>
      </Header>

      <Icons>
        <EachIcon>
          <h2>Follow us</h2>

          <DivforTools>
            <Tooltip>
              <span>Facebook</span>
            </Tooltip>
          </DivforTools>
          <DivforTools>
            <Tooltip>
              <span>Instagram</span>
            </Tooltip>
          </DivforTools>
          <DivforTools>
            <Tooltip>
              <span>Twitter</span>
            </Tooltip>
          </DivforTools>
          <DivforTools>
            <Tooltip>
              <span>LinkedIn</span>
            </Tooltip>
          </DivforTools>
          <DivforTools>
            <Tooltip>
              <span>GitHub</span>
            </Tooltip>
          </DivforTools>
        </EachIcon>
      </Icons>
    </DesignThree>
  );
};

export default Third;

const DesignThree = styled.div`
  border-radius: 4px;
  margin: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 380px;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const DivforTools = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  display: none;
`;

const Tooltip = styled.div`
  margin: 10px;
  padding: 6px;
  font-size: 20px;
  color: black;
  font-weight: 500;
  background: rgb(0, 108, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 108, 255, 1) 0%,
    rgba(0, 185, 255, 1) 47%,
    rgba(255, 0, 0, 1) 100%
  );

  cursor: pointer;
  border-radius: 4px;

  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 1);

  transition: 0.5s;

  :hover {
    transition: 0.5s;
    transform: scale(1.1, 1.1);
    color: white;
    background: rgb(255, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(0, 185, 255, 1) 47%,
      rgba(0, 108, 255, 1) 100%
    );
  }
`;

const EachIcon = styled.div`
  display: flex;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 185, 255, 1) 47%,
    rgba(0, 108, 255, 1) 100%
  );
  border-radius: 4px;

  h2 {
    margin: 0px;
    font-weight: 500;
    /* background: -webkit-linear-gradient(to right, , , ); */
    background: linear-gradient(to right, #ffffff, #000000);
    -webkit-background-clip: text;
    background-clip: "";
    -webkit-text-fill-color: transparent;
  }
  :hover {
    h2 {
      display: none;
    }
  }

  -webkit-tap-highlight-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 220px;
  height: 20px;
  border: 2px;

  margin: 10px;
  padding: 10px 40px;

  cursor: pointer;

  background-color: white;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 1);

  transition: 0.4s;
  :hover {
    transition: 0.4s;

    background: white;
    border: 2px solid black;

    height: 320px;
    width: 220px;

    ${DivforTools} {
      display: block;
      flex-direction: column;
      width: 200px;
    }
  }

  span {
    font-size: 30px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    border-radius: 50%;
    padding: 10px 20px;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }
`;
