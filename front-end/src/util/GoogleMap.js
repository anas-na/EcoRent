import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {

  return (
    <div id="googleMap">
        <div style={{ height: '100vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={{
            lat: 40.7831,
            lng: -73.9712
          }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={40.7831}
            lng={-73.9712}
            text="Item Location"
          />
        </GoogleMapReact>
        </div>
    </div>
  );
};

export default GoogleMap;
