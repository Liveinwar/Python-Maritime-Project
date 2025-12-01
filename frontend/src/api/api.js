// Mock API helpers so the UI can function without a backend.
// Each helper returns a promise to mimic real network calls.

const mockVessels = [
  {
    id: 1,
    name: "MV Ocean Star",
    imo: "IMO1234567",
    lat: 1.3521,
    lon: 103.8198,
    speed: 18.5,
    origin: "Singapore",
    destination: "Rotterdam",
    status: "In Transit",
    progress: 65,
  },
  {
    id: 2,
    name: "MV Atlantic Wave",
    imo: "IMO2345678",
    lat: 31.2304,
    lon: 121.4737,
    speed: 22.3,
    origin: "Shanghai",
    destination: "Los Angeles",
    status: "In Transit",
    progress: 42,
  },
  {
    id: 3,
    name: "MV Pacific Breeze",
    imo: "IMO3456789",
    lat: 53.5511,
    lon: 9.9937,
    speed: 0,
    origin: "Hamburg",
    destination: "New York",
    status: "Docked",
    progress: 100,
  },
  {
    id: 4,
    name: "MV Indian Ocean",
    imo: "IMO4567890",
    lat: 25.2048,
    lon: 55.2708,
    speed: 15.2,
    origin: "Dubai",
    destination: "Mumbai",
    status: "In Transit",
    progress: 78,
  },
];

const mockPorts = [
  { id: 1, name: "Port of Singapore", country: "Singapore", congestion: 45, vesselsWaiting: 12, avgWaitTime: 18, capacity: 80, status: "moderate" },
  { id: 2, name: "Port of Rotterdam", country: "Netherlands", congestion: 72, vesselsWaiting: 28, avgWaitTime: 36, capacity: 65, status: "high" },
  { id: 3, name: "Port of Shanghai", country: "China", congestion: 88, vesselsWaiting: 45, avgWaitTime: 48, capacity: 55, status: "critical" },
  { id: 4, name: "Port of Los Angeles", country: "USA", congestion: 35, vesselsWaiting: 8, avgWaitTime: 12, capacity: 85, status: "low" },
];

const mockVoyage = {
  vesselId: 1,
  vesselName: "MV Ocean Star",
  startPort: "Singapore",
  endPort: "Rotterdam",
  startDate: "2024-01-15 08:00",
  endDate: "2024-02-15 14:30",
  waypoints: [
    { time: 0, lat: 1.3521, lng: 103.8198, speed: 18.5, course: 245 },
    { time: 24, lat: 5.0, lng: 100.0, speed: 20.1, course: 250 },
    { time: 48, lat: 10.0, lng: 95.0, speed: 19.8, course: 255 },
    { time: 72, lat: 15.0, lng: 90.0, speed: 21.2, course: 260 },
    { time: 96, lat: 20.0, lng: 85.0, speed: 20.5, course: 265 },
    { time: 120, lat: 25.0, lng: 60.0, speed: 19.9, course: 270 },
    { time: 144, lat: 30.0, lng: 50.0, speed: 18.7, course: 275 },
    { time: 168, lat: 35.0, lng: 40.0, speed: 20.3, course: 280 },
    { time: 192, lat: 40.0, lng: 30.0, speed: 19.5, course: 285 },
    { time: 216, lat: 45.0, lng: 20.0, speed: 18.2, course: 290 },
    { time: 240, lat: 50.0, lng: 10.0, speed: 17.8, course: 295 },
    { time: 264, lat: 51.9225, lng: 4.4775, speed: 0, course: 0 },
  ],
};

const wait = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchDashboardStats() {
  await wait();
  return {
    totalVessels: 1247,
    activeVoyages: 342,
    ports: 89,
    events: 156,
    recentVoyages: mockVessels,
  };
}

export async function fetchLiveVessels() {
  await wait();
  return { data: mockVessels };
}

export async function searchVessels(query = "") {
  await wait();
  const q = query.trim().toLowerCase();
  if (!q) return mockVessels;
  return mockVessels.filter(
    (v) => v.name.toLowerCase().includes(q) || v.imo.toLowerCase().includes(q)
  );
}

export async function fetchVesselById(id) {
  await wait();
  return mockVessels.find((v) => String(v.id) === String(id));
}

export async function fetchPorts() {
  await wait();
  return mockPorts;
}

export async function fetchVoyageHistory() {
  await wait();
  return mockVoyage;
}
