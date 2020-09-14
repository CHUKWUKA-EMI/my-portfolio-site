import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { School } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
    marginBottom: "3rem",
  },
  title: {
    color: "#003d5c",
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: "20%",
    width: "20rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10%",
    },
  },
  title1: {
    color: "#003d5c",
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
  },
  items: {
    justifyContent: "center",
    textAlign: "center",
  },
  card: {
    marginLeft: "25%",
  },
  cardheader: {
    color: "#003d5c",
    fontFamily: "Libre Baskerville, serif",
    fontWeight: 400,
  },
  cardContent: {
    fontFamily: "Libre Baskerville, serif",
  },
}));
const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid direction="column" container spacing={3}>
        <Typography
          style={{ marginTop: "2rem", marginBottom: "2.5rem" }}
          className={classes.title1}
          variant="h3"
        >
          Resume{" "}
          <School
            style={{ color: "#003d5c", height: "2.5rem", width: "2.5rem" }}
          />
        </Typography>
        <Grid data-aos="fade-right" className={classes.items} item xs={10}>
          <Typography className={classes.title} variant="h5">
            Summary
          </Typography>
          <div>
            <Card elevation={15} className={classes.card}>
              <CardContent>
                <Typography className={classes.cardheader} variant="h6">
                  Chukwuka Emi
                </Typography>
                <Typography paragraph>
                  <em>
                    Innovative and deadline-driven Software Developer with 1+
                    years of experience developing and delivering user-centered
                    software applications and websites.
                  </em>
                </Typography>

                <Typography className={classes.cardContent}>
                  10 Ijaiye street, Mushin, Lagos
                </Typography>

                <Typography className={classes.cardContent}>
                  +2347034969842
                </Typography>

                <Typography className={classes.cardContent}>
                  emichukwuka@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid data-aos="fade-left" item className={classes.items} xs={10}>
          <Typography className={classes.title} variant="h5">
            Education
          </Typography>
          <div>
            <Card elevation={15} className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography className={classes.cardheader} variant="h6">
                  Bachelor of Electronic Engineering
                </Typography>
                <Typography className={classes.cardContent}>
                  2012 - 2017
                </Typography>
                <Typography paragraph>
                  <em>University of Nigeria, Nsukka</em>
                </Typography>
                <Typography paragraph>
                  <b>Activities</b>: Student Member, Nigeria Society of
                  Engineers [NSE] | IEEE, Student Member
                  <br />
                  <b>Capstone Project</b>: Design and Implementation of a Home
                  Hazard Alert System
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid data-aos="fade-right" item className={classes.items} xs={10}>
          <Typography className={classes.title} variant="h5">
            Professional Experience
          </Typography>
          <div>
            <Card
              style={{ marginBottom: "2rem" }}
              elevation={15}
              className={classes.card}
            >
              <CardContent className={classes.cardContent}>
                <Typography className={classes.cardheader} variant="h6">
                  Freelance Software Developer
                </Typography>
                <Typography className={classes.cardContent}>
                  2019 - Present
                </Typography>
                <Typography paragraph>
                  <em>Lagos, Nigeria </em>
                </Typography>

                <Typography className={classes.cardContent}>
                  Recommended and consulted with clients on the most appropriate
                  web technologies and development principles.
                </Typography>

                <Typography className={classes.cardContent}>
                  {" "}
                  Managed up to 3 projects or tasks at a given time while under
                  pressure
                </Typography>

                <Typography className={classes.cardContent}>
                  Created design presentations and proposals for clients and
                  managers
                </Typography>
                <Typography className={classes.cardContent}>
                  Built 20+ projects and applications which are accessible on
                  github repositories.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
