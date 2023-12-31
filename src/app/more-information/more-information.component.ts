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
      <button
        class="bg-transparent text-3xl rounded-[50%] w-8 h-8 text-transparent overflow-hidden butti"
        #nav
        (click)="onClick(nav, context)"
      >
        expand
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
        {{ translateWindDir(weatherService.currentWeather.current.wind_dir) }}
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
  styleUrls: ["./more-information.component.scss"],
})
export class MoreInformationComponent {
  @Input() weatherService!: WeatherService;
  extended: boolean = false;
  constructor() {
    this.extended = false;
  }

  extend(nav: HTMLElement, context: HTMLElement): void {
    this.extended = true;
    nav.animate(
      [
        {
          transform: 'rotate(0deg)',
        },
        {
          transform: "rotate(180deg)",
        },
      ],
      {
        iterations: 1,
        duration: 500,
        easing: "ease-in",
        fill: "forwards",
      }
    );
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
    nav.animate(
      [
        {
          transform: "rotate(180deg)",
        },
        {
          transform: "rotate(0deg)",
        },
      ],
      {
        iterations: 1,
        duration: 500,
        easing: "ease-in",
        fill: "forwards",
      }
    );
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

  translateWindDir(shortVersion: string) {
    const windDirTranslate = [
      { short: "N", long: "North" },
      { short: "E", long: "East" },
      { short: "W", long: "West" },
      { short: "S", long: "South" },
    ];
    let longWindDir: string = "";
    for (let i = 0; i < shortVersion.length; i++) {
      for (let j = 0; j < windDirTranslate.length; j++) {
        if (shortVersion.substring(i, i + 1) === windDirTranslate[j].short) {
          longWindDir = longWindDir.concat(windDirTranslate[j].long, "-");
        }
      }
    }
    return longWindDir.substring(0, longWindDir.length - 1);
  }
}
