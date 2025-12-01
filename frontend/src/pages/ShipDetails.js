import React from "react";
import { Link } from "react-router-dom";

export default function ShipDetails() {
  return (
    <main className="page">
      <header className="page__header">
        <h1>Vessel Name</h1>
        <p>IMO XXXXXXX</p>
      </header>

      <section className="card detail-grid">
        <div>
          <h3>Status</h3>
          <p>—</p>
        </div>
        <div>
          <h3>Speed</h3>
          <p>— kn</p>
        </div>
        <div>
          <h3>Route</h3>
          <p>Origin → Destination</p>
        </div>
        <div>
          <h3>Progress</h3>
          <p>— % complete</p>
        </div>
      </section>

      <Link to="/search" className="ghost-btn">
        ← Back to search
      </Link>
    </main>
  );
}
