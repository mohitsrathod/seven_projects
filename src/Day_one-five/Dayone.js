import React, { useState } from "react";
import styled from "styled-components";
import "./dayone.css";
import { ThemeProvider } from "styled-components";
import Splash from "./Splash";

const LightMode = {
  pageBackground: "white",
  titleColor: "black",
  tagLineColor: "black",
  borDer: "2px solid black",
};

const DarkMode = {
  pageBackground: "black",
  titleColor: "white",
  tagLineColor: "white",
  borDer: "2px solid black",
};

const themes = {
  light: LightMode,
  dark: DarkMode,
};

const Dayone = () => {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Maindiv>
          <Heading>
            <span>1 Dark / Light Mode</span>
          </Heading>

          <Splash theme={theme} setTheme={setTheme} />
        </Maindiv>
      </ThemeProvider>
    </>
  );
};

export default Dayone;

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
