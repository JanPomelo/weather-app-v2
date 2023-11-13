import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-forecast",
  standalone: true,
  imports: [CommonModule],
  template: ` 
  <h3 class="text-white font-bold text-5xl pl-3">Forecast</h3>
  <div class="flex flex-col">
    
  </div>
  `,
  styleUrls: ["./forecast.component.css"],
})
export class ForecastComponent {}
