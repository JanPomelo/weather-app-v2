import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: "app-header-row",
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  template: `
  <div class="flex justify-between">
    <div class="flex flex-col h-12">
      <button class="modeBut text-black" id="ansi">F</button>
      <button class="modeBut text-black" id="iso">°C</button>
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
export class HeaderRowComponent {}
