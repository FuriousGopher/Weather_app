## Weather Forecast App

This project is a Weather Forecast App built using React. It allows users to search for a city and retrieve the current weather conditions as well as a 7-day forecast for the selected location. The app utilizes the OpenWeatherMap API to fetch weather data.

### Features

- Search for city: Users can enter the name of a city in the search input to retrieve weather information for that location.
- Current weather display: The app displays the current weather conditions, including temperature, description, and additional details such as feels like temperature, wind speed, humidity, and pressure.
- Daily forecast: The app provides a 7-day forecast, showing the weather conditions for each day. The forecast includes the day of the week, weather description, minimum and maximum temperature, as well as additional details like pressure, humidity, clouds, wind speed, sea level, and feels like temperature.
- Responsive design: The app is designed to be responsive and adapt to different screen sizes, providing an optimal user experience on both desktop and mobile devices.

### Technologies Used

- React: A popular JavaScript library for building user interfaces.
- react-select-async-paginate: A library used for creating the search input with asynchronous data loading and pagination support.
- OpenWeatherMap API: An API that provides weather data for various locations around the world.
- CSS: Custom CSS styles are used to enhance the visual presentation of the application.

### How to Use

1. Clone the project repository.
2. Obtain an API key from the [OpenWeatherMap website](https://openweathermap.org/) by signing up and creating a new API key.
3. Replace the placeholder `API_KEY` in the `App.js` file with your actual OpenWeatherMap API key.
4. Install the project dependencies by running `npm install` or `yarn install`.
5. Run the application using `npm start` or `yarn start`.
6. Access the application in your browser at `http://localhost:3000`.
7. Enter the name of a city in the search input to retrieve the current weather conditions and forecast for that location.

### Credits

This project was created by Ivan Kabar. It utilizes the OpenWeatherMap API for weather data.