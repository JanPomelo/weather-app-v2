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
      <app-day-forecast [weatherService]="weatherService"></app-day-forecast>
      <app-day-forecast [weatherService]="weatherService"></app-day-forecast>
      <app-day-forecast [weatherService]="weatherService"></app-day-forecast>
    </div>
  `,
  styleUrls: ["./forecast.component.css"],
})
export class ForecastComponent {
  @Input() weatherService!: WeatherService;
}
