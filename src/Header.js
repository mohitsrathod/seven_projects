import React from "react";

import styled from "styled-components";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Header = () => {
  return (
    <MainHeader>
      <Home>
        <Link to="/"> Home </Link>
      </Home>

      <Dropdown>
        <ToggleButton>
          <a>Projects</a>
        </ToggleButton>

        <DropItems>
          <a href="/#one_darklight">Dark Mode</a>
          <a href="/#two_clock">Clock & Date</a>
          <a href="/#three_todo">Todo list</a>
          <a href="/#four_ratings">Ratings</a>
          <a href="/#five_socialicons">Social Icons</a>
          <a href="/#six_image">Text Portrait</a>
          <a href="/#seven_profilecard">Profile card</a>
        </DropItems>
      </Dropdown>

      <AboutMe>
        <Link to="/aboutme">About Me</Link>
      </AboutMe>
    </MainHeader>
  );
};

export default Header;

/**main header */
const MainHeader = styled.div`
  /* background-color: rgb(12, 11, 22); */
  background-color: rgb(20, 19, 37);

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  align-items: center;
  position: sticky;
  top: 0;

  box-shadow: 0px 6px 6px -1px rgba(128, 128, 128, 0.75);
  -webkit-box-shadow: 0px 6px 6px -1px rgba(128, 128, 128, 0.75);
  -moz-box-shadow: 0px 6px 6px -1px rgba(128, 128, 128, 0.75);
`;

/*home, about */

const Home = styled.div`
  /* display: flex; */
  flex: 1;
  padding: 14px 10px;

  margin: 0px 4px;
  -webkit-tap-highlight-color: transparent;

  a {
    cursor: pointer;
    color: white;
    font-weight: 500;
    font-size: 24px;
    user-select: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    :active {
      color: aqua;
    }
  }
`;

const AboutMe = styled.div`
  padding: 14px 6px;
  margin: 0px 4px;
  -webkit-tap-highlight-color: transparent;

  a {
    color: white;
    font-weight: 500;
    font-size: 24px;
    user-select: none;
    text-decoration: none;
    /* border: 1px solid white;
    border-radius: 4px;
    cursor: pointer; */
    padding: 4px 8px;

    -webkit-tap-highlight-color: transparent;

    :active {
      color: aqua;
    }
  }
`;

/**dropdown */

const DropItems = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2px;
  margin-top: 40px;
  margin-bottom: 6px;
  border-radius: 4px;
  border: 2px solid gray;
  -webkit-tap-highlight-color: transparent;

  height: 150px;
  overflow-y: scroll;

  /**dropdown */
  display: none;
  position: absolute;
  background-color: white; /**otherwise it transperents itself after giving position relative */

  a {
    -webkit-tap-highlight-color: transparent;
    display: flex;
    flex-wrap: wrap;
    width: 140px;

    padding: 6px;
    margin: 6px;
    font-size: 22px;
    text-decoration: none;
    color: white;
    background-color: black;
    border-radius: 4px;
    box-shadow: 0px 0px 6px 1px rgba(118, 118, 118, 0.75);
    -webkit-box-shadow: 0px 0px 6px 1px rgba(118, 118, 118, 0.75);
    -moz-box-shadow: 0px 0px 6px 1px rgba(118, 118, 118, 0.75);
    transition: 0.4s;

    :active {
      transition: 0.2s;

      color: black;
      background-color: white;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75) inset;
      -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75) inset;
      -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75) inset;
    }
  }
`;

const ToggleButton = styled.div`
  a {
    user-select: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;

    color: white;
    font-weight: 400;
    font-size: 24px;
    border: 1px solid white;
    padding: 4px 8px;
    border-radius: 4px;

    :active {
      color: black;
      background-color: white;
    }

    @media screen and (min-width: 780px) {
      :hover {
        color: black;
        background-color: white;
      }
    }
  }
`;

const Dropdown = styled.div`
  padding: 14px 6px;

  margin: 0px 4px;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  /**dropdown */
  position: relative;

  /**dropdown */
  &:hover {
    ${DropItems} {
      display: block; /**show mw items when i hover it 
      show me items which are on display : block; 
      like i provided display block to anchor tag */
    }
  }
`;
