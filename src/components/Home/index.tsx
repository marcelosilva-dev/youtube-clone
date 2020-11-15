import React, { useState } from "react";
import Menu from "../AsideMenu/FullMenu";
import CompactMenu from "../AsideMenu/CompactMenu";
import MainContent from "../MainContent";

import logo from "../../assets/logo.svg";
import { HiSearch } from "react-icons/hi";
import { BsFillCameraVideoFill, BsFillBellFill } from "react-icons/bs";
import { FaKeyboard } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdApps } from "react-icons/md";

import { Container, ContainerHeader } from "./styles";

const avatar =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1";

interface HeaderProps {
  className?: string;
}

function App() {
  const [open, setOpen] = useState(true);
  return (
    <Container>
      <div className="header">
        <ContainerHeader>
          <nav>
            <div className="first-div">
              <MdMenu onClick={() => setOpen(!open)} size={24} />
              <img src={logo} />
            </div>
            <div className="input">
              <div className="input-container">
                <input placeholder="Pesquisar" />
                <FaKeyboard size={20} />
                <button>
                  <HiSearch size={24} />
                </button>
              </div>
            </div>

            <div className="icons">
              <BsFillCameraVideoFill size={24} />
              <MdApps size={24} />
              <BsFillBellFill size={24} />
              <img src={avatar} />
            </div>
          </nav>
        </ContainerHeader>
      </div>
      <div className="asideMenu">
        {open === false ? <CompactMenu /> : <Menu active={open} />}
        <div></div>
      </div>
      <div className="mainContent">
        <MainContent />
      </div>
    </Container>
  );
}

export default App;
