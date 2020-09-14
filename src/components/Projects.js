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
                    Twitter Clone
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.textBody}
                    component="p"
                  >
                    An application built to simulate and improve the features of
                    Twitter. It has all the core functionalities and follows the
                    design principles of the Twitter app. With this app, a user
                    can have a better experience in tweeting and sharing his
                    thoughts across the globe.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://my-twitter-clone.netlify.app/layout"
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
                    Customers' Admin Portal
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.textBody}
                    component="p"
                  >
                    An application built to aid business owners and
                    organizations' managers in managing their customers' data.
                    With this app, the administrative activities on customers
                    management is moved to the cloud for better security and
                    improved efficiency.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://customers-contact-manager.netlify.app/"
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
                    Ride Booking App
                  </Typography>
                  <Typography
                    variant="body2"
                    className={classes.textBody}
                    component="p"
                  >
                    To make ride sharing services available and easily
                    accessible to the local communities and areas, this app was
                    built. It has all it takes to have great user experience in
                    booking rides and managing your bookings effectively.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href="https://ride-booker.netlify.app/"
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
