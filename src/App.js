import styled from "styled-components";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import profile from "./images/naruto.jpg";
import more from "./images/more.svg";
import edit from "./images/edit.svg";
import chevron from "./images/chevronup.svg";

function App() {
  return (
    <Body>
      <Header>
        <Wrapper>
          <Navbar />
        </Wrapper>
      </Header>
      <Main />
      <Chat>
        <ChatHeader>
          <div className="left">
            <div className="img">
              <img src={profile} alt="" />
              <div></div>
            </div>
            <span>Messaging</span>
          </div>

          <div className="right">
            <span>
              <img src={more} alt="" />
            </span>
            <span>
              <img src={edit} alt="" />
            </span>
            <span>
              <img src={chevron} alt="" />
            </span>
          </div>
        </ChatHeader>
      </Chat>
    </Body>
  );
}

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  flex: 0 0 288px;
  width: 288px;
  min-width: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 4px #deddda;
  transform: translateY(0);
  animation: fade-in 167ms cubic-bezier(0.4, 0, 1, 1);
  border: 1px solid #e0dfdc;
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translateY(460px);

  @media (max-width: 1000px) {
    display: none;
  }
`;
const ChatHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 8px;
  position: relative;
  background-color: white;
  border-bottom: 1px solid #e0dfdc;
  min-height: 48px;
  background-clip: padding-box;
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: #f9fafb;
  }
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    gap: 8px;
    .img {
      position: relative;
      div {
        background-color: #057642;
        position: absolute;
        width: 8px;
        height: 8px;
        bottom: 5px;
        right: 0;
        border-radius: 100vh;
        box-shadow: 0 0 0 2px white;
      }
      img {
        width: 32px;
        border-radius: 100vh;
      }
    }
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.875rem;
      line-height: 1.42857;
      color: #191919;
      font-weight: 600;
      img {
        width: 16px;
      }
    }
  }

  .right {
    display: flex;
    span {
      display: grid;
      width: 32px;
      height: 32px;
      place-content: center;
      transition: all 0.15s ease;
      &:hover {
        background-color: #e6e6e7;
        border-radius: 100vh;
      }
    }
  }
`;

const Body = styled.body`
  position: relative;
`;

const Header = styled.header`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
  font-weight: 400;
  padding-inline: 24px;
  border-bottom: 1px solid #ebebeb;
`;

const Wrapper = styled.div`
  max-width: 1128px;
  margin-inline: auto;
`;

export default App;
