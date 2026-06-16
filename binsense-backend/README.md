# binsense-backend

This folder contains the BinSense backend service.

## What it does

- Runs a Node.js + Express API for authentication, bin management, and readings.
- Uses Socket.IO for live updates.
- Connects to MongoDB and exposes health and data routes.

## Setup

1. Clone the repo and enter this folder.
   ```sh
   cd binsense/binsense-backend
   ```
2. Install dependencies.
   ```sh
   npm install
   ```
3. Create a `.env` file using the required variables from the app config.
4. Start the development server.
   ```sh
   npm run dev
   ```
5. Build for production if needed.
   ```sh
   npm run build
   npm start
   ```

## Useful scripts

- `npm run dev` – start the backend in development mode
- `npm run build` – compile TypeScript
- `npm start` – run the compiled server
- `npm run seed` – seed demo data
