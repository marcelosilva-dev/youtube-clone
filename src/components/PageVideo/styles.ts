import styled from "styled-components";

import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  justify-content: center;
  align-items: flex-start;

  background: hsla(0, 0%, 97%, 0.8);
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

    > div.first-div {
      width: 11.7%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > svg {
        color: #000;
        font-weight: bold;
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
          margin-right: 10px;
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

export const ContainerVideo = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 6.5rem;
  display: flex;
  flex-direction: row;
  margin-top: 56px;
  padding-top: 2rem;

  div.list {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;

      > img {
        width: 200px;
      }

      > div {
        display: flex;
        flex-direction: column;
        margin-left: 0.6rem;
        > span {
          max-width: 200px;
          color: gray;
        }

        .title {
          font-size: 16px;
          font-weight: bold;
          color: #000;
        }
      }
    }
  }

  div.footer {
    display: flex;
    flex-direction: column;

    > span.hash {
      color: blue;
      font-size: 16px;
    }

    span.title {
      color: #000;
      font-size: 16px;
    }

    span {
      font-size: 14px;
    }

    div.last {
      display: flex;
      justify-content: space-between;

      svg {
        font-size: 18px;
        margin-left: 0.5rem;
      }

      span {
        font-size: 18px;
      }
    }
  }
`;
