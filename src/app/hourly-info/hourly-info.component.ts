import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherData } from "src/Weather";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-hourly-info",
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ hour.time.substring(10, 13) }}</p>
    <div class="flex flex-col mb-1 w-12 items-center">
      <img [src]="hour.condition.icon" class="w-[3rem]"/>
      <p class="h-5 text-sm">{{ hour.will_it_snow ? hour.chance_of_snow + ' %' : hour.will_it_rain ? hour.chance_of_rain + ' %' : '' }}</p>
    </div>
    <p class="text-sm">
      {{
        weatherService.currentMode === "F"
          ? hour.temp_f + " F"
          : hour.temp_c + " °C"
      }}
    </p>
  `,
  styleUrls: ["./hourly-info.component.css"],
})
export class HourlyInfoComponent {
  @Input() hour!: WeatherData["forecast"]["forecastday"][0]["hour"][0];
  @Input() weatherService!: WeatherService;
}
