import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  ListItemAvatar,
  Avatar,
  Box,
  useScrollTrigger,
  Zoom,
  Fab,
} from "@material-ui/core";
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Person,
  Apps,
  ContactMail,
  School,
  LaptopChromebook,
  KeyboardArrowUp,
} from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Intro from "./IntroPage";
import About from "./About";
import Resume from "./Resume";
import profileImage from "../static/profile-img.jpg";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import { Link, animateScroll as Scroll } from "react-scroll";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Libre Baskerville, serif",
  },
  zoom: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#001a26",
    color: "white",
  },
  content: {
    flexGrow: 1,
  },
  avatar: {
    height: "10rem",
    width: "10rem",
    marginRight: "auto",
    marginLeft: "auto",
  },
  avarItem: {
    marginRight: "auto",
    marginLeft: "auto",
    height: "10rem",
    width: "10rem",
  },
  iconsDiv: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 0,
  },
  listText: {
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
    zIndex: 1,
  },
  icons: {
    color: "#1979a9",
  },
}));

function ScrollTop(props) {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => Scroll.scrollToTop();

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.zoom}>
        {props.children}
      </div>
    </Zoom>
  );
}

function MainPage(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const socialIcons = [
    {
      link: "https://web.facebook.com/chukwuka.emi",
      icon: <Facebook style={{ fill: "white", color: "white" }} />,
    },
    {
      link: "https://mobile.twitter.com/emi_chukwuka",
      icon: <Twitter style={{ color: "rgba(29,161,242,1.00)" }} />,
    },

    {
      link: "https://www.linkedin.com/in/chukwuka-emi-0364ba9b",
      icon: <LinkedIn style={{ fill: "white" }} />,
    },
    {
      link: "https://github.com/CHUKWUKA-EMI",
      icon: <GitHub style={{ color: "white" }} />,
    },
  ];

  const navIcons = [
    {
      icon: <Person className={classes.icons} />,
      text: "About me",
      link: "about",
    },
    {
      icon: <School className={classes.icons} />,
      text: "Resume",
      link: "resume",
    },
    {
      icon: <Apps className={classes.icons} />,
      text: "Projects",
      link: "projects",
    },
    {
      icon: <LaptopChromebook className={classes.icons} />,
      text: "Services",
      link: "services",
    },
    {
      icon: <ContactMail className={classes.icons} />,
      text: "Contact me",
      link: "contact",
    },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <ListItemAvatar className={classes.avarItem}>
            <Avatar
              src={profileImage}
              variant="circle"
              className={classes.avatar}
            />
          </ListItemAvatar>
        </ListItem>
        <ListItem className={classes.iconsDiv}>
          {socialIcons.map((icon, index) => {
            return (
              <IconButton href={icon.link} target="_blank" key={index}>
                {icon.icon}
              </IconButton>
            );
          })}
        </ListItem>
      </List>
      <Divider style={{ backgroundColor: "white" }} />
      <List>
        {navIcons.map((icon, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{icon.icon}</ListItemIcon>
            <ListItemText>
              <Link
                to={icon.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Typography className={classes.listText}>
                  {icon.text}
                </Typography>
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <footer style={{ marginTop: "3rem" }}>
        <Box style={{ textAlign: "center" }}>
          &copy; Chukwuka Emi {new Date().getFullYear()}. All rights reserved
        </Box>
      </footer>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar elevation={0} position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              id="back-to-top-anchor"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>

            <Apps />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="Navigation folders">
          <Hidden smUp implementation="js">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="js">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <Intro />
          <section id="about" style={{ marginTop: "3rem" }}>
            <About />
          </section>
          <Divider />
          <section id="resume">
            <Resume />
          </section>
          <Divider />
          <section id="projects">
            <Projects />
          </section>
          <Divider />
          <section id="services">
            <Services />
          </section>
          <Divider />
          <section id="contact">
            <Contact />
          </section>
          <ScrollTop {...props}>
            <Fab
              onClick={Scroll.scrollToTop()}
              color="secondary"
              size="small"
              aria-label="scroll back to top"
            >
              <KeyboardArrowUp />
            </Fab>
          </ScrollTop>
        </main>
      </div>
    </>
  );
}

export default MainPage;
