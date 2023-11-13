import { Injectable } from "@angular/core";
import { WeatherData, fakeWeather } from "src/Weather";
import { request } from "src/fetchRequests";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  currentWeather: WeatherData = {
    location: {
      country: "",
      lat: 0,
      lon: 0,
      localtime: "",
      name: "",
      region: "",
      tz_id: "",
    },
    current: {
      cloud: 0,
      condition: {
        code: 0,
        icon: "",
        text: "",
      },
      feelslike_c: 0,
      feelslike_t: 0,
      gust_kph: 0,
      gust_mph: 0,
      humidity: 0,
      is_day: 0,
      last_updated: "",
      pressure_mb: 0,
      temp_c: 0,
      temp_f: 0,
      uv: 0,
      vis_km: 0,
      vis_miles: 0,
      wind_degree: 0,
      wind_dir: "",
      wind_kph: 0,
      wind_mph: 0,
      air_quality: {
        pm2_5: 0,
      },
    },
    forecast: {
      forecastday: [{
        date: '',
        astro: {
          sunrise: '',
          sunset: '',
        },
        day: {
          maxtemp_c: 0,
          maxtemp_f: 0,
          mintemp_c: 0,
          mintemp_f: 0,
          condition: {
            code: 0,
            text: '',
            icon: ''
          },
          air_quality: {
            pm2_5: 0
          },
          daily_chance_of_rain: 0,
          daily_chance_of_snow: 0,
          daily_will_it_rain: false,
          daily_will_it_snow: false,
          totalprecip_mm: 0,
          totalsnow_mm: 0,
        },
        hour: []
      }],
    },
  };
  currentMode: string = "°C";

  constructor() {}

  changeMode(butText: string) {
    if (butText === this.currentMode) {
      return;
    }
    this.currentMode = butText;
  }

  async getData(place: string = ""): Promise<WeatherData> {
    const url: string = `http://api.weatherapi.com/v1/forecast.json?key=381d192e0f6a4b4f82b42439232106&q=${place}&days=3&aqi=yes&alerts=no`;
    const data: WeatherData | undefined = await request<WeatherData>(url, {
      method: "GET",
      mode: "cors",
    });

    data!.forecast.forecastday[0].day.mintemp_c = Math.floor(data?.forecast.forecastday[0].day.mintemp_c as number);
    data!.forecast.forecastday[0].day.mintemp_f = Math.floor(data?.forecast.forecastday[0].day.mintemp_f as number);
    data!.forecast.forecastday[0].day.maxtemp_c = Math.floor(data?.forecast.forecastday[0].day.maxtemp_c as number);
    data!.forecast.forecastday[0].day.maxtemp_f = Math.floor(data?.forecast.forecastday[0].day.maxtemp_f as number);
    this.currentWeather = data as WeatherData;
    return data as WeatherData;
  }
}
