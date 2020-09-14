import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { LaptopChromebook } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
    marginBottom: "2rem",
    marginRight: "2rem",
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
  btn: {
    marginBottom: "2rem",
    fontFamily: "Libre Baskerville, serif",
    marginTop: "1.5rem",
    marginLeft: "10%",
    backgroundColor: "#003d5c",
    color: "white",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#003d5c",
      color: "white",
    },
  },
  title2: {
    fontFamily: "Libre Baskerville, serif",
    color: "#003d5c",
    fontWeight: "bold",
  },
  content: {
    fontFamily: "Libre Baskerville, serif",
    marginBottom: "2rem",
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Typography className={classes.title1} variant="h3">
          Services{" "}
          <LaptopChromebook style={{ width: "2.5rem", height: "2.5rem" }} />
        </Typography>
        <Grid
          style={{ marginLeft: "5%" }}
          spacing={3}
          container
          direction="row"
        >
          <Grid data-aos="slide-up" item md={4}>
            <Typography className={classes.title2} variant="h5">
              Backend Development
            </Typography>
            <Typography className={classes.content} variant="body1">
              Every modern and useful website has some servers it makes requests
              to. I build robust and secured APIs that handle complex logic for
              any front-end appliaction. I build APIs with different
              architectures: RESTful and GraphQL. And I've leveraged on the
              graphql subscriptions and websockets in building Real-time
              notification systems and Chat applications. If you want to get me
              involved in your API development, please contact me. Thank you.
            </Typography>
          </Grid>
          <Grid data-aos="slide-up" item md={4}>
            <Typography className={classes.title2} variant="h5">
              Frontend Web Development
            </Typography>
            <Typography className={classes.content} variant="body1">
              I build scalable, maintainable and responsive User Interfaces and
              web components with the right technologies. Good user experience
              has always been my focus when building front-end applications. Do
              you have any front-end project you would want me to handle and
              deliver to your satisfaction? Make sure to contact me.
            </Typography>
          </Grid>
          <Grid data-aos="slide-up" item md={4}>
            <Typography className={classes.title2} variant="h5">
              Training and Mentorship
            </Typography>
            <Typography className={classes.content} variant="body1">
              I do trainings and mentorship in software development. I believe
              that one does not have to spend so much time before getting the
              skills needed to build a production-ready application. I train
              people to become full stack developers within 4 months.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
