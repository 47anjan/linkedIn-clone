import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
const NavList = ({ icon, children }) => {
  return (
    <ListWrapper>
      <div className="img">
        <img src={icon} alt="" />
      </div>
      <span>{children}</span>
    </ListWrapper>
  );
};

const ListWrapper = styled.li`
  list-style: none;
  min-height: 52px;
  min-width: 80px;
  display: grid;
  place-content: center;
  margin: 0;
  position: relative;
  display: flex;
  color: #666;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  cursor: pointer;

  .img {
    display: flex;
    img {
      width: 24px;
    }
  }
  &:hover {
    color: #191919;
  }

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
  &:nth-child(2) {
    &::after {
      border-bottom: 2px solid #191919;
      content: "";
      bottom: 0px;
      left: 0;
      position: absolute;
      transform: scaleX(1);
      transition: transform 0.2s ease-in-out;
      width: 100%;
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
        content: "";
      }
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
  a {
    font-weight: 500;
  }
`;

export default NavList;
