import React from "react";
import styled from "styled-components";

const Dayfour = () => {
  return (
    <Maindiv>
      <Heading>
        <span> 4. Ratings</span>
      </Heading>

      <Span>
        <span>Click / Focus / Hover on anything</span>
      </Span>

      <Main>
        <Stars>
          <Each>
            {/* <img src={star}></img> */}
            <span>Bad</span>
          </Each>

          <Each>
            {/* <img src={star}></img> */}
            <span>Good</span>
          </Each>

          <Each>
            {" "}
            {/* <img src={star}></img> */}
            <span>Better</span>
          </Each>

          <Each>
            {/* <img src={star}></img> */}
            <span>Very Good</span>
          </Each>

          <Each>
            {/* <img src={star}></img> */}
            <span>Excellent</span>
          </Each>
        </Stars>
      </Main>
    </Maindiv>
  );
};

export default Dayfour;

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
  margin-top: 10px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  transition: 0.4s;
  height: 80px;
  @media screen and (max-width: 630px) {
    height: 100%;
  }

  :hover {
    transition: 0.4s;
    border-radius: 10px;
    border: 2px solid white;
    background-color: black;
    color: white;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.75);
  }
`;

const Each = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0px 10px;
  height: 100px;
  -webkit-tap-highlight-color: transparent;

  :hover {
    transition: 0.4s;

    :first-child {
      color: red;
      ::after {
        content: "😒";
      }
    }
    :nth-child(2) {
      color: rgb(255, 81, 0);
      ::after {
        content: "🙂";
      }
    }
    :nth-child(3) {
      color: rgb(255, 255, 0);
      ::after {
        content: "😃";
      }
    }
    :nth-child(4) {
      color: rgb(166, 255, 0);
      ::after {
        content: "🔥";
      }
    }
    :last-child {
      color: rgb(17, 255, 0);
      ::after {
        content: "🏅";
      }
    }

    ::after {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 30px;
    }
  }

  span {
    font-size: 24px;
    font-weight: 500;

    :hover {
    }
  }
`;

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Span = styled.div`
  padding: 6px;
  margin: 10px;
  font-size: 18px;
  border: 1px solid black;
  color: blue;
  border-radius: 4px;
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
