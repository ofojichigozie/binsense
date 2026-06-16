# BinSense

BinSense is a simple waste-bin monitoring system made of three parts:

- `binsense-backend`: Node.js/Express API and WebSocket server that stores readings and exposes the device endpoints.
- `binsense-frontend`: React + Vite dashboard for viewing bin status and readings.
- `binsense-firmware`: ESP8266 firmware that measures distance with an HC-SR04 sensor and sends readings to the backend.

## Quick start

1. Clone the repository
   ```sh
   git clone https://github.com/ofojichigozie/binsense.git
   cd binsense
   ```
2. Start the backend
   ```sh
   cd binsense-backend
   npm install
   npm run dev
   ```
   The API will run on the port defined in your environment file.
3. Start the frontend in a second terminal
   ```sh
   cd binsense-frontend
   npm install
   npm run dev
   ```
4. Configure and upload the firmware
   ```sh
   cd binsense-firmware
   # edit config.h with your Wi-Fi, backend URL, and API key
   ```

## Folder overview

- `binsense-backend/` – API, auth, routes, database connection, and seeders.
- `binsense-frontend/` – UI pages, dashboard cards, charts, and API hooks.
- `binsense-firmware/` – Arduino sketch and ESP8266 setup for sensor readings.
