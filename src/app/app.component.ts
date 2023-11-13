import { Component, inject } from "@angular/core";
import { HeaderRowComponent } from "./header-row/header-row.component";
import { DataContainerComponent } from "./data-container/data-container.component";
import { WeatherService } from "./weather.service";
import { WeatherData, fakeWeather } from "src/Weather";
@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <div class="bg"></div>
    <div class="container">
      <app-header-row class="md:flex md:justify-between md:flex-row-reverse w-full" [weatherService]="weatherService">
      </app-header-row>
      <app-data-container
        class="flex flex-col gap-3 md:grid md:grid-cols-2 px-3 overflow-scroll h-4/5 md:grow md:overflow-auto"
        [weatherService]="weatherService"
      ></app-data-container>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
  imports: [HeaderRowComponent, DataContainerComponent],
})
export class AppComponent {
  title = "Cozy Weather";
  weatherService: WeatherService = inject(WeatherService);
  weatherData: WeatherData = {
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
  mode: string = this.weatherService.currentMode;
  constructor() {
    this.weatherService.getData("Bangkok").then((data: WeatherData) => {
      this.weatherService.currentWeather = data;
      this.weatherData = this.weatherService.currentWeather;
    });
    //this.weatherData = fakeWeather;
  }
}
