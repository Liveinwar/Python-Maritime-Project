import React from "react";

export default function VoyageReplay() {
  return (
    <main className="page">
      <header className="page__header">
        <h1>Voyage Replay</h1>
        <p></p>
      </header>

      <section className="card">
        <div className="replay-controls">
          <button>Play</button>
          <button>Pause</button>
          <button>Reset</button>
        </div>
        <div className="progress progress--large">
          <div className="progress__bar" style={{ width: "0%" }} />
          <span>0%</span>
        </div>

        <div className="detail-grid">
          <div>
            <h3>Latitude</h3>
            <p>— °</p>
          </div>
          <div>
            <h3>Longitude</h3>
            <p>— °</p>
          </div>
          <div>
            <h3>Speed</h3>
            <p>— kn</p>
          </div>
          <div>
            <h3>Course</h3>
            <p>— °</p>
          </div>
        </div>
      </section>
    </main>
  );
}
