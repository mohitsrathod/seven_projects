import React, { useState } from "react";
import styled from "styled-components";

const Daytwo = () => {
  /*time*/
  let time = new Date().toLocaleTimeString();

  const [newTime, setnewTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setnewTime(time);
  };
  setInterval(updateTime, 1000); //call this function at interval of 1000ms
  /*time*/

  let date = new Date().getDate(); //date
  let month = new Date().getMonth(); //month
  let year = new Date().getFullYear(); //year

  return (
    <>
      <Maindiv>
        <Heading>
          <span> 2 digital clock</span>
        </Heading>
        <Clock>
          <p> Date and time shown as per device</p>

          <Digits>
            <p>Current Time : </p>
            <span>{newTime}</span>
          </Digits>

          <Fulldate>
            <p> Current Date </p>
            <span>
              {date} / {month} / {year}
            </span>
            <h2> (format : dd/mm/yy) </h2>
          </Fulldate>
        </Clock>
      </Maindiv>
    </>
  );
};

export default Daytwo;

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

/*main clock*/
const Clock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  p {
    background-color: black;
    color: red;
    padding: 4px;
    margin: 8px;
    border-radius: 4px;
    font-weight: 500;
    letter-spacing: 0.2px;
    box-shadow: 0px 0px 4px 0px rgba(255, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 4px 0px rgba(255, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 4px 0px rgba(255, 0, 0, 0.75);
  }
`;

/*clock digit design*/
const Digits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 4px;

    padding: 8px;
    box-shadow: 0px 0px 6px 2px rgba(128, 128, 128, 0.7);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(128, 128, 128, 0.7);
    -moz-box-shadow: 0px 0px 6px 2px rgba(128, 128, 128, 0.7);
  }

  span {
    background-color: black;
    color: aqua;
    font-size: 60px;
    padding: 12px;
    margin: 12px;
    border-radius: 16px;
    letter-spacing: 2px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 600;
    box-shadow: 0px 0px 10px 0px rgba(0, 255, 255, 0.7);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 255, 255, 0.7);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 255, 255, 0.7);
  }
`;

/*fulldate*/
const Fulldate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 4px;

    padding: 8px;
    box-shadow: 0px 0px 6px 2px rgba(128, 128, 128, 0.7);
    -webkit-box-shadow: 0px 0px 6px 2px rgba(128, 128, 128, 0.7);
    -moz-box-shadow: 0px 0px 6px 2px rgba(128, 128, 128, 0.7);
  }

  span {
    background-color: black;
    color: aqua;
    font-size: 46px;
    padding: 12px;
    margin: 12px;
    border-radius: 16px;
    letter-spacing: 2px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 600;
    box-shadow: 0px 0px 10px 0px rgba(0, 255, 255, 0.7);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 255, 255, 0.7);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 255, 255, 0.7);
  }

  h2 {
    margin: 4px;
    padding: 4px;
    font-size: 16px;
    background-color: black;
    color: red;
    border-radius: 4px;
  }
`;
