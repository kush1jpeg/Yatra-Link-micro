# YatraLink - Smart Bus Backend System

## Overview
Smart Bus Backend is a **backend system** for real-time bus tracking, route management, passenger-driver communication, notifications, AI chat support, and analytics.  
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

