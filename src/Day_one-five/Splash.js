import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Splash(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <Page>
      <Container>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
        <Title>Light / Dark Mode</Title>
        <TagLine>Click on Button to Toggle between Dark and Light mode</TagLine>
      </Container>
    </Page>
  );
}

export default Splash;

const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 10%;
  border: none;
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;

  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.4s ease;

  width: 100%;
  border-radius: 8px;
  padding: 10px;

  border: ${(props) => props.theme.borDer};
  background-color: ${(props) => props.theme.pageBackground};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  transition: all 0.5s ease;

  color: ${(props) => props.theme.titleColor};
`;

const TagLine = styled.span`
  font-size: 22px;
  transition: all -0.5s ease;

  color: ${(props) => props.theme.tagLineColor};
`;
