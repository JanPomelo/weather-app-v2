import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-more-information",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-1">
      <h3 class="text-white font-bold text-2xl pl-3">More Information</h3>
      <button class="material-symbols-outlined bg-transparent text-white text-3xl" #nav (click)="onClick(nav, context)">
        keyboard_arrow_down
      </button>
    </div>
    <div
      #context
      class="grid grid-cols-2 text-white pl-3 rounded-xl bg-black bg-opacity-30 gap-x-2 overflow-hidden h-0"
      id="moreInfoDiv"
    >
      <p class="text-lg font-bold">Humidity</p>
      <p class="text-lg font-bold">{{ weatherService.currentWeather.current.humidity }} %</p>
      <p class="text-lg font-bold">Wind Direction</p>
      <p class="text-lg font-bold">
        {{ weatherService.currentWeather.current.wind_dir }}
      </p>
      <p class="font-bold text-lg">Wind Speed</p>
      <p class="font-bold text-lg">
        {{
          weatherService.currentMode === "F"
            ? weatherService.currentWeather.current.wind_mph + " mph"
            : weatherService.currentWeather.current.wind_kph + " kph"
        }}
      </p>
      <p class="text-lg font-bold">Air Pressure</p>
      <p class="text-lg font-bold">{{ weatherService.currentWeather.current.pressure_mb }} mbar</p>
    </div>
  `,
  styleUrls: ["./more-information.component.css"],
})
export class MoreInformationComponent {
  @Input() weatherService!: WeatherService;
  extended: boolean = false;
  constructor() {
    this.extended = false;
  }

  extend(nav: HTMLElement, context: HTMLElement): void {
    nav.innerText = "keyboard_arrow_up";
    this.extended = true;
    context.animate(
      [
        {
          height: "0px",
        },
        {
          height: "7rem",
        },
      ],
      {
        iterations: 1,
        duration: 500,
        easing: "ease-in",
        fill: "forwards",
      }
    );
  }

  disappear(nav: HTMLElement, context: HTMLElement): void {
    this.extended = false;
    nav.innerText = "keyboard_arrow_down";
    context.animate(
      [
        {
          height: "7rem",
        },
        {
          height: "0px",
        },
      ],
      {
        iterations: 1,
        duration: 500,
        easing: "ease-in",
        fill: "forwards",
      }
    );
  }

  onClick(nav: HTMLElement, context: HTMLElement) {
    if (this.extended) {
      this.disappear(nav, context);
    } else {
      this.extend(nav, context);
    }
  }
}
