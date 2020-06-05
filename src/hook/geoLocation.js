import { useState, useEffect } from "react";

const useGeolocation = () => {
  
  const [state, setState] = useState({
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now(),
  });

  useEffect(() => {
    const onEvent = (event) => {
      setState({
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp,
      });
    };

    navigator.geolocation.getCurrentPosition(onEvent);
    const watchId = navigator.geolocation.watchPosition(onEvent);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
};

export default useGeolocation;
