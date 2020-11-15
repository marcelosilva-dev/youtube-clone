import React, { useEffect } from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { PersonAddDisabledOutlined } from "@material-ui/icons";

import {
  MdHome,
  MdVideoLibrary,
  MdSubscriptions,
  MdHistory,
  MdLocalMovies,
  MdWatchLater,
  MdExpandMore,
  MdSettings,
  MdFlag,
  MdHelp,
  MdFeedback,
} from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

import { AiOutlinePlaySquare } from "react-icons/ai";

import { FaGamepad, FaYoutube } from "react-icons/fa";

import { IoIosRadio } from "react-icons/io";

import { RiLightbulbFill } from "react-icons/ri";

import "./style.css";

const drawerWidth = 240;
const avatar0 =
  "https://yt3.ggpht.com/a/AATXAJxZhw3S_z6rwAHuDXP6cfnXLda5VsdIM5oWVe0YNQ=s88-c-k-c0x00ffffff-no-rj";

const avatar1 =
  "https://yt3.ggpht.com/ytc/AAUvwnjuIiDWluj4B1kX6ZIr91rRFIVonWw78Ml3BYsAK1A=s88-c-k-c0x00ffffff-no-rj";

const avatar2 =
  "https://yt3.ggpht.com/a/AATXAJw_1PiGRuuPfr6ZPWpqSTDsM_EcObdLdDAIKsDESw=s88-c-k-c0x00ffffff-no-rj";

const avatar3 =
  "https://yt3.ggpht.com/a/AATXAJxlcOOJg-DqA-aiyQqGcP_1kZH0jJ3eIJWDPRsk88U=s88-c-k-c0x00ffffff-no-rj";

const avatar4 =
  "https://yt3.ggpht.com/ytc/AAUvwniqwRWwcdZSWbkLuMp7QNuf091ENB1fnXwpPd3buak=s88-c-k-c0x00ffffff-no-rj";

const avatar5 =
  "https://yt3.ggpht.com/a/AATXAJwszL6YJ1nBd5A7NOC9v2wqfetiM_nXfprQHLl5qw=s88-c-k-c0x00ffffff-no-rj";

const avatar6 =
  "https://yt3.ggpht.com/a/AATXAJyzyrPJMwSCUxtTlY-MQ9sEqX8XHm8MYq4yr7e6Gw=s88-c-k-c0x00ffffff-no-rj";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

interface DrawerProps {
  active: boolean;
}

const PersistentDrawerLeft: React.FC<DrawerProps> = (props) => {
  useEffect(() => {
    setOpen(props.active);
    console.log("executou");
  }, [props.active]);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(props.active);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <List>
          {["Início", "Em alta", "Inscrições"].map((text, index) => (
            <ListItem
              className={index === 0 ? "selected" : ""}
              button
              key={text}
            >
              <ListItemIcon>
                {index === 0 && (
                  <MdHome className="icon" color="#ff0000" size={25} />
                )}
                {index === 1 && <AiFillFire className="icon" size={25} />}
                {index === 2 && <MdSubscriptions className="icon" size={25} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "Bibliotca",
            "Histórico",
            "Seus videos",
            "Seus filmes",
            "Assistir mais tarde",
            "Mostrar mais",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <MdVideoLibrary className="icon" size={25} />}
                {index === 1 && <MdHistory className="icon" size={25} />}
                {index === 2 && (
                  <AiOutlinePlaySquare className="icon" size={25} />
                )}
                {index === 3 && <MdLocalMovies className="icon" size={25} />}
                {index === 4 && <MdWatchLater className="icon" size={25} />}
                {index === 5 && <MdExpandMore className="icon" size={25} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "",
            "Spinnin Records",
            "Estácio",
            "Castro Brothers",
            "Google Developers",
            "Linkin Park",
            "Cheeseheads Brasil",
            "Netflix",
            "Mostrar mais 67",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <label>INSCRIÇÔES</label>}
                {index === 1 && <img className="avatar" src={avatar0} />}
                {index === 2 && <img className="avatar" src={avatar1} />}
                {index === 3 && <img className="avatar" src={avatar2} />}
                {index === 4 && <img className="avatar" src={avatar3} />}
                {index === 5 && <img className="avatar" src={avatar4} />}
                {index === 6 && <img className="avatar" src={avatar5} />}
                {index === 7 && <img className="avatar" src={avatar6} />}
                {index === 8 && <MdExpandMore className="icon" size={25} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "",
            "YouTube Premium",
            "Filmes",
            "Jogos",
            "Ao vivo",
            "Aprender",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <label>MAIS DO YOUTUBE</label>}
                {index === 1 && <FaYoutube className="icon" size={25} />}
                {index === 2 && <MdLocalMovies className="icon" size={25} />}
                {index === 3 && <FaGamepad className="icon" size={25} />}
                {index === 4 && <IoIosRadio className="icon" size={25} />}
                {index === 5 && <RiLightbulbFill className="icon" size={25} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "Configurações",
            "Histórico de denúncias",
            "Ajuda",
            "Enviar feedback",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <MdSettings className="icon" size={25} />}
                {index === 1 && <MdFlag className="icon" size={25} />}
                {index === 2 && <MdHelp className="icon" size={25} />}
                {index === 3 && <MdFeedback className="icon" size={25} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "",
            "",
            "Sobre Empresa",
            "Direitos autorais",
            "Entre em contato",
            "Criadores de Conteudo",
            "Publicidade Desenvolvedores",
            "",
            "Termos Privacidade",
            "Politica e segurança",
            "Como funciona o YouTube",
            "Testar os novos recursos",
            "",
            "",
            "",
            "2020 Google LLC",
            "",
            "",
            "",
            "",
            "",
            "aaa",
          ].map((text, index) => (
            <ListItem className="footer" button key={text}>
              <span className="footer">{text}</span>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default PersistentDrawerLeft;
