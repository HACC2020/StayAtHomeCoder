import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import "leaflet/dist/leaflet.css";
import "./MyMap.css"; // needs to be below leaflet.css
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';

import mapData from "../../../api/data/UHgjson_FINAL.json";

const CampusMap = ({ buildings }) => {
  console.log(buildings);

  const onEachBuilding = (building, layer) => {
    const buildingName = building.properties.name;
    console.log(buildingName);
    layer.bindPopup(buildingName + " Building, Total Clients: ");
  }

  return <div style={{ height: "500px" }}>
    <MapContainer styles={{ height: "90vh" }} center={[21.299950, -157.818144]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={mapData.features} onEachFeature={onEachBuilding}/>
    </MapContainer>
  </div>;
};

export default CampusMap;
