# YatraLink - Smart Bus Backend System

## Overview
Smart Bus Backend is a **microservices-based backend system** for real-time bus tracking, route management, passenger-driver communication, notifications, AI chat support, and analytics.  
Built with **Node.js (ES modules), Redis, MongoDB, and MQTT**, containerized with **Docker**.

---

## Features

- **Real-Time Bus Tracking**
  - Drivers send GPS data via MQTT.
  - Passengers receive live location updates.
  - ETA and route deviation alerts.

- **Route Management**
  - StationMasters manage buses, routes, and stops.
  - Dynamic rerouting on deviations.
  - Historical route tracking.

- **Notifications**
  - Email, SMS, push notifications.
  - Alerts for delays, deviations, and arrivals.

- **AI Chat & Support**
  - Passenger-driver/support chat.
  - AI-based automated responses.

- **Analytics**
  - Dashboard insights for buses, passengers, and routes.
  - Predictive analysis for traffic, delays, and usage trends.

- **Authentication**
  - Drivers: Digilocker/Gov ID.
  - Passengers: Email/OTP.
  - StationMasters: Email/password.

---

## Architecture

- **API Gateway** → Entry point & routing.
- **Auth Service** → User authentication & roles.
- **MQTT Handler Service** → Real-time communication.
- **Storage Service** → Redis (real-time) + MongoDB (persistent storage).
- **Route Management Service** → Bus routes & deviation handling.
- **Notification Service** → Email/SMS/push alerts.
- **Chat Service** → AI-assisted chat.
- **Analytics Service** → Dashboard & insights.

---

## Getting Started

### Prerequisites
- Docker >= 20.x
- Docker Compose >= 2.x
- Node.js >= 18.x

### Installation
```bash
git clone https://github.com/yourusername/YatraLink.git
cd YatraLink
docker-compose up --build

Access services via ports defined in docker-compose.yml:

API Gateway: http://localhost:4000

MQTT Broker: mqtt://localhost:1883

MongoDB: mongodb://localhost:27017

Redis: redis://localhost:6379


Project Structure

services/
├── api-gateway/
├── auth-service/
├── mqtt-handler-service/
├── storage-service/
├── route-management-service/
├── notification-service/
├── chat-service/
└── analytics-service/


Environment Variables

Each service uses a .env file. Example:

AUTH_SERVICE
PORT=5001
JWT_SECRET=your_jwt_secret
MONGO_URI=mongodb://mongo:27017/auth

MQTT_HANDLER_SERVICE
PORT=5002
MQTT_BROKER=mqtt://mqtt-broker:1883
REDIS_HOST=redis
REDIS_PORT=6379