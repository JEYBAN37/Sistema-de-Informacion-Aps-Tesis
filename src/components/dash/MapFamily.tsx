import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

const MapFamily = ({ coordinates }) => {
  useEffect(() => {
    // Create a map instance
    const map = L.map('map').setView([0, 0], 2);

    // Set up the OSM layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add heatmap layer
    const heat = L.heatLayer(coordinates, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
    }).addTo(map);
  }, [coordinates]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapFamily;
