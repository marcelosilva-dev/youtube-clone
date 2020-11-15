import styled from "styled-components";
import { Link } from "react-router-dom";

interface StyledProps {
  urlImg?: string;
  urlAvatar?: string;
  title?: string;
  user?: string;
  visu?: string;
  time?: number;
  to?: string;
}

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem;
  color: #000;
  text-decoration: none;

  > img {
    width: 100%;
    max-height: auto;
    background-image: cover;
  }
`;

export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0;

  span.title {
    font-weight: bold;
    font-size: 18px;
  }

  .gray {
    color: gray;
  }

  > img {
    width: 40px;
    background-color: #000;
    border-radius: 50%;
    margin-left: 0.5rem;
    height: 40px;
  }

  > div {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
  }
`;
