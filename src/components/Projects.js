import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import twitterImage from "../static/twitter-clone.jpg";
import customersImage from "../static/cusstomers-portal.jpg";
import ridebookingImage from "../static/riders.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
    marginBottom: "3rem",
    justifyContent: "center",
  },
  title1: {
    color: "#003d5c",
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "2rem",
    marginBottom: "2.5rem",
  },
  title2: {
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
  },
  card: {
    maxWidth: 345,
    color: "#003d5c",
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
    marginBottom: "2rem",
    marginRight: "5%",
    marginLeft: "5%",
  },
  textBody: {
    fontFamily: "Libre Baskerville, serif",
    fontWeight: 500,
  },
  btn: {
    fontFamily: "Libre Baskerville, serif",
    textTransform: "capitalize",
    width: "7rem",
    height: "2.5rem",
    backgroundColor: "#003d5c",
    color: "white",
    marginRight: "auto",
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "#003d5c",
      color: "white",
    },
  },
  itemsGrid: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginLeft: "10%",
    },
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Typography className={classes.title1} variant="h3">
          Projects{" "}
          <Apps
            style={{ color: "#003d5c", height: "2.5rem", width: "2.5rem" }}
          />
        </Typography>
        <Grid
          className={classes.itemsGrid}
          direction="row"
          container
          spacing={2}
        >
          <Grid item md={4}>
            <Card data-aos="flip-left" elevation={10} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="twitter clone"
                  src={twitterImage}
                  height="300"
                />
                <CardContent>
                  <Typography
                    className={classes.title2}
                    gutterBottom
                    variant="h5"
                    component="h4"
                  >
                    Studysey
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.textBody}
                    component="p"
                  >
                    An AI-driven applicant experience platform that leverages
                    technology and peer engagements to guide prospective
                    students through study choices, applications and enrolment
                    into Higher Institutions.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://studysey.com/"
                  target="_blank"
                  variant="contained"
                  className={classes.btn}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card data-aos="flip-left" elevation={10} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="customers"
                  src={customersImage}
                  height="300"
                />
                <CardContent>
                  <Typography
                    className={classes.title2}
                    gutterBottom
                    variant="h5"
                    component="h4"
                  >
                    Kwaba Web App
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.textBody}
                    component="p"
                  >
                    Kwaba helps renters split their bulk rent or deposit into
                    convenient monthly payments
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://kwaba.ng/"
                  target="_blank"
                  variant="contained"
                  className={classes.btn}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card data-aos="flip-left" elevation={10} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="riders"
                  src={ridebookingImage}
                  height="300"
                />
                <CardContent>
                  <Typography
                    className={classes.title2}
                    gutterBottom
                    variant="h5"
                    component="h4"
                  >
                    Kwaba Admin
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.textBody}
                    component="p"
                  >
                    An Admin portal for managing Kwaba's transactions
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://admin.kwaba.ng/login"
                  target="_blank"
                  variant="contained"
                  className={classes.btn}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
