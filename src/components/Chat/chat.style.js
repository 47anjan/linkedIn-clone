import styled from "styled-components";

const Wrapper = styled.div`
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
  transform: translateY(90%);

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
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

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
`;

const Profile = styled.div`
  position: relative;
`;

const ProfilePicture = styled.img`
  width: 32px;
  border-radius: 100vh;
`;

const Indicator = styled.span`
  background-color: #057642;
  position: absolute;
  width: 8px;
  height: 8px;
  bottom: 5px;
  right: 0;
  border-radius: 100vh;
  box-shadow: 0 0 0 2px white;
`;

const Right = styled.div`
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
`;

export { Wrapper, ChatHeader, Right, Left, Profile, ProfilePicture, Indicator };
