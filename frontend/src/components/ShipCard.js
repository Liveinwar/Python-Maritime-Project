import React from "react";

export default function ShipCard() {
  return (
    <div className="ship-card">
      <div className="ship-card__header">
        <h3>Vessel name</h3>
        <span className="status">Status</span>
      </div>
      <div className="ship-card__row">
        <span>IMO:</span>
        <span>—</span>
      </div>
      <div className="ship-card__row">
        <span>Origin:</span>
        <span>—</span>
      </div>
      <div className="ship-card__row">
        <span>Destination:</span>
        <span>—</span>
      </div>
      <div className="ship-card__row">
        <span>Speed:</span>
        <span>—</span>
      </div>
      <button className="ghost-btn" style={{ width: "100%", textAlign: "center", justifyContent: "center" }}>
        View details
      </button>
    </div>
  );
}
