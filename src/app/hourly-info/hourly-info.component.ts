import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherData } from "src/Weather";

@Component({
  selector: "app-hourly-info",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>hourly-info works!</p> `,
  styleUrls: ["./hourly-info.component.css"],
})
export class HourlyInfoComponent {
  @Input() hour!: WeatherData["forecast"]["forecastday"][0]["hour"][0];
}
