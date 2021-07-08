import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { toast } from "react-toastify";
import { getVendorsLocations } from "../../services/vendorService";
import mapStyles from "../../mapStyles";

// variable is defined outside to avoid unnecessary re-renders
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

export default function MyMap({ onSelect }) {
  // google maps script loader
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [center, setCenter] = useState([]);
  const [vendorLocations, setVendorLocations] = useState([]);
  const [selected, setSelected] = useState(null);

  // // create a map reference to avoid unnecessary re-renders
  const mapRef = React.useRef();

  // on load create the map image and store on mapRef
  const onMapLoad = React.useCallback((map) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          setCenter(center);
        },
        () => null
      );
      mapRef.current = map;
    } else {
      toast.warning("Browser does not support geolocation.");
    }
  }, []);

  useEffect(() => {
    // get vendors locations on mount
    try {
      async function fetchLocations() {
        const { data: locations } = await getVendorsLocations();

        if (!locations.length)
          return toast.warning(
            "Sorry. Current there are no vendors available. Please try again later."
          );

        setVendorLocations(locations);
      }
      fetchLocations();
    } catch (ex) {
      window.location = "/400";
    }
  }, []);

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {vendorLocations.map((vendor) => (
          <Marker
            key={vendor.vendorName}
            vendorName={vendor.vendorName}
            position={{
              lat: vendor.coordinates.lat,
              lng: vendor.coordinates.lng,
            }}
            icon={{
              url: "/coffee.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
            onClick={() => {
              onSelect(vendor);
              setSelected(vendor);
            }}
          ></Marker>
        ))}

        {center ? (
          <Marker
            position={{
              lat: center.lat,
              lng: center.lng,
            }}
            icon={{
              url: "/user.svg",
              scaledSize: new window.google.maps.Size(35, 35),
            }}
            onCloseClick={() => setCenter(null)}
          >
            <div>Your currrent location</div>
          </Marker>
        ) : null}

        {selected ? (
          <InfoWindow
            position={{
              lat: selected.coordinates.lat,
              lng: selected.coordinates.lng,
            }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2 className="text-uppercase">{selected.vendorName}</h2>
              <p className="mt-3">Vendor located at:</p>
              <p className="font-weight-bold mt-1">{selected.address}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
