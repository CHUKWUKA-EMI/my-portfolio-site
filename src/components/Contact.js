import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Paper,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import {
  Person,
  Mail,
  PhoneEnabled,
  LocationOn,
  Subject,
  Message,
  Send,
  Create,
} from "@material-ui/icons";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import Spinner from "./Spinner";
import dotenv from "dotenv";
import "mapbox-gl/dist/mapbox-gl.css";

dotenv.config();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "hidden",
    marginBottom: "2rem",
    marginRight: "1rem",
  },
  btn: {
    fontFamily: "Libre Baskerville, serif",
    textTransform: "capitalize",
    width: "7rem",
    height: "2.5rem",
    marginTop: "2rem",
    backgroundColor: "#003d5c",
    color: "white !important",
    marginRight: "auto",
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "#003d5c",
      color: "white",
    },
  },
  fab: {
    backgroundColor: "#4285f4",
    "&:hover, &:focus": {
      backgroundColor: "#4285f4",
    },
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
  title: {
    color: "white",
    fontFamily: "Libre Baskerville, serif",
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
  },
  titlediv: {
    marginTop: -1,
    color: "white !important",
    backgroundColor: "#1979a9",
  },
  textfield: {
    marginTop: "2rem",
    borderColor: "#003d5c",
  },
  contact: {
    marginLeft: "5%",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginRight: "5%",
      marginLeft: "10%",
    },
  },
  map: {
    marginRight: "5%",
    marginBottom: "2rem",
    marginTop: "0.8rem",
  },
  icons: {
    color: "#1979a9",
    height: "2rem",
    width: "2rem",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const mapContainer = React.useRef(null);
  const map = React.useRef();
  const [lng, setLng] = React.useState(3.38);
  const [lat, setLat] = React.useState(6.61);
  const [zoom, setZoom] = React.useState(9);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const sendMessage = async () => {
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      subject.trim().length === 0 ||
      message.trim().length === 0
    ) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsError(true);
      setError("Input field cannot be empty");
      setLoading(false);
      return;
    }
    if (name.trim().length < 4) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsError(true);
      setError("Name cannot be less than 4 characters");
      setLoading(false);
      return;
    }
    if (subject.trim().length < 8) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setError("Subject length cannot be less than 8 characters");
      setLoading(false);
      return;
    }
    if (!validEmail) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsError(true);
      setError("Inavlid email address");
      setLoading(false);
      return;
    }
    if (message.trim().length < 1) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsError(true);
      setError("Enter a valid message");
      setLoading(false);
      return;
    }

    if (
      name.startsWith("<script>") ||
      email.startsWith("<script>") ||
      subject.startsWith("<script>") ||
      message.startsWith("<script>")
    ) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsError(true);
      setError("XSS attack failed");
      setLoading(false);
      return;
    }

    setLoading(true);
    const requestBody = {
      query: `
			 mutation{
					createMessage(name:"${name}",email:"${email}",subject:"${subject}",message:"${message}"){
						userId
						name
						email
						subject
						message
					}
				}
			`,
    };

    try {
      const data = await fetch("https://emi-portfolio-api.herokuapp.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      await data.json();

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsError(false);
      setLoading(false);
      setSuccess("Message Sent");
    } catch (err) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setError("Your request failed!");
      setLoading(false);
    }
  };

  //initialize map
  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserLocation: true,
    });

    map.current.addControl(geolocate, "top-right");
    const nav = new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true,
    });
    map.current.addControl(nav, "top-right");
    map.current.addControl(new mapboxgl.FullscreenControl(), "top-right");
  }, [lng, lat, zoom]);

  //set default geolocation to the location of the user
  React.useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((data) => {
      const newLng = Number(data.coords.longitude.toFixed(4));
      const newLat = Number(data.coords.latitude.toFixed(4));
      map.current.setCenter([newLng, newLat]);
      map.current.zoomTo(10);
    });
  }, []);

  //Reset the geolocation coordinates when the map is zoomed
  React.useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(Number(map.current?.getCenter().lng.toFixed(4)));
      setLat(Number(map.current?.getCenter().lat.toFixed(4)));
      setZoom(Number(map.current?.getZoom().toFixed(2)));
    });
  });

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Typography className={classes.title1} variant="h3">
            Contact me
          </Typography>
          <Grid className={classes.contact} container spacing={3}>
            <Grid item md={4}>
              <div style={{ marginBottom: "1rem" }}>
                {error && !loading && !success && (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error} — <strong>try again!</strong>
                  </Alert>
                )}
                {success && !loading && !error && (
                  <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    {success} — <strong>Thank you!</strong>
                  </Alert>
                )}
              </div>
              <Card elevation={6} data-aos="fade-right">
                <Paper square className={classes.titlediv}>
                  <Typography className={classes.title} variant="h5">
                    <Create /> Write to me:
                  </Typography>
                </Paper>

                <CardContent>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendMessage();
                    }}
                  >
                    <div>
                      <TextField
                        variant="standard"
                        fullWidth
                        className={classes.textfield}
                        placeholder="Name"
                        error={isError}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Person className={classes.icons} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                        variant="standard"
                        fullWidth
                        className={classes.textfield}
                        placeholder="Email"
                        error={isError}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment>
                              <Mail className={classes.icons} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                        variant="standard"
                        fullWidth
                        className={classes.textfield}
                        placeholder="Subject"
                        error={isError}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Subject className={classes.icons} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div>
                      <TextField
                        variant="standard"
                        fullWidth
                        className={classes.textfield}
                        multiline
                        placeholder="Message"
                        error={isError}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Message className={classes.icons} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      {loading && <Spinner />}
                      <Button
                        variant="contained"
                        className={classes.btn}
                        disabled={!name || !email || !subject || !message}
                        type="submit"
                        endIcon={<Send />}
                      >
                        Send
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              <div style={{ marginTop: "1em" }}>
                <LocationOn className={classes.icons} /> Lagos, Nigeria{" "}
                <div style={{ height: "1rem" }}></div>
                <PhoneEnabled className={classes.icons} /> +2347034969842
                <br /> <div style={{ height: "1rem" }}></div>
                <Mail className={classes.icons} /> emichukwuka@gmail.com
              </div>
            </Grid>
            <Grid className={classes.map} item md={7}>
              <Card data-aos="fade-left" elevation={6}>
                <CardContent>
                  {/* <div id="map" style={{ height: 450 }}></div> */}
                  <div ref={mapContainer} style={{ height: 450 }} />
                </CardContent>
              </Card>
              <div
                style={{
                  marginTop: "1em",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                View your location
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Contact;
