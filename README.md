# 🚢 Marine Analytics

> **Team Project | Real-Time Maritime Intelligence Platform**  
> Built collaboratively to track global vessel movements, analyze port congestion,
> and monitor maritime risks using live AIS satellite data.

[![Django](https://img.shields.io/badge/Django-5.0-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Live Demo](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)](https://github.com/josna-14/Maritime_Vessel_Tracking)

---
## 👨‍💻 My Role & Contributions (Trinjan Dutta)

In this team project, I was primarily responsible for backend development,
real-time data handling, and repository management.

### Key Contributions
- Designed and implemented Django REST APIs for vessel, port, and risk data
- Integrated live AIS data using persistent WebSocket connections
- Built real-time data pipelines for vessel position updates
- Implemented JWT-based authentication and role-based access control
- Assisted frontend integration by aligning API contracts
- Managed Git workflows: branching strategy, pull requests, merges, and cleanup
- Refactored and documented the codebase to make it production-ready

> This repository is a mirrored version of the original team repository,
> preserved to showcase my individual contributions and Git collaboration skills.

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌊 Overview

**Marine Analytics** is a cutting-edge full-stack application designed for maritime intelligence operations. It leverages real-time AIS (Automatic Identification System) data from satellites to provide comprehensive vessel tracking, port congestion analysis, and risk assessment capabilities.

The platform serves logistics companies, port authorities, and maritime analysts by transforming raw vessel data into actionable intelligence through advanced clustering algorithms, geofencing alerts, and historical voyage replay features.

### 🎯 Problem Statement

Global maritime logistics faces challenges in:
- Real-time visibility of fleet movements across oceans
- Port congestion leading to supply chain delays
- Risk management in piracy-prone and severe weather zones
- Historical incident investigation and route optimization

### ✨ Solution

Marine Analytics addresses these challenges by providing:
- **Live tracking** of 300+ vessels simultaneously with intelligent map clustering
- **Automated congestion analysis** using UNCTAD port efficiency models
- **Smart geofencing** for proactive risk alerts
- **Time-travel voyage replay** for incident analysis

---

## 🚀 Key Features

### 1. 🗺️ Live Fleet Visibility
- Real-time tracking of global vessel movements via AISStream.io WebSocket integration
- Intelligent clustering algorithm to render 300+ ships without UI performance degradation
- Filter vessels by type: Cargo, Tanker, Passenger, Fishing, Military, and more
- Interactive map powered by Leaflet.js with smooth pan and zoom

### 2. 📊 Congestion Intelligence
- Automated port congestion analysis (e.g., "Los Angeles: 91% Congestion")
- Historical trend visualization using Recharts
- UNCTAD-based wait time calculations for logistics planning
- Top congested ports dashboard with predictive insights

### 3. 🔐 Role-Based Access Control (RBAC)
- **Super Admin Dashboard**: System health monitoring, user management, audit logs
- **Analyst Dashboard**: Advanced analytics, custom reports, data export
- **Operator Dashboard**: Live map view, vessel details, alert management
- JWT-based stateless authentication for secure API access

### 4. ⏮️ Voyage Replay (Time-Travel)
- Historical path reconstruction using archived AIS data
- Interactive timeline slider to replay vessel movements
- Incident investigation tools with speed and course change detection
- Export voyage data for compliance reporting

### 5. ⚠️ Smart Alerts & Risk Intelligence
- Geofencing for High-Risk Areas (Piracy zones: Gulf of Aden, Malacca Strait)
- Weather alert integration for severe storm tracking
- Automated notifications via email/SMS when vessels enter danger zones
- Customizable alert thresholds and rules engine

---

## 🏗️ Architecture

```
┌─────────────────┐         ┌──────────────────┐         ┌─────────────────┐
│   React.js UI   │◄────────┤  Django REST API │◄────────┤  MySQL Database │
│   (Vercel)      │  HTTPS  │   (Gunicorn)     │   SQL   │   (Production)  │
└────────┬────────┘         └────────┬─────────┘         └─────────────────┘
         │                           │
         │                           │
         │                  ┌────────▼─────────┐
         │                  │  AISStream.io    │
         │                  │  WebSocket Feed  │
         │                  └──────────────────┘
         │                           │
         │                  ┌────────▼─────────┐
         └─────────────────►│  Ngrok Tunnel    │
                            │  (Secure Proxy)  │
                            └──────────────────┘
```

### Data Flow
1. **AIS Data Ingestion**: `ais_stream.py` maintains a persistent WebSocket connection to AISStream.io
2. **Data Enrichment**: `ais_fetcher.py` enriches raw AIS messages with vessel metadata
3. **Storage**: Normalized data stored in MySQL with indexing on MMSI and timestamp
4. **API Layer**: Django REST Framework exposes RESTful endpoints with JWT authentication
5. **Frontend**: React app fetches data via Axios, renders on Leaflet map with clustering
6. **Real-Time Updates**: WebSocket pushes vessel position updates every 5 seconds

---

## 🛠️ Tech Stack

### Frontend
- **React.js 18.x** - Component-based UI library
- **Leaflet.js** - Interactive map rendering with marker clustering
- **Recharts** - Declarative charting library for analytics
- **Axios** - Promise-based HTTP client
- **React Router** - Client-side routing for SPA navigation

### Backend
- **Django 5.0** - High-level Python web framework
- **Django REST Framework (DRF)** - Toolkit for building Web APIs
- **SimpleJWT** - JSON Web Token authentication for stateless sessions
- **django-cors-headers** - Cross-Origin Resource Sharing middleware
- **asgiref** - ASGI specification implementation for async support

### Database
- **MySQL 8.0** - Relational database for production
- **PyMySQL** - Pure Python MySQL client
- **dj-database-url** - Database URL parsing for 12-factor apps

### Real-Time & Integration
- **websocket-client** - WebSocket client for AISStream.io integration
- **AISStream.io API** - Live AIS data feed from satellites

### Deployment & DevOps
- **Gunicorn** - Python WSGI HTTP Server for UNIX
- **WhiteNoise** - Static file serving for Django
- **Ngrok** - Secure introspectable tunnels to localhost
- **Vercel** - Edge network deployment for React frontend

---

## 📸 Screenshots

### Dashboard Overview
![Dashboard](https://github.com/josna-14/Maritime_Vessel_Tracking/blob/main/PICS/Dashboard.png)
*Real-time fleet overview with key metrics and alert summary*

### Interactive Map with Clustering
![Map View](https://github.com/josna-14/Maritime_Vessel_Tracking/blob/main/PICS/Map.png)
*Leaflet.js map displaying 300+ vessels with intelligent clustering*

### Voyage Replay Interface
![Voyage Replay](https://github.com/josna-14/Maritime_Vessel_Tracking/blob/main/PICS/Replay.png)
*Time-travel feature showing vessel's historical path with timeline slider*

### Admin Panel
![Admin Panel](https://github.com/josna-14/Maritime_Vessel_Tracking/blob/main/PICS/Admin_control.png)
*Role-based admin panel for system configuration and user management*

### Analytics Dashboard
![Analytics Dashboard](https://github.com/josna-14/Maritime_Vessel_Tracking/blob/main/PICS/Analytics.png)
*Dashboard for the analyst to study the data*
---
## ⚡ Quick Start (TL;DR)

```bash
git clone https://github.com/Liveinwar/Python-Maritime-Project.git
cd Python-Maritime-Project/backend
pip install -r requirements.txt
python manage.py runserver

## 💻 Installation

### Prerequisites
- Python 3.11+
- Node.js 18+
- MySQL 8.0+
- Git

### Backend Setup

```bash
# Clone the repository
git clone + https://github.com/Liveinwar/Python-Maritime-Project
cd Python-Maritime-Project

# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (see Configuration section)
cp .env.example .env

# Run database migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Load sample data (optional)
python manage.py loaddata sample_vessels.json

# Start development server
python manage.py runserver
```

### Start AIS Data Stream

```bash
# In a separate terminal, activate venv and run:
cd backend/core
python ais_stream.py
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **Admin Panel**: http://localhost:8000/admin

---

## ⚙️ Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Database Configuration
DB_NAME=marine_analytics
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306
DATABASE_URL=mysql://root:your_mysql_password@localhost:3306/marine_analytics

# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1,your-ngrok-domain.ngrok.io

# AISStream Configuration
AISSTREAM_API_KEY=your_aisstream_api_key_here
AISSTREAM_URL=wss://stream.aisstream.io/v0/stream

# JWT Settings
JWT_SECRET_KEY=your-jwt-secret-key
JWT_ACCESS_TOKEN_LIFETIME=60  # minutes
JWT_REFRESH_TOKEN_LIFETIME=1440  # minutes (24 hours)

# Email Configuration (for alerts)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password

# Ngrok Configuration
NGROK_AUTH_TOKEN=your_ngrok_auth_token
```

### Frontend Environment Variables

Create a `.env` file in the `frontend/` directory:

```env
REACT_APP_API_BASE_URL=http://localhost:8000/api
REACT_APP_WS_URL=ws://localhost:8000/ws
REACT_APP_MAPBOX_TOKEN=your_mapbox_access_token  # Optional for Mapbox tiles
```

### AISStream API Key

1. Register at [AISStream.io](https://aisstream.io/)
2. Generate an API key from your dashboard
3. Add the key to your backend `.env` file

### Ngrok Setup (for public demo)

```bash
# Install ngrok
# On macOS
brew install ngrok

# On Windows
choco install ngrok

# Authenticate
ngrok authtoken your_ngrok_auth_token

# Start tunnel (using config file)
ngrok start --config ngrok-multi.yml --all
```

---

## 📚 API Documentation

### Authentication

All API endpoints (except `/auth/login/` and `/auth/register/`) require JWT authentication.

**Obtain Token:**
```http
POST /api/auth/login/
Content-Type: application/json

{
  "username": "your_username",
  "password": "your_password"
}

Response:
{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc..."
}
```

**Use Token:**
```http
GET /api/vessels/
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGc...
```

### Core Endpoints

#### Vessels

```http
GET /api/vessels/
```
Retrieve all vessels with optional filters.

**Query Parameters:**
- `vessel_type` - Filter by type (cargo, tanker, passenger)
- `status` - Filter by status (active, inactive, anchored)
- `limit` - Results per page (default: 50)

**Response:**
```json
{
  "count": 324,
  "next": "http://api.example.com/vessels/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "mmsi": 477123456,
      "name": "EVER GIVEN",
      "vessel_type": "cargo",
      "latitude": 1.2345,
      "longitude": 103.8198,
      "speed": 12.3,
      "course": 145.0,
      "last_updated": "2025-01-19T10:30:00Z"
    }
  ]
}
```

---

```http
GET /api/vessels/{mmsi}/
```
Retrieve detailed information for a specific vessel by MMSI.

**Response:**
```json
{
  "mmsi": 477123456,
  "name": "EVER GIVEN",
  "imo": 9811000,
  "vessel_type": "cargo",
  "flag": "Hong Kong",
  "current_position": {
    "latitude": 1.2345,
    "longitude": 103.8198,
    "timestamp": "2025-01-19T10:30:00Z"
  },
  "voyage_info": {
    "destination": "SINGAPORE",
    "eta": "2025-01-20T08:00:00Z"
  }
}
```

---

```http
GET /api/vessels/{mmsi}/history/
```
Retrieve historical positions for voyage replay.

**Query Parameters:**
- `start_date` - ISO 8601 format (e.g., 2025-01-01T00:00:00Z)
- `end_date` - ISO 8601 format

---

#### Port Congestion

```http
GET /api/ports/congestion/
```
Get congestion analysis for all monitored ports.

**Response:**
```json
{
  "ports": [
    {
      "name": "Los Angeles",
      "code": "USLAX",
      "congestion_level": 91,
      "avg_wait_time_hours": 168,
      "vessels_waiting": 43,
      "trend": "increasing"
    }
  ]
}
```

---

#### Risk Alerts

```http
GET /api/risks/
```
Retrieve active risk alerts.

**Query Parameters:**
- `risk_type` - Filter by type (piracy, weather, collision)
- `severity` - Filter by severity (low, medium, high, critical)

**Response:**
```json
{
  "alerts": [
    {
      "id": 12,
      "vessel_mmsi": 477123456,
      "risk_type": "piracy",
      "severity": "high",
      "zone": "Gulf of Aden",
      "coordinates": [12.5, 45.3],
      "timestamp": "2025-01-19T09:15:00Z",
      "message": "Vessel entered high-risk piracy zone"
    }
  ]
}
```

---

```http
POST /api/risks/configure/
```
Configure geofencing rules (Admin only).

**Request:**
```json
{
  "zone_name": "Somalia Coast",
  "risk_type": "piracy",
  "severity": "critical",
  "coordinates": [[lat1, lon1], [lat2, lon2], ...]
}
```

---

### WebSocket Endpoints

```
ws://localhost:8000/ws/vessels/live/
```
Real-time vessel position updates pushed every 5 seconds.

---

## 📁 Project Structure

```
Python-Maritime-Project/
│
├── backend/
│   ├── core/
│   │   ├── __init__.py
│   │   ├── models.py              # Vessel, Port, RiskZone models
│   │   ├── serializers.py         # DRF serializers
│   │   ├── views.py               # API viewsets
│   │   ├── ais_stream.py          # WebSocket listener for AISStream
│   │   ├── ais_fetcher.py         # Data enrichment service
│   │   ├── congestion_analyzer.py # UNCTAD port congestion logic
│   │   └── risk_engine.py         # Geofencing and alert rules
│   │
│   ├── marine_analytics/
│   │   ├── __init__.py
│   │   ├── settings.py            # Django settings
│   │   ├── urls.py                # URL routing
│   │   ├── wsgi.py                # WSGI config
│   │   └── asgi.py                # ASGI config for WebSockets
│   │
│   ├── manage.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── MapComponent.jsx   # Leaflet map with clustering
│   │   │   ├── ShipCard.jsx       # Vessel detail card
│   │   │   ├── CongestionChart.jsx
│   │   │   └── AlertPanel.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx      # Main dashboard
│   │   │   ├── VoyageReplay.jsx   # Historical replay interface
│   │   │   ├── AdminPanel.jsx     # RBAC admin panel
│   │   │   └── Login.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js             # Axios instance and API calls
│   │   │   └── websocket.js       # WebSocket client
│   │   │
│   │   ├── utils/
│   │   │   ├── auth.js            # JWT token management
│   │   │   └── clustering.js      # Map clustering algorithm
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   │
│   ├── package.json
│   └── .env.example
│
├── ngrok-multi.yml                # Ngrok tunneling configuration
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🌐 Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from frontend directory
cd frontend
vercel --prod
```

**Environment Variables on Vercel:**
- Add `REACT_APP_API_BASE_URL` with your backend URL

### Backend (Production)

**Using Gunicorn + Nginx:**

```bash
# Install Gunicorn
pip install gunicorn

# Run with workers
gunicorn marine_analytics.wsgi:application --bind 0.0.0.0:8000 --workers 4

# Configure Nginx as reverse proxy
# See deployment/nginx.conf for configuration
```

**Using Docker:**

```bash
# Build image
docker build -t marine-analytics-backend .

# Run container
docker run -p 8000:8000 --env-file .env marine-analytics-backend
```

### Database (MySQL)

- Use managed MySQL service (AWS RDS, Google Cloud SQL, Azure Database)
- Enable automated backups
- Configure connection pooling for high traffic

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow PEP 8 for Python code
- Use ESLint and Prettier for JavaScript/React
- Write unit tests for new features
- Update documentation for API changes

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Josna** - 
GitHub: [@josna-14](https://github.com/josna-14) \
**Trinjan** -
GitHub:[@Liveinwar](https://github.com/Liveinwar) \
**Reguveeran** -
GitHub:[@Reguveeran](https://github.com/Reguveeran) \
**Rakshita** -
GitHub:[@Rakshita](https://github.com/rakshitha9019)


---

## 🙏 Acknowledgments

- [AISStream.io](https://aisstream.io/) for providing live AIS data
- [UNCTAD](https://unctad.org/) for port efficiency models
- [Leaflet.js](https://leafletjs.com/) community for mapping solutions
- [Django REST Framework](https://www.django-rest-framework.org/) for excellent API toolkit

---

## 📞 Support

For issues and questions:
- Open an issue on [GitHub Issues](https://github.com/josna-14/Maritime_Vessel_Tracking/issues)


---

📌 This project demonstrates real-world experience with
distributed systems, real-time data pipelines, and collaborative Git workflows.

**Made with ❤️ for the Maritime Industry**

⭐ Star this repo if you find it useful!
