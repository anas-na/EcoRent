import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../components/Marker";

const AnyReactComponent = ({ marker }) => <div>{marker}</div>;

const GoogleMap = ({ coordinates }) => {
  const [show, setShow] = useState(false)

  const handleMarkerClick = () => {
    setShow(!show)
  }

  return (
    <div id="googleMap">
      <div style={{ height: "30vh", width: "32vw" }}>
        {coordinates.lat && coordinates.lng ? <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={{
            lat: coordinates.lat,
            lng: coordinates.lng
          }}
          defaultZoom={13}
        >
          <AnyReactComponent
            lat={coordinates.lat}
            lng={coordinates.lng}
            marker={<Marker handleMarkerClick={handleMarkerClick} show={show}/>}
          />
        </GoogleMapReact> : null }
      </div>
    </div>
  );
};

export default GoogleMap;
