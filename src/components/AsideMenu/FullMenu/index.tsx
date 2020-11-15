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

import { MdHome, MdVideoLibrary, MdSubscriptions } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

import "./style.css";

const drawerWidth = 240;

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
          {["Início", "Em alta", "Inscrições"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <MdHome className="icon" size={25} />}
                {index === 1 && <AiFillFire className="icon" size={25} />}
                {index === 2 && <MdSubscriptions className="icon" size={25} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default PersistentDrawerLeft;
