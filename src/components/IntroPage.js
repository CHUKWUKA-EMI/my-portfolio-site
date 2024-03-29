import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import bgImage from "../static/hero-bg1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "row",
    height: 800,
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    maxWidth: "100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center center",
  },
  typedGrid: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  typed1: {
    color: "white",
    fontSize: "30px",
    background: "rgba(0,0,0,0.7)",
    marginBottom: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Libre Baskerville, serif",
  },
  typed2: {
    color: "white",
    fontSize: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    background: "rgba(0,0,0,0.7)",
    fontWeight: 700,
    fontFamily: "Libre Baskerville, serif",
  },
}));
const IntroPage = () => {
  const classes = useStyles();
  return (
    <Grid direction="column" container className={classes.root}>
      <Grid
        style={{ display: "flex", flexDirection: "column" }}
        className={classes.typedGrid}
        item
        xs={12}
      >
        <Grid item>
          <Typography
            data-aos="slide-right"
            data-aos-duration="2000"
            className={classes.typed1}
          >
            I'm Chukwuka Emi
          </Typography>
        </Grid>
        <Grid item>
          <Typed
            className={classes.typed2}
            strings={[
              "A Software Engineer",
              "An Infrastructure Engineer",
              "A Back end Engineer",
              "A Web Developer",
              "A Full Stack Engineer",
              "A Freelancer",
            ]}
            typeSpeed={70}
            backSpeed={60}
            backDelay={2000}
            loop
            showCursor
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IntroPage;
