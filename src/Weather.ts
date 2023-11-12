"use strict";

import { Container } from "postcss";

type condition = {
  code: number;
  icon: string;
  text: string;
};

type air_quality = {
  pm2_5: number;
};

type current = {
  cloud: number;
  condition: condition;
  feelslike_c: number;
  feelslike_t: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  air_quality: air_quality;
};

type location = {
  country: string;
  lat: number;
  localtime: string;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};

type forecastday = {
  date: string;
  astro: astro;
  day: day;
  hour: hour[];
};

type astro = {
  sunrise: string;
  sunset: string;
};

type day = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  condition: condition;
  air_quality: air_quality;
  daily_will_it_rain: boolean;
  daily_chance_of_rain: number;
  daily_will_it_snow: boolean;
  daily_chance_of_snow: number;
  totalprecip_mm: number;
  totalsnow_mm: number;
};

type hour = {
  chance_of_rain: number;
  chance_of_snow: number;
  condition: condition;
  temp_c: number;
  temp_f: number;
  time: string;
  will_it_rain: boolean;
  will_it_snow: boolean;
};

type forecast = {
  forecastday: forecastday[];
};

export type WeatherData = {
  current: current;
  location: location;
  forecast: forecast;
};

export const fakeWeather: WeatherData = {
  location: {
    country: "United Kingdom",
    lat: 51.52,
    localtime: "2023-11-12 9:08",
    lon: -0.11,
    name: "London",
    region: "City of London, Greater London",
    tz_id: "Europe/London",
  },
  current: {
    air_quality: {
      pm2_5: 19.6,
    },
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003,
    },
    feelslike_c: 6.1,
    gust_kph: 8.6,
    gust_mph: 5.3,
    humidity: 93,
    is_day: 1,
    last_updated: "2023-11-12 09:00",
    pressure_mb: 1003,
    temp_c: 7,
    temp_f: 44.6,
    uv: 2,
    vis_km: 10,
    vis_miles: 6,
    wind_degree: 150,
    wind_dir: "SSE",
    wind_kph: 6.1,
    wind_mph: 3.8,
    cloud: 25,
    feelslike_t: 43,
  },
  forecast: {
    forecastday: [
      {
        date: "2023-12-11",
        day: {
          mintemp_c: 2,
          mintemp_f: 324,
          maxtemp_c: 32,
          maxtemp_f: 340,
          condition: {
            text: "Partly Cloudy",
            icon: "",
            code: 1337,
          },
          air_quality: {
            pm2_5: 3.6,
          },
          daily_chance_of_rain: 0,
          daily_will_it_rain: false,
          daily_chance_of_snow: 0,
          daily_will_it_snow: false,
          totalprecip_mm: 0,
          totalsnow_mm: 0,
        },
        astro: {
          sunrise: "",
          sunset: "",
        },
        hour: [],
      },
    ],
  },
};
