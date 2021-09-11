import React from "react";
import Dayone from "./Day_one-five/Dayone";
import Daytwo from "./Day_one-five/Daytwo";
import Daythree from "./Day_one-five/day_three/Daythree";
import Dayfour from "./Day_one-five/Dayfour";
import Dayfive from "./Day_one-five/Dayfive";
import Daysix from "./day_six-ten/Daysix";
import styled from "styled-components";
import DaySeven from "./day_six-ten/DaySeven";

const Home = () => {
  return (
    <Maindiv>
      <Info>
        <p>
          There are 7 Different projects which are small, but useful to add in
          websites. These 7 projects are created in 7 days. (But each project
          took less time to create about 1-3 hours per each)
        </p>
      </Info>

      <One id="one_darklight">
        <Dayone />
      </One>

      <Two id="two_clock">
        <Daytwo />
      </Two>

      <Three id="three_todo">
        <Daythree />
      </Three>

      <Four id="four_ratings">
        <Dayfour />
      </Four>

      <Five id="five_socialicons">
        <Dayfive />
      </Five>

      <Six id="six_image">
        <Daysix />
      </Six>

      <Seven id="seven_profilecard">
        <DaySeven />
      </Seven>
    </Maindiv>
  );
};

export default Home;

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Info = styled.div`
  display: flex;
  /* background-color: red; */
  background-color: rgb(20, 19, 37);
  box-shadow: 0px 0px 8px 1px rgba(131, 131, 131, 0.8);
  -webkit-box-shadow: 0px 0px 8px 1px rgba(131, 131, 131, 0.8);
  -moz-box-shadow: 0px 0px 8px 1px rgba(131, 131, 131, 0.8);
  border-radius: 4px;

  margin: 10px;
  padding: 8px;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    margin: 0px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    /* letter-spacing: 0.2mm; */
    text-align: justify;
  }
`;

const One = styled.div``;

const Two = styled.div``;

const Three = styled.div``;

const Four = styled.div``;

const Five = styled.div``;

const Six = styled.div``;

const Seven = styled.div``;
