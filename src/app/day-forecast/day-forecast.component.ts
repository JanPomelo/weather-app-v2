import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherService } from "../weather.service";
import { HourlyInfoComponent } from "../hourly-info/hourly-info.component";
@Component({
  selector: "app-day-forecast",
  standalone: true,
  imports: [CommonModule, HourlyInfoComponent],
  template: `
    <h3 class="text-white font-bold text-3xl pl-3">{{ day }}</h3>
    <div class="flex gap-3 overflow-scroll xl:overflow-auto px-5 rounded-xl text-white">
      <app-hourly-info
        *ngFor="let hour of forecastDay.hour"
        [hour]="hour" [weatherService]="weatherService" 
        class="flex flex-col my-3 p-1 rounded-lg font-bold items-center w-[3.5rem]"
      ></app-hourly-info>
    </div>
  `,
  styleUrls: ["./day-forecast.component.css"],
})
export class DayForecastComponent {
  @Input() forecastDay!: WeatherService["currentWeather"]["forecast"]["forecastday"][0];
  @Input() weatherService!: WeatherService;
  @Input() day!: string;
}
