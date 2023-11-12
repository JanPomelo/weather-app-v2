import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-today-info",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-1">
      <h3 class="text-white font-bold text-2xl pl-3">Today</h3>
      <div class="grid grid-cols-2 text-white pl-3 rounded-xl bg-black bg-opacity-30 gap-x-2">
        <p class="font-bold text-lg"></p>
        <p class="font-bold text-lg"></p>
        <p class="font-bold text-lg">Air Quality PM 2.5</p>
        <p class="font-bold text-lg"></p>
        <p class="font-bold text-lg">Local Time</p>
        <p class="font-bold text-lg"></p>
        <p class="font-bold text-lg">Sunrise / Sunset</p>
        <div class="font-bold text-lg flex items-center flex-wrap">
          <span class="material-symbols-outlined text-sm">Sunny</span>
          <span class="mr-3"></span>
          <span class="material-symbols-outlined text-sm">wb_twilight</span>
          <span></span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./today-info.component.css"],
})
export class TodayInfoComponent {}
