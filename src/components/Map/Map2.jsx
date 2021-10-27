import React from "react";
import ReactDOM from "react-dom";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map2 = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

export default Map2;