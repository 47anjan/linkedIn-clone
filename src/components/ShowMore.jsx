import React from "react";
import styled from "styled-components";

const ShowMore = () => {
  return (
    <Wrapper>
      <div>
        <span>Show more Feed Updates</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 72px;
  padding: 24px;
  @media (max-width: 420px) {
    padding: 1rem;
    height: 68px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #616160;
    border-radius: 100vh;
    border: 1px solid #61605f;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    font-size: 0.875rem;
    min-height: 24px;
    padding: 2px 12px;

    line-height: 2rem;

    &:hover {
      background-color: #e0dfdc;
      color: #5a5958;
      box-shadow: inset 0 0 0 1px #595958;
    }
  }
`;

export default ShowMore;
