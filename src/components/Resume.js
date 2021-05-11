import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { School, LabelImportant } from "@material-ui/icons";

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
    color: "white",
    fontFamily: "Libre Baskerville, serif",
    fontWeight: 400,
    background: "rgb(25, 121, 169)",
    paddingLeft: "0.5em",
  },
  cardContent: {
    fontFamily: "Libre Baskerville, serif",
  },
  icons: {
    color: "#1979a9",
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
                <Typography
                  style={{ backgroundColor: "#1979a9", color: "white" }}
                  paragraph
                >
                  <em>
                    Innovative and deadline-driven Software Engineer with years
                    of experience developing and delivering user-centered
                    software applications and websites.
                  </em>
                </Typography>

                <Typography className={classes.cardContent}>
                  Daniel Makinde Street, Ketu, Lagos
                </Typography>

                <Typography className={classes.cardContent}>
                  +2347034969842
                </Typography>

                <Typography
                  style={{ overflowWrap: "break-word" }}
                  className={classes.cardContent}
                >
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
                <div style={{ backgroundColor: "#1979a9", color: "white" }}>
                  <Typography className={classes.cardContent}>
                    2012 - 2017
                  </Typography>
                  <Typography paragraph>
                    <em>University of Nigeria, Nsukka</em>
                  </Typography>
                </div>
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
              <CardContent
                style={{ listStyle: "none", textAlign: "left" }}
                className={classes.cardContent}
              >
                <Typography className={classes.cardheader} variant="h6">
                  Software Engineer
                </Typography>
                <Typography
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "#1979a9",
                    color: "white",
                    paddingLeft: "0.5em",
                  }}
                  className={classes.cardContent}
                >
                  Organization: <em> Enterfive Inc </em>
                </Typography>

                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Writing and
                  deploying REST APIs in Python and Node
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Managing existing
                  API endpoints written in both Python and Node
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Managing cron
                  jobs written in Python for web scraping
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} />
                  Deploying API to Google Cloud Platform and manage them
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} />
                  Interfacing with mobile application developers to design and
                  develop their API
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} />
                  Interfacing with BigQuery analytics data lake
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Interfacing with
                  FireStore to write and read JSON objects
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Implementing
                  Firebase Authentication
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Interfacing with
                  web developers to design and provide them with API
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Building and
                  extending web interfaces with Reactjs as designed by the
                  products team
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Designing and
                  implementing PDF reports
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Writing cron jobs
                  to automate sending out PDF reports
                </Typography>
                <Divider />
                <Typography
                  style={{ marginTop: "1em" }}
                  className={classes.cardheader}
                  variant="h6"
                >
                  Full Stack Software Engineer
                </Typography>
                <Typography
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "#1979a9",
                    color: "white",
                    paddingLeft: "0.5em",
                  }}
                  className={classes.cardContent}
                >
                  Organization: <em> Kwaba Int'l Limited </em>
                </Typography>

                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Built REST APIs
                  and migrated the old APIs from PHP to Nodejs
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Contributed to
                  the development of Kwaba Admin Portal
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Maintained and
                  fixed bugs as they arise on the old web application
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Championed the
                  development of the Kwaba mobile App
                </Typography>
                <Divider />
                <Typography
                  style={{ marginTop: "1em" }}
                  className={classes.cardheader}
                  variant="h6"
                >
                  Full Stack Software Developer
                </Typography>
                <Typography
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "#1979a9",
                    color: "white",
                    paddingLeft: "0.5em",
                  }}
                  className={classes.cardContent}
                >
                  Organization: <em> Vasiti Dotcom </em>
                </Typography>

                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Built an AI
                  powered platform where students can register and enroll in U.K
                  based Institutions for distant learning, and also connect and
                  collaborate with other students with similar interests.
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Worked on an
                  E-Commerce website where Wholesalers and student
                  enterepreneurs can sell and buy goods and services.
                </Typography>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                  component="li"
                >
                  <LabelImportant className={classes.icons} /> Contributed to
                  the development of an Admin site where all Vasiti's web
                  platforms are managed.
                </Typography>
                <Divider />
                <Typography
                  style={{ marginTop: "1rem" }}
                  className={classes.cardheader}
                  variant="h6"
                >
                  Freelance Software Developer
                </Typography>
                <div
                  style={{
                    backgroundColor: "#1979a9",
                    color: "white",
                    paddingLeft: "0.5em",
                  }}
                >
                  <Typography className={classes.cardContent}>
                    2019 - Present
                  </Typography>
                  <Typography paragraph>
                    <em>Lagos, Nigeria </em>
                  </Typography>
                </div>
                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                >
                  <LabelImportant className={classes.icons} /> Recommended and
                  consulted with clients on the most appropriate web
                  technologies and development principles.
                </Typography>

                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                >
                  <LabelImportant className={classes.icons} /> Managed up to 3
                  projects or tasks at a given time while under pressure
                </Typography>

                <Typography
                  style={{ marginBottom: "1rem" }}
                  className={classes.cardContent}
                >
                  <LabelImportant className={classes.icons} /> Created design
                  presentations and proposals for clients and managers
                </Typography>
                <Typography className={classes.cardContent}>
                  <LabelImportant className={classes.icons} /> Built 40+
                  projects and applications which are accessible on github
                  repositories.
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
