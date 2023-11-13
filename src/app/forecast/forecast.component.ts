import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DayForecastComponent } from "../day-forecast/day-forecast.component";

@Component({
  selector: "app-forecast",
  standalone: true,
  imports: [CommonModule, DayForecastComponent],
  template: `
    <h3 class="text-white font-bold text-5xl pl-3">Forecast</h3>
    <div class="flex flex-col">
      <app-day-forecast></app-day-forecast>
      <app-day-forecast></app-day-forecast>
      <app-day-forecast></app-day-forecast>
    </div>
  `,
  styleUrls: ["./forecast.component.css"],
})
export class ForecastComponent {}
