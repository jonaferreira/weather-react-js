import React from "react";
import { Container } from "@material-ui/core";

import Display from "./Display";
import useGeolocation from "../hook/geoLocation";

const Weather = () => {
  const status = useGeolocation();

  return (
    <Container maxWidth="sm">
      <Display latitude={status.latitude} longitude={status.longitude}  />
    </Container>
  );
};

export default Weather;
