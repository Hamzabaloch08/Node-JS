import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

const weatherData = {
    karachi: {
        status: "success",
        message: "Weather data for Karachi",
        data: {
            city: "Karachi",
            temp_C: 11,
            temp_F: 52,
            condition: "Mostly Cloudy",
            humidity: "70%",
            high_C: 22,
            low_C: 7,
            wind_kph: 18,
            sunrise: "06:30 AM",
            sunset: "07:15 PM",
            air_quality: "Good"
        }
    },
    london: {
        status: "success",
        message: "Weather data for London",
        data: {
            city: "London",
            temp_C: 11,
            temp_F: 52,
            condition: "Mostly Cloudy",
            humidity: "70%",
            high_C: 22,
            low_C: 7,
            wind_kph: 18,
            sunrise: "06:30 AM",
            sunset: "07:15 PM",
            air_quality: "Good"
        }
    },
    islamabad: {
        status: "success",
        message: "Weather data for Islamabad",
        data: {
            city: "Islamabad",
            temp_C: 15,
            temp_F: 59,
            condition: "Clear",
            humidity: "50%",
            high_C: 23,
            low_C: 10,
            wind_kph: 10,
            sunrise: "06:15 AM",
            sunset: "07:00 PM",
            air_quality: "Good"
        }
    }
};

app.get('/weather/:cityName', (req, res) => {
    const userInputCityName = req.params.cityName.toLowerCase();
    const weatherDataToSend = weatherData[userInputCityName];

    if (weatherDataToSend) {
        res.status(200).json(weatherDataToSend);
    } else {
        res.status(404).json({
            status: "error",
            message: "City not found. Please check the city name and try again."
        });
    }
});

app.get('/weather', (req, res) => {
    res.status(200).json(weatherData);
});

app.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`);
});