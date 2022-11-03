import React from "react";
import styled from "styled-components";
import MainFeed from "./MainFeed";
import ProfileSection from "./ProfileSection";
import SideBar from "./SideBar";

const Main = () => {
  return (
    <MainContent>
      <Wrapper>
        <ProfileSection />
        <MainFeed />
        <SideBar />
      </Wrapper>
    </MainContent>
  );
};

const Wrapper = styled.div`
  max-width: 1128px;
  margin-inline: auto;
  margin-block: 24px;
  padding: 52px 0 0;
  column-gap: 24px;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "sidebar main aside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 1000px) {
    grid-template-areas:
      "sidebar main"
      ". aside";
    grid-template-columns: minmax(0, 7fr) minmax(0, 17fr);
    max-width: 766px;
  }
  @media (max-width: 768px) {
    grid-template-areas:
      "sidebar"
      "main"
      "aside";
    grid-template-columns: minmax(0, 1fr);
    max-width: 576px;
    padding: 35px 0 0;
    row-gap: 8px;
  }
`;
const MainContent = styled.main`
  padding-inline: 24px;
  @media (max-width: 580px) {
    padding-inline: 0px;
  }
`;

export default Main;
