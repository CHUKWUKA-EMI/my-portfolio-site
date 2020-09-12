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
import { ListItemAvatar, Avatar } from "@material-ui/core";
import {
	Facebook,
	Twitter,
	LinkedIn,
	GitHub,
	Home,
	Person,
	Apps,
	ContactMail,
	School,
} from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Intro from "./IntroPage";
import About from "./About";
import Resume from "./Resume";
import profileImage from "../static/profile-img.jpg";
import Projects from "./Projects";
import Services from "./Services";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		fontFamily: "Libre Baskerville, serif",
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
	// necessary for content to be below app bar
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
			icon: <Home className={classes.icons} />,
			text: "Home",
		},
		{
			icon: <Person className={classes.icons} />,
			text: "About me",
		},
		{
			icon: <School className={classes.icons} />,
			text: "Resume",
		},
		{
			icon: <Apps className={classes.icons} />,
			text: "Projects",
		},
		{
			icon: <ContactMail className={classes.icons} />,
			text: "Contact me",
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
							<Typography className={classes.listText}>{icon.text}</Typography>
						</ListItemText>
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar elevation={1} position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography
						style={{ fontSize: "30px" }}
						className={classes.listText}
						variant="h6"
						noWrap>
						CJE
					</Typography>
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
							keepMounted: true, // Better open performance on mobile.
						}}>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="js">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open>
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
			</main>
		</div>
	);
}

export default MainPage;
