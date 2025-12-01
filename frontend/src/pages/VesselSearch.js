import React from "react";
import ShipCard from "../components/ShipCard";

export default function VesselSearch() {
  return (
    <main className="page">
      <header className="page__header">
        <h1>Vessel Search</h1>
        <p></p>
      </header>

      <section className="filters card">
        <input type="text" placeholder="Search by vessel name or IMO…" />
        <select>
          <option>All Status</option>
          <option>In Transit</option>
          <option>Docked</option>
        </select>
      </section>

      <section className="grid grid--cards">
        {Array.from({ length: 6 }).map((_, idx) => (
          <ShipCard key={idx} />
        ))}
      </section>
    </main>
  );
}
