import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-header-row",
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  template: `
    <div class="flex justify-between">
      <div class="flex flex-col h-12">
        <button
          [class]="{
            modeBut: true,
            'text-black': true,
            'bg-gray-400': weatherService.currentMode === 'F',
            'bg-white': weatherService.currentMode !== 'F'
          }"
          id="ansi"
          (click)="weatherService.changeMode('F')"
        >
          F
        </button>
        <button
          [class]="{
            modeBut: true,
            'text-black': true,
            'bg-gray-400': weatherService.currentMode === '°C',
            'bg-white': weatherService.currentMode !== '°C'
          }"
          id="iso"
          (click)="weatherService.changeMode('°C')"
        >
          °C
        </button>
      </div>
      <app-search-bar class="flex rounded-3xl h-12 mx-4 md:justify-end md:mr-1 items-center"></app-search-bar>
    </div>
    <div class="text-white flex text-sm justify-between px-4 items-center md:justify-start md:gap-2 h-12 mt-2 md:mt-0">
      <p>Powered by <a href="https://www.weatherapi.com">WeatherAPI.com</a></p>
      <a href="https://www.weatherapi.com/" class="bg-white/50 w-20 h-12 rounded-lg logo"></a>
    </div>
  `,
  styleUrls: ["./header-row.component.scss"],
})
export class HeaderRowComponent {
  @Input() weatherService!: WeatherService;
}
