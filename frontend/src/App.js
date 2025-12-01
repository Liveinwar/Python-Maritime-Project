import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MapView from "./pages/MapView";
import VesselSearch from "./pages/VesselSearch";
import ShipDetails from "./pages/ShipDetails";
import VoyageReplay from "./pages/VoyageReplay";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/search" element={<VesselSearch />} />
          <Route path="/ship/:id" element={<ShipDetails />} />
          <Route path="/playback" element={<VoyageReplay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}