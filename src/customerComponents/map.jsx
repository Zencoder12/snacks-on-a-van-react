import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaravan } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ReactMapGL, { GeolocateControl, Marker, Popup } from "react-map-gl";
import { getVendorsLocations } from "../services/vendorService";
import { toast } from "react-toastify";

const Map = ({ onSelect, onClosePopUp, selectedVendor }) => {
  const [viewport, setViewport] = useState({
    latitude: -37.796368,
    longitude: 144.961166,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const [vendorLocations, setVendorLocations] = useState([]);

  //   const [selectedVendor, setSelectedVendor] = useState(null);

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
    try {
      const { data: locations } = await getVendorsLocations();

      if (!locations.length)
        return toast.warning(
          "Sorry. Current there are no vendors available. Please try again later."
        );

      setVendorLocations(locations);
    } catch (ex) {
      window.location = "/400";
    }
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
              onSelect(vendor);
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
            onClosePopUp();
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
