import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import home from "../images/home.svg";
import network from "../images/network.svg";
import jobs from "../images/jobs.svg";
import message from "../images/message.svg";
import notification from "../images/notification.svg";
import work from "../images/work.svg";
import profile from "../images/naruto.jpg";
import more from "../images/more.svg";
import { QUERIES } from "../constants";

const NavList = ({ icon, name }) => {
  return (
    <ListWrapper>
      <a href="#">
        <div className="img">
          <img src={icon} alt="" />
        </div>
        <span>{name}</span>
      </a>
    </ListWrapper>
  );
};

const Navbar = () => {
  return (
    <Nav>
      <LeftContainer>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <Search>
          <div>
            <img src={search} alt="" />
          </div>
          <input type="text" placeholder="Search" />
        </Search>
      </LeftContainer>
      <RightContainer>
        <ul>
          <NavList icon={search} name={"Search"} />
          <NavList icon={home} name={"Home"} />
          <NavList icon={network} name={"My Network"} />
          <NavList icon={jobs} name={"Jobs"} />
          <NavList icon={message} name={"Messaging"} />
          <NavList icon={notification} name={"Notifications"} />
          <NavList icon={profile} name={"Me"} />
          <NavList icon={work} name={"Work"} />
          <NavList icon={more} name={""} />
        </ul>
        <Premium>
          <a href="#">Try Premium for free</a>
        </Premium>
      </RightContainer>
    </Nav>
  );
};

const Premium = styled.div`
  max-width: 100px;
  text-align: center;
  @media (max-width: 650px) {
    display: none;
  }

  a {
    text-decoration: underline;
    color: #a06f29;
    font-size: 12px;
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
  }
`;

const ListWrapper = styled.li`
  list-style: none;
  min-height: 52px;
  min-width: 80px;
  display: grid;
  place-content: center;
  margin: 0;
  position: relative;

  @media ${QUERIES.tabletAndDown} {
    min-width: 70px;
  }
  @media (max-width: 750px) {
    min-width: 48px;
  }

  @media (max-width: 480px) {
    &:nth-child(8) {
      display: none;
    }
  }
  @media (max-width: 480px) {
    min-width: 50px;
  }
  @media (max-width: 420px) {
    min-width: 40px;
    &:nth-child(7) {
      display: none;
    }
    &:nth-child(9) {
      display: grid;
    }
  }

  span {
    margin-top: -1px;
    @media ${QUERIES.tabletAndDown} {
      display: none;
    }
  }

  &:hover::after {
    transform: scaleX(1);
  }
  &::after {
    border-bottom: 2px solid #191919;
    content: "";
    bottom: 0px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
    width: 100%;
  }
  &:nth-child(7) {
    img {
      border-radius: 100vh;
    }
  }
  &:nth-child(8) {
    border-left: 1px solid #ebebeb;
  }
  &:nth-child(1) {
    display: none;
    @media ${QUERIES.laptopAndDown} {
      display: grid;
    }
  }
  &:nth-child(7) {
    .img {
      position: relative;

      &::after {
        content: ".";
        font-size: 4.5rem;
        width: fit-content;
        height: fit-content;
        color: #04c404;
        position: absolute;
        top: -74px;
        right: -7px;
      }
    }
  }

  &:nth-child(6) {
    .img {
      position: relative;
      &::after {
        content: "1";
        position: absolute;
        top: -3px;
        right: -5px;
        background-color: #cc1016;
        color: white;
        font-size: 12px;
        font-weight: 600;
        padding: 2px;
        padding-inline: 6px;
        line-height: 1;
        border-radius: 100vh;
      }
    }
  }

  &:nth-child(7),
  &:nth-child(8) {
    span {
      &::after {
        content: "🔻";
      }
    }
  }
  a {
    display: flex;
    color: #666;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    .img {
      display: flex;
      img {
        width: 24px;
      }
    }
    &:hover {
      color: #191919;
    }
  }

  &:nth-child(9) {
    display: none;
  }
  @media (max-width: 420px) {
    &:nth-child(9) {
      display: grid;
      margin-left: 12px;
    }
  }

  @media (max-width: 360px) {
    &:nth-child(5) {
      display: none;
    }
  }
`;

const LeftContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  a {
    margin-left: -4px;
    display: grid;
    place-content: center;
    img {
      width: 41px;
    }
  }
`;
const RightContainer = styled.div`
  margin-left: auto;
  @media ${QUERIES.laptopAndDown} {
    margin-left: revert;
  }
  display: flex;
  ul {
    display: flex;
    align-items: center;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  min-height: 52px;
  @media (max-width: 750px) {
    justify-content: space-between;
  }
`;
const Search = styled.div`
  height: 34px;
  width: 280px;
  align-items: center;
  display: flex;
  background-color: #eef3f8;
  border-radius: 4px;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid blue;
    border-radius: 4px;
  }

  div {
    padding: 8px 8px 8px 14px;
    display: grid;
    place-content: center;

    img {
      width: 16px;
    }
  }

  input {
    border: 0;
    background-color: transparent;
    width: 100%;
    height: 100%;
    outline: 0;
    color: #424242;
  }

  @media ${QUERIES.laptopAndDown} {
    display: none;
  }
`;

export default Navbar;
