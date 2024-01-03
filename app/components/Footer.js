'use client'
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
  const position = [9.4055318, -82.2501111]; // specify the latitude and longitude here

  const redIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <footer className="bg-gray-600 text-white p-8">
      <div className="md:flex justify-between">
        <div className="w-full md:w-1/2">
          <MapContainer center={position} zoom={12} style={{ height: "300px" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={redIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className=" w-full md:w-1/2 px-12 flex flex-col justify-center">
          <div className="text-2xl">Contact Us</div>
          <div>Email: example@example.com</div>
          <div>Phone: 123-456-7890</div>
          <div>Address: 1234 Street, City, Country</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

