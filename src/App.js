import styled from "styled-components";
import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Body>
      <Header>
        <Wrapper>
          <Navbar />
        </Wrapper>
      </Header>
      <Main />
      <Chat />
    </Body>
  );
}

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
