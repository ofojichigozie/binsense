# binsense-firmware

This folder contains the ESP8266 firmware for the BinSense hardware device.

## What it does

- Uses an HC-SR04 ultrasonic sensor to measure bin fill distance.
- Connects to Wi-Fi and posts readings to the backend API.
- Blinks an LED to show connection and transmission status.

## Setup

1. Go into the firmware folder.
   ```sh
   cd binsense/binsense-firmware
   ```
2. Install the ESP8266 board package in Arduino IDE or Arduino CLI.
   ```sh
   arduino-cli core install esp8266:esp8266
   ```
3. Install the required library.
   ```sh
   arduino-cli lib install ArduinoJson
   ```
4. Edit `config.h` and replace:
   - `WIFI_SSID`
   - `WIFI_PASSWORD`
   - `SERVER_URL`
   - `DEVICE_API_KEY`
   - `BIN_ID`
5. Compile the sketch from this folder.
   ```sh
   arduino-cli compile --fqbn esp8266:esp8266:nodemcuv2 .
   ```
6. Upload to the ESP8266.
   ```sh
   arduino-cli upload -p COM3 --fqbn esp8266:esp8266:nodemcuv2 .
   ```
   Replace `COM3` with your serial port.
7. Monitor the serial output.
   ```sh
   arduino-cli monitor -p COM3 --fqbn esp8266:esp8266:nodemcuv2
   ```

## Notes

- Use the backend URL in the form `http://<server-ip>:<port>/api/readings`.
- If the upload fails, confirm the board is on the correct port and that the ESP8266 package is installed.
