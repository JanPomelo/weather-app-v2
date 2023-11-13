import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-today-info",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-1">
      <h3 class="text-white font-bold text-2xl pl-3">Today</h3>
      <div class="grid grid-cols-2 text-white pl-3 rounded-xl bg-black bg-opacity-30 gap-x-2">
        <p class="font-bold text-lg">Rain Probability</p>
        <p class="font-bold text-lg">
          {{ weatherService.currentWeather.forecast.forecastday[0].day.daily_chance_of_rain }} %
        </p>
        <p class="font-bold text-lg">Air Quality PM 2.5</p>
        <p class="font-bold text-lg">{{ weatherService.currentWeather.current.air_quality.pm2_5 }}</p>
        <p class="font-bold text-lg">Local Time</p>
        <p class="font-bold text-lg">{{ weatherService.currentWeather.location.localtime.substring(10) }}</p>
        <p class="font-bold text-lg">Sunrise / Sunset</p>
        <div class="font-bold text-lg flex items-center flex-wrap">
          <span class="material-symbols-outlined text-sm">Sunny</span>
          <span class="mr-3">{{ weatherService.currentWeather.forecast.forecastday[0].astro.sunrise }}</span>
          <span class="material-symbols-outlined text-sm">wb_twilight</span>
          <span>{{ weatherService.currentWeather.forecast.forecastday[0].astro.sunset }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./today-info.component.css"],
})
export class TodayInfoComponent {
  @Input() weatherService!: WeatherService;
}
