import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import gooIcon from "../assets/images/icons8-google-maps.svg";
import "./Map.scss";

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
      <div className="map--container">
        <div className="map--container-title">
          <span className="material-icons map-title--icon">room</span>
          <p>Localização</p>
        </div>
        <MapContainer
          style={{ height: "270px", width: "620px" }}
          center={position}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
          <Marker position={position} icon={myIcon}>
            <Popup>Vaca Brava.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Mymap;
