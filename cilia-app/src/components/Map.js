import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import gooIcon from "../assets/images/icons8-google-maps.svg";

const Mymap = () => {
  const myIcon = new L.Icon({
    iconUrl: gooIcon,
    iconRetinaUrl: gooIcon,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });

  const position = [-16.709878419058654, -49.27046011510492];

  return (
    <>
      <MapContainer
        style={{ height: "401px", width: "501px" }}
        center={position}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <Marker position={position} icon={myIcon}>
          <Popup>this is a custom map marker.</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Mymap;
