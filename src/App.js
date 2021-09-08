import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const city = "London";
  const reloadTime = 5;

  const [progress, setProgress] = useState(reloadTime);
  const [currentWeather, setCurrentWeather] = useState({
    temp: 0,
  });
  const [forecast, setForecast] = useState({});

  const fetchData = async () => {
    try {
      // get current weather
      // const currentResponse = await fetch(
      //   `${process.env.API_URL}/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
      // );
      // const current = await currentResponse.json();
      const current = {
        coord: { lon: -0.1257, lat: 51.5085 },
        weather: [
          { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
        ],
        base: "stations",
        main: {
          temp: 28.38,
          feels_like: 28.16,
          temp_min: 26.09,
          temp_max: 30.87,
          pressure: 1012,
          humidity: 42,
        },
        visibility: 10000,
        wind: { speed: 6.69, deg: 90 },
        clouds: { all: 23 },
        dt: 1631104837,
        sys: {
          type: 2,
          id: 2006068,
          country: "GB",
          sunrise: 1631078671,
          sunset: 1631125931,
        },
        timezone: 3600,
        id: 2643743,
        name: "London",
        cod: 200,
      };
      setCurrentWeather((prev) => ({ ...prev, temp: current.main.temp }));

      // get forecast data
      // const forecastResponse = await fetch(
      //   `${process.env.API_URL}/forecast?q=${city}&appid=${process.env.API_KEY}&units=metric`
      // );
      // const forecast = await forecastResponse.json();
      const forecast = {
        cod: "200",
        message: 0,
        cnt: 40,
        list: [
          {
            dt: 1631113200,
            main: {
              temp: 28.4,
              feels_like: 27.88,
              temp_min: 28.4,
              temp_max: 28.44,
              pressure: 1011,
              sea_level: 1011,
              grnd_level: 1007,
              humidity: 38,
              temp_kf: -0.04,
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d",
              },
            ],
            clouds: { all: 42 },
            wind: { speed: 4.61, deg: 120, gust: 6.36 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-08 15:00:00",
          },
          {
            dt: 1631124000,
            main: {
              temp: 25.65,
              feels_like: 25.45,
              temp_min: 24.28,
              temp_max: 25.65,
              pressure: 1010,
              sea_level: 1010,
              grnd_level: 1006,
              humidity: 45,
              temp_kf: 1.37,
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d",
              },
            ],
            clouds: { all: 39 },
            wind: { speed: 3.44, deg: 91, gust: 6.93 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-08 18:00:00",
          },
          {
            dt: 1631134800,
            main: {
              temp: 21.97,
              feels_like: 21.66,
              temp_min: 21.97,
              temp_max: 21.97,
              pressure: 1009,
              sea_level: 1009,
              grnd_level: 1006,
              humidity: 55,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10n" },
            ],
            clouds: { all: 100 },
            wind: { speed: 1.8, deg: 149, gust: 7.2 },
            visibility: 10000,
            pop: 0.37,
            rain: { "3h": 0.12 },
            sys: { pod: "n" },
            dt_txt: "2021-09-08 21:00:00",
          },
          {
            dt: 1631145600,
            main: {
              temp: 19.93,
              feels_like: 19.96,
              temp_min: 19.93,
              temp_max: 19.93,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1005,
              humidity: 76,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10n" },
            ],
            clouds: { all: 93 },
            wind: { speed: 1.86, deg: 199, gust: 4.44 },
            visibility: 10000,
            pop: 0.54,
            rain: { "3h": 0.38 },
            sys: { pod: "n" },
            dt_txt: "2021-09-09 00:00:00",
          },
          {
            dt: 1631156400,
            main: {
              temp: 18.25,
              feels_like: 18.38,
              temp_min: 18.25,
              temp_max: 18.25,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 86,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: { all: 89 },
            wind: { speed: 2.22, deg: 221, gust: 4.99 },
            visibility: 10000,
            pop: 0.07,
            sys: { pod: "n" },
            dt_txt: "2021-09-09 03:00:00",
          },
          {
            dt: 1631167200,
            main: {
              temp: 17.5,
              feels_like: 17.6,
              temp_min: 17.5,
              temp_max: 17.5,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 88,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 92 },
            wind: { speed: 2.36, deg: 223, gust: 5.8 },
            visibility: 10000,
            pop: 0.02,
            sys: { pod: "d" },
            dt_txt: "2021-09-09 06:00:00",
          },
          {
            dt: 1631178000,
            main: {
              temp: 20.95,
              feels_like: 20.85,
              temp_min: 20.95,
              temp_max: 20.95,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1005,
              humidity: 67,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 98 },
            wind: { speed: 3.09, deg: 193, gust: 4.97 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-09 09:00:00",
          },
          {
            dt: 1631188800,
            main: {
              temp: 22.79,
              feels_like: 22.74,
              temp_min: 22.79,
              temp_max: 22.79,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1004,
              humidity: 62,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 69 },
            wind: { speed: 5.12, deg: 197, gust: 6.72 },
            visibility: 10000,
            pop: 0.06,
            sys: { pod: "d" },
            dt_txt: "2021-09-09 12:00:00",
          },
          {
            dt: 1631199600,
            main: {
              temp: 21.62,
              feels_like: 21.59,
              temp_min: 21.62,
              temp_max: 21.62,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 67,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 85 },
            wind: { speed: 4.72, deg: 196, gust: 6.47 },
            visibility: 10000,
            pop: 0.26,
            rain: { "3h": 0.19 },
            sys: { pod: "d" },
            dt_txt: "2021-09-09 15:00:00",
          },
          {
            dt: 1631210400,
            main: {
              temp: 21,
              feels_like: 20.88,
              temp_min: 21,
              temp_max: 21,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 66,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 88 },
            wind: { speed: 3.7, deg: 202, gust: 7.27 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-09 18:00:00",
          },
          {
            dt: 1631221200,
            main: {
              temp: 18.58,
              feels_like: 18.5,
              temp_min: 18.58,
              temp_max: 18.58,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1005,
              humidity: 77,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n",
              },
            ],
            clouds: { all: 80 },
            wind: { speed: 1.72, deg: 185, gust: 4.73 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "n" },
            dt_txt: "2021-09-09 21:00:00",
          },
          {
            dt: 1631232000,
            main: {
              temp: 18.82,
              feels_like: 18.77,
              temp_min: 18.82,
              temp_max: 18.82,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 77,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: { all: 90 },
            wind: { speed: 1.45, deg: 167, gust: 3.35 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "n" },
            dt_txt: "2021-09-10 00:00:00",
          },
          {
            dt: 1631242800,
            main: {
              temp: 17.52,
              feels_like: 17.68,
              temp_min: 17.52,
              temp_max: 17.52,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 90,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10n" },
            ],
            clouds: { all: 100 },
            wind: { speed: 1.27, deg: 175, gust: 2.07 },
            visibility: 10000,
            pop: 0.85,
            rain: { "3h": 1.94 },
            sys: { pod: "n" },
            dt_txt: "2021-09-10 03:00:00",
          },
          {
            dt: 1631253600,
            main: {
              temp: 16.6,
              feels_like: 16.72,
              temp_min: 16.6,
              temp_max: 16.6,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 92,
              temp_kf: 0,
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: { all: 88 },
            wind: { speed: 2.46, deg: 193, gust: 4.8 },
            visibility: 10000,
            pop: 1,
            rain: { "3h": 3.69 },
            sys: { pod: "d" },
            dt_txt: "2021-09-10 06:00:00",
          },
          {
            dt: 1631264400,
            main: {
              temp: 17.45,
              feels_like: 17.52,
              temp_min: 17.45,
              temp_max: 17.45,
              pressure: 1008,
              sea_level: 1008,
              grnd_level: 1005,
              humidity: 87,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 100 },
            wind: { speed: 2.4, deg: 216, gust: 4.39 },
            visibility: 10000,
            pop: 1,
            rain: { "3h": 0.99 },
            sys: { pod: "d" },
            dt_txt: "2021-09-10 09:00:00",
          },
          {
            dt: 1631275200,
            main: {
              temp: 19.47,
              feels_like: 19.56,
              temp_min: 19.47,
              temp_max: 19.47,
              pressure: 1009,
              sea_level: 1009,
              grnd_level: 1005,
              humidity: 80,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 100 },
            wind: { speed: 3.22, deg: 224, gust: 5.64 },
            visibility: 10000,
            pop: 1,
            rain: { "3h": 0.8 },
            sys: { pod: "d" },
            dt_txt: "2021-09-10 12:00:00",
          },
          {
            dt: 1631286000,
            main: {
              temp: 19.75,
              feels_like: 19.9,
              temp_min: 19.75,
              temp_max: 19.75,
              pressure: 1009,
              sea_level: 1009,
              grnd_level: 1006,
              humidity: 81,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 97 },
            wind: { speed: 4.31, deg: 226, gust: 7.88 },
            visibility: 10000,
            pop: 0.73,
            rain: { "3h": 2.33 },
            sys: { pod: "d" },
            dt_txt: "2021-09-10 15:00:00",
          },
          {
            dt: 1631296800,
            main: {
              temp: 17.92,
              feels_like: 18.09,
              temp_min: 17.92,
              temp_max: 17.92,
              pressure: 1010,
              sea_level: 1010,
              grnd_level: 1007,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 82 },
            wind: { speed: 3.91, deg: 221, gust: 7.86 },
            visibility: 10000,
            pop: 0.79,
            rain: { "3h": 0.48 },
            sys: { pod: "d" },
            dt_txt: "2021-09-10 18:00:00",
          },
          {
            dt: 1631307600,
            main: {
              temp: 17.65,
              feels_like: 17.79,
              temp_min: 17.65,
              temp_max: 17.65,
              pressure: 1011,
              sea_level: 1011,
              grnd_level: 1008,
              humidity: 89,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n",
              },
            ],
            clouds: { all: 82 },
            wind: { speed: 2.83, deg: 218, gust: 7.56 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "n" },
            dt_txt: "2021-09-10 21:00:00",
          },
          {
            dt: 1631318400,
            main: {
              temp: 17.32,
              feels_like: 17.48,
              temp_min: 17.32,
              temp_max: 17.32,
              pressure: 1013,
              sea_level: 1013,
              grnd_level: 1009,
              humidity: 91,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10n" },
            ],
            clouds: { all: 91 },
            wind: { speed: 3.57, deg: 249, gust: 8.78 },
            visibility: 10000,
            pop: 0.2,
            rain: { "3h": 0.13 },
            sys: { pod: "n" },
            dt_txt: "2021-09-11 00:00:00",
          },
          {
            dt: 1631329200,
            main: {
              temp: 16.6,
              feels_like: 16.67,
              temp_min: 16.6,
              temp_max: 16.6,
              pressure: 1013,
              sea_level: 1013,
              grnd_level: 1010,
              humidity: 90,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: { all: 99 },
            wind: { speed: 3.37, deg: 261, gust: 8.08 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "n" },
            dt_txt: "2021-09-11 03:00:00",
          },
          {
            dt: 1631340000,
            main: {
              temp: 15.49,
              feels_like: 15.52,
              temp_min: 15.49,
              temp_max: 15.49,
              pressure: 1015,
              sea_level: 1015,
              grnd_level: 1012,
              humidity: 93,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 85 },
            wind: { speed: 2.79, deg: 246, gust: 6.74 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-11 06:00:00",
          },
          {
            dt: 1631350800,
            main: {
              temp: 17.12,
              feels_like: 17.08,
              temp_min: 17.12,
              temp_max: 17.12,
              pressure: 1016,
              sea_level: 1016,
              grnd_level: 1013,
              humidity: 84,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 98 },
            wind: { speed: 2.88, deg: 254, gust: 5.68 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-11 09:00:00",
          },
          {
            dt: 1631361600,
            main: {
              temp: 21.49,
              feels_like: 21.29,
              temp_min: 21.49,
              temp_max: 21.49,
              pressure: 1016,
              sea_level: 1016,
              grnd_level: 1013,
              humidity: 61,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 95 },
            wind: { speed: 3.45, deg: 266, gust: 5.05 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-11 12:00:00",
          },
          {
            dt: 1631372400,
            main: {
              temp: 21.34,
              feels_like: 21.12,
              temp_min: 21.34,
              temp_max: 21.34,
              pressure: 1016,
              sea_level: 1016,
              grnd_level: 1013,
              humidity: 61,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 80 },
            wind: { speed: 3.67, deg: 281, gust: 5.56 },
            visibility: 10000,
            pop: 0.32,
            rain: { "3h": 0.33 },
            sys: { pod: "d" },
            dt_txt: "2021-09-11 15:00:00",
          },
          {
            dt: 1631383200,
            main: {
              temp: 19.12,
              feels_like: 18.81,
              temp_min: 19.12,
              temp_max: 19.12,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1014,
              humidity: 66,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 89 },
            wind: { speed: 3.57, deg: 284, gust: 6.73 },
            visibility: 10000,
            pop: 0.26,
            rain: { "3h": 0.25 },
            sys: { pod: "d" },
            dt_txt: "2021-09-11 18:00:00",
          },
          {
            dt: 1631394000,
            main: {
              temp: 16.91,
              feels_like: 16.43,
              temp_min: 16.91,
              temp_max: 16.91,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 68,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: { all: 91 },
            wind: { speed: 3.03, deg: 278, gust: 7.59 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "n" },
            dt_txt: "2021-09-11 21:00:00",
          },
          {
            dt: 1631404800,
            main: {
              temp: 15.47,
              feels_like: 14.93,
              temp_min: 15.47,
              temp_max: 15.47,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 71,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: { all: 95 },
            wind: { speed: 2.29, deg: 272, gust: 5.32 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "n" },
            dt_txt: "2021-09-12 00:00:00",
          },
          {
            dt: 1631415600,
            main: {
              temp: 15.33,
              feels_like: 14.93,
              temp_min: 15.33,
              temp_max: 15.33,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1014,
              humidity: 77,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: { all: 100 },
            wind: { speed: 1.7, deg: 317, gust: 4.53 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "n" },
            dt_txt: "2021-09-12 03:00:00",
          },
          {
            dt: 1631426400,
            main: {
              temp: 14.78,
              feels_like: 14.35,
              temp_min: 14.78,
              temp_max: 14.78,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 78,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 100 },
            wind: { speed: 1.8, deg: 333, gust: 3.26 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-12 06:00:00",
          },
          {
            dt: 1631437200,
            main: {
              temp: 16.58,
              feels_like: 16.07,
              temp_min: 16.58,
              temp_max: 16.58,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 68,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 100 },
            wind: { speed: 1.86, deg: 333, gust: 2.49 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-12 09:00:00",
          },
          {
            dt: 1631448000,
            main: {
              temp: 18.43,
              feels_like: 17.9,
              temp_min: 18.43,
              temp_max: 18.43,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 60,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 100 },
            wind: { speed: 1.77, deg: 328, gust: 2.1 },
            visibility: 10000,
            pop: 0.36,
            rain: { "3h": 0.19 },
            sys: { pod: "d" },
            dt_txt: "2021-09-12 12:00:00",
          },
          {
            dt: 1631458800,
            main: {
              temp: 15.55,
              feels_like: 15.3,
              temp_min: 15.55,
              temp_max: 15.55,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1014,
              humidity: 82,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 100 },
            wind: { speed: 2.02, deg: 332, gust: 3.61 },
            visibility: 10000,
            pop: 0.75,
            rain: { "3h": 1.65 },
            sys: { pod: "d" },
            dt_txt: "2021-09-12 15:00:00",
          },
          {
            dt: 1631469600,
            main: {
              temp: 15.73,
              feels_like: 15.34,
              temp_min: 15.73,
              temp_max: 15.73,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 1014,
              humidity: 76,
              temp_kf: 0,
            },
            weather: [
              { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: { all: 100 },
            wind: { speed: 0.91, deg: 337, gust: 2.46 },
            visibility: 10000,
            pop: 0.59,
            rain: { "3h": 0.18 },
            sys: { pod: "d" },
            dt_txt: "2021-09-12 18:00:00",
          },
          {
            dt: 1631480400,
            main: {
              temp: 14.18,
              feels_like: 13.59,
              temp_min: 14.18,
              temp_max: 14.18,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 74,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n",
              },
            ],
            clouds: { all: 92 },
            wind: { speed: 2.05, deg: 3, gust: 4.67 },
            visibility: 10000,
            pop: 0.08,
            sys: { pod: "n" },
            dt_txt: "2021-09-12 21:00:00",
          },
          {
            dt: 1631491200,
            main: {
              temp: 12.14,
              feels_like: 11.5,
              temp_min: 12.14,
              temp_max: 12.14,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 80,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 96 },
            wind: { speed: 2.71, deg: 39, gust: 6.8 },
            visibility: 10000,
            pop: 0.08,
            sys: { pod: "d" },
            dt_txt: "2021-09-13 00:00:00",
          },
          {
            dt: 1631502000,
            main: {
              temp: 11.84,
              feels_like: 11.12,
              temp_min: 11.84,
              temp_max: 11.84,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 78,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 100 },
            wind: { speed: 1.55, deg: 28, gust: 5.57 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-13 03:00:00",
          },
          {
            dt: 1631512800,
            main: {
              temp: 11.73,
              feels_like: 11,
              temp_min: 11.73,
              temp_max: 11.73,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 78,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 85 },
            wind: { speed: 1.34, deg: 359, gust: 3.57 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-13 06:00:00",
          },
          {
            dt: 1631523600,
            main: {
              temp: 14.37,
              feels_like: 13.43,
              temp_min: 14.37,
              temp_max: 14.37,
              pressure: 1018,
              sea_level: 1018,
              grnd_level: 1015,
              humidity: 60,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 54 },
            wind: { speed: 3.23, deg: 1, gust: 4.59 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-13 09:00:00",
          },
          {
            dt: 1631534400,
            main: {
              temp: 15.47,
              feels_like: 14.51,
              temp_min: 15.47,
              temp_max: 15.47,
              pressure: 1019,
              sea_level: 1019,
              grnd_level: 1016,
              humidity: 55,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 73 },
            wind: { speed: 2.86, deg: 354, gust: 4.65 },
            visibility: 10000,
            pop: 0,
            sys: { pod: "d" },
            dt_txt: "2021-09-13 12:00:00",
          },
        ],
        city: {
          id: 2643743,
          name: "London",
          coord: { lat: 51.5085, lon: -0.1257 },
          country: "GB",
          population: 1000000,
          timezone: 3600,
          sunrise: 1631078671,
          sunset: 1631125931,
        },
      };
      const one = forecast.list[8];
      const two = forecast.list[16];
      const three = forecast.list[24];
      const four = forecast.list[32];
      const five = forecast.list[39];
      setForecast((prev) => ({ ...prev, one, two, three, four, five }));
    } catch (error) {
      console.log(error);
    }
  };

  let interval = null;
  let progressInterval = null;

  useEffect(() => {
    // Fetch on first load
    fetchData();
    // Set progress bar every second
    progressInterval = setInterval(() => {
      setProgress((prev) => prev - 1);
    }, 1000);
    // // Fetch every minute
    // interval = setInterval(() => {
    //   setLoading(true);
    //   fetchData();
    // }, 60000);
  }, []);

  useEffect(() => {
    if (progress <= 0) {
      setProgress(reloadTime);
      clearInterval(interval);
      clearInterval(progressInterval);
    }
  }, [progress]);

  const renderForecast = () => {
    let forecastData = [];
    for (const day in forecast) {
      console.log(forecast[day]);
      const {
        dt,
        main: { temp },
        weather,
      } = forecast[day];
      const { description, icon } = weather[0];
      forecastData.push(
        <article>
          {/* Multiply by 1000 to get correct date */}
          <p>
            {new Date(dt * 1000).toLocaleString("en-US", { weekday: "short" })}
          </p>
          <p>{temp}°</p>
          <div>
            <p>{icon}</p>
            <p>{description}</p>
          </div>
        </article>
      );
    }
    return forecastData;
  };

  return (
    <div className="container">
      <header className="header">
        <h1>London</h1>
        <p>{Date.now()}</p>
        <p>{currentWeather.temp}</p>
      </header>
      <ProgressBar progress={progress} duration={reloadTime} />
      <section className="forecast-container">{renderForecast()}</section>
    </div>
  );
};

export default App;
