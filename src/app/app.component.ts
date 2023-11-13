import { Component, inject } from "@angular/core";
import { HeaderRowComponent } from "./header-row/header-row.component";
import { DataContainerComponent } from "./data-container/data-container.component";
import { WeatherService } from "./weather.service";
import { WeatherData, fakeWeather } from "src/Weather";
@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <div class="container">
      <div class="bg"></div>
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
  weatherData: WeatherData = this.weatherService.currentWeather;
  mode: string = this.weatherService.currentMode;
  constructor() {
    this.weatherService.getData().then((data: WeatherData) => {
      this.weatherService.currentWeather = data;
      this.weatherData = this.weatherService.currentWeather;
    });
    //this.weatherData = fakeWeather;
  }
}
