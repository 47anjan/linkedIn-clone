import { QUERIES } from "../../constants";
import styled from "styled-components";

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

  & input {
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

const Premium = styled.div`
  max-width: 100px;
  text-align: center;
  @media (max-width: 650px) {
    display: none;
  }
  a {
    text-decoration: underline;
    color: #a06f29;
    font-size: 13px;
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

export { Search, Nav, RightContainer, LeftContainer, Premium };
