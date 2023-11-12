import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GeneralInfoComponent } from "../general-info/general-info.component";
import { TodayInfoComponent } from "../today-info/today-info.component";
@Component({
  selector: "app-data-container",
  standalone: true,
  imports: [CommonModule, GeneralInfoComponent, TodayInfoComponent],
  template: ` <app-general-info></app-general-info>
    <app-today-info></app-today-info>`,
  styleUrls: ["./data-container.component.css"],
})
export class DataContainerComponent {}
