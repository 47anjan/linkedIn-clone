import React from "react";
import styled from "styled-components";
import info from "../images/info.svg";
import arow from "../images/arowright.svg";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import add from "../images/add.svg";
import linkdin from "../images/linkdin.svg";
import hiring from "../images/hiring.png";

const SideBar = () => {
  return (
    <Aside>
      <Wrapper>
        <Title>
          <h3>Add to your feed</h3>
          <img src={info} alt="" />
        </Title>
        <ProfileContainer>
          <Profile
            img={p1}
            title={"Abdullah Al Hasan"}
            info={
              "Android | Flutter | Sr. Software Engineer @ Brain Station 23 | HelloHasan.Com | Interested about REMOTE job "
            }
          />
          <Profile
            img={p2}
            title={"Fahim Mashroor "}
            info={"CO-Founder, AjkerDeal/Delivery Tiger/Bdjobs.com "}
          />
          <Profile
            img={p3}
            title={"A Talha"}
            info={
              "Managing Director of Noman Group of Industries & Talha Group | CIP | National Highest Exporter | Presidential Development Award | Category Highest Tax Payer | Runner | Human & Animal Rights | Environment & Community"
            }
          />
        </ProfileContainer>
        <Link>
          <a href="#">View all recomendations</a>
          <img src={arow} alt="" />
        </Link>
      </Wrapper>
      <div className="sticky">
        <BottomWrapper>
          <div>
            <img src={hiring} alt="" />
          </div>
        </BottomWrapper>
        <Footer>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Privacy & Terms</a>
            </li>
            <li>
              <a href="#">Ad Choices</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Business Services</a>
            </li>
            <li>
              <a href="#">Get the Linkedin app</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
          <div>
            <img src={linkdin} alt="" />
            LinkedIn Corporation &copy; 2022
          </div>
        </Footer>
      </div>
    </Aside>
  );
};

const Aside = styled.aside`
  grid-area: aside;
  transition: top 667ms ease-in-out;
  .sticky {
    position: sticky;
    top: 76px;
  }
`;

const Profile = ({ img, title, info }) => {
  return (
    <ProfileCard>
      <a href="#">
        <img className="profile" src={img} alt="" />
      </a>
      <div>
        <p className="name">{title}</p>
        <p className="info">{info}</p>
        <a href="#" className="btn">
          <img src={add} alt="" />
          <span>Follow</span>
        </a>
      </div>
    </ProfileCard>
  );
};

const ProfileCard = styled.li`
  margin-block: 16px;
  display: flex;
  gap: 12px;
  .profile {
    width: 48px;
    border-radius: 100vh;
    cursor: pointer;
  }
  div {
    .name {
      font-size: 0.875rem;
      line-height: 1.5;
      color: #191919;
      font-weight: 600;
      cursor: pointer;
    }
    .info {
      font-size: 0.75rem;
      line-height: 1.5;
      color: #666666;
      word-wrap: break-word;
      word-break: break-word;
      cursor: pointer;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    a {
      display: inline-flex;
      gap: 4px;
      justify-content: center;
      align-items: center;
      padding: 5px 15px;
      min-height: 32px;
      font-size: 1rem;
      border-radius: 100vh;
      border: 1px solid #666666;
      margin-top: 4px;
      cursor: pointer;
      transition: all 0.15s ease-in-out;

      &:hover {
        background-color: #ebebeb;
        color: #454545;
        box-shadow: inset 0 0 0 2px #171717;
      }
      img {
        width: 16px;
      }
      span {
        color: #666666;
        font-weight: 600;
        line-height: 20px;
      }
    }
  }
`;

const Wrapper = styled.div`
  border: 1px solid #e0dfdc;
  background-color: #fff;
  line-height: 1.333;
  border-radius: 8px;
  padding: 12px;
  @media (max-width: 580px) {
    border-radius: 0px;
  }
`;
const BottomWrapper = styled(Wrapper)`
  margin-top: 8px;
  padding-block: 0;
  display: flex;
  justify-content: center;

  div {
    position: sticky;
    top: 76px;
    img {
      width: 100%;
      display: block;
      max-width: 350px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 1rem;
    line-height: 1.5;
    color: #191919;
    font-weight: 600;
  }
  img {
    width: 16px;
    cursor: pointer;
  }
`;

const ProfileContainer = styled.ul`
  margin-top: 16px;
`;

const Link = styled.div`
  padding: 2px 8px;
  border-radius: 4px;
  transition: all 0.15s ease-in-out;
  display: inline-flex;
  align-items: center;
  margin-bottom: -4px;
  &:hover {
    background-color: #e0e0e0;
    a {
      color: #161616;
    }
  }
  a {
    font-size: 0.875rem;
    color: #666666;
    font-weight: 600;
    line-height: 2;
  }
  img {
    width: 16px;
    margin-left: 4px;
    margin-top: 4px;
  }
`;

const Footer = styled.footer`
  margin-block: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  ul {
    font-size: 0.75rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-inline: 24px;
    gap: 4px;

    li {
      a {
        color: #616160;
        transition: color 0.15s ease-in-out;
        margin: 4px 8px;
        line-height: 1.333;
        &:hover {
          color: #004182;
          text-decoration: underline;
        }
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    img {
      width: 56px;
    }
    font-size: 0.75rem;
    line-height: 1.333;
    color: #181818;
  }
`;

export default SideBar;
