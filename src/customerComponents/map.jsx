import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaravan } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -37.796368,
    longitude: 144.961166,
    width: "90vw",
    height: "90vh",
    zoom: 15,
  });
  const [selectedVan, setSelectedVan] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/felipe888/ckp6iylug29ks17qpl1uri08s"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        showUserLocation={true}
        auto
      />
    </ReactMapGL>
  );
};

export default Map;
