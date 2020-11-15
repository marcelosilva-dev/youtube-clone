import React, { useState } from "react";

import {
  Video1,
  Video2,
  Video3,
  Video4,
  VideoMobile1,
  VideoMobile2,
  VideoMobile3,
  VideoMobile4,
} from "../../videos";

import { MdMoreHoriz } from "react-icons/md";
import { AiFillLike, AiFillDislike, AiFillSave } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import logo from "../../assets/logo.svg";
import { HiSearch } from "react-icons/hi";
import { BsFillCameraVideoFill, BsFillBellFill } from "react-icons/bs";
import { FaKeyboard } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdApps } from "react-icons/md";

import { Container, ContainerHeader, ContainerVideo } from "./styles";

const urlImg1 =
  "https://i.ytimg.com/vi/20bd8EwWmss/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBSRtpQ6T5smpU25jlaFH2IBUbiwg";

const urlImg2 =
  "https://i.ytimg.com/vi/j6K_Dbjdqp4/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDbuzZBPuadnpRiOUVoq_m3ws84xQ";

const urlImg3 =
  "https://i.ytimg.com/vi/PkIGnGlKi4w/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBZiAcLZI3shH24jJfYMgNPxJ022w";

const urlImg4 =
  "https://i.ytimg.com/vi/K7zRXj8fhvQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCxH5KxKerQyqdgnK7HNC0un_Zjgg";

const urlPropaganda =
  "https://i.ytimg.com/vi/S71mtAUI1_c/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDib8GcWI-UmTcaYSVhrVJc8xDU8w";

const urlImg5 =
  "https://i.ytimg.com/vi/rSR-gWPr9VY/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDUsavc37xVFFw47dhqK-85BooX5Q";

const urlImg6 =
  "https://i.ytimg.com/vi/J_6U7rMnRqM/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCu9sq6qsEzyXwNnWY1_zEfbrp2w";

const urlImg7 =
  "https://i.ytimg.com/vi/utoIK-5tRyA/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDx6Fju1Vnc-yteYFX-A_6QhfRb0w";

const urlImg8 =
  "https://i.ytimg.com/vi/utoIK-5tRyA/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDx6Fju1Vnc-yteYFX-A_6QhfRb0w";

const urlImg9 =
  "https://i.ytimg.com/vi/cZvWDTqTGKg/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB-RO3tlS7QsTWFsGewFgL8F395WQ";

const urlImg10 =
  "https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s176-c-k-c0x00ffffff-no-rj-mo";

const urlImg11 =
  "https://i.ytimg.com/vi/EhnXaybirdA/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDDoFpXuulBvL0wr9Kh0BvjrEBukg";

const urlImg12 =
  "https://i.ytimg.com/vi/rNCGwggC1RI/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDMgbyvthkyIOffJRBC8OQZWkXYgw";

const avatar =
  "https://yt3.ggpht.com/a/AATXAJykE7_c-JAVqm6G6u0Th7shA5j56E5Kdt2kftWgOvI=s48-c-k-c0xffffffff-no-rj-mo";

const avatar2 =
  "https://yt3.ggpht.com/a/AATXAJw_1PiGRuuPfr6ZPWpqSTDsM_EcObdLdDAIKsDESw=s88-c-k-c0x00ffffff-no-rj";

const avatar3 =
  "https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s176-c-k-c0x00ffffff-no-rj-mo";

const avatarPropaganda =
  "https://yt3.ggpht.com/a/AATXAJwfbyqgHPx79drZz7FrTMD8DSFES4o7mwnBaTjeXA=s100-c-k-c0xffffffff-no-rj-mo";

interface HeaderProps {
  className?: string;
}

const PageVideo: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <Container>
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
      <ContainerVideo>
        <div>
          <Video2 />
          <div className="footer">
            <span className="hash">#ACulpaEDoCabral</span>
            <span className="title">
              Fred REVELA seu verdadeiro nome | A Culpa É Do Cabral no Comedy
              Central
            </span>
            <div className="last">
              <span>68.236 visualizações • 13 de nov. de 2020</span>
              <span>
                <AiFillLike /> 6,4 mil
                <AiFillDislike /> 37
                <IoIosShareAlt /> COMPARTILHAR
                <AiFillSave /> SALVAR
                <MdMoreHoriz />
              </span>
            </div>
          </div>
        </div>

        <div className="list">
          <div>
            <img src={urlImg1} />
            <div>
              <span className="title">
                Participação completa do Igor Guimarães | A culpa é do...
              </span>
              <span>Comedy Central Brasil</span>
              <span>149 mil visualizações - há 6 dias</span>
            </div>
          </div>
          <div>
            <img src={urlImg2} />
            <div>
              <span className="title">
                Participação completa do Igor Guimarães | A culpa é do...
              </span>
              <span>Comedy Central Brasil</span>
              <span>149 mil visualizações - há 6 dias</span>
            </div>
          </div>
          <div>
            <img src={urlImg3} />
            <div>
              <span className="title">
                Participação completa do Igor Guimarães | A culpa é do...
              </span>
              <span>Comedy Central Brasil</span>
              <span>149 mil visualizações - há 6 dias</span>
            </div>
          </div>
          <div>
            <img src={urlImg4} />
            <div>
              <span className="title">
                Participação completa do Igor Guimarães | A culpa é do...
              </span>
              <span>Comedy Central Brasil</span>
              <span>149 mil visualizações - há 6 dias</span>
            </div>
          </div>
          <div>
            <img src={urlImg5} />
            <div>
              <span className="title">
                Participação completa do Igor Guimarães | A culpa é do...
              </span>
              <span>Comedy Central Brasil</span>
              <span>149 mil visualizações - há 6 dias</span>
            </div>
          </div>
          <div>
            <img src={urlImg6} />
            <div>
              <span className="title">
                Participação completa do Igor Guimarães | A culpa é do...
              </span>
              <span>Comedy Central Brasil</span>
              <span>149 mil visualizações - há 6 dias</span>
            </div>
          </div>
          <div>
            <img src={urlImg7} />
            <div>
              <span className="title">
                Participação completa do Igor Guimarães | A culpa é do...
              </span>
              <span>Comedy Central Brasil</span>
              <span>149 mil visualizações - há 6 dias</span>
            </div>
          </div>
          <div>
            <img src={urlImg8} />
            <div>
              <span className="title">
                Participação completa do Igor Guimarães | A culpa é do...
              </span>
              <span>Comedy Central Brasil</span>
              <span>149 mil visualizações - há 6 dias</span>
            </div>
          </div>
        </div>
      </ContainerVideo>
    </Container>
  );
};

export default PageVideo;
