import { Component, Input, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherData } from "src/Weather";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-general-info",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col text-white pl-3">
      <h2 class="text-5xl font-bold">{{ weatherData.location.name }}</h2>
      <h3 class="text-lg pl-6 mb-3 font-bold">{{ weatherData.location.country }}</h3>
      <div class="flex gap-2 items-center">
        <div class="flex text-xl items-center">
          <span class="pb-0.5 material-symbols-outlined">Keyboard_Double_Arrow_Down</span>
          <span>{{ weatherData.forecast.forecastday[0].day.mintemp_c }} °C</span>
        </div>
        <p class="text-4xl">{{ weatherData.current.temp_c }} °C</p>
        <div class="flex text-xl items-center">
          <span class="pb-0.5 material-symbols-outlined">Keyboard_Double_Arrow_Up</span>
          <span>{{ weatherData.forecast.forecastday[0].day.maxtemp_c }} °C</span>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <p class="text-xl pl-1 font-bold">{{ weatherData.current.condition.text }}</p>
        <img [src]="weatherData.current.condition.icon" alt="" class="h-10" />
      </div>
    </div>
  `,
  styleUrls: ["./general-info.component.css"],
})
export class GeneralInfoComponent {
  @Input() weatherData!: WeatherData;
}
