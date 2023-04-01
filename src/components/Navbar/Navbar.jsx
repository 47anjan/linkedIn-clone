import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import search from "../../images/search.svg";
import home from "../../images/home.svg";
import network from "../../images/network.svg";
import jobs from "../../images/jobs.svg";
import message from "../../images/message.svg";
import notification from "../../images/notification.svg";
import work from "../../images/work.svg";
import profile from "../../images/naruto.jpg";
import more from "../../images/more.svg";
import NavList from "./NavList";
import {
  Search,
  Nav,
  RightContainer,
  LeftContainer,
  Premium,
} from "./Navbar.style";

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
          <NavList icon={search}>Search</NavList>
          <NavList icon={home}>Home</NavList>
          <NavList icon={network}>My Network</NavList>
          <NavList icon={jobs}>Jobs</NavList>
          <NavList icon={message}>Messaging</NavList>
          <NavList icon={notification}>Notifications</NavList>
          <NavList icon={profile}>Me</NavList>
          <NavList icon={work}>Work</NavList>
          <NavList icon={more}>''</NavList>
        </ul>
        <Premium>
          <a href="#">Try Premium for free</a>
        </Premium>
      </RightContainer>
    </Nav>
  );
};

export default Navbar;
