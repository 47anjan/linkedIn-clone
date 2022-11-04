import React from "react";
import styled from "styled-components";
import profile from "../images/naruto.jpg";
import premium from "../images/premium.svg";
import bookmark from "../images/bookmark.svg";
import add from "../images/add.svg";
import chevron from "../images/chevrondown.svg";

const ProfileSection = () => {
  return (
    <CardContainer>
      <Wrapper>
        <ProfileCard>
          <Cover />
          <div className="info">
            <div>
              <img src={profile} alt="" />
            </div>
            <p className="title">Anjan Karmaker</p>
            <p className="bio">
              Frontend Developer | CSS | JavaScript | React | Open Source |
              Learning in public ✌️
            </p>
          </div>
        </ProfileCard>
        <Connection>
          <a href="3">
            <div>
              <p>Connection</p>
              <p className="number">1</p>
            </div>
            <p>Grow your netwrok</p>
          </a>
        </Connection>
        <Premium>
          <p>Access exclusive tools & insights</p>
          <div>
            <img src={premium} alt="" />
            <a href="#"> Try Premium for free</a>
          </div>
        </Premium>
        <Bookmark>
          <img src={bookmark} alt="" />
          <p>My items</p>
        </Bookmark>
      </Wrapper>
      <ShowMore>
        <span>Show more</span>
        <img src={chevron} alt="" />
      </ShowMore>
      <div className="sticky">
        <Wrapper>
          <BottomCard>
            <div className="top">
              <div>
                <a href="#">Groups</a>
              </div>
              <div className="icon-link">
                <a href="#">Events</a>
                <div>
                  <img src={add} alt="" />
                </div>
              </div>
              <div>
                <a href="#">Follwed Hashtags</a>
              </div>
            </div>
            <div className="bottom">
              <a className="bottom-link" href="#">
                Discover more
              </a>
            </div>
          </BottomCard>
        </Wrapper>
      </div>
    </CardContainer>
  );
};

const ShowMore = styled.div`
  padding: 2px 8px;
  margin-bottom: -4px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: #e0dfdc;
  }
  span {
    font-size: 0.875rem;
    line-height: 2rem;
    color: #616160;
    font-weight: 600;
  }
  img {
    width: 16px;
  }
  display: none;
  @media (max-width: 750px) {
    display: flex;
  }
`;

const Cover = styled.div`
  height: 56.25px;
  background: linear-gradient(45deg, red, #020297);
  pointer-events: none;
`;

const Wrapper = styled.section`
  border: 1px solid #e0dfdc;
  @media (max-width: 750px) {
    border: none;
  }
  background-color: #fff;
  line-height: 1.333;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 580px) {
    border-radius: 0px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-area: sidebar;
  .sticky {
    position: sticky;
    top: 76px;
  }
`;

const ProfileCard = styled.div`
  text-align: center;
  border-bottom: 1px solid #e0dfdc;
  cursor: pointer;
  .info {
    padding: 1rem 0.75rem;
    padding-top: 0;
  }
  a {
    width: 100%;
    &:hover {
      text-decoration: underline;
    }
  }

  div {
    img {
      cursor: pointer;
      border: 2px solid white;
      width: 72px;
      margin-bottom: 12px;
      border-radius: 100vh;
      margin-top: -37.8px;
    }
  }
  .title {
    cursor: pointer;
    color: #191919;
    font-size: 1rem;
    font-weight: 600;
    transition: text-decoration 0.15s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
  .bio {
    color: #666666;
    margin-top: 4px;
    font-size: 0.75rem;
    line-height: 1.333;
    pointer-events: none;
  }
`;

const Connection = styled.div`
  padding: 16px 12px;
  border-bottom: 1px solid #e0dfdc;
  transition: background-color 0.15s ease-in-out;

  @media (max-width: 750px) {
    display: none;
  }
  &:hover {
    background-color: #ebebeb;
  }
  a {
    font-size: 0.75rem;
    font-weight: 600;
    p {
      color: #191919;
      line-height: 1.333;
    }
    div {
      display: flex;
      justify-content: space-between;
      p {
        color: #666666;
        line-height: 1.333;
      }
      .number {
        color: #4b8ed2;
      }
    }
  }
`;

const Premium = styled.div`
  transition: background-color 0.15s ease-in-out;
  @media (max-width: 750px) {
    display: none;
  }
  &:hover {
    background-color: #ebebeb;
  }
  padding: 12px;
  font-size: 0.75rem;
  border-bottom: 1px solid #e0dfdc;
  cursor: pointer;

  p {
    color: #666666;
    font-weight: 400;
    line-height: 1.333;
  }
  div {
    display: flex;
    gap: 4px;
    img {
      width: 16px;
    }
    a {
      font-weight: 600;
      text-decoration: underline;
      line-height: 1.333;
    }
  }
`;

const Bookmark = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
  padding: 12px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: #ebebeb;
  }
  display: flex;
  gap: 7px;
  font-size: 0.75rem;
  font-weight: 600;
  p {
    line-height: 1.333;
    margin-bottom: 4px;
  }
  img {
    width: 16px;
  }
`;

const BottomCard = styled.div`
  font-weight: 600;
  position: sticky;
  top: 76px;
  transition: top 667ms ease-in-out;
  @media (max-width: 750px) {
    display: none;
  }
  .top {
    padding: 8px 8px 4px 12px;
    div {
      padding-block: 4px;
      a {
        color: #0a66c2;
        font-size: 0.75rem;
        line-height: 1.333;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .icon-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 100vh;
        display: grid;
        place-content: center;
        transition: background-color 0.15s ease-in-out;
        &:hover {
          background-color: #e0dfdc;
        }
        img {
          width: 16px;
        }
      }
    }
    border-bottom: 1px solid #e0dfdc;
  }

  .bottom {
    &:hover {
      background-color: #ebebeb;
    }
    transition: background-color 0.15s ease-in-out;
    display: fex;
    justify-content: center;
    padding: 12px;
    cursor: pointer;
    .bottom-link {
      color: #666666;
      font-size: 0.875rem;
      line-height: 1.333;
    }
  }
`;

export default ProfileSection;
