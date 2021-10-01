import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = ({ coordinates }) => {
    console.log("COORDINATES", coordinates)

  return (
    <div id="googleMap">
        <div style={{ height: '50vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={{
            lat: 40.7831,
            lng: -73.9712
          }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={coordinates.lat}
            lng={coordinates.lng}
            text="Item Location"
          />
        </GoogleMapReact>
        </div>
    </div>
  );
};

export default GoogleMap;
