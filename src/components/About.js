import React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import profileImage from "../static/profile2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  avatar: {
    height: "8rem",
    width: "10rem",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "1.5rem",
  },
  avatarGrid: {
    marginLeft: "2rem",
    maxWidth: "40%",
    flexBasis: "40%",
  },
  title: {
    color: "#003d5c",
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
  },
  titleGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "3rem",
  },
  skills: {
    maxWidth: "40%",
    flexBasis: "40%",
    justifyContent: "center",
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      justifyContent: "center",
    },
  },
  intro: {
    fontSize: "17px",
    fontStyle: "italic",
    fontWeight: 500,
    fontFamily: "Libre Baskerville, serif",
  },
  skillsDiv: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid direction="column" container spacing={3}>
        <Grid className={classes.titleGrid} item>
          <Typography className={classes.title} variant="h3">
            About me{" "}
            <Person
              style={{ color: "#003d5c", height: "2.5rem", width: "2.5rem" }}
            />
          </Typography>
        </Grid>
        <Grid
          data-aos="slide-right"
          style={{ marginBottom: "2rem", marginLeft: "1rem" }}
          container
          direction="row"
        >
          <Grid className={classes.avatarGrid} item xs={12} sm={12} md={6}>
            <Avatar
              src={profileImage}
              variant="rounded"
              className={classes.avatar}
            />
            <Typography className={classes.intro} paragraph>
              I'm a Software Engineer and Web developer. I build robust, secured
              and scalable applications. I have passion for UI effects,
              animations and good user experiences. I have rich experience in
              backend technologies and API development.
            </Typography>
          </Grid>
          <Grid
            data-aos="slide-left"
            className={classes.skills}
            item
            xs={12}
            sm={12}
            md={6}
          >
            <Typography
              style={{
                marginBottom: "2rem",
                textAlign: "center",
              }}
              className={classes.title}
              variant="h5"
            >
              Tech Stack
            </Typography>
            <div className={classes.skillsDiv}>
              <Grid item xs={12} sm={12} md={4}>
                <i className="fab fa-react fa-3x m-2"></i>
                <p>ReactJS</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <i className=" fab fa-node fa-3x m-2"></i>
                <p>NodeJS</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <i className=" fab fa-html5 fa-3x m-2"></i>
                <p>HTML5</p>
              </Grid>
            </div>
            <div className={classes.skillsDiv}>
              <Grid item md={4}>
                <i className="fab fa-js fa-3x m-2"></i>
                <p>JS</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <i className=" fab fa-git-alt fa-3x m-2"></i>
                <p>Git</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <i className=" fab fa-css3 fa-3x m-2"></i>
                <p>CSS3</p>
              </Grid>
            </div>
            <div className={classes.skillsDiv}>
              <Grid item xs={12} sm={12} md={4}>
                <i className="fab fa-vuejs fa-3x m-2"></i>
                <p>VueJS</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <i className=" fab fa-python fa-3x m-2"></i>
                <p>Python</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <i className=" fas fa-database fa-3x m-2"></i>
                <p>Databases</p>
              </Grid>
            </div>
            <div className={classes.skillsDiv}>
              <Grid item xs={12} sm={12} md={4}>
                <i className="fab fa-gofore fa-3x m-2"></i>
                <p>Golang</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <i className="fab fa-php fa-3x m-2"></i>
                <p>PHP</p>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <i className="fab fa-angular fa-3x m-2"></i>
                <p>Angular</p>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
