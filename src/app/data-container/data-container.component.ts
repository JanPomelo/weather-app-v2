import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GeneralInfoComponent } from "../general-info/general-info.component";
import { TodayInfoComponent } from "../today-info/today-info.component";
import { WeatherData } from "src/Weather";
import { WeatherService } from "../weather.service";
import { MoreInformationComponent } from "../more-information/more-information.component";
import { ForecastComponent } from "../forecast/forecast.component";
@Component({
  selector: "app-data-container",
  standalone: true,
  imports: [CommonModule, GeneralInfoComponent, TodayInfoComponent, MoreInformationComponent, ForecastComponent],
  template: `
    <app-general-info [weatherService]="weatherService"></app-general-info>
    <div class="flex flex-col gap-5">
      <app-today-info [weatherService]="weatherService"></app-today-info>
      <app-more-information [weatherService]="weatherService" class="flex flex-col gap-1"></app-more-information>
    </div>
    <app-forecast></app-forecast>
  `,
  styleUrls: ["./data-container.component.css"],
})
export class DataContainerComponent {
  @Input() weatherService!: WeatherService;
}
