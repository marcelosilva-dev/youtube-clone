import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > ul {
    padding: 0 0.8rem !important;
  }
`;

export const Cell = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  > svg {
    color: gray;
  }

  > label {
    padding-top: 10px;
    font-size: 10px;
    font-weight: bold;
  }
`;
