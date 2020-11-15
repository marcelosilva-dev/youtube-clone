import React from "react";

import { MdHome, MdVideoLibrary, MdSubscriptions } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import { Container, Cell } from "./styles";

const CompactMenu: React.FC = () => {
  return (
    <Container>
      <ul>
        <Cell>
          <MdHome color="#ff0000" size={22} />
          <label style={{ color: "#ff0000" }}>Inicio</label>
        </Cell>
      </ul>
      <ul>
        <Cell>
          <AiFillFire size={22} />
          <label>Em alta</label>
        </Cell>
      </ul>
      <ul>
        <Cell>
          <MdSubscriptions size={22} />
          <label>Inscrições</label>
        </Cell>
      </ul>
      <ul>
        <Cell>
          <MdVideoLibrary size={22} />
          <label>Biblioteca</label>
        </Cell>
      </ul>
    </Container>
  );
};

export default CompactMenu;
