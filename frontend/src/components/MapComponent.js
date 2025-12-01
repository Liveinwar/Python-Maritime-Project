import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import { fetchLiveVessels } from "../api/api";
import Loader from "./Loader";

// default icon fix for leaflet with CRA
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function MapComponent({ center = [20, 80], zoom = 4 }) {
  const [vessels, setVessels] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      setLoading(true);
      try {
        const res = await fetchLiveVessels();
        if (isMounted) setVessels(res.data);
      } catch (err) {
        console.error("Error fetching vessels", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    // refresh every 30 seconds
    const t = setInterval(load, 30000);
    return () => { isMounted = false; clearInterval(t); }
  }, []);

  if (loading && !vessels) return <Loader />;

  return (
    <div className="map-wrapper" style={{ height: "80vh", borderRadius: 8, overflow: "hidden" }}>
      <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {vessels && vessels.map((v) => (
          <Marker key={v.id ?? v.imo} position={[v.lat, v.lon]}>
            <Popup>
              <div style={{ minWidth: 180 }}>
                <b>{v.name ?? v.imo}</b>
                <div>IMO: {v.imo}</div>
                <div>Speed: {v.speed ?? "—"} kn</div>
                <div>Last: {v.last_update ?? "—"}</div>
              </div>
            </Popup>
          </Marker>
        ))}
        {/* Example: circle to show a port area (static) */}
        <Circle center={[12.9, 74.8]} radius={30000} pathOptions={{ weight: 1 }} />
      </MapContainer>
    </div>
  );
}