import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaravan } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ReactMapGL, { GeolocateControl, Marker, Popup } from "react-map-gl";
import { getVendorsLocations } from "../services/vendorService";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: -37.796368,
    longitude: 144.961166,
    width: "90vw",
    height: "90vh",
    zoom: 15,
  });

  const [vendorLocations, setVendorLocations] = useState([]);

  const [selectedVendor, setSelectedVendor] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  // use effect to get the vendor locations
  useEffect(async () => {
    const { data: locations } = await getVendorsLocations();
    setVendorLocations(locations);
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
      {vendorLocations.map((vendor) => (
        <Marker
          key={vendor.vendorName}
          vendorName={vendor.vendorName}
          latitude={vendor.coordinates.lat}
          longitude={vendor.coordinates.lng}
        >
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setSelectedVendor(vendor);
            }}
          >
            <FontAwesomeIcon icon={faCaravan} className="fa-2x" />
          </button>
        </Marker>
      ))}
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        showUserLocation={true}
        auto
      />

      {selectedVendor ? (
        <Popup
          latitude={selectedVendor.coordinates.lat}
          longitude={selectedVendor.coordinates.lng}
          onClose={() => {
            setSelectedVendor(null);
          }}
        >
          <div>
            <h3> {selectedVendor.vendorName}</h3>
            <p>{selectedVendor.address}</p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
};

export default Map;
