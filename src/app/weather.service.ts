import { Injectable } from "@angular/core";
import { WeatherData } from "src/Weather";
import { request } from "src/fetchRequests";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor() {}

  async getData(place: string): Promise<WeatherData> {
    const url: string = `http://api.weatherapi.com/v1/forecast.json?key=381d192e0f6a4b4f82b42439232106&q=${place}&days=3&aqi=yes&alerts=no`;

    const data: WeatherData | undefined = await request<WeatherData>(url, {
      method: "GET",
      mode: "cors",
    });
    data!.forecast.forecastday[0].day.mintemp_c = Math.floor(data?.forecast.forecastday[0].day.mintemp_c as number);
    data!.forecast.forecastday[0].day.mintemp_f = Math.floor(data?.forecast.forecastday[0].day.mintemp_f as number);
    data!.forecast.forecastday[0].day.maxtemp_c = Math.floor(data?.forecast.forecastday[0].day.maxtemp_c as number);
    data!.forecast.forecastday[0].day.maxtemp_f = Math.floor(data?.forecast.forecastday[0].day.maxtemp_f as number);
    return data as WeatherData;
  }
}
