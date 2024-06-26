# SkyKeep
SkyKeep is a modern weather application built with React, Vite, and SCSS. It provides users with current weather data for their current location and allows them to search for weather information from various cities. The application leverages several libraries for enhanced functionality and utilizes the OpenWeather API to fetch weather data.

# Features
Current Location Weather: Automatically detects and displays the weather for the user's current location.

City Weather Search: Allows users to search for weather information in various cities.

Dynamic Weather Icons: Utilizes react-animated-weather for animated weather icons.

Real-Time Clock: Displays the current time using react-live-clock.

Iconography: Uses react-icons for additional icons.

Routing: Implements navigation with react-router-dom.

API Requests: Fetches weather data using axios.

# Tech Stack
Build Tool: Vite

Package Manager: Yarn

Framework: React

Styling: SCSS

# Libraries Used
react-animated-weather

react-live-clock

react-icons

react-router-dom

axios

# Third-Party API
## Weather Data: OpenWeather API
## Getting Started
## Prerequisites

Make sure you have the following installed:

Node.js

Yarn

# Installation
Clone the repository:


git clone https://github.com/Dahmiedebby

yarn install

Set up your OpenWeather API key:

### Create a .env file in the root of your project.
Add your OpenWeather API key to the .env file:

VITE_OPENWEATHER_API_KEY=your_openweather_api_key

## Running the Application
To start the development server:


yarn dev

Open your browser and navigate to http://localhost:5173 to see the app in action.


# Usage
Upon visiting the SkyKeep application, users will automatically see the weather for their current location if geolocation is enabled. Users can also search for weather data in various cities using the search functionality.
## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

# License
This project is licensed under the MIT License.

# Acknowledgements
Thanks to the developers of the libraries and tools used in this project.
Special thanks to OpenWeather for providing the weather data API.

Enjoy using SkyKeep! Feel free to reach out if you have any questions or feedback.
