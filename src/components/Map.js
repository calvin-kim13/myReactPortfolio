import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const position = [33.92321, -117.88761];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position}>
        <Popup closeOnClick={false}>
          Calvin Kim <br /> Brea, CA 92821
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
