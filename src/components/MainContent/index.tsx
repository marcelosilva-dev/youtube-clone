import React from "react";

import YouTube from "react-youtube";
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

import Card from "./Card";
import { Container } from "./styles";

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

const MainContent: React.FC = () => {
  return (
    <>
      <Container>
        <div style={{ marginTop: "1rem", marginLeft: "8rem" }}>
          <Video1 />
        </div>
        <div style={{ width: "20%" }}>
          <Card
            urlAvatar={avatarPropaganda}
            urlImg={urlPropaganda}
            title="Dos laboratórios para o campo, do campo pra você"
            user="Gatorade Brasil"
          />
        </div>
      </Container>
      <Container>
        <Card
          urlImg={urlImg1}
          urlAvatar={avatar}
          title="Fred REVELA seu verdadeiro nome | A Culpa É Do Cabral no Comedy Central"
          user="Comedy Central Brasil"
          visu="1,18 mi"
          time="14"
        />
        <Card
          urlImg={urlImg2}
          urlAvatar={avatar}
          title="EXPECTATIVA x REALIDADE | Comedy Central A Culpa é do Cabral"
          user="Comedy Central Brasil"
          visu="376.555"
          time="1"
        />
        <Card
          urlImg={urlImg3}
          urlAvatar={avatar}
          title="Nomes ESTRANHOS | A Culpa é do Cabral no Comedy Central"
          user="Comedy Central Brasil"
          visu="198 mil"
          time="-1"
        />
        <Card
          urlImg={urlImg4}
          urlAvatar={avatar}
          title="Cátia Damasceno fez as Carlotas se abrirem | A Culpa É Da Carlota no Comedy Central"
          user="Comedy Central Brasil"
          visu="1,9 mi"
          time="9"
        />
      </Container>
      <Container>
        <Card
          urlImg={urlImg5}
          urlAvatar={avatar2}
          title="JORNAL NÃO PODE RIR com Marcos Castro, Luciana D'Aulizio, Rafael Studart e Ed Gama"
          user="Castro Brothers"
          visu="1,18 mi"
          time="14"
        />
        <Card
          urlImg={urlImg6}
          urlAvatar={avatar2}
          title="JORNAL NÃO PODE RIR com Marcos Castro, Luciana D'Aulizio, Yasmin Yassine e Estevam Nabote"
          user="Castro Brothers"
          visu="376.555"
          time="1"
        />
        <Card
          urlImg={urlImg7}
          urlAvatar={avatar2}
          title="NÃO PODE RIR! com DUBLADORES CHAVES (Nelson Machado, Cecília Lemes, Marta V., Daniel M., Gustavo B."
          user="Castro Brothers"
          visu="198 mil"
          time="-1"
        />
        <Card
          urlImg={urlImg8}
          urlAvatar={avatar2}
          title="NÃO PODE RIR! com PORTA DOS FUNDOS (Rafael Portugal, Evelyn Castro, Gustavo Chagas e Magalzão"
          user="Castro Brothers"
          visu="1,9 mi"
          time="9"
        />
      </Container>
      <Container>
        <Card
          urlImg={urlImg9}
          urlAvatar={avatar3}
          title="Masonry GRID - NOVA FEATURE do CSS 2020 | Code/Drops#67"
          user="Rocketseat"
          visu="1,18 mi"
          time="14"
        />
        <Card
          urlImg={urlImg10}
          urlAvatar={avatar3}
          title="PHP? Código “feio”, Como acelerar os estudos? Clean Architecture com GraphQL? | #PR 24"
          user="Rocketseat"
          visu="376.555"
          time="1"
        />
        <Card
          urlImg={urlImg11}
          urlAvatar={avatar3}
          title="Agora o Next.js foi longe demais (estamos hypados) | Code/Drops #64"
          user="Rocketseat"
          visu="198 mil"
          time="-1"
        />
        <Card
          urlImg={urlImg12}
          urlAvatar={avatar3}
          title="Buscando em 1 milhão de dados em 0.8ms com Rust | Code/Drops #66"
          user="Rocketseat"
          visu="1,9 mi"
          time="9"
        />
      </Container>
      <Container>
        <Card
          urlImg={urlImg1}
          urlAvatar={avatar}
          title="Fred REVELA seu verdadeiro nome | A Culpa É Do Cabral no Comedy Central"
          user="Comedy Central Brasil"
          visu="1,18 mi"
          time="14"
        />
        <Card
          urlImg={urlImg2}
          urlAvatar={avatar}
          title="EXPECTATIVA x REALIDADE | Comedy Central A Culpa é do Cabral"
          user="Comedy Central Brasil"
          visu="376.555"
          time="1"
        />
        <Card
          urlImg={urlImg3}
          urlAvatar={avatar}
          title="Nomes ESTRANHOS | A Culpa é do Cabral no Comedy Central"
          user="Comedy Central Brasil"
          visu="198 mil"
          time="-1"
        />
        <Card
          urlImg={urlImg4}
          urlAvatar={avatar}
          title="Cátia Damasceno fez as Carlotas se abrirem | A Culpa É Da Carlota no Comedy Central"
          user="Comedy Central Brasil"
          visu="1,9 mi"
          time="9"
        />
      </Container>
      <Container>
        <Card
          urlImg={urlImg5}
          urlAvatar={avatar2}
          title="JORNAL NÃO PODE RIR com Marcos Castro, Luciana D'Aulizio, Rafael Studart e Ed Gama"
          user="Castro Brothers"
          visu="1,18 mi"
          time="14"
        />
        <Card
          urlImg={urlImg6}
          urlAvatar={avatar2}
          title="JORNAL NÃO PODE RIR com Marcos Castro, Luciana D'Aulizio, Yasmin Yassine e Estevam Nabote"
          user="Castro Brothers"
          visu="376.555"
          time="1"
        />
        <Card
          urlImg={urlImg7}
          urlAvatar={avatar2}
          title="NÃO PODE RIR! com DUBLADORES CHAVES (Nelson Machado, Cecília Lemes, Marta V., Daniel M., Gustavo B."
          user="Castro Brothers"
          visu="198 mil"
          time="-1"
        />
        <Card
          urlImg={urlImg8}
          urlAvatar={avatar2}
          title="NÃO PODE RIR! com PORTA DOS FUNDOS (Rafael Portugal, Evelyn Castro, Gustavo Chagas e Magalzão"
          user="Castro Brothers"
          visu="1,9 mi"
          time="9"
        />
      </Container>
      <Container>
        <Card
          urlImg={urlImg9}
          urlAvatar={avatar3}
          title="Masonry GRID - NOVA FEATURE do CSS 2020 | Code/Drops#67"
          user="Rocketseat"
          visu="1,18 mi"
          time="14"
        />
        <Card
          urlImg={urlImg10}
          urlAvatar={avatar3}
          title="PHP? Código “feio”, Como acelerar os estudos? Clean Architecture com GraphQL? | #PR 24"
          user="Rocketseat"
          visu="376.555"
          time="1"
        />
        <Card
          urlImg={urlImg11}
          urlAvatar={avatar3}
          title="Agora o Next.js foi longe demais (estamos hypados) | Code/Drops #64"
          user="Rocketseat"
          visu="198 mil"
          time="-1"
        />
        <Card
          urlImg={urlImg12}
          urlAvatar={avatar3}
          title="Buscando em 1 milhão de dados em 0.8ms com Rust | Code/Drops #66"
          user="Rocketseat"
          visu="1,9 mi"
          time="9"
        />
      </Container>
    </>
  );
};

export default MainContent;
