import styled from "styled-components";

export const LeftNavigationStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 260px;
  background-color: #5b4e9c;
  overflow: auto;
  padding: 44px;
  padding-right: 0;

  h1 {
    color: white;
    font-weight: 400;
    line-height: 38px;
    font-size: 32px;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: 600;
    font-size: 16px;
    padding-top: 40px;
    width: 100%;
  }

  .item {
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
    text-decoration: none;
    color: white;
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .selected-item {
    background-color: white;
    color: black;
    border-radius: 40px 0 0 40px;
  }

  .link-item {
    text-decoration: none;
    border-radius: 40px 0 0 40px;
  }
`;
