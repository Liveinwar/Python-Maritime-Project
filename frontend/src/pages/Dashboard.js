import React from "react";

export default function Dashboard() {
  const cards = [
    { title: "Total Vessels", icon: "" },
    { title: "Active Voyages", icon: "" },
    { title: "Ports Monitored", icon: "" },
    { title: "Recent Events", icon: "" },
  ];

  return (
    <main className="page">
      <header className="page__header">
        <h1>Dashboard</h1>
        <p></p>
      </header>

      <section className="grid grid--stats">
        {cards.map((card) => (
          <article key={card.title} className="card card--stat">
            <div className="card__icon">{card.icon}</div>
            <div>
              <p className="card__value">—</p>
              <p className="card__label">{card.title}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="card table-card">
        <div className="card__header">
          <h2>Recent Voyages</h2>
          <p></p>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Vessel</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 1 }).map((_, idx) => (
                <tr key={idx}>
                  <td>Vessel name</td>
                  <td>Origin</td>
                  <td>Destination</td>
                  <td>
                    <span className="status-chip">
                      Status
                    </span>
                  </td>
                  <td>
                    <div className="progress">
                      <div className="progress__bar" style={{ width: "0%" }} />
                      <span>0%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
