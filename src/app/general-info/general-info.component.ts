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
      <h2 class="text-5xl font-bold">{{ weatherService.currentWeather.location.name }}</h2>
      <h3 class="text-lg pl-6 mb-3 font-bold">{{ weatherService.currentWeather.location.country }}</h3>
      <div class="flex gap-2 items-center">
        <div class="flex text-xl items-center">
          <span class="pb-0.5 material-symbols-outlined">Keyboard_Double_Arrow_Down</span>
          <span>{{
            weatherService.currentMode === "F"
              ? weatherService.currentWeather.forecast.forecastday[0].day.mintemp_f + " F"
              : weatherService.currentWeather.forecast.forecastday[0].day.mintemp_c + " °C"
          }}</span>
        </div>
        <p class="text-4xl">
          {{
            weatherService.currentMode === "F"
              ? weatherService.currentWeather.current.temp_f + " F"
              : weatherService.currentWeather.current.temp_c + " °C"
          }}
        </p>
        <div class="flex text-xl items-center">
          <span class="pb-0.5 material-symbols-outlined">Keyboard_Double_Arrow_Up</span>
          <span>{{
            weatherService.currentMode === "F"
              ? weatherService.currentWeather.forecast.forecastday[0].day.maxtemp_f + " F"
              : weatherService.currentWeather.forecast.forecastday[0].day.maxtemp_c + " °C"
          }}</span>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <p class="text-xl pl-1 font-bold">{{ weatherService.currentWeather.current.condition.text }}</p>
        <img [src]="weatherService.currentWeather.current.condition.icon" alt="" class="h-10" />
      </div>
    </div>
  `,
  styleUrls: ["./general-info.component.css"],
})
export class GeneralInfoComponent {
  @Input() weatherService!: WeatherService;
}
