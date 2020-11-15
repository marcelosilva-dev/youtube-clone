import React from "react";

import { Link } from "react-router-dom";

import { Container, ContainerMain } from "./styles";

interface CardProps {
  urlImg?: string;
  urlAvatar?: string;
  title?: string;
  user?: string;
  visu?: string;
  time?: string;
  to?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Container to="/video">
      <img src={props.urlImg} />
      <ContainerMain>
        <img src={props.urlAvatar} />
        <div>
          <span className="title">{props.title}</span>
          <span className="gray">{props.user}</span>
          {props.visu && (
            <div className="gray">
              {props.visu} de visualizações - há {props.time} meses
            </div>
          )}
        </div>
      </ContainerMain>
    </Container>
  );
};

export default Card;
