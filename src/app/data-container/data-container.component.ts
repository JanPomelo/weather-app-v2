import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GeneralInfoComponent } from "../general-info/general-info.component";
import { TodayInfoComponent } from "../today-info/today-info.component";
import { WeatherData } from "src/Weather";
@Component({
  selector: "app-data-container",
  standalone: true,
  imports: [CommonModule, GeneralInfoComponent, TodayInfoComponent],
  template: ` <app-general-info [weatherData]="weatherData"></app-general-info>
    <app-today-info></app-today-info>`,
  styleUrls: ["./data-container.component.css"],
})
export class DataContainerComponent {
  @Input() weatherData!: WeatherData;
}
