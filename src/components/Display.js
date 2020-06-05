import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Paper,
  Typography,
  Grid,
  Avatar,
} from "@material-ui/core";
import Axios from "axios";
import useStyles from "../syles/Styles";

const API_KEY_WEATHER = "";
const API_KEY_GOOGLE = "";

const Display = ({ latitude, longitude }) => {
  const classes = useStyles();

  const [place, setPlace] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    const api_call_region_place = async () => {
      if (latitude !== null && longitude !== null) {
        const url =
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          latitude +
          "," +
          longitude +
          "&key=" +
          API_KEY_GOOGLE;

        const request = Axios.get(url);

        const response = await request;

        setPlace(
          response.data.results[0].address_components[3].long_name +
            ", " +
            response.data.results[0].address_components[5].long_name
        );
      }
    };

    const api_call_weather = async () => {
      if (latitude !== null && longitude !== null) {
        const url =
          "https://api.openweathermap.org/data/2.5/weather?" +
          "lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&APPID=" +
          API_KEY_WEATHER +
          "&units=metric";

        const request = Axios.get(url);

        const response = await request;

        setWeather(response.data);
      }
    };

    api_call_region_place();
    api_call_weather();
  }, [latitude, longitude]);

  if (typeof weather != "undefined") {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography align="center" variant="h3">
              {place}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Typography align="center" variant="h2">
                {weather.main.temp} °c
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4">{weather.weather[0].main}</Typography>
            <Avatar
              alt={`{weather.weather[0].main}`}
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              className={classes.large}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Feels Like: {weather.main.feels_like} °c
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">
              Min: {weather.main.temp_min} °c
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">
              Max: {weather.main.temp_max} °c
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3} align="center">
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
      </Grid>
    </div>
  );
};

export default Display;
