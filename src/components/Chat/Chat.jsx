import React from "react";
import chevron from "../../images/chevronup.svg";
import profile from "../../images/naruto.jpg";
import more from "../../images/more.svg";
import edit from "../../images/edit.svg";
import {
  Wrapper,
  ChatHeader,
  Right,
  Left,
  Profile,
  ProfilePicture,
  Indicator,
} from "./chat.style";
const Chat = () => {
  return (
    <>
      <Wrapper>
        <ChatHeader>
          <Left>
            <Profile>
              <ProfilePicture src={profile} alt="" />
              <Indicator />
            </Profile>
            <span>Messaging</span>
          </Left>

          <Right>
            <span>
              <img src={more} alt="" />
            </span>
            <span>
              <img src={edit} alt="" />
            </span>
            <span>
              <img src={chevron} alt="" />
            </span>
          </Right>
        </ChatHeader>
      </Wrapper>
    </>
  );
};

export default Chat;
