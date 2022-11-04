import React from "react";
import styled from "styled-components";
import profile from "../images/naruto.jpg";
import photo from "../images/photo.svg";
import video from "../images/video.svg";
import event from "../images/event.svg";
import article from "../images/article.svg";
import chevron from "../images/chevron.svg";
import com from "../images/comlogo.jpg";
import pub from "../images/public.svg";
import more from "../images/more.svg";
import post1 from "../images/post1.jpg";

import free from "../images/freecodelogo.jpg";
import post2 from "../images/post2.jpg";

import like3 from "../images/like.svg";
import comment from "../images/comment.svg";
import repo from "../images/rotate.svg";
import send from "../images/send.svg";
import ShowMore from "./ShowMore";

import like2 from "../images/like2.svg";
import love from "../images/love.svg";
import care from "../images/care.svg";
import clap from "../images/clap.svg";
import haha from "../images/haha.svg";
import idia from "../images/idia.svg";
import think from "../images/think.svg";

const MainFeed = () => {
  return (
    <Main>
      <Wrapper>
        <Create>
          <a href="#">
            <div>
              <img src={profile} alt="" />
            </div>
          </a>
          <div className="input">
            <input placeholder="Share a post" />
          </div>
        </Create>
        <Share>
          <div>
            <img src={photo} alt="" /> <span>Photo</span>
          </div>
          <div>
            <img src={video} alt="" /> <span>Video</span>
          </div>
          <div>
            <img src={event} alt="" /> <span>Event</span>
          </div>
          <div>
            <img src={article} alt="" /> <span>Write Article</span>
          </div>
        </Share>
      </Wrapper>
      <Sort>
        <hr />
        <div className="sort">
          <span>Sort by:</span>
          <span className="top">Top</span>
          <div>
            <img src={chevron} alt="" />
          </div>
        </div>
      </Sort>
      <Posts
        logo={com}
        img={post1}
        profileName={"Community Classroom"}
        followers={"14,558"}
        date={"1w"}
        com={"2"}
        repost={"2"}
        like={185}
        title={
          "We're doing it again! You can win a Keychron keyboard by writing blogs! ⌨️"
        }
      />
      <Posts
        logo={free}
        img={post2}
        profileName={"freeCodeCamp"}
        followers={"1,030,017"}
        date={"1h"}
        com={"72"}
        repost={"22"}
        like={725}
        title={
          "Here's a course that'll teach you the skills required to become a front-end dev."
        }
      />

      <Posts
        logo={com}
        img={post1}
        profileName={"Community Classroom"}
        followers={"14,558"}
        date={"1w"}
        com={"2"}
        repost={"2"}
        like={125}
        title={
          "We're doing it again! You can win a Keychron keyboard by writing blogs! ⌨️"
        }
      />

      <ShowMore />
    </Main>
  );
};

const Posts = ({
  followers,
  date,
  title,
  img,
  com,
  repost,
  logo,
  profileName,
  like,
}) => {
  return (
    <Post>
      <PostProfile>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="info">
            <a>{profileName}</a>
            <span>{followers} followers</span>
            <span className="date">
              <span className="week">{date} • </span>
              <span>
                <img src={pub} alt="" />
              </span>
            </span>
          </div>
        </div>
        <div className="img">
          <img src={more} alt="" />
        </div>
      </PostProfile>

      <Info>
        <span className="title">{title}</span>

        <br />
        <span className="dis">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
          doloremque laboriosam! Dolorem explicabo, iste officia beatae earum
          alias id aspernatur?
        </span>
      </Info>

      <div className="photo">
        <img src={img} alt="" />
      </div>
      <div className="react">
        <div className="emoji">
          <img src={like2} alt="" />
          <img src={love} alt="" />
          <img src={care} alt="" />
          <span>{like}</span>
        </div>
        <div className="com">
          <span>{com} comment</span>
          <span>•</span>
          <span>{repost} reposts</span>
        </div>
      </div>
      <Buttons>
        <Button icon={like3} title={"Like"} />
        <Button icon={comment} title={"Comment"} />
        <Button icon={repo} title={"Repost"} />
        <Button icon={send} title={"Send"} />
      </Buttons>
    </Post>
  );
};

const Main = styled.main`
  grid-area: main;
`;

const Button = ({ icon, title }) => {
  return (
    <ReactButton>
      <div className="reacts">
        <img src={like2} alt="" />
        <img src={clap} alt="" />
        <img src={care} alt="" />
        <img src={haha} alt="" />
        <img src={love} alt="" />
        <img src={idia} alt="" />
        <img src={think} alt="" />
      </div>
      <div>
        <img src={icon} alt="" />
        <span>{title}</span>
      </div>
    </ReactButton>
  );
};

const Buttons = styled.div`
  min-height: 56px;
  padding: 4px 12px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  .reacts {
    left: 8px;
    top: -46px;

    @media (max-width: 768px) {
      left: 12px;
    }

    position: absolute;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 8px 8px rgb(0 0 0 / 0.3);
    border-radius: 10px;
    height: 50px;
    padding: 4px 8px;
    display: flex;
    align-self: center;
    justify-content: space-between;
    gap: 4px;
    img {
      cursor: pointer;
      width: 32px;
      display: block;
      transition: all 0.2s ease-in-out;

      &:hover {
        scale: 1.4;
        translate: 0 -15px;
      }
    }
  }
  &:nth-of-type() {
    background-color: red;
  }
  .hover {
    background-color: red;
  }
`;

const ReactButton = styled.div`
  min-height: 48px;
  padding: 10px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.15s ease-in-out;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
  .reacts {
    display: none;
  }
  &:nth-child(1) {
    &:hover {
      .reacts {
        display: flex;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    img {
      width: 24px;
    }
    span {
      font-size: 0.875rem;
      font-weight: 600;
      color: #666666;
      @media (max-width: 420px) {
        display: none;
      }
    }
  }
`;

const Wrapper = styled.div`
  border: 1px solid #e0dfdc;
  background-color: #fff;
  line-height: 1.333;
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 580px) {
    border-radius: 0px;
  }
`;

const Create = styled.div`
  padding-top: 4px;
  display: flex;
  text-align: center;
  margin: 8px 16px 0 16px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  img {
    width: 48px;
    border-radius: 100vh;
  }
  .input {
    flex: 1;
    flex-grow: 1;
    padding-bottom: 4px;
  }
  input {
    width: 100%;
    padding: 14px 8px 14px 16px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid #b2b2b2;
    border-radius: 100vh;
    color: #505050;
    line-height: 1.5;
    transition: all 0.15s ease-in-out;
    ::placeholder {
      line-height: 1.5;
      color: #666666;
    }
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const Share = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
    padding-inline: 8px;
    gap: 12px;
    min-height: 48px;
    cursor: pointer;
    color: #666666;
    border-radius: 4px;
    transition: all 0.15s ease-in-out;
    img {
      width: 24px;
    }
    span {
      white-space: nowrap;
      font-size: 0.9rem;
      font-weight: 600;
    }
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const Sort = styled.div`
  display: flex;
  min-height: 16px;
  gap: 8px;
  cursor: pointer;
  margin-block: 8px;
  @media (max-width: 768px) {
    margin-block: 4px;
  }

  hr {
    display: block;
    height: 1px;
    color: #bfbebb;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    flex-grow: 1;
    margin-block: auto;
  }
  .sort {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: #616160;
    span {
      margin-bottom: 4px;
    }
    .top {
      color: #181818;
    }
    img {
      width: 16px;
    }
  }
`;

const Post = styled(Wrapper)`
  margin-bottom: 8px;
  .photo {
    img {
      width: 100%;
      display: block;
      cursor: pointer;
    }
  }
  .react {
    height: 36px;
    display: flex;
    justify-content: space-between;
    margin-inline: 16px;
    padding-block: 8px;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    div {
      cursor: pointer;
    }
    span {
      font-size: 0.75rem;
      color: #666666;
    }
    .com {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .emoji {
      display: flex;
      align-items: center;
      img {
        width: 16px;
        border-radius: 100vh;
      }
      span {
        font-size: 0.75rem;
        line-height: 1.333;
        color: #666666;
        margin-left: 4px;
      }
    }
  }
`;

const PostProfile = styled.a`
  display: flex;
  padding: 12px 16px 0px 16px;
  margin-bottom: 8px;
  cursor: pointer;

  .img {
    display: grid;
    place-content: center;
    margin-top: -8px;
    img {
      width: 24px;
      cursor: pointer;
    }
    width: 30px;
    height: 30px;
    border-radius: 100vh;
    &:hover {
      background-color: #e0e0e0;
    }
  }
  .container {
    flex: 1;
    margin-bottom: 8px;
    display: flex;
    height: 54px;
    gap: 8px;
    align-items: center;
    .logo {
      img {
        width: 48px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      width: 100%;
      a {
        font-size: 0.875rem;
        line-height: 1.42857;
        color: #191919;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          color: #0a66c2;
          text-decoration: underline;
        }
      }
      span {
        font-size: 0.75rem;
        line-height: 1.333;
        color: #666666;
      }
      .date {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        line-height: 1.333;
        align-items: center;
        gap: 2px;
        cursor: pointer;
        .week {
          margin-bottom: 5px;
        }
        img {
          width: 16px;
        }
      }
    }
  }
`;

const Info = styled.div`
  margin-inline: 16px;
  margin-bottom: 8px;
  max-width: 700px;
  line-height: 1.42857;
  overflow: hidden;
  line-height: 1.333;
  color: #191919;
  font-size: 0.875rem;
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .dis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    cursor: pointer;
  }
`;

export default MainFeed;
