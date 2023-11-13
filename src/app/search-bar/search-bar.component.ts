import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherService } from "../weather.service";
@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <input
      type="text"
      class="grow md:grow-0 rounded-l-3xl pl-4 text-xl h-full w-[190px] lg:w-96 text-black"
      placeholder="Type in Location"
      #getWeather
      (keypress)="enterPress($event, getWeather.value)"
    />
    <button
      class="px-2 rounded-r-3xl h-full w-10 bg-gray-200 inputBut"
      type="button"
      (click)="weatherService.getData(getWeather.value)"
    ></button>
  `,
  styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent {
  weatherService: WeatherService = inject(WeatherService);

  enterPress(e: any, input: string) {
    if (e.key === "Enter") {
      this.weatherService.getData(input);
    }
  }
}
