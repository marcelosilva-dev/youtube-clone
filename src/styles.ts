import styled from "styled-components";

import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template:
    "header header" 56px
    "asideMenu mainContent" 1fr
    / auto 1fr;

  font-family: "Roboto", sans-serif;

  .header {
    display: flex;
    align-items: center;
    color: #fff;
    grid-area: header;
    background: #ff0000;
    height: 100%;
    justify-content: center;
  }

  .asideMenu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    grid-area: asideMenu;
    background: #fff;
    height: 100%;
  }

  .mainContent {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff0000;
    grid-area: mainContent;
    background: hsla(0, 0%, 97%, 0.8);
    height: 100%;
  }

  justify-content: center;
  align-items: flex-start;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 56px;
  background: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-timing-function: ease-in;
  transition: all 1s;
  font-size: 14px;
  padding: 0.2rem 0 0 0;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      width: 11.7%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > svg {
        color: #000;
        font-weight: bold;
        margin-left: 24px;
      }

      & > img {
        width: 100px;
        margin-left: 24px;
      }
    }

    div.input {
      width: 33%;
      display: flex;

      div.input-container {
        width: 100%;

        display: flex;
        width: 100%;
        flex: 1;
        border: 1px solid #dbdbdb;
        justify-content: center;
        align-items: center;
        border-radius: 2px;

        > svg {
          padding-right: 10px;
          color: gray;
        }

        > input {
          width: 100%;
          border-left: none;
          border-right: 1px #dcdcdc;
          border-bottom: none;
          border-top: none;

          font-size: 16px;
          font-weight: 400;
          color: gray;

          &::placeholder {
            padding: 0.3rem;
          }
        }

        > button {
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-left: 1px solid #dbdbdb;
          width: 12%;

          > svg {
            color: gray;
            padding: 0.2rem;
          }
        }
      }
    }

    div.icons {
      display: flex;
      padding-right: 3rem;

      align-items: center;

      svg {
        color: #7b7b7b;
        margin-right: 1rem;
      }
      img {
        width: 30px;
        background-color: #000;
        border-radius: 50%;
        margin-left: 0.5rem;
        height: 30px;
      }
    }
  }
`;
