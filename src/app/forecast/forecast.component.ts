import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DayForecastComponent } from "../day-forecast/day-forecast.component";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-forecast",
  standalone: true,
  imports: [CommonModule, DayForecastComponent],
  template: `
    <h3 class="text-white font-bold text-5xl pl-3">Forecast</h3>
    <div class="flex flex-col">
      <app-day-forecast
        *ngFor="let foreCastDay of weatherService.currentWeather.forecast.forecastday"
        [forecastDay]="foreCastDay"
        [weatherService]="weatherService"
        class="flex flex-col gap-1 rounded-xl bg-black bg-opacity-30 gap-x-2 my-3 xl:mr-auto"
      ></app-day-forecast>
    </div>
  `,
  styleUrls: ["./forecast.component.css"],
})
export class ForecastComponent {
  @Input() weatherService!: WeatherService;
}
